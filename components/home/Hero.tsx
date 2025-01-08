"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <div className="flex flex-col gap-5 justify-start mt-24 items-center min-h-screen max-w-lg">
            <div className="relative -z-10">
                <Image
                    src="/sprouty-teacher.png" // Path relative to the public folder
                    alt="Sprouty Teacher Mascot"
                    width={300} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="rounded-lg" // Optional: Add styling classes
                />
                {/* Speech Bubble */}
                <div className="absolute -top-20 border-black dark:border-white border -right-8 bg-secondary p-4 rounded-lg shadow-lg max-w-[200px] flex flex-col items-center">
                    <p className="text-base text-center">
                        Professor Sprouty here! Let&apos;s teach these kiddos
                        how to use the web together!
                    </p>
                    {/* SVG Tail */}
                    <svg
                        className="w-10 h-10 absolute -bottom-6 -left-6 rotate-45"
                        viewBox="0 0 20 10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="hsl(var(--secondary))"
                        stroke={isDark ? "#fff" : "#000"}
                    >
                        <path d="M0 -12 L10 15 L20 -12 Z" />
                    </svg>
                </div>
            </div>
            {/* Kicker */}
            {/* <div className="text-xs">
                    <div className="flex gap-1 items-center justify-start">
                        <div className="flex items-center justify-center">
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                            <Star
                                fill="#FFDF00"
                                size={12}
                            />
                        </div>
                        <p>Over 1,000 students learning today!</p>
                    </div>
                    <p>Make websites fun and easy to understand!</p>
                </div> */}
            {/* Super Clear Heading */}
            <h1 className="text-4xl font-bold">
                Help your students learn about the user interface elements of
                web pages.
            </h1>
            {/* Extra Context */}
            <p className="text-lg md:text-base">
                Help your students explore the building blocks of websites by
                learning about key components like headers, navigation menus,
                buttons, images, links, and footers. This foundational knowledge
                will help students better understand and navigate the web with
                confidence.
            </p>
            {/* Clear Doubts */}
            {/* <div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Interactive lessons designed for kids
                </div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Fun, visual explanations of web elements
                </div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Hands-on activities to practice what you
                    learn
                </div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Perfect for teachers and parents looking
                    for engaging resources
                </div>
            </div> */}
            {/* Call to Action */}
            <div className="space-x-2 self-start">
                <Button>
                    Start Exploring <ArrowRight size={24} />
                </Button>
                <Button variant={"ghost"}>Learn More</Button>
            </div>
        </div>
    );
}
