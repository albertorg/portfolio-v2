import { About, Featured, Hero } from "@/components";

export default function HomePage() {
  return (
    <main className="max-w-4xl px-6 sm:px-10 lg:px-0 text-dynamicSm mx-auto [counter-reset:section]" >
      <Hero />
      <About />
      <Featured />
    </main>
  )
}
