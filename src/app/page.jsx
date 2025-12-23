'use client';

import Image from "next/image";

export default function Home() {
    return (
        <main className="p-8">
            <section id="bio" className="lg:grid grid-cols-[3rem_1.5rem_1fr_1fr_3rem] grid-rows-[3rem_minmax(15rem,1fr)_3rem_minmax(15rem,1fr)_3rem]">
                <div id="bgPanel" className="mobile-hidden col-[2/-1] row-[2/-1] bg-gray-100 rounded-lg"></div>
                <div id="stylePanel" className="col-[1/-2] row-[1/3] bg-green-200 rounded-lg"></div>
                <div id="welcome" className="col-[4/4] row-[1/3] height-full flex-col items-center place-content-center">
                    <h1 className="text-3xl font-semibold text-center">Hello!</h1>
                    <p className="text-center">Welcome to my website.</p>
                </div>
                <div id="profilePic" className="
                    bg-[url('/headshot.png')] bg-cover rounded-lg
                    col-[3/3] row-[2/5]
                "/>

            </section>
        </main>
    );
}
