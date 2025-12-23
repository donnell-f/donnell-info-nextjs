import Link from "next/link";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
];

export default function DesktopNav() {
    return (
        <nav className={`flex items-center bg-[url('/papyrus.png')] px-10`}>
            <Link href="/" id="desktopTitleWrapper" className="
                    group relative
                    inline-flex whitespace-nowrap py-5 px-10 grow-0 -skew-x-16 z-10
                    bg-linear-to-r from-green-300 to-teal-600
                    hover:cursor-pointer
                    transition-all duration-500 ease-in-out
            ">
                <span className="
                        font-bold text-lg bg-clip-text text-transparent
                        bg-linear-to-r from-white to-gray-100
                        inline-block skew-x-16
                ">Donnell</span>
                <span className="
                    font-bold text-lg bg-clip-text text-transparent inline-block skew-x-16 overflow-hidden
                    bg-linear-to-r from-white to-gray-100
                    max-w-0 opacity-0
                    group-hover:max-w-48 group-hover:opacity-100
                    transition-all duration-500 ease-in-out;
                ">&nbsp;Fulwiler</span>
                <span
                    aria-hidden={true}
                    id="desktopTitleUnderline"
                    className="
                        z-20 pointer-events-none absolute left-3 right-0 bottom-4 mx-9
                        h-0.5 bg-current max-w-0 bg-linear-to-r from-teal-400 to-green-200
                        transition-all duration-500 group-hover:max-w-32
                    "
                >
                </span>
            </Link>
            <ul className="p-0 list-none grow flex items-center justify-evenly">
                { navLinks.map((nl, i) => 
                    // <li> needs relative positioning so that the underline absolute positioning works.
                    <li key={i} className="
                        group relative
                        bg-white py-2 px-4 rounded-xs
                        hover:rotate-z-7 hover:rotate-x-17 hover:-rotate-y-17 transition-all duration-500 ease-in-out
                    ">
                        <div id="underlineContainer" className="relative">
                            <Link href={nl.href} className="text-lg font-medium">
                                {nl.label}
                            </Link>
                            <span
                                aria-hidden={true}
                                id="navUnderline"
                                className="
                                    z-50 pointer-events-none absolute left-0 right-0 bottom-0
                                    h-0.5 max-w-0 bg-linear-to-r from-teal-400 to-green-200
                                    transition-all duration-450 group-hover:max-w-full
                                "
                            >
                            </span>
                        </div>
                    </li>)
                }
            </ul>
        </nav>
    );
}
