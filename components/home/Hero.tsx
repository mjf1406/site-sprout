"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="flex flex-col gap-5 justify-start mt-24 items-center min-h-screen max-w-lg">
            <div className="relative">
                <Image
                    src="/sprouty-student.png" // Path relative to the public folder
                    alt="Sprouty Student Mascot"
                    width={300} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="rounded-lg" // Optional: Add styling classes
                />
                {/* Speech Bubble */}
                <div className="absolute -top-20 border-black dark:border-white border -right-32 bg-secondary p-4 rounded-lg shadow-lg max-w-[200px] flex flex-col items-center">
                    <p className="text-lg text-center">
                        Hi! I&apos;m Sprouty! Let&apos;s learn about the web
                        together!
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
            {/* Fun Kicker */}
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
                        <p>5,000+ students are having fun learning today!</p>
                    </div>
                    <p>Learn how websites work and have fun doing it!</p>
                </div> */}
            {/* Super Clear Heading */}
            <h1 className="text-4xl font-bold self-start">
                Learn websites the fun way!
            </h1>
            {/* Simple Explanation */}
            <p>
                Ever wonder what a Navbar, Hamburger Menu, or Pop-Up is? Sprouty
                up there will teach you all about the parts of websites with fun
                lessons and activities. Let&apos;s go!
            </p>
            {/* Highlights */}
            {/* <div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Easy-to-follow lessons
                </div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Learn about buttons, menus, and more
                </div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Fun challenges and activities
                </div>
                <div className="flex justify-start items-center gap-1">
                    <Check size={16} /> Made for kids like you!
                </div>
            </div> */}
            {/* Call to Action */}
            <div className="space-x-2 self-start">
                <Button>
                    Start Learning! <ArrowRight size={24} />
                </Button>
                <Link
                    href={"/teacher"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant={"ghost"}>
                        Teachers <ExternalLink size={16} />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
