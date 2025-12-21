'use client';

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`
        z-10 bg-gray-500 sticky ${isOpen ? "w-screen h-screen" : ""}
        `}>
            <div id="mobileTitle" className="grid grid-cols-3 place-items-center px-8 py-4">
                <span id="spacer" className="text-3xl">&nbsp;</span>
                <span className="font-bold text-xl">Donnell Fulwiler</span>
                <div id="menuCollapse" onClick={() => setIsOpen(o => !o)}>
                    { isOpen
                      ? <IoMdClose className="text-3xl hover:text-white hover:cursor-pointer"/>
                      : <RxHamburgerMenu className="text-3xl hover:text-white hover:cursor-pointer"/>}
                    
                </div>
            </div>
            <ul className={`${!isOpen ? "hidden" : ""} list-none text-2xl flex flex-col items-center justify-evenly`}>
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
            </ul>
        </nav>
    );
}
