interface TextSectionProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
}

export default function TextSection({ title, subtitle, bgColor = "bg-white" }: TextSectionProps) {
  return (
    <section className={`py-20 md:py-32 ${bgColor}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-relaxed mb-8">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
