import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col gap-5 justify-start mt-24 items-center min-h-screen max-w-lg">
            <Image
                src="/sprouty-teacher.png" // Path relative to the public folder
                alt="Sprouty Student Mascot"
                width={300} // Adjust width as needed
                height={300} // Adjust height as needed
                className="rounded-lg" // Optional: Add styling classes
            />
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
                Help your students learn the parts of websites!
            </h1>
            {/* Extra Context */}
            <p>
                Help your students explore the hidden world of websites by
                learning about different elements on the web! Perfect for young
                learners curious about how the internet works.
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
