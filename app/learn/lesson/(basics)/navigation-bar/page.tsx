// ./learn/lesson/navigationBars.jsx

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    HomeIcon,
    InfoIcon,
    MenuIcon,
    UserIcon,
    MailIcon,
    ArrowRightIcon,
} from "lucide-react"; // Icons from Lucide
import Link from "next/link";
import { Question, Quiz } from "@/components/Quiz";

/**
 * A lesson on Navigation Bars, designed for upper elementary school students.
 * This lesson explains what a navigation bar is, shows examples of different
 * types of nav bars, and highlights common icons used to help users find their way.
 */
export default function NavbarLesson() {
    // Quiz questions related to navigation bars
    const questions: Question[] = [
        {
            question: "What is a navigation bar (or navbar)?",
            options: [
                "A place to store user information",
                "A set of links that helps users move around a website",
                "A button that deletes an item",
                "A form for submitting information",
            ],
            correctAnswer: 1,
        },
        {
            question: "Which icon often represents the home page link?",
            options: ["Menu Icon", "Home Icon", "Mail Icon", "User Icon"],
            correctAnswer: 1,
        },
        {
            question:
                "Why are navbars usually placed at the top or side of a website?",
            options: [
                "So they look fancy",
                "To block important information",
                "To help people easily see and click on them",
                "Because there's no other place to put them",
            ],
            correctAnswer: 2,
        },
        {
            question:
                "Which icon is commonly used to represent a menu with multiple sections?",
            options: ["User Icon", "Home Icon", "Menu Icon", "Info Icon"],
            correctAnswer: 2,
        },
        {
            question: "What is the purpose of an 'About Us' link in a navbar?",
            options: [
                "It opens a game",
                "It takes the user to the main page",
                "It shows information about the website or the group behind it",
                "It collects user data",
            ],
            correctAnswer: 2,
        },
        {
            question:
                "Which icon might you see in a navbar for a user profile or account?",
            options: ["Mail Icon", "User Icon", "Info Icon", "Menu Icon"],
            correctAnswer: 1,
        },
        {
            question:
                "What does the mail or envelope icon typically mean in a navbar?",
            options: [
                "Contact or Email link",
                "Exit or close the website",
                "Print the page",
                "Go to the privacy settings",
            ],
            correctAnswer: 0,
        },
        {
            question: "Why should a navbar be easy to see and read?",
            options: [
                "So it can hide important links",
                "So users can quickly find what they need",
                "So it blends in completely with the background",
                "So no one will notice it",
            ],
            correctAnswer: 1,
        },
    ];

    return (
        <Card className="max-w-3xl mx-auto my-8 p-6 shadow-lg">
            {/* Card Header */}
            <CardHeader>
                <CardTitle className="text-3xl mb-4">Navigation Bars</CardTitle>
            </CardHeader>

            {/* Card Content */}
            <CardContent>
                {/* Introduction */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        Introduction
                    </h2>
                    <p className="">
                        A navigation bar, often called a “navbar,” is a set of
                        links or buttons that helps people explore a website.
                        Think of it like a map: you can click on the link for
                        the home page or your profile page, or find more
                        information about the site. Navbars are usually at the
                        top or side of a website so they’re easy to spot.
                    </p>
                </section>

                {/* Types of Navigation Bars */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        Types of Navigation Bars
                    </h2>

                    {/* Horizontal Navbar */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">
                            Horizontal Navbar
                        </h3>
                        <p className=" mb-2">
                            A horizontal navbar sits across the top of a page.
                            It usually lists all the main sections in one row.
                        </p>
                        <nav className="flex space-x-4 p-2 border rounded">
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Contact
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Profile
                            </a>
                        </nav>
                    </div>

                    {/* Vertical Navbar */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">
                            Vertical Navbar
                        </h3>
                        <p className=" mb-2">
                            A vertical navbar runs up and down the side of the
                            page. This can be useful if you have many links and
                            want them to be easily visible.
                        </p>
                        <nav className="flex flex-col space-y-2 p-2 border rounded w-40">
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Blog
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </section>

                {/* Icons in Navbars */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        Icons in Navbars
                    </h2>
                    <p className=" mb-4">
                        Icons are small pictures that help you recognize where a
                        link goes. They can make navbars easier to understand at
                        a glance.
                    </p>

                    {/* Example: Home Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">Home</h3>
                        <p className=" mb-2">
                            A home icon usually takes you to the website’s main
                            page.
                        </p>
                        <Button
                            variant="default"
                            className="flex items-center space-x-2"
                        >
                            <HomeIcon />
                            <span>Home</span>
                        </Button>
                    </div>

                    {/* Example: About / Info Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">About Us</h3>
                        <p className=" mb-2">
                            An information (info) icon is sometimes used for an
                            About Us link or page. It lets you know you can
                            learn more about the site.
                        </p>
                        <Button
                            variant="secondary"
                            className="flex items-center space-x-2"
                        >
                            <InfoIcon />
                            <span>About</span>
                        </Button>
                    </div>

                    {/* Example: Menu Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">Menu</h3>
                        <p className=" mb-2">
                            The “hamburger menu” (three stacked lines) can show
                            extra links when there isn’t enough room to show
                            them all at once.
                        </p>
                        <Button
                            variant="default"
                            className="flex items-center space-x-2"
                        >
                            <MenuIcon />
                            <span>Menu</span>
                        </Button>
                    </div>

                    {/* Example: Profile / User Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">Profile</h3>
                        <p className=" mb-2">
                            A user icon typically leads to your profile page or
                            account settings.
                        </p>
                        <Button
                            variant="secondary"
                            className="flex items-center space-x-2"
                        >
                            <UserIcon />
                            <span>Profile</span>
                        </Button>
                    </div>

                    {/* Example: Contact / Mail Icon */}
                    <div className="mb-4">
                        <h3 className="text-xl font-medium mb-1">Contact</h3>
                        <p className=" mb-2">
                            A mail or envelope icon often stands for sending a
                            message or visiting a contact form.
                        </p>
                        <Button
                            variant="default"
                            className="flex items-center space-x-2"
                        >
                            <MailIcon />
                            <span>Contact</span>
                        </Button>
                    </div>
                </section>

                {/* Quiz */}
                <Quiz questions={questions} />

                {/* Summary */}
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                    <p className="">
                        Navigation bars guide people around a website. They
                        usually show up at the top or side of a page. Icons can
                        help users easily recognize where each link leads. By
                        understanding how navbars and icons work, you’ll have a
                        better idea of how to move around a site and find what
                        you’re looking for!
                    </p>
                </section>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="flex justify-end">
                <Link href="/learn/lesson/next-lesson">
                    <Button
                        variant="default"
                        className="flex items-center space-x-2"
                    >
                        <span>Next Lesson</span> <ArrowRightIcon />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
