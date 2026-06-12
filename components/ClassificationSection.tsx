const hierarchy = [
	{ code: null, label: 'Financial and Insurance Activities' },
	{ code: '66', label: 'Activities auxiliary to financial services and insurance activities' },
	{ code: '661', label: 'Activities auxiliary to financial services, except insurance and pension funding' },
	{ code: '6619', label: 'Other activities auxiliary to financial services, except insurance and pension funding' },
	{ code: '66199', label: 'Other activities auxiliary to financial services, except insurance and pension funding n.e.c.', principal: true },
];

interface ClassificationSectionProps {
	bgColor?: string;
}

export default function ClassificationSection({ bgColor = 'bg-white' }: ClassificationSectionProps) {
	return (
		<section className={`py-20 md:py-32 ${bgColor}`}>
			<div className="max-w-4xl mx-auto px-6">

				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold leading-relaxed mb-8">
						Formally registered. EU-incorporated.
					</h2>
					<p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
						3Dots Capital OÜ is a private limited company incorporated in Estonia and listed in the
						Estonian e-Business Register. Our principal activity is classified under NACE 66.19
						(EMTAK 66199).
					</p>
				</div>

				{/* Classification hierarchy */}
				<div className="bg-gray-50 rounded-2xl p-8 mb-12">
					<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
						EMTAK 2025 Classification
					</p>
					<ul className="space-y-3">
						{hierarchy.map((item, index) => (
							<li
								key={index}
								className={`flex items-start gap-3 ${item.principal ? '' : ''}`}
								style={{ paddingLeft: `${index * 1.25}rem` }}
							>
								<span className="mt-1 text-gray-300 select-none">
									{index === 0 ? '▸' : '└'}
								</span>
								<span className={`leading-snug ${item.principal ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
									{item.code && (
										<span className={`font-mono mr-2 ${item.principal ? 'text-gray-900' : 'text-gray-400'}`}>
											{item.code}
										</span>
									)}
									{item.label}
									{item.principal && (
										<span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-700">
											Principal activity
										</span>
									)}
								</span>
							</li>
						))}
					</ul>
					<div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-6 text-sm">
						<div>
							<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mr-2">NACE code</span>
							<span className="font-mono font-bold text-gray-900">66.19</span>
						</div>
						<div>
							<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mr-2">Source</span>
							<a
								href="https://ariregister.rik.ee/eng/company/16523199/file/9014091711"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 underline hover:text-gray-900 transition-colors"
							>
								Annual report (10.05.2026)
							</a>
						</div>
					</div>
				</div>

				{/* Registry declaration */}
				<blockquote className="border-l-4 border-gray-300 pl-8 space-y-4">
					<p className="text-gray-600 text-lg leading-relaxed">
						Upon entry in the register, a legal person shall specify only one planned principal
						activity. The designation of the principal activity does not mean that the legal person
						may not engage in other activities (secondary activities).
					</p>
					<p className="text-gray-600 text-lg leading-relaxed">
						A legal person required to file an annual report with the register shall indicate the
						areas of activity of the year ended and the areas of activity intended for the new
						accounting year in its annual report and shall not make a separate announcement of any
						change in these. The company's principal activity shall be determined automatically
						according to the sales revenue entered in the report.
					</p>
					<footer className="text-sm text-gray-400 pt-2">
						— Estonian e-Business Register,{' '}
						<a
							href="https://www.rik.ee/en/e-business-register/emtak-fields-activities"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-gray-600 transition-colors"
						>
							rik.ee
						</a>
					</footer>
				</blockquote>

			</div>
		</section>
	);
}
