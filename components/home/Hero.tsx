import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col gap-5 justify-start mt-24 items-center min-h-screen max-w-lg">
            <Image
                src="/sprouty-student.png" // Path relative to the public folder
                alt="Sprouty Student Mascot"
                width={300} // Adjust width as needed
                height={300} // Adjust height as needed
                className="rounded-lg" // Optional: Add styling classes
            />
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
                Ever wonder what a Navbar, Hamburger Menu, or Pop-Up is? We’ll
                teach you all about the parts of websites with fun lessons and
                activities. Start exploring today!
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
