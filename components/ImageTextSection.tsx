import Image from "next/image";

interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  text: string[];
  imagePosition?: "left" | "right";
  bgColor?: string;
}

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  subtitle,
  text,
  imagePosition = "left",
  bgColor = "bg-white"
}: ImageTextSectionProps) {
  return (
    <section className={`py-20 md:py-32 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ${
            imagePosition === "right" ? "order-2" : "order-2 lg:order-1"
          }`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className={`space-y-6 ${
            imagePosition === "right" ? "order-1" : "order-1 lg:order-2"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
              {subtitle}
            </h2>
            {text.map((paragraph, index) => (
              <p key={index} className="text-xl text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
