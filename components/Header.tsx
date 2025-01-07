import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavHeader from "./NavHeader";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "./ui/theme-toggle";

export default function Header() {
    return (
        <header className="px-6 py-2 bg-accent w-full sticky top-0">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link
                    href={"/"}
                    className="flex gap-2 justify-center items-center text-4xl font-[family-name:var(--font-fredoka)]"
                >
                    <FontAwesomeIcon
                        icon={faSeedling}
                        className="h-10 w-10 text-logo"
                    />
                    <div>{APP_NAME}</div>
                </Link>
                <div className="flex gap-2">
                    <NavHeader />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
