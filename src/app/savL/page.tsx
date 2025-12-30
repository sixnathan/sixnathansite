import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const images: GalleryImage[] = [];

export default function Gallery() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">gallery</h1>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <figure
            key={index}
            className="border border-muted rounded-lg overflow-hidden"
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
