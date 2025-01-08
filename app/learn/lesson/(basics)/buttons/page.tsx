// ./learn/lesson/buttons.jsx

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, PlusIcon, TrashIcon } from "lucide-react"; // Example icons from Lucide
import Link from "next/link";
import { Question, Quiz } from "@/components/Quiz";

export default function ButtonsLesson() {
    const questions: Question[] = [
        {
            question: "What is the primary purpose of a primary button?",
            options: [
                "To perform the main action on a page",
                "To perform a secondary action",
                "To indicate a disabled state",
                "To navigate to another page",
            ],
            correctAnswer: 0,
        },
        {
            question:
                "Which icon is commonly used to represent a delete action?",
            options: ["Check Icon", "Plus Icon", "Trash Icon", "Edit Icon"],
            correctAnswer: 2,
        },
        {
            question:
                "What variant is typically used for less important actions?",
            options: ["Primary", "Secondary", "Destructive", "Tertiary"],
            correctAnswer: 1,
        },
        {
            question: "What is the purpose of a disabled button?",
            options: [
                "To perform an alternative action",
                "To indicate that an action is currently unavailable",
                "To navigate to a different section",
                "To submit a form",
            ],
            correctAnswer: 1,
        },
        {
            question:
                "Which icon is used to indicate a confirm action in a button?",
            options: ["Check Icon", "Plus Icon", "Trash Icon", "Edit Icon"],
            correctAnswer: 0,
        },
        {
            question:
                "Which icon signifies that a button will add/create a new item/thing?",
            options: ["Check Icon", "Plus Icon", "Trash Icon", "Edit Icon"],
            correctAnswer: 1,
        },
        {
            question:
                "Which button variant is used to clearly show a dangerous action, like deleting something?",
            options: ["Primary", "Secondary", "Destructive", "Tertiary"],
            correctAnswer: 2,
        },
    ];

    return (
        <Card className="max-w-3xl mx-auto my-8 p-6 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl mb-4">Buttons</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Introduction */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        Introduction to Buttons
                    </h2>
                    <p className="text-gray-700">
                        Buttons are interactive elements that allow users to
                        perform actions, such as submitting a form, opening a
                        dialog, or navigating to another page. They come in
                        various styles and can contain icons to enhance their
                        functionality and appearance.
                    </p>
                </section>

                {/* Types of Buttons */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        Types of Buttons
                    </h2>

                    {/* Primary Button */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">
                            Primary Button
                        </h3>
                        <p className="text-gray-700 mb-2">
                            The primary button is used for the main action on a
                            page. It usually stands out with a distinct color to
                            attract attention.
                        </p>
                        <Button variant="default">Primary Action</Button>
                    </div>

                    {/* Secondary Button */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">
                            Secondary Button
                        </h3>
                        <p className="text-gray-700 mb-2">
                            The secondary button is used for less important
                            actions. It complements the primary button without
                            drawing as much attention.
                        </p>
                        <Button variant="secondary">Secondary Action</Button>
                    </div>

                    {/* Disabled Button */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">
                            Disabled Button
                        </h3>
                        <p className="text-gray-700 mb-2">
                            Disabled buttons are non-interactive and indicate
                            that an action is currently unavailable.
                        </p>
                        <Button
                            className="hover:cursor-not-allowed"
                            disabled
                        >
                            Disabled
                        </Button>
                    </div>
                </section>

                {/* Icons in Buttons */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        Icons in Buttons
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Adding icons to buttons can make them more informative
                        and visually appealing. Icons help users quickly
                        understand the purpose of the button.
                    </p>

                    {/* Example: Button with Check Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">
                            Confirm Action
                        </h3>
                        <p className="text-gray-700 mb-2">
                            A check icon indicates that the button will confirm
                            or complete an action.
                        </p>
                        <Button variant="default">
                            <CheckIcon /> Confirm
                        </Button>
                    </div>

                    {/* Example: Button with Plus Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">Add Item</h3>
                        <p className="text-gray-700 mb-2">
                            A plus icon signifies that the button will add a new
                            item or element.
                        </p>
                        <Button variant="secondary">
                            <PlusIcon /> Add
                        </Button>
                    </div>

                    {/* Example: Button with Trash Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">
                            Delete Item
                        </h3>
                        <p className="text-gray-700 mb-2">
                            A trash icon clearly shows that the button will
                            delete or remove something.
                        </p>
                        <Button variant="destructive">
                            <TrashIcon /> Delete
                        </Button>
                    </div>
                </section>

                {/* Best Practices */}
                <Quiz questions={questions} />

                {/* Summary */}
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                    <p className="text-gray-700">
                        Buttons are essential elements in user interfaces that
                        enable users to interact with applications. By
                        understanding the different types of buttons and how to
                        effectively use icons within them, you can create
                        intuitive and user-friendly designs.
                    </p>
                </section>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Link href="/learn/lesson/next-lesson">
                    <Button variant="default">Next Lesson</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
