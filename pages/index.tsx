import Head from 'next/head';
import Hero from '@/components/Hero';
import TextSection from '@/components/TextSection';
import ImageTextSection from '@/components/ImageTextSection';
import Protocols from '@/components/Protocols';
import FAQs from '@/components/FAQs';
import Partnership from '@/components/Partnership';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>
					3Dots Capital OÜ - Active Trading. Private Equity. Web3
					Research.
				</title>
				<meta
					name="description"
					content="3Dots Capital OÜ is an Estonian company developing profitable trading strategies in traditional markets while funding research and development in cutting-edge technologies."
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
						subtitle="Our trading operations are cash-flow positive with high margins. We do not rely on venture capital, investor rounds, or revenue growth targets — we fund our own future on our own terms."
						bgColor="bg-gray-50"
					/>

					<TextSection
						title="Financial independence opens new markets."
						subtitle="Freed from external funding constraints, we expand into new markets and develop new business strategies with precision, patience, and long-term conviction. Profitable today, building for tomorrow."
						bgColor="bg-white"
					/>

					<ImageTextSection
						imageSrc="/images/architecture-geometric.jpg"
						imageAlt="Mirrored architectural facades"
						subtitle="Trading strategies built on discipline, not speculation."
						text={[
							'We use options as our primary trading vehicle — strategically selling volatility and exposure through over one-year contracts, backed by cash-covered positions for robust risk management.',
							'Operating through Interactive Brokers gives us access to global markets and diverse financial instruments, allowing us to execute capital-efficient strategies that generate consistent, high-margin returns.',
						]}
						imagePosition="left"
						bgColor="bg-gray-50"
					/>

					<Protocols />

					<FAQs />

					<Partnership />

					<Footer />
				</div>
			</main>
		</>
	);
}
