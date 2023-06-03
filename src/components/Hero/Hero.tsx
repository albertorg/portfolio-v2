import { space } from "@/fonts"


export const Hero = () => {
    return (
        <section className="flex flex-col items-start justify-center min-h-screen">
            <span className={`${space.className}`}>Welcome, I'm</span>
            <h1>Alberto Rodríguez</h1>
            <h2>I build webs and mobile apps.</h2>
            <p >
                I'm a software developer based in Buenos Aires AR, specializing in building exceptional
                websites and mobile applications, and everything in between.
            </p>

            <button>Get In Touch</button>  {/* MAKE IN NEW COMPONENT */}
        </section>
    )
}
