'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
        <main className="py-8">
            <section id="bio" className={`
                px-8 max-w-[1300px] ml-auto mr-auto
                lg:grid grid-cols-[3rem_3rem_1fr_1fr_3rem] grid-rows-[3rem_minmax(15rem,1fr)_3rem_minmax(15rem,1fr)_3rem]
            `}>
                <div id="bgPanel" className="mobile-hidden col-[2/-1] row-[2/-1] bg-gray-100 rounded-lg"></div>
                <div id="stylePanel" className="col-[1/-2] row-[1/3] bg-linear-to-tr from-green-100 to-teal-300 rounded-lg"></div>
                <div id="welcome" className="col-[4/4] row-[1/3] height-full flex flex-col items-center justify-center gap-6">
                    <h1 className="text-5xl font-semibold text-center">Welcome</h1>
                    <p className="max-lg:hidden text-center text-xl">Welcome to my website!</p>
                </div>
                <div id="profilePic" className="
                    max-lg:mt-8 min-h-[30rem]
                    bg-[url('/headshot.png')] bg-cover rounded-lg bg-center
                    col-[3/3] row-[2/5]
                "/>
                <div id="bioText" className="p-8 col-[4/4] row-[4/4]">
                    <p className="text-center text-xl">Hello, I am Donnell
                    Fulwiler. I am a thinker, creator, innovator, artist, idea.
                    You may be wondering why I chose the turquoise theme for this
                    website. I was actually going to use a blue gradient, but I
                    didn&apos;t want anyone to think I vibe coded the website.</p>
                </div>
            </section>
            <div id="spacer" className="my-18"></div>
            <section id="resume">
                <h1 className="text-center text-3xl font-semibold my-8">My Resume</h1>
                {/* <div id="resumeContainer" className="grid grid-cols-1 mx-auto w-full"> */}
                    <embed src="donnell_fulwiler_resume.pdf#toolbar=0&navpanes=0" type="application/pdf" className="mx-auto w-full max-w-[900px] aspect-[10/12]"/>
                {/* </div> */}
            </section>
            <div id="socialsTop" className="mt-18 bg-[url('/wave2.svg')] bg-cover aspect-[960/100]"></div>
            <section id="socials" className="bg-teal-300 pt-8 pb-12">
                <h1 className="text-center text-4xl mt-4 mb-8 font-semibold text-white">My Socials</h1>
                <div id="socialsContent" className="
                    max-lg:flex max-lg:flex-col max-lg:items-stretch max-lg:justify-center
                    lg:grid lg:grid-flow-col lg:auto-cols-fr
                    w-fit mx-auto gap-8
                ">
                    <div id="githubStyleDiv" className="
                        bg-gradient-to-tr from-green-100 to-teal-400 rounded-2xl
                        hover:-translate-y-2 transition-all duration-300 ease-in-out
                    ">
                        <Link href="https://github.com/donnell-f" target="_blank">
                            <div id="github" className="p-6 m-1 flex flex-col items-center justify-center gap-4 bg-white rounded-2xl">
                                <img src="/github.png" className="max-w-20" alt="GitHub" />
                                <span className="font-mono text-xl">donnell-f</span>
                            </div>
                        </Link>
                    </div>
                    <div id="linkedinStyleDiv" className="
                        bg-gradient-to-tr from-green-100 to-teal-400 rounded-2xl
                        hover:-translate-y-2 transition-all duration-300 ease-in-out
                    ">
                        <Link href="https://www.linkedin.com/in/donnell-fulwiler/" target="_blank">
                            <div id="linkedin" className="p-6 m-1 flex flex-col items-center justify-center gap-4 bg-white rounded-2xl">
                                <img src="/linkedin.png" className="max-w-20" alt="LinkedIn" />
                                <span className="font-mono text-xl">donnell-fulwiler</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <div id="socialsBottom" className="mb-18 bg-[url('/wave2.svg')] transform-[scaleY(-1)_scaleX(-1)] bg-cover aspect-[960/100]"></div>
            <section id="endSection">
                <h1 className="text-3xl font-semibold text-center mb-18 mx-4">That&apos;s it for this page! Make sure to check out the other pages as well.</h1>
            </section>
        </main>
        <footer>
            <div id="stackedWaves" className="bg-[url('/stacked_waves.svg')] bg-cover aspect-[1000/200]"></div>
        </footer>
        </>
    );
}
