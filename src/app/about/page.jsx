'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

// TODO:
// Use logo loop for tech stack
    // https://reactbits.dev/animations/logo-loop
// Also do something with GSAP
// Also, decrypted text for tech stack header
    // https://reactbits.dev/text-animations/decrypted-text

export default function AboutPage() {
    const heroPic = useRef();
    const heroDesc = useRef();
    useGSAP(() => {
        gsap.from(heroDesc.current, {
            x: 300,
            opacity: 0,
            duration: 0.5,
            ease: 'sine.in'
        });
    }, []);

    return (
        <>
            <main className="pt-18">
                <section id="hero" className="max-w-[1200px] mx-auto grid grid-rows-[2rem_minmax(10rem,1fr)_2rem] grid-cols-[minmax(10rem,1fr)_2rem_1fr_2rem]">
                    <div id="heroPic" ref={heroPic} className="
                        row-[2/2] col-[1/span_2]
                        bg-[url('/headshot.png')] bg-cover rounded-2xl bg-center min-h-[30rem]
                        hover:-translate-x-16 transition-all duration-300 ease-in-out
                        hover:shadow-2xl
                    "></div>
                    <div id="heroDesc" ref={heroDesc} className="
                        p-8 row-[1/span_3] col-[2/span_3] bg-linear-60 from-green-100 to-teal-300 rounded-2xl z-10
                    ">
                        <h1 className="text-center text-4xl font-semibold my-8">About Me</h1>
                        <p className="text-center text-xl mx-8">Howdy! I am a Computer Science Major at Texas A&M University. I am originally from Austin, TX.</p>
                    </div>
                </section>
                <div id="spacer1" className="my-18"></div>
                <section className="max-w-[1200px] mx-auto grid grid-rows-[2rem_minmax(10rem,1fr)_2rem] grid-cols-[2rem_1fr_2rem_minmax(10rem,1fr)]">
                    <div id="heroPic2" className="
                        row-[2/2] col-[3/span_2]
                        bg-[url('/headshot.png')] bg-cover rounded-2xl bg-center min-h-[30rem]
                    "></div>
                    <div id="heroDesc2" className="
                        p-8 row-[1/span_3] col-[1/span_3] bg-linear-170 from-green-100 to-teal-300 rounded-2xl z-10
                    ">
                        <h1 className="text-center text-4xl font-semibold my-8">Tech Stack</h1>
                        <p className="text-center text-xl mx-8">The </p>
                    </div>
                </section>
            </main>
            <footer className="text-center mt-16">
                Copyright Donnell Fulwiler 2025 ©
            </footer>
        </>
    );
}