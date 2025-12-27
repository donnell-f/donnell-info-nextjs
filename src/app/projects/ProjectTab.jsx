import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

function DesktopProjectTab({ title, imgSrc, githubLink, direction, skills, ref, children, className}) {
    const isLeft = ( direction === "right" ) ? false : true;

    return (
        <div id="desktopContent" className={
            isLeft
            ?  `${className} max-h-[95vh] grid grid-rows-1 grid-cols-[1fr_35vw_8vw]`
            :  `${className} max-h-[95vh] grid grid-rows-1 grid-cols-[8vw_35vw_1fr]`
        }>
            <div id="contentBg" className={
                isLeft
                ? "row-[1/span_1] col-[1/span_2] bg-linear-to-tr from-gray-400/75 to-gray-700/75 rounded-e-2xl"
                : "row-[1/span_1] col-[2/span_2] bg-linear-to-tl  from-gray-400/75 to-gray-700/75 rounded-s-2xl"
            } />
            <div id="textContent" className={
                isLeft
                ? "row-[1/span_1] col-[1/span_1] flex flex-col items-center justify-evenly gap-6 p-10 min-h-[60vh]"
                : "row-[1/span_1] col-[3/span_1] flex flex-col items-center justify-evenly gap-6 p-10 min-h-[60vh]"
            }>
                <h1 className="text-center text-3xl font-semibold text-white">{title}</h1>
                <p className="text-2xl text-center text-white">{children}</p>
                <div id="skillsList" className="flex items-start gap-6 mt-2">
                    <span className="text-xl font-semibold text-shadow-lg text-white pt-1">Skills:&nbsp;</span>
                    <ul className="list-none flex gap-6 items-center flex-wrap">
                        { skills.map((s,i) => <li key={i} className="bg-linear-to-tr from-gray-500 to-gray-700 text-white font-semibold font-lg rounded-md py-1.5 px-3 text-nowrap">{s}</li>) }
                    </ul>
                </div>
            </div>
            <div id="imageContainer" className={"row-[1/span_1] col-[2/span_1] p-8 my-auto"}>
                <Link
                id="projectImage"
                href={githubLink}
                target="_blank"
                style={{ backgroundImage: `url('${imgSrc}')` }}
                className="relative block group aspect-square bg-cover bg-center rounded-2xl"
                >
                    <div id="annoyingLinkContainer" className="
                        absolute right-3 top-3 p-2.5
                        rounded-lg bg-linear-to-tr from-green-300/50 to-teal-600/50
                        group-hover:p-[calc(50%-0.75rem)] group-hover:top-0 group-hover:right-0 group-hover:rounded-2xl
                        transition-all duration-300 ease-in-out
                    ">
                        <LuExternalLink className="relative text-2xl" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

function MobileProjectTab({ title, imgSrc, githubLink, direction, skills, ref, children, className }) {
    const isLeft = ( direction === "right" ) ? false : true;

    return (
        <div id="mobileSectionContent" className={`
            ${className} bg-linear-to-tr from-gray-400/70 to-gray-700/70 p-8 mt-5 
            ${ isLeft ? "mr-5 rounded-e-xl" : "ml-5 rounded-s-xl" }
        `}>
            <div id="textContent" className="">
                <h1 className="text-center text-3xl font-semibold text-white mb-6">{title}</h1>
                <p className="text-lg text-center text-white mb-6">{children}</p>
                <div id="skillsList" className="flex items-start gap-4 mb-6">
                    <span className="text-xl font-semibold text-shadow-lg text-white pt-0.5">Skills:&nbsp;</span>
                    <ul className="list-none flex gap-4 items-center flex-wrap">
                        { skills.map((s,i) => <li key={i} className="bg-linear-to-tr from-gray-500 to-gray-700 text-white font-semibold font-lg rounded-md py-1 px-2 text-nowrap">{s}</li>) }
                    </ul>
                </div>
            </div>
            <div id="imageContainer" className="">
                <Link
                id="projectImage"
                href={githubLink}
                target="_blank"
                style={{ backgroundImage: `url('${imgSrc}')` }}
                className="
                    relative block max-w-[min(16rem,100%)] mx-auto rounded-2xl 
                    aspect-square bg-cover bg-center
                    hover:cursor-pointer
                ">
                    <div id="annoyingLinkContainer" className="
                        absolute right-3 top-3 p-2 rounded-lg bg-teal-400/20
                    ">
                        <LuExternalLink className="relative text-2xl" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default function ProjectTab({ title, imgSrc, githubLink, direction, skills, ref, children }) {

    return (
        <section id="project1" ref={ref} className="
            lg:h-[95vh]
            flex flex-col justify-center
        ">
            <DesktopProjectTab title={title} imgSrc={imgSrc} githubLink={githubLink} direction={direction} skills={skills} className="max-lg:hidden">
                {children}
            </DesktopProjectTab>
            <MobileProjectTab title={title} imgSrc={imgSrc} githubLink={githubLink} direction={direction} skills={skills} className="lg:hidden">
                {children}
            </MobileProjectTab>
        </section>
    );
}
