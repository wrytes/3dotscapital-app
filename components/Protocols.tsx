const areas = [
  {
    name: "Financial Markets",
    description: "Developing and executing active trading strategies using options as the primary vehicle. Disciplined exposure management via volatility selling and cash-covered positions through global market infrastructure."
  },
  {
    name: "Private Equity",
    description: "Engaging in strategic funding deals with investors and business partners. Focused on building long-term relationships that align with our financial and technological growth objectives."
  },
  {
    name: "Software Development",
    description: "Research and development of Web3 tools and technologies — including transparent accounting systems, immutable agreement frameworks, and governance models driven by game theory."
  }
];

export default function Protocols() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 leading-relaxed">
          We operate across three interconnected business areas.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {areas.map((area) => (
            <div key={area.name} className="space-y-6">
              <div className="h-32 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center px-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 text-center">{area.name}</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
