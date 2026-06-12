import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Active Trading.<br />
              Private Equity.<br />
              Web3 Research.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              3Dots Capital OÜ is a private limited liability company established in Estonia in 2022. We develop and execute profitable trading strategies in traditional financial markets, while channeling those earnings into research and development of cutting-edge technologies and strategic business ventures.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/building.jpg"
              alt="Modern office building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
