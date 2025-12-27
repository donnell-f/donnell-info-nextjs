
export default function ProjectTab({ title, imgSrc, direction, skills, ref, children }) {
    const isLeft = ( direction === "right" ) ? false : true;

    return (
        <section id="project1" ref={ref} className={
            "h-[95vh] flex flex-col justify-center"
        }>
            <div id="sectionContent" className={
                isLeft
                ?  `max-h-[95vh]
                    grid grid-rows-1 grid-cols-[1fr_25vw_8vw]`
                :  `max-h-[95vh]
                    grid grid-rows-1 grid-cols-[8vw_25vw_1fr]`
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
        </section>
    );
}
