import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const images: GalleryImage[] = [
  {
    src: "/images/gallery/image1.jpg",
    alt: "Description of image 1",
    caption: "What I'm working on",
  },
  {
    src: "/images/gallery/image2.jpg",
    alt: "Description of image 2",
    caption: "Another cool thing",
  },
  {
    src: "/images/gallery/image3.jpg",
    alt: "Description of image 3",
  },
];

export default function Gallery() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <p className="text-muted">
          stuff i&apos;m working on rn
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <figure
            key={index}
            className="border border-zinc-400 rounded-lg overflow-hidden"
          >
            <div className="relative aspect-video">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            {image.caption && (
              <figcaption className="p-3 text-sm text-muted">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </section>
    </div>
  );
}
