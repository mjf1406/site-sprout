import NavTeacher from "./nav-teacher";
import Logo from "@/components/brand/LogoHeader";

export default function HeaderTeacher() {
    return (
        <header className="px-3 md:px-6 py-1 md:py-2 bg-accent w-full sticky top-0">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Logo />
                <NavTeacher />
            </div>
        </header>
    );
}
