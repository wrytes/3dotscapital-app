const areas = [
	{
		name: 'Financial Markets',
		since: 'Since 2022',
		description:
			'Developing and executing active trading strategies using options as the primary vehicle through global market infrastructure. Mark-to-Market revenue model.',
	},
	{
		name: 'Partnerships',
		since: 'Since 2025',
		description:
			'We offer invoice structuring, expense management, basic bookkeeping for organized administration & financial planning. Subscription-based revenue model. We also support partners with short-term liquidity and cover operational expenses on their behalf. ',
	},
	{
		name: 'Research',
		since: 'Starting 2026',
		description:
			'Research and development of Cryptographic and Distributed Ledger tools and technologies — including transparent accounting systems, immutable agreement frameworks, and governance models driven by game theory. Subscription-based revenue model.',
	},
	{
		name: 'Private Equity',
		since: 'Planned 2027/2028',
		description:
			'Engaging in strategic funding deals with investors and business partners. Focused on building long-term relationships that align with our financial and technological growth objectives. Revenue from various financing structures and deal arrangements.',
	},
];

export default function Protocols() {
	return (
		<section className="py-20 md:py-32 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold mb-16 leading-relaxed">
					We operate across four interconnected business areas.
				</h2>

				<div className="divide-y divide-gray-200 border-t border-gray-200">
					{areas.map((area) => (
						<div
							key={area.name}
							className="grid md:grid-cols-3 gap-6 md:gap-12 py-10 md:py-12">
							<div className="space-y-2">
								<h3 className="text-xl font-bold text-gray-900">
									{area.name}
								</h3>
								<p className="text-sm text-gray-400 font-medium tracking-wide">
									{area.since}
								</p>
							</div>
							<div className="md:col-span-2">
								<p className="text-lg text-gray-700 leading-relaxed">
									{area.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
