import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type NavItem = {
    name: string;
    href: string;
    icon?: LucideIcon | IconProp;
    img?: string;
};

const navItems: NavItem[] = [
    {
        name: "Students",
        href: "/",
        img: "/sprouty-student.png",
    },
    {
        name: "Teachers",
        href: "/teacher",
        img: "/sprouty-teacher.png",
    },
];

export default function NavHeader() {
    return (
        <nav className="flex gap-4">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm hover:bg-primary rounded-lg px-2"
                >
                    {item.icon ? (
                        typeof item.icon === "function" ? (
                            <item.icon size={20} />
                        ) : (
                            <FontAwesomeIcon
                                icon={item.icon}
                                size="lg"
                            />
                        )
                    ) : item.img ? (
                        <Image
                            src={item.img}
                            alt={`${item.name} Mascot`}
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                    ) : null}
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}
