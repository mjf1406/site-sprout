import Link from "next/link";
import { LESSON_CATEGORIES, LESSON_DATA } from "./_lib/constants";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatMinutes } from "./_lib/utils-lessons";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-5xl w-full">
                <div className="mt-8 space-y-12">
                    {LESSON_CATEGORIES.map((category) => {
                        const filteredLessons = LESSON_DATA.filter(
                            (lesson) => lesson.category === category
                        );

                        if (filteredLessons.length === 0) return null;

                        // Check if the category is "intermediate" or "advanced"
                        const isDisabledCategory =
                            category === "intermediate" ||
                            category === "advanced";

                        return (
                            <div key={category}>
                                <h2 className="text-3xl font-bold mb-6 capitalize">
                                    {category.replace(/-/g, " ")}
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {filteredLessons.map((lesson, index) => {
                                        // Check if the lesson ID contains "exploration" or "quiz"
                                        const isFullWidth =
                                            lesson.id.includes("exploration") ||
                                            lesson.id.includes("quiz");

                                        let image;
                                        if (lesson.id.includes("exploration"))
                                            image = "/sprouty-explore.png";
                                        if (lesson.id.includes("quiz"))
                                            image = "/sprouty-quiz.png";

                                        return (
                                            <Link
                                                key={lesson.id}
                                                href={
                                                    isDisabledCategory
                                                        ? "#"
                                                        : lesson.path
                                                } // Disable link for intermediate/advanced
                                                passHref
                                                className={cn(
                                                    isFullWidth
                                                        ? "sm:col-span-2 lg:col-span-3"
                                                        : "col-span-1",
                                                    isDisabledCategory &&
                                                        "opacity-50 cursor-not-allowed pointer-events-none" // Apply opacity and disable pointer events
                                                )}
                                            >
                                                <Card className="hover:shadow-lg transition-shadow duration-300 grid grid-cols-3">
                                                    <div
                                                        className={cn(
                                                            isFullWidth
                                                                ? "col-span-2"
                                                                : "col-span-full"
                                                        )}
                                                    >
                                                        <CardHeader>
                                                            <CardTitle>
                                                                {index + 1}.){" "}
                                                                {lesson.title}
                                                            </CardTitle>
                                                            <CardDescription>
                                                                Estimated Time:{" "}
                                                                {formatMinutes(
                                                                    lesson.estimatedTime
                                                                )}
                                                            </CardDescription>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <p className="">
                                                                {
                                                                    lesson.description
                                                                }
                                                            </p>
                                                        </CardContent>
                                                        <CardFooter className="flex justify-between items-center">
                                                            <Button
                                                                variant="default"
                                                                disabled={
                                                                    isDisabledCategory
                                                                } // Disable button for intermediate/advanced
                                                            >
                                                                {isDisabledCategory
                                                                    ? "Coming Soon!"
                                                                    : !isFullWidth && (
                                                                          <span>
                                                                              Learn
                                                                              about
                                                                          </span>
                                                                      )}
                                                                {!isDisabledCategory &&
                                                                    lesson.title}
                                                            </Button>
                                                        </CardFooter>
                                                    </div>
                                                    {isFullWidth && (
                                                        <div className="relative col-span-1 flex items-center justify-center">
                                                            <Image
                                                                src={
                                                                    image ?? ""
                                                                }
                                                                alt="Sprouty Mascot"
                                                                width={200}
                                                                height={200}
                                                                className="rounded-lg"
                                                            />
                                                        </div>
                                                    )}
                                                </Card>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
