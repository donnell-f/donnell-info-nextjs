'use client';

import Image from "next/image";

const maxWidthPx = 1300;

export default function Home() {
    return (
        <main className="py-8">
            <section id="bio" className={`
                px-8 max-w-[${maxWidthPx}px] ml-auto mr-auto
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
                    min-w-[2.5rem] min-h-[30rem]
                    bg-[url('/headshot.png')] bg-cover rounded-lg
                    col-[3/3] row-[2/5]
                "/>
                <div id="bioText" className="p-8 col-[4/4] row-[4/4]">
                    <p className="text-center text-xl">Hello, I am Donnell
                    Fulwiler. I am a thinker, creator, innovator, artist, idea.
                    You may be wondering why I chose the emerald green theme for this
                    website. I was actually going to use a blue gradient, but I
                    didn&apos;t want anyone to think I vibe coded the website.</p>
                </div>
            </section>
            <div className="spacer my-8"></div>
            <section id="socials" className="bg-linear-to-br from-green-200 to-teal-400 shadow-[0_0_7px_15px_white_inset] pt-8 pb-12">
                <h1 className="text-center text-3xl my-4 font-medium">My Socials</h1>
                <div id="socialsContent" className="
                    max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:items-stretch max-lg:justify-center
                    lg:grid lg:grid-flow-col lg:auto-cols-fr lg:gap-8
                    w-fit mx-auto
                ">
                    <div id="githubStyleDiv" className="bg-gradient-to-tr from-green-400 to-teal-700 rounded-2xl">
                        <div id="github" className="p-6 m-1 flex flex-col items-center justify-center gap-4 bg-white rounded-2xl">
                            <img src="/github.png" className="max-w-20" alt="GitHub" />
                            <span className="font-mono text-xl">donnell-f</span>
                        </div>
                    </div>
                    <div id="linkedinStyleDiv" className="bg-gradient-to-tr from-green-400 to-teal-700 rounded-2xl">
                        <div id="linkedin" className="p-6 m-1 flex flex-col items-center justify-center gap-4 bg-white rounded-2xl">
                            <img src="/linkedin.png" className="max-w-20" alt="LinkedIn" />
                            <span className="font-mono text-xl">donnell-fulwiler</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
