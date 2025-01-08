// ConfettiFireworks.tsx

"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

interface ConfettiFireworksProps {
    trigger: boolean;
}

export function ConfettiFireworks({ trigger }: ConfettiFireworksProps) {
    useEffect(() => {
        if (!trigger) return;

        const handleClick = () => {
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = {
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                zIndex: 0,
            };

            const randomInRange = (min: number, max: number) =>
                Math.random() * (max - min) + min;

            const interval = window.setInterval(() => {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    clearInterval(interval);
                    return;
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti({
                    ...defaults,
                    particleCount,
                    origin: {
                        x: randomInRange(0.1, 0.3),
                        y: Math.random() - 0.2,
                    },
                });
                confetti({
                    ...defaults,
                    particleCount,
                    origin: {
                        x: randomInRange(0.7, 0.9),
                        y: Math.random() - 0.2,
                    },
                });
            }, 250);
        };

        handleClick();
    }, [trigger]);

    return null; // This component does not render anything visible
}