'use client';

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-[url('/papyrus.png')] text-white">
            {/* Header part */}
            <div className="flex justify-between items-center px-4 py-0 relative z-50">
                <div className="w-6" /> {/* Spacer to center title */}
                <span id="titleContainer" className="
                    font-bold text-xl whitespace-nowrap py-2 px-3 -skew-x-16
                    bg-linear-to-r from-green-300 to-teal-600
                ">
                    <span id="titleSubContainer" className="inline-block shadow py-2 px-3">
                        <span id="title" className="inline-block skew-x-16">Donnell Fulwiler</span>
                    </span>
                </span>
                
                <button onClick={() => setOpen(!open)} className="focus:outline-none hover:cursor-pointer">
                    <svg width="0" height="0">
                        <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#86efac" offset="0%" /> {/* green-300 */}
                            <stop stopColor="#0d9488" offset="100%" /> {/* teal-600 */}
                        </linearGradient>
                    </svg>
                    {open 
                    ? <RiCloseLargeLine style={{ fill: "url(#green-gradient)" }} className="text-3xl" /> 
                    : <GiHamburgerMenu style={{ fill: "url(#green-gradient)" }} className="text-3xl" />
                    }
                </button>
            </div>

            {/* Swoop-down menu part */}
            <div className={`
                absolute top-0 left-0 w-full h-screen bg-[url('/papyrus.png')]
                flex flex-col items-center justify-center
                transition-all duration-500 ease-in-out
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
            `}>
                <ul className="flex flex-col gap-14 text-center">
                    {navLinks.map((nl, i) => (
                        <li 
                            key={i} 
                            className={`transform transition-transform duration-500 delay-${i * 100} ${open ? "translate-y-0" : "translate-y-10"}`}
                        >
                            <span id="linkContainer" className="inline-block bg-linear-to-br from-white to-gray-100 py-3 px-5 rounded-sm shadow-lg">
                                <Link 
                                    href={nl.href} 
                                    onClick={() => setOpen(false)}
                                    className="
                                    text-4xl font-semibold text-transparent
                                    bg-clip-text bg-linear-to-r from-green-300 to-teal-600
                                    "
                                >
                                    {nl.label}
                                </Link>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
