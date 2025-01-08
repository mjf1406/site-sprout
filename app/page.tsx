import React from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import LogoHome from "@/components/brand/LogoHome";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-dvh py-6">
            <LogoHome />
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <Link href={"/learn"}>
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Students</CardTitle>
                            <CardDescription>
                                Start learning all about the parts of websites!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <Image
                                src="/sprouty-student.png"
                                alt="Student Icon"
                                width={200}
                                height={200}
                                className="w-32 md:w-48 lg:w-[200px] rounded-lg"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            Students click here!
                        </CardFooter>
                    </Card>
                </Link>

                <Link href={"/teacher"}>
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Teachers</CardTitle>
                            <CardDescription>
                                Learn about how to use Site Sprout effectively.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <Image
                                src="/sprouty-teacher.png"
                                alt="Teacher Icon"
                                width={200}
                                height={200}
                                className="w-32 md:w-48 lg:w-[200px] rounded-lg"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            Teachers click here!
                        </CardFooter>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
