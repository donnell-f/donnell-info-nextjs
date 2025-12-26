'use client';

import Dither from "../Dither";
import ProjectTab from "./ProjectTab";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
    const container = useRef();
    const p1Ref = useRef();
    const p2Ref = useRef();
    const p3Ref = useRef();

    useGSAP(() => {
        
        // Registers gsap.from() animations for all project tabs.
        const refsArray = [ p1Ref, p2Ref, p3Ref ];
        for (const [i, refVal] of refsArray.entries()) {
            const xFrom = (i % 2 == 0) ? "-100%" : "100%";
            gsap.from(refVal.current, {
                x: xFrom,
                duration: 1,
                scrollTrigger: {
                    trigger: refVal.current,
                    start: 'top 80%',

                }
            });
        }

    }, { scope: container });

    return (
        <main className="pt-32" ref={container}>
            {/* Background, not in flow. */}
            <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />

            <ProjectTab title="Sample Text" imgSrc="https://picsum.photos/500/500" direction="left" ref={p1Ref}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam volutpat enim ipsum, quis pulvinar odio varius
                euismod. Aenean et neque feugiat, vulputate nulla id,
                imperdiet lacus. Ut eget lectus sed elit auctor scelerisque
                sed quis neque. Fusce tincidunt dui at dapibus luctus.
                Aenean massa tortor, tristique ut dictum eget, finibus
                consectetur quam. Fusce pharetra fermentum est, ut lobortis
                est. Integer elementum purus ut velit suscipit, ut mollis
                lectus cursus. Integer et viverra sem. Ut quis enim pretium,
                molestie enim non, dignissim nunc. Integer suscipit lacus
                vitae nulla lacinia, sed sodales nisi lacinia. Aliquam
                euismod dapibus mi, ac lobortis tellus convallis ornare.
                Aliquam at augue ut arcu posuere faucibus. Aliquam nibh
                urna, molestie a lacus egestas, pellentesque pulvinar nisi.
            </ProjectTab>

            <ProjectTab title="Sample Text" imgSrc="https://picsum.photos/600/600" direction="right" ref={p2Ref}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam volutpat enim ipsum, quis pulvinar odio varius
                euismod. Aenean et neque feugiat, vulputate nulla id,
                imperdiet lacus. Ut eget lectus sed elit auctor scelerisque
                sed quis neque. Fusce tincidunt dui at dapibus luctus.
                Aenean massa tortor, tristique ut dictum eget, finibus
                consectetur quam. Fusce pharetra fermentum est, ut lobortis
                est. Integer elementum purus ut velit suscipit, ut mollis
                lectus cursus. Integer et viverra sem. Ut quis enim pretium,
                molestie enim non, dignissim nunc. Integer suscipit lacus
                vitae nulla lacinia, sed sodales nisi lacinia. Aliquam
                euismod dapibus mi, ac lobortis tellus convallis ornare.
                Aliquam at augue ut arcu posuere faucibus. Aliquam nibh
                urna, molestie a lacus egestas, pellentesque pulvinar nisi.
            </ProjectTab>

            <ProjectTab title="Sample Text" imgSrc="https://picsum.photos/700/700" direction="left" ref={p3Ref}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam volutpat enim ipsum, quis pulvinar odio varius
                euismod. Aenean et neque feugiat, vulputate nulla id,
                imperdiet lacus. Ut eget lectus sed elit auctor scelerisque
                sed quis neque. Fusce tincidunt dui at dapibus luctus.
                Aenean massa tortor, tristique ut dictum eget, finibus
                consectetur quam. Fusce pharetra fermentum est, ut lobortis
                est. Integer elementum purus ut velit suscipit, ut mollis
                lectus cursus. Integer et viverra sem. Ut quis enim pretium,
                molestie enim non, dignissim nunc. Integer suscipit lacus
                vitae nulla lacinia, sed sodales nisi lacinia. Aliquam
                euismod dapibus mi, ac lobortis tellus convallis ornare.
                Aliquam at augue ut arcu posuere faucibus. Aliquam nibh
                urna, molestie a lacus egestas, pellentesque pulvinar nisi.
            </ProjectTab>

        </main>
    );
}