import { space } from "@/fonts"
import { Button } from "@/components"
// import { Button } from "../Button/Button"


export const Hero = () => {
    return (
        <section className="flex flex-col items-start justify-center min-h-screen">
            <span className={`${space.className} text-primary mb-2 ml-1`}>
                Welcome, I'm
            </span>
            <h1 className="text-white mt-2 font-medium text-dynamicBig">
                Alberto Rodríguez
            </h1>
            <h2 className="text-primary mt-3 font-medium text-dynamicBig">
                I build webs and mobile apps.
            </h2>
            <p className="mt-6 mb-12 max-w-lg">
                I'm a software developer based in Buenos Aires AR, specializing in building exceptional
                websites and mobile applications, and everything in between.
            </p>

            <Button text={'Get In Touch'}/>
        </section>
        
    )
}
