'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import LogoLoop from './LogoLoop';

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiGreensock 
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGreensock />, title: "GSAP", href: "https://gsap.com" },
];

// TODO:
// Use logo loop for tech stack
    // https://reactbits.dev/animations/logo-loop
// Also do something with GSAP
// Also, decrypted text for tech stack header
    // https://reactbits.dev/text-animations/decrypted-text

export default function AboutPage() {
    const container = useRef();
    const heroDesc = useRef();
    const techDesc = useRef();
    useGSAP(() => {

        const mm = gsap.matchMedia();

        // Matches Tailwind definitions of "max-lg" and "lg"
        mm.add("(max-width: 1024px)", () => {
            gsap.from(heroDesc.current, {
                y: 300,
                opacity: 0,
                duration: 0.5,
                ease: 'sine.in'
            });
            gsap.from(techDesc.current, {
                y: 300,
                opacity: 0,
                duration: 0.5,
                ease: 'sine.in'
            });
        });
        mm.add("(min-width: 1025px)", () => {
            gsap.from(heroDesc.current, {
                x: 300,
                opacity: 0,
                duration: 0.5,
                ease: 'sine.in'
            });
            gsap.from(techDesc.current, {
                x: -300,
                opacity: 0,
                duration: 0.5,
                ease: 'sine.in'
            });
        });
    }, { scope: container });

    return (
        <main ref={container} className="pt-18">
            <section id="hero" className="
                max-w-[1200px] mx-auto grid
                lg:grid-rows-[2rem_minmax(10rem,1fr)_2rem] lg:grid-cols-[minmax(10rem,1fr)_2rem_1fr_2rem]
                max-lg:grid-rows-[minmax(10rem,1fr)_2rem_minmax(10rem,1fr)] max-lg:grid-cols-[2rem_minmax(10rem,1fr)_2rem]
            ">
                <div id="heroPic" className="
                    lg:row-[2/2] lg:col-[1/span_2]
                    max-lg:row-[1/span_2] max-lg:col-[2/2]
                    bg-[url('/sailing_pic.jpeg')] bg-cover rounded-2xl bg-center min-h-[30rem]
                    lg:hover:-translate-x-16
                    max-lg:hover:-translate-y-4
                    transition-all duration-300 ease-in-ou
                    hover:shadow-2xl
                "></div>
                <div id="heroDesc" ref={heroDesc} className="
                    flex flex-col items-center justify-center
                    max-lg:row-[2/span_2] max-lg:col-[1/span_3]
                    lg:row-[1/span_3] lg:col-[2/span_3]
                    p-8 bg-linear-60 from-green-100 to-teal-300 rounded-2xl z-10
                ">
                    <h1 className="text-center text-4xl font-semibold">About Me</h1>
                    <div id="heroDescSpacer" className="my-8"></div>
                    <p className="text-center text-xl mx-8">Howdy! I am a Computer Science Major at Texas A&M University. I am originally from Austin, TX.</p>
                    <div id="heroDescSpacer2" className="my-8"></div>
                </div>
            </section>
            <div id="spacer1" className="my-18"></div>
            <section className="
                max-w-[1200px] mx-auto grid
                lg:grid-rows-[2rem_minmax(10rem,1fr)_2rem] lg:grid-cols-[2rem_1fr_2rem_minmax(10rem,1fr)]
                max-lg:grid-rows-[minmax(10rem,1fr)_2rem_minmax(10rem,1fr)] max-lg:grid-cols-[2rem_minmax(10rem,1fr)_2rem]
            ">
                <div id="techPic" className="
                    lg:row-[2/2] lg:col-[3/span_2]
                    max-lg:row-[1/span_2] max-lg:col-[2/2]
                    bg-[url('/tech.png')] bg-cover rounded-2xl bg-center min-h-[30rem]
                    lg:hover:translate-x-16
                    max-lg:hover:-translate-y-4
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl
                "></div>
                <div id="heroDesc2" ref={techDesc} className="
                    flex flex-col items-center justify-center
                    max-lg:row-[2/span_2] max-lg:col-[1/span_3]
                    lg:row-[1/span_3] lg:col-[1/span_3]
                    p-8 bg-linear-170 from-green-100 to-teal-300 rounded-2xl z-10
                ">
                    <h1 className="text-center text-4xl font-semibold my-0">Tech Stack</h1>
                    <p className="text-center text-xl mx-8 my-4">I built this
                    website in Next.js using Javascript, Tailwind, and NPM.
                    I chose Next mainly because of its built-in SSR, which
                    is helpful for SEO.</p>
                    <div id="techSpacer1" className="my-10"></div>
                    <LogoLoop logos={techLogos} speed={15}/>
                </div>
            </section>
            <footer className="text-center mt-20 mb-16">
                Copyright Donnell Fulwiler 2025 ©
            </footer>
        </main>
    );
}