// ./learn/lesson/microSiteExploration.tsx

"use client";

import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ChevronDownIcon,
    MenuIcon,
    SearchIcon,
    BellIcon,
    XIcon,
    ArrowRightIcon,
    InfoIcon,
    CheckCircle2Icon,
} from "lucide-react"; // Just a few icons for demonstration

/**
 * A fun "micro site" for upper elementary kids to explore.
 * Every major UI element can be clicked (or hovered) to reveal
 * a short "You found it!" message with an explanation.
 */
export default function MicroSiteExploration() {
    // A dictionary of item -> short description
    const itemDescriptions: Record<string, string> = {
        "Address Bar":
            "This is where you can see (or type) the website address, like 'www.example.com'.",
        "Notification Banner":
            "A friendly message that sits at the top, telling you something important!",
        "Hamburger Menu":
            "Those three lines usually hide extra links or options when there's not enough space.",
        "Search Bar":
            "A place where you type what you're looking for, and the site tries to find it!",
        "Navigation Bar":
            "A set of links or buttons that help you move around a website—like a map on top!",
        Breadcrumb:
            "A trail showing where you are on a site, usually something like Home > Section > This Page.",
        Tabs: "Clickable labels that let you swap between different views—like flipping to a new page in a binder!",
        "Dropdown Menu":
            "A hidden list of choices that appears when you click or hover on it.",
        Hyperlink:
            "A link you can click to jump to another page. Typically underlined and/or blue text.",
        Form: "A place to enter and submit information, like your name or email.",
        Tooltip:
            "A small hint that appears when you hover over something, giving you extra info.",
        "Pop-Up":
            "A dialog or window that appears on top of the page, often to confirm something or show extra details.",
        Toast: "A little message that pops up and then disappears on its own, often in a corner of the screen.",
    };

    // State for discovered item
    const [discoveredItem, setDiscoveredItem] = useState<string | null>(null);

    // Decide whether the “Notification Banner” is visible
    const [showBanner, setShowBanner] = useState<boolean>(true);

    // For hamburger menu toggling
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    // For showing a toast message
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showToast, setShowToast] = useState<boolean>(false);

    // For tabs
    const [activeTab, setActiveTab] = useState<"Tab A" | "Tab B" | "Tab C">(
        "Tab A"
    );

    // For dropdown menu
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    // For pop-up (modal)
    const [showPopup, setShowPopup] = useState<boolean>(false);

    // Helper function: Show "You found X" message in a modal or overlay
    function discover(itemName: string) {
        setDiscoveredItem(itemName);
    }

    // Show a toast. Automatically disappears after a few seconds
    function handleShowToast(itemName: string) {
        setToastMessage(`You found the ${itemName}!`);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            setToastMessage(null);
        }, 3000);
    }

    return (
        <Card className="max-w-6xl mx-auto my-8 p-6 shadow-lg relative">
            {/* Mock Address Bar */}
            <div
                className="bg-gray-200 p-2 rounded mb-4 cursor-pointer"
                onClick={() => discover("Address Bar")}
            >
                <span className="text-xs text-gray-700">
                    https://www.example.com/mini-site
                </span>
            </div>

            {/* Card Header */}
            <CardHeader>
                <CardTitle className="text-3xl mb-4">
                    Explore Our Mini-Site!
                </CardTitle>
            </CardHeader>

            {/* Card Content */}
            <CardContent>
                {/* Nav Bar with Hamburger and Search */}
                <nav className="relative mb-4 border-b pb-2">
                    <div className="flex items-center justify-between">
                        <div
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => discover("Navigation Bar")}
                        >
                            <Button
                                variant="link"
                                className="p-0 text-xl"
                            >
                                MyWebsite
                            </Button>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <Button
                                variant="link"
                                onClick={() => discover("Navigation Bar")}
                            >
                                Home
                            </Button>
                            <Button
                                variant="link"
                                onClick={() => discover("Navigation Bar")}
                            >
                                About
                            </Button>
                            <Button
                                variant="link"
                                onClick={() => discover("Navigation Bar")}
                            >
                                Contact
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* Search Bar */}
                            <div
                                className="flex items-center border rounded px-2 py-1 cursor-pointer"
                                onClick={() => discover("Search Bar")}
                            >
                                <SearchIcon className="mr-1 h-4 w-4 text-gray-500" />
                                <span className="text-gray-500 text-sm">
                                    Search...
                                </span>
                            </div>

                            {/* Hamburger Menu */}
                            <Button
                                variant="ghost"
                                className="md:hidden"
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                    discover("Hamburger Menu");
                                }}
                            >
                                <MenuIcon />
                            </Button>
                        </div>
                    </div>

                    {/* Hamburger Menu (mobile only) */}
                    {menuOpen && (
                        <div className="md:hidden mt-2">
                            <div className="flex flex-col space-y-2">
                                <Button
                                    variant="link"
                                    onClick={() => discover("Navigation Bar")}
                                >
                                    Home
                                </Button>
                                <Button
                                    variant="link"
                                    onClick={() => discover("Navigation Bar")}
                                >
                                    About
                                </Button>
                                <Button
                                    variant="link"
                                    onClick={() => discover("Navigation Bar")}
                                >
                                    Contact
                                </Button>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Breadcrumb */}
                <div
                    className="flex items-center space-x-1 text-sm text-gray-600 mb-4 cursor-pointer"
                    onClick={() => discover("Breadcrumb")}
                >
                    <span>Home</span>
                    <span>/</span>
                    <span>Explore</span>
                    <span>/</span>
                    <span className="text-blue-600">Mini-Site</span>
                </div>

                {/* Notification Banner */}
                {showBanner && (
                    <div
                        className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded mb-4 flex justify-between items-center cursor-pointer"
                        onClick={() => discover("Notification Banner")}
                    >
                        <div>
                            <BellIcon className="inline-block mr-2" />
                            Important Notice: Check out our new features!
                        </div>
                        <button
                            onClick={() => setShowBanner(false)}
                            aria-label="Close banner"
                        >
                            <XIcon className="h-4 w-4" />
                        </button>
                    </div>
                )}

                {/* Tabs */}
                <div
                    className="mb-4 flex space-x-2 cursor-pointer"
                    onClick={() => discover("Tabs")}
                >
                    <Button
                        variant={activeTab === "Tab A" ? "default" : "outline"}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("Tab A");
                        }}
                    >
                        Tab A
                    </Button>
                    <Button
                        variant={activeTab === "Tab B" ? "default" : "outline"}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("Tab B");
                        }}
                    >
                        Tab B
                    </Button>
                    <Button
                        variant={activeTab === "Tab C" ? "default" : "outline"}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("Tab C");
                        }}
                    >
                        Tab C
                    </Button>
                </div>

                {/* Current Tab Content */}
                <div className="border p-4 rounded mb-4">
                    <p className="text-gray-600">
                        This is <strong>{activeTab}</strong> content!
                    </p>
                </div>

                {/* Dropdown Menu */}
                <div className="relative inline-block text-left mb-4">
                    <Button
                        variant="outline"
                        className="flex items-center space-x-1"
                        onClick={() => {
                            setDropdownOpen(!dropdownOpen);
                            discover("Dropdown Menu");
                        }}
                    >
                        <span>Dropdown</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                    {dropdownOpen && (
                        <div className="absolute mt-2 w-40 bg-white border rounded shadow-md z-10">
                            <div className="py-1">
                                <button
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Option 1
                                </button>
                                <button
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Option 2
                                </button>
                                <button
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Option 3
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Hyperlink */}
                <p className="mb-4">
                    Check out our{" "}
                    <a
                        href="#"
                        className="text-blue-600 underline"
                        onClick={(e) => {
                            e.preventDefault();
                            discover("Hyperlink");
                        }}
                    >
                        exciting news
                    </a>
                    !
                </p>

                {/* Tooltip (simulated) */}
                <div className="mb-4">
                    <Button
                        variant="outline"
                        className="relative"
                        onMouseEnter={() => discover("Tooltip")}
                    >
                        Hover Me
                        <span className="absolute top-[-3rem] left-1/2 -translate-x-1/2 bg-black text-white text-xs p-1 rounded opacity-80 pointer-events-none">
                            This is a Tooltip!
                        </span>
                    </Button>
                </div>

                {/* Simple Form */}
                <div className="mb-4 p-4 border rounded">
                    <form
                        onClick={() => discover("Form")}
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Show a toast upon form submission
                            handleShowToast("Form");
                        }}
                    >
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded px-2 py-1 mb-4"
                            placeholder="Enter your name..."
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border rounded px-2 py-1 mb-4"
                            placeholder="Enter your email..."
                        />

                        <Button
                            type="submit"
                            variant="default"
                        >
                            Submit
                        </Button>
                    </form>
                </div>

                {/* Pop-Up (Modal) Button */}
                <Button
                    variant="outline"
                    className="mb-4"
                    onClick={() => {
                        setShowPopup(true);
                        discover("Pop-Up");
                    }}
                >
                    Open Pop-Up
                </Button>

                {/* Modal */}
                {showPopup && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        onClick={() => setShowPopup(false)}
                    >
                        <div
                            className="bg-white p-6 rounded shadow-lg cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl font-bold mb-2">Pop-Up!</h2>
                            <p className="mb-4">
                                You clicked the button to show this pop-up.
                            </p>
                            <Button
                                variant="default"
                                onClick={() => setShowPopup(false)}
                                className="mr-2"
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                )}

                {/* Toast Trigger Button */}
                <Button
                    variant="outline"
                    onClick={() => handleShowToast("Toast")}
                >
                    Show a Toast
                </Button>

                {/* Toast Display */}
                {showToast && toastMessage && (
                    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 z-50">
                        <CheckCircle2Icon />
                        <span>{toastMessage}</span>
                    </div>
                )}

                {/* “Discovered” Overlay or Modal */}
                {discoveredItem && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        onClick={() => setDiscoveredItem(null)}
                    >
                        <div
                            className="bg-white p-6 rounded shadow-lg w-64 text-center cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <InfoIcon className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                            <h3 className="text-lg font-semibold mb-2">
                                You found the {discoveredItem}!
                            </h3>
                            <p className="text-sm text-gray-700 mb-4">
                                {itemDescriptions[discoveredItem]}
                            </p>
                            <Button
                                variant="default"
                                onClick={() => setDiscoveredItem(null)}
                            >
                                Awesome!
                            </Button>
                        </div>
                    </div>
                )}
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
