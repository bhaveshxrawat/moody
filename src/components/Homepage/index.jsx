import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { createPortal } from "react-dom";
import OnboardBtn from "../ui/OnboardBtn";
import AuthModal from "../Auth/AuthModal";

export default function Homepage({ userPrefers }) {
    const [authModalActive, setAuthModalActive] = useState(false);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const leftIsInView = useInView(leftRef, {
        once: true,
    });
    const rightIsInView = useInView(rightRef, {
        once: true,
    });
    return (
        <>
            <main className="flex items-center justify-center py-16 px-6 md:px-4 md:py-0 md:pt-8 md:pb-4">
                <div className="max-w-[97.5rem] w-full flex items-center justify-between gap-16 md:flex-col-reverse md:gap-8">
                    <div
                        ref={leftRef}
                        style={{
                            opacity: leftIsInView ? 1 : 0,
                            translate: leftIsInView ? 0 : "0 1rem",
                            transition: "all 0.5s ease-in",
                        }}
                        className="flex flex-col max-w-[37.1875rem] gap-5 items-start flex-1"
                    >
                        <h1 className="text-6xl leading-[1.16] font-black md:text-5xl">
                            Track Your Mood, Improve Your Life
                        </h1>
                        <p className="text-xl md:text-base">
                            Built to help you understand your emotional
                            well-being and make positive changes. To a happier
                            and healthier you!
                        </p>
                        <OnboardBtn setModalActive={setAuthModalActive} />
                    </div>
                    <figure className="flex-1 hero-image">
                        <img
                            width={715}
                            height={537}
                            src="assets/hero-image.webp"
                            srcSet="assets/hero-image-m.webp 500w, assets/hero-image.webp 1440w"
                            sizes="(max-width: 500px) 500px, (min-width: 500px) 1440px, 1440px"
                            alt="Hero Image"
                            ref={rightRef}
                            className={`c-scale ${rightIsInView ? "in-view" : ""}`}
                        />
                    </figure>
                </div>
            </main>
            {createPortal(
                <AuthModal
                    active={authModalActive}
                    setModalActive={setAuthModalActive}
                    userPrefers={userPrefers}
                />,
                document.body
            )}
        </>
    );
}
