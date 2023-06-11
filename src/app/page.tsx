import { About, Contact, Featured, Hero, Projects } from "@/components";
import { jsonLd } from "@/data";
import Script from "next/script";

export default function HomePage() {
  
  return (
    <main className="max-w-4xl px-6 sm:px-10 lg:px-0 text-dynamicSm mx-auto [counter-reset:section]" >
      <Script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </main>
  )
}
