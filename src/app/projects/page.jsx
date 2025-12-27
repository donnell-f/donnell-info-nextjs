'use client';

import Dither from "../Dither";
import ProjectTab from "./ProjectTab";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
    const container = useRef();
    const p1Ref = useRef();
    const p2Ref = useRef();
    const p3Ref = useRef();

    useGSAP(() => {
        
        // Registers gsap.from() animations for all project tabs.
        const refsArray = [ p1Ref, p2Ref, p3Ref ];
        for (const [i, refVal] of refsArray.entries()) {
            const xFrom = (i % 2 == 0) ? "-100%" : "100%";
            gsap.from(refVal.current, {
                x: xFrom,
                duration: 0.65,
                scrollTrigger: {
                    trigger: refVal.current,
                    start: 'top 80%',

                }
            });
        }

    }, { scope: container });

    return (
        <main className="pt-0 pb-5" ref={container}>
            {/* Background, not in flow. */}
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

            <ProjectTab title="Gjallarhorn (2017)" imgSrc="/gjallarhorn.png" githubLink="https://github.com/donnell-f/Gjallarhorn-Rune-Translator" direction="left" skills={["C#", ".NET", "MS Forms", "OOP"]} ref={p1Ref}>
                Gjallarhorn is a Rune transliterator I built that can
                transliterate between any unicode-supported Runic alphabet. It
                was built in MS Forms with C#. Gjallarhorn allows fans of old
                norse literature and history to easily Latinize any runic
                inscription so that it can be more easily translated.
            </ProjectTab>

            <ProjectTab title="Gradescope Sleuth (2025)" imgSrc="/gradescope_sleuth.png" githubLink="https://github.com/donnell-f/gradescope-sleuth" direction="right" skills={["Python", "SQL", "Web Scraping", "Selenium", "Data Science"]} ref={p2Ref}>
                I designed this tool while working as a TA for CSCE 120, so that
                it would be easier to catch students who were blatantly using AI
                to cheat on their homework. It has been a huge success, as it
                led to us catching 10x more cheaters per assignment.
            </ProjectTab>

            <ProjectTab title="This Website (2025)" imgSrc="/donnell_info.png" githubLink="https://github.com/donnell-f/donnell-info-nextjs" direction="left" skills={["React", "Next.js", "Tailwind", "SSR", "GSAP", "Servers"]} ref={p3Ref}>
                I would consider this website a personal project worth listing.
                I built it in Next.js with Tailwind. I leveraged Next&apos;s built-in
                SSR to enhance SEO and performance. Shoutout to React Bits for
                the background.
            </ProjectTab>

        </main>
    );
}