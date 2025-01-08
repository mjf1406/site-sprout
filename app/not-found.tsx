// ./pages/404.tsx

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BackButton from "@/components/BackButton";

export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
            <Card className="max-w-md w-full p-6 shadow-lg rounded-lg bg-white">
                <CardHeader className="flex flex-col items-center">
                    {/* Fun SVG Art */}
                    <Image
                        src="/sprouty-404.png" // Ensure you have this SVG in your public/images directory
                        alt="Funny Robot"
                        width={300}
                        height={300}
                        className="mb-4"
                    />
                    <CardTitle className="text-3xl text-blue-600">
                        Oops!
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-gray-700 mb-4">
                        Looks like you&apos;ve stumbled upon a page that
                        doesn&apos;t exist.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Don&apos;t worry, let&apos;s get you back on track!
                    </p>
                </CardContent>
                <CardFooter className="flex gap-5 flex-col justify-center">
                    <BackButton />
                    <Link href="/">
                        <Button
                            variant="secondary"
                            className="w-full"
                        >
                            Go to Home <ArrowRight />
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
