
export default function DesktopNav() {
    return (
        <nav className={`flex bg-[url('/papyrus.png')] px-10`}>
            <span id="desktopTitleWrapper" className="
                    group inline-flex whitespace-nowrap py-5 px-10 grow-0 -skew-x-16 z-10
                    bg-linear-to-r from-green-300 to-teal-600 
                    hover:cursor-pointer
                    transition-all duration-500 ease-in-out
            ">
                <span className="
                        font-bold bg-clip-text text-transparent
                        bg-linear-to-r from-black to-gray-700
                        inline-block skew-x-16
                ">Donnell</span>
                <span className="
                    font-bold bg-clip-text text-transparent inline-block skew-x-16 overflow-hidden
                    bg-linear-to-r from-black to-gray-700
                    max-w-0 opacity-0
                    group-hover:max-w-16 group-hover:opacity-100
                    transition-all duration-500 ease-in-out;
                ">&nbsp;Fulwiler</span>
                <span
                    aria-hidden={true}
                    id="desktopTitleUnderline"
                    className="z-20 pointer-events-none absolute left-1 right-0 bottom-4 mx-9
                        h-0.5 bg-current max-w-0 bg-linear-to-r from-teal-400 to-green-200
                        transition-all duration-450 group-hover:max-w-32"
                ></span>
            </span>
            <ul className="p-5 list-none grow flex items-center justify-evenly">
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
            </ul>
        </nav>
    );
}
