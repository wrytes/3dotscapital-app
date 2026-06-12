const documents = [
	{
		title: 'Notarised Founding Document',
		description: 'Notarial deed of incorporation issued 12 July 2022 (Nr. 1730).',
		file: '/documents/nr%201730%2C%2012%2C07%2C2022%203Dots%20Capital%20O%C3%9C.pdf',
	},
	{
		title: 'Articles of Association',
		description: 'Current Articles of Association for 3Dots Capital OÜ (English).',
		file: '/documents/3Dots%20Capital%20O%C3%9C%20-%2016523199%20-%20Articles%20Of%20Association%20-%20English.pdf',
	},
	{
		title: 'Register Extraction',
		description: 'Official company extract from the Estonian e-Business Register.',
		file: '/documents/3Dots%20Capital%20O%C3%9C%20-%20e-business%20register.pdf',
	},
	{
		title: 'Business Plan',
		description: 'Company business plan and strategy overview, prepared in 2024.',
		file: '/documents/Description_241128_123304.pdf',
	},
];

function DownloadIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" y1="15" x2="12" y2="3" />
		</svg>
	);
}

function FileIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="16" y1="13" x2="8" y2="13" />
			<line x1="16" y1="17" x2="8" y2="17" />
			<polyline points="10 9 9 9 8 9" />
		</svg>
	);
}

interface DocumentsSectionProps {
	bgColor?: string;
}

export default function Documents({ bgColor = 'bg-gray-50' }: DocumentsSectionProps) {
	return (
		<section className={`py-20 md:py-32 ${bgColor}`}>
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold mb-16 leading-relaxed">
					Documents
				</h2>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{documents.map((doc) => (
						<a
							key={doc.file}
							href={doc.file}
							download
							className="group flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all duration-200"
						>
							<div className="flex items-start justify-between">
								<span className="text-gray-400 group-hover:text-gray-700 transition-colors">
									<FileIcon />
								</span>
								<span className="text-gray-300 group-hover:text-gray-600 transition-colors">
									<DownloadIcon />
								</span>
							</div>
							<div className="space-y-1">
								<h3 className="font-semibold text-gray-900 text-lg leading-snug">
									{doc.title}
								</h3>
								<p className="text-sm text-gray-500 leading-relaxed">
									{doc.description}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
