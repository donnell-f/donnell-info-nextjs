import { LuExternalLink } from "react-icons/lu";

function DesktopProjectTab({ title, imgSrc, direction, skills, ref, children, className}) {
    const isLeft = ( direction === "right" ) ? false : true;

    return (
        <div id="desktopContent" className={
            isLeft
            ?  `${className} max-h-[95vh] grid grid-rows-1 grid-cols-[1fr_25vw_8vw]`
            :  `${className} max-h-[95vh] grid grid-rows-1 grid-cols-[8vw_25vw_1fr]`
        }>
            <div id="contentBg" className={
                isLeft
                ? "row-[1/span_1] col-[1/span_2] bg-linear-to-tr from-gray-400/85 to-gray-700/85 rounded-e-2xl"
                : "row-[1/span_1] col-[2/span_2] bg-linear-to-tl  from-gray-400/85 to-gray-700/85 rounded-s-2xl"
            } />
            <div id="textContent" className={
                isLeft
                ? "row-[1/span_1] col-[1/span_1] flex flex-col items-center justify-evenly gap-6 p-10 min-h-[35vh]"
                : "row-[1/span_1] col-[3/span_1] flex flex-col items-center justify-evenly gap-6 p-10 min-h-[35vh]"
            }>
                <h1 className="text-center text-3xl font-semibold text-white">{title}</h1>
                <p className="text-xl text-center text-white">{children}</p>
                <div id="skillsList" className="flex items-start gap-6 mt-2">
                    <span className="text-xl font-semibold text-shadow-lg text-white pt-1">Skills:&nbsp;</span>
                    <ul className="list-none flex gap-6 items-center flex-wrap">
                        { skills.map((s,i) => <li key={i} className="bg-linear-to-tr from-gray-500 to-gray-700 text-white font-semibold font-lg rounded-md py-1.5 px-3 text-nowrap">{s}</li>) }
                    </ul>
                </div>
            </div>
            <div id="imageContainer" className={"row-[1/span_1] col-[2/span_1] p-8 my-auto"}>
                <img src={imgSrc} className="aspect-square rounded-2xl" />
            </div>
        </div>
    );
}

function MobileProjectTab({ title, imgSrc, direction, skills, ref, children, className }) {
    const isLeft = ( direction === "right" ) ? false : true;

    return (
        <div id="mobileSectionContent" className={`
            ${className} bg-linear-to-tr from-gray-400/80 to-gray-700/80 p-8 mt-4 
            ${ isLeft ? "mr-4 rounded-e-xl" : "ml-4 rounded-s-xl" }
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
                <div
                    style={{ backgroundImage: `url('${imgSrc}')` }}
                    className={"relative max-w-[min(16rem,100%)] aspect-square bg-cover bg-center rounded-2xl mx-auto"}
                >
                    <div id="annoyingLinkContainer" className="
                        absolute right-3 top-3 p-2 rounded-lg bg-teal-400/20
                        lg:opacity-0 lg:translate-y-4
                        lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                        duration-200 ease-in
                    ">
                        <LuExternalLink className="relative text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectTab({ title, imgSrc, direction, skills, ref, children }) {

    return (
        <section id="project1" ref={ref} className="
            lg:h-[95vh]
            max-lg:mb-4
            flex flex-col justify-center
        ">
            <DesktopProjectTab title={title} imgSrc={imgSrc} direction={direction} skills={skills} className="max-lg:hidden">
                {children}
            </DesktopProjectTab>
            <MobileProjectTab title={title} imgSrc={imgSrc} direction={direction} skills={skills} className="lg:hidden">
                {children}
            </MobileProjectTab>
        </section>
    );
}
