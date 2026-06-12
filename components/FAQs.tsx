const faqs = [
  {
    question: "Does your company manage external capital?",
    answer: "No. All trading and investment activity is conducted with internal shareholder capital. We do not offer financial services or manage funds on behalf of third parties."
  },
  {
    question: "What financial instruments does your company trade?",
    answer: "We use options as our primary trading vehicle. Our strategy focuses on strategic selling of volatility and exposure through over one-year contracts, supported by cash-covered positions for disciplined risk management."
  },
  {
    question: "Why combine trading with Web3 research and development?",
    answer: "Our trading operations generate the financial independence needed to invest in long-term research. This allows us to develop cutting-edge tools in blockchain technology, decentralized governance, and transparent financial systems without external pressure."
  },
  {
    question: "Are you open to investors or business partnerships?",
    answer: "Yes. We actively seek collaboration with investors, creditors, and strategic partners who are aligned with our commitment to financial excellence and technological advancement. Reach out via our contact details."
  }
];

export default function FAQs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 leading-relaxed">FAQs</h2>

        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
