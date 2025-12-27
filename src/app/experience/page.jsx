import Silk from "./Silk";
import Dither from "../Dither";

export default function ExperiencePage() {
    return (
        <main className="lg:p-12 max-lg:p-4">
            <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={false}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
           <section id="experience1" className="max-w-[1200px] bg-gray-50/80 rounded-xl mx-auto">
                <div id="experienceHeader" className="rounded-t-xl p-12 border-2 border-black">
                    <h1 className="text-3xl font-semibold text-center">Kaizen Action LLC. (2025)</h1>
                </div>
                <div id="experienceBody" className="leading-loose space-y-4 rounded-b-xl p-12 border-l-2 border-r-2 border-b-2 border-l-black border-r-black border-b-black">
                    <p className="text-xl">I worked at Kaizen Action LLC. remotely in the Summer of 2025. At this internship, I did the following things:</p>
                    <ul className="list-disc ml-8 space-y-4">
                        <li className="text-xl">Engineered and backtested tactical trading algorithms on equities, with several strategies achieving over 15% simulated ROI.</li>
                        <li className="text-xl">Processed multi-gigabyte financial time series in Python (pandas, NumPy) to clean, aggregate, and engineer features at scale.</li>
                        <li className="text-xl">Applied econometric models (ARMA/ARIMA, GARCH, EGARCH) to capture volatility clustering and trends, reaching up to 85% accuracy on selected classification tasks.</li>
                        <li className="text-xl">Experimented with TensorFlow-based Hidden Markov Models to model regime shifts and improve trading signal robustness</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}