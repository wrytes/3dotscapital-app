const faqs = [
	{
		question:
			'Why is the company classified as: 66199 Other activities auxiliary to financial services, except insurance and pension funding n.e.c?',
		answer: 'Since profits from financial trading activities are the largest source of revenue in our annual report, we are classified as such. This may change in the future as other income streams grow.',
	},
	{
		question: 'Does the company manage external capital?',
		answer: 'No. All trading and investment activity is conducted with internal shareholder capital. We do not offer financial services or manage funds on behalf of third parties.',
	},
	{
		question: 'What does the Partnerships area offer?',
		answer: 'We offer invoice structuring, expense management, and basic bookkeeping and accounting for more organized financial planning. We also support known partners or related business ventures who need short-term liquidity — covering operational expenses on their behalf. ',
	},
	{
		question: 'What is the Wrytes Platform?',
		answer: 'Wrytes is a software platform we are building for digital companies. It brings administration, accounting, invoicing, financial planning, and shareholder management into one place. It is currently in development.',
	},
	{
		question: 'What does the business roadmap look like?',
		answer: 'Financial Markets has been our core since 2022. Partnerships launched in 2025. Research and development is starting in 2026. Private Equity is planned for 2027/2028. Each area builds on the cash flow and experience of the one before it.',
	},
	{
		question: 'Is the company open to investors or business partnerships?',
		answer: 'Yes. We seek collaboration with investors, creditors, and strategic partners who are aligned with our commitment to financial excellence and technological advancement.',
	},
];

export default function FAQs() {
	return (
		<section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold mb-16 leading-relaxed">
					FAQs
				</h2>

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
