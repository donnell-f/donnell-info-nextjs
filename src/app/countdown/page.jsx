'use client';
import { useState, useEffect } from 'react';
import Dither from "../Dither";

export default function Countdown() {
    // 1. Initialize state for the remaining time (in milliseconds)
    const [timeLeft, setTimeLeft] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        // Target: Dec 31, 2025 20:00 UTC (Midnight in Azerbaijan/UTC+4)
        const targetDate = new Date('2025-12-31T20:00:00Z').getTime();

        const updateTimer = () => {
            const now = Date.now();
            const difference = targetDate - now;
            
            // 2. Clamp at 0 to prevent negative numbers after the date passes
            setTimeLeft(Math.max(0, difference));
        };

        // Run once immediately, then every second
        updateTimer();
        const intervalId = setInterval(updateTimer, 1000);

        // Cleanup interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    // 3. Math Logic: Use Math.floor to act like a digital clock (truncate, don't round)
    const totalSeconds = Math.floor(timeLeft / 1000);
    const secondsPart = totalSeconds % 60;
    const minutesPart = Math.floor(totalSeconds / 60) % 60;
    const hoursPart = Math.floor(totalSeconds / 3600);

    // Helper to make numbers look like "09" instead of "9"
    const formatTime = (time) => time.toString().padStart(2, '0');

    return (
        <main className="h-[80vh]">
            <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={false}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
            <div id="content" className="
                h-full flex flex-col items-center justify-center gap-8
                lg:mx-12 max-lg:mx-5
            ">
                <h1 id="message" className="
                    lg:text-5xl max-lg:text-4xl
                    font-semibold text-center
                ">
                    Countdown to New Year in Azerbaijan!
                </h1>
                
                {/* 4. Only render the time on the client to avoid Next.js hydration errors */}
                <h3 id="countdown" className="
                    lg:text-9xl max-lg:text-[4rem]
                    font-semibold text-center mt-4 tabular-nums text-nowrap
                    text-transparent bg-linear-to-tr from-green-500 to-teal-600 bg-clip-text
                ">
                    {isMounted ? (
                        `${formatTime(hoursPart)}:${formatTime(minutesPart)}:${formatTime(secondsPart)}`
                    ) : (
                        "Loading..." // Or "00:00:00"
                    )}
                </h3>
                <p id="azerbijani" className="
                    lg:text-4xl max-lg:text-2xl
                    italic mt-2 text-center
                    text-gray-500
                ">Yeni İliniz Mübarək!</p>
            </div>
        </main>
    );
}