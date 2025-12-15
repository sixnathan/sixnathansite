"use client";

import { useEffect, useRef } from "react";

interface MindmapProps {
  clusters: Record<string, string[]>;
}

export default function Mindmap({ clusters }: MindmapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Clear existing content
    svg.innerHTML = "";

    const width = svg.parentElement?.clientWidth || 800;
    const height = 400;

    svg.setAttribute("width", String(width));
    svg.setAttribute("height", String(height));

    const clusterEntries = Object.entries(clusters);
    const clusterCount = clusterEntries.length;

    if (clusterCount === 0) return;

    const cellW = width / clusterCount;
    const cy = height / 2;

    // Get CSS variable values
    const styles = getComputedStyle(document.documentElement);
    const foreground = styles.getPropertyValue("--foreground").trim();
    const muted = styles.getPropertyValue("--muted").trim();
    const accent = styles.getPropertyValue("--accent").trim();

    clusterEntries.forEach(([name, items], i) => {
      const cx = cellW * i + cellW / 2;

      // Draw cluster center dot
      const centerDot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      centerDot.setAttribute("cx", String(cx));
      centerDot.setAttribute("cy", String(cy));
      centerDot.setAttribute("r", "4");
      centerDot.setAttribute("fill", accent);
      svg.appendChild(centerDot);

      // Draw cluster label
      const label = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      label.setAttribute("x", String(cx));
      label.setAttribute("y", String(cy - 20));
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("font-size", "12");
      label.setAttribute("font-weight", "bold");
      label.setAttribute("fill", foreground);
      label.textContent = name;
      svg.appendChild(label);

      // Draw nodes around cluster
      if (items.length === 0) return;

      const nodeCount = items.length;
      items.forEach((item, ni) => {
        const angle = (ni / nodeCount) * Math.PI * 2 - Math.PI / 2;
        const radius = 60;
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * radius;

        // Edge
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line.setAttribute("x1", String(cx));
        line.setAttribute("y1", String(cy));
        line.setAttribute("x2", String(nx));
        line.setAttribute("y2", String(ny));
        line.setAttribute("stroke", muted);
        line.setAttribute("stroke-width", "1");
        svg.appendChild(line);

        // Node dot
        const dot = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        dot.setAttribute("cx", String(nx));
        dot.setAttribute("cy", String(ny));
        dot.setAttribute("r", "3");
        dot.setAttribute("fill", foreground);
        svg.appendChild(dot);

        // Node label
        const nodeLabel = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        nodeLabel.setAttribute("x", String(nx));
        nodeLabel.setAttribute("y", String(ny + 16));
        nodeLabel.setAttribute("text-anchor", "middle");
        nodeLabel.setAttribute("font-size", "11");
        nodeLabel.setAttribute("fill", muted);
        nodeLabel.textContent = item;
        svg.appendChild(nodeLabel);
      });
    });
  }, [clusters]);

  return <svg ref={svgRef} className="w-full h-[400px]" />;
}
