import { space } from "@/fonts"
import { Button } from "@/components"

export const Hero = () => {
    return (
        <section className="flex flex-col items-start justify-center min-h-screen">
            <span className={'text-primary mb-2 ml-1 font-space'}>
                Welcome, I'm
            </span>
            <h1 className="text-white mt-2 font-medium text-dynamicBig">
                Alberto Rodríguez
            </h1>
            <h2 className="text-primary mt-3 font-medium text-dynamicBig">
                I build webs and mobile apps.
            </h2>
            <p className="mt-6 mb-12 max-w-lg">
                I am a front-end developer focused on building websites and mobile applications that deliver 
                the best user experience and have a beautiful interface.
            </p>

            <Button text={'Get In Touch'}/>
        </section>
        
    )
}
