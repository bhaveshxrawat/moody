import OnboardBtn from "../ui/OnboardBtn";

export default function Homepage() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="max-w-[97.5rem]">
                <div className="flex flex-col max-w-[37.1875rem]">
                    <h1 className="text-6xl leading-[1.16] font-black">Track Your Mood, Improve Your Life</h1>
                    <p className="text-xl">Our mood tracker app helps you understand your emotional well-being and make positive changes. To a happier and healthier you!</p>
                    <OnboardBtn />
                </div>
            </div>
        </main>
    )
}
