import Image from "next/image";

export default function Partnership() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Partnerships & Collaboration
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are open to working with investors, researchers, and technologists who share our focus on:
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Strategic investment and funding opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Financial markets research and trading model development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Web3 and blockchain technology development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Long-term business partnerships aligned with sustainable growth</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/handshake.jpg"
              alt="Business partnership handshake"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
