// Import necessary modules and components
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

                        return (
                            <div key={category}>
                                <h2 className="text-3xl font-bold mb-6 capitalize">
                                    {category.replace(/-/g, " ")}
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {filteredLessons.map((lesson) => (
                                        <Link
                                            key={lesson.id}
                                            href={lesson.path}
                                            passHref
                                        >
                                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                                <CardHeader>
                                                    <CardTitle>
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
                                                    <p className="text-gray-600">
                                                        {lesson.description}
                                                    </p>
                                                </CardContent>
                                                <CardFooter className="flex justify-between items-center">
                                                    <Button variant="default">
                                                        Learn about{" "}
                                                        {lesson.title}
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
