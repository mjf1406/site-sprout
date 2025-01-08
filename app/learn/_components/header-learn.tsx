import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import NavLearn from "./nav-learn";

export default function HeaderLearn() {
    return (
        <header className="px-3 md:px-6 py-1 md:py-2 bg-accent w-full sticky top-0">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link
                    href={"/"}
                    className="flex gap-2 justify-center items-center text-2xl md:text-4xl font-[family-name:var(--font-fredoka)]"
                >
                    <FontAwesomeIcon
                        icon={faSeedling}
                        className="h-6 w-6 md:h-10 md:w-10 text-logo"
                    />
                    <div>{APP_NAME}</div>
                </Link>
                <NavLearn />
            </div>
        </header>
    );
}
