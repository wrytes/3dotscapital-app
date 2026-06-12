import Head from 'next/head';
import Hero from '@/components/Hero';
import TextSection from '@/components/TextSection';
import ImageTextSection from '@/components/ImageTextSection';
import Protocols from '@/components/Protocols';
import FAQs from '@/components/FAQs';
import Partnership from '@/components/Partnership';
import Footer from '@/components/Footer';
import ClassificationSection from '@/components/ClassificationSection';
import Documents from '@/components/Documents';

export default function Home() {
	return (
		<>
			<Head>
				<title>3Dots Capital OÜ — Financial Markets. Partnerships. Research.</title>
				<meta
					name="description"
					content="3Dots Capital OÜ is a private limited company incorporated in Estonia. We operate across financial markets, partnerships, research, and private equity — funded entirely from our own profitable operations."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<main className="min-h-screen">
				<a
					href="#content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded shadow-lg z-50">
					Skip to content
				</a>

				<div id="content">
					<Hero />

					<TextSection
						title="We build from profits, not from promises."
						subtitle="Our trading operations are cash-flow positive with high margins. We do not rely on venture capital, investor rounds, or revenue growth targets — we fund our own future on our own terms. Financial independence lets us expand into new markets and develop new strategies with precision, patience, and long-term conviction."
						bgColor="bg-gray-50"
					/>

					<ImageTextSection
						imageSrc="/images/architecture-geometric.jpg"
						imageAlt="Mirrored architectural facades"
						subtitle="Core platforms we rely on."
						text={[
							<>
								<a
									href="https://www.interactivebrokers.co.uk/"
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
								>
									Interactive Brokers
								</a>
								{' '}is our primary trading platform — giving us access to global markets and a broad range of financial instruments to execute our strategies with precision.
							</>,
							<>
								<a
									href="https://www.revolut.com/business/"
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
								>
									Revolut Business
								</a>
								{' '}handles our banking and expense operations, with multi-currency support across our transactions. EUR is our primary operating currency.
						</>,
						<>
							<a
								href="https://wrytes.io"
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
							>
								Wrytes Platform
							</a>
							{' '}
							<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500 align-middle">In development</span>
							{' '}— our own solution for digital companies, covering administration, accounting, invoicing, financial planning, and shareholder management in one place.
						</>,
						]}
						imagePosition="left"
						bgColor="bg-gray-50"
					/>

					<Protocols />

					<ClassificationSection bgColor="bg-white" />

					<Documents bgColor="bg-gray-50" />

					<FAQs />

					<Partnership />

					<Footer />
				</div>
			</main>
		</>
	);
}
