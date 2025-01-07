import Hero from "./components/Hero";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-2xl">
                <Hero />
            </div>
        </div>
    );
}
