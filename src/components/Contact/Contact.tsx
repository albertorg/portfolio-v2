import { Button, NumberedHeading } from "@/components"


export const Contact = () => {
  return (
    <section id="contact" className="max-w-[600px] text-center mb-24">
      <NumberedHeading title="What’s Next?" overline/>

      <h2 className="text-[clamp(36px,_5vw,_40px)] font-medium text-white leading-9 mb-3">
        Get In Touch
      </h2>

      <p>
        I&apos;m currently open to new opportunities and actively seeking job opportunities. My inbox is
        always open, so whether you have a question, collaboration proposal, or simply want to say 
        hi, feel free to reach out! I&apos;ll be sure to respond as soon as possible.
      </p>

      <div className="mt-10">
        <Button text="Say Hello" />
      </div>
    </section>
  )
}
