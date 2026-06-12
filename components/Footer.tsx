import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="py-16 bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Company identity */}
					<div className="space-y-6">
						<div className="flex items-center gap-4">
							<div className="bg-white p-2 rounded-lg">
								<Image
									src="/images/3dots_300dpi_transp.png"
									alt="3Dots Capital OÜ logo"
									width={60}
									height={60}
									className="rounded"
								/>
							</div>
							<h4 className="font-bold text-2xl">
								3Dots Capital OÜ
							</h4>
						</div>
						<address className="not-italic text-gray-400 leading-relaxed text-base space-y-1">
							<p>Kotkapoja tn 2a-10</p>
							<p>10615 Tallinn, Estonia</p>
						</address>
						<div className="text-gray-500 text-sm space-y-1">
							<p>
								Registry:{' '}
								<a
									href="https://ariregister.rik.ee/eng/company/16523199/3Dots-Capital-O%C3%9C"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-white transition-colors">
									16523199
								</a>
							</p>
							<p>LEI: 9845008ZFC4A2C4UF897</p>
							<p>Est. 21 June 2022 · Private limited company</p>
						</div>
					</div>

					{/* Partners stacked vertically */}
					<div className="space-y-10">
						<div className="space-y-3">
							<h5 className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
								Accounting & Compliance
							</h5>
							<p className="text-gray-400 text-base leading-relaxed">
								Accounting, reporting, and legal advisory by{' '}
								<a
									href="https://www.premiumaccounting.ee"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-white transition-colors">
									Premium Accounting OÜ
								</a>{' '}
								and{' '}
								<a
									href="https://www.comistar.eu"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-white transition-colors">
									Comistar
								</a>
								, ensuring full compliance with Estonian law and
								timely publication on the business register.
							</p>
						</div>

						<div className="space-y-3">
							<h5 className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
								Software & Infrastructure
							</h5>
							<p className="text-gray-400 text-base leading-relaxed">
								Software development, infrastructure, and
								research by{' '}
								<a
									href="https://wrytes.io"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-white transition-colors">
									Wrytes AG
								</a>
								, our technology partner for software
								development and digital infrastructure.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
