import { useState } from "react";
import { createPortal } from "react-dom";
import OnboardBtn from "../ui/OnboardBtn";
import AuthModal from "../Auth/AuthModal";

export default function Homepage() {
    const [authModalActive, setAuthModalActive] = useState(false)
    return (
        <>
        <main className="min-h-screen flex items-center justify-center py-12 px-6">
            <div className="max-w-[97.5rem] w-full flex items-center justify-between gap-16">
                <div className="flex flex-col max-w-[37.1875rem] gap-5 items-start">
                    <h1 className="text-6xl leading-[1.16] font-black">Track Your Mood, Improve Your Life</h1>
                    <p className="text-xl">Our mood tracker app helps you understand your emotional well-being and make positive changes. To a happier and healthier you!</p>
                    <OnboardBtn setModalActive={setAuthModalActive}/>
                </div>
                <figure>
                    <picture>
                        <source media="(max-width: 500px)" srcSet="assets/hero-image-m.webp" />
                        <source media="(min-width: 500px)" srcSet="assets/hero-image.webp" />
                        <img src="assets/hero-image.webp" className="scale-[0.75]"/>
                    </picture>
                </figure>
            </div>
        </main>
        {createPortal(<AuthModal active={authModalActive} setModalActive={setAuthModalActive}/>, document.body)}
        </>
    )
}
