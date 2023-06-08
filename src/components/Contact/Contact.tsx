import { Button, NumberedHeading } from "@/components"


export const Contact = () => {
  return (
    <section className="max-w-[600px] text-center">
      <NumberedHeading title="What’s Next?" overline/>

      <h2 className="text-[clamp(36px,_5vw,_40px)] font-medium text-white leading-9 mb-3">
        Get In Touch
      </h2>

      <p>
        Although I&apos;m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to
        you!
      </p>

      <div className="mt-10">
        <Button text="Say Hello" />
      </div>
    </section>
  )
}
