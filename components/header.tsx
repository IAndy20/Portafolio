"use client"

import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        <span className="text-black">Italo</span>                            <span className="text-secondary">Rojas</span>
                        </h1>
                    </Link>
                    <div className=" flex items-center justify-center gap-7">
                        <Link href="/projects" className="text-black text-2xl transition-all duration-300 hover:text-secondary">
                            Projects
                        </Link>
                        <Link href="/about-me" className="text-black text-2xl transition-all duration-300 hover:text-secondary">
                            About
                        </Link>
                        <Link href="/contact" className="text-black text-2xl transition-all duration-300 hover:text-secondary">
                            Contact
                        </Link>
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
