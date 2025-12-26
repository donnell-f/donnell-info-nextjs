
const leftSectionClass = "grid grid-rows-1 grid-cols-[1fr_8vw] mb-48"
const rightSectionClass = "grid grid-rows-1 grid-cols-[8vw_1fr] mb-48"

const leftContentClass = `
    row-[1/span_1] col-[1/span_1]
    flex items-center justify-evenly gap-16
    bg-linear-to-tr from-gray-700 to-gray-400 opacity-85 rounded-e-2xl
    p-12
`;
const rightContentClass = `
    row-[1/span_1] col-[2/span_1]
    flex items-center justify-evenly gap-16
    bg-linear-to-tr from-gray-700 to-gray-400 opacity-85 rounded-s-2xl
    p-12
`;

export default function ProjectTab({ title, imgSrc, direction, ref, children }) {
    const isLeft = ( direction === "right" ) ? false : true;
    const projectPic = <img src={imgSrc} className="size-120 rounded-2xl" />;

    return (
        <section id="project1" ref={ref} className={isLeft ? leftSectionClass : rightSectionClass}>
            <div id="content" className={isLeft ? leftContentClass : rightContentClass}>
                { isLeft ? "" : projectPic }
                <div id="textContent">
                    <h1 className="text-center text-3xl font-semibold text-white mb-6">{title}</h1>
                    <p className="text-xl text-center text-white">{children}</p>
                </div>
                { isLeft ? projectPic : "" }
            </div>
        </section>
    );
}
