import Donate from "@/components/Donate";
import Hero from "./_components/hero-teacher";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-2xl">
                <Hero />
                <Donate />
            </div>
        </div>
    );
}
