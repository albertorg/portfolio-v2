import { About, Contact, Featured, Hero, Projects } from "@/components";
import { jsonOrganization } from "@/data";
import Script from "next/script";

export default function HomePage() {

  return (
    <main className="max-w-4xl px-6 sm:px-10 lg:px-0 text-dynamicSm mx-auto [counter-reset:section]" >
      {/* ---- Schema JSON ----- */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonOrganization) }}
      />

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVE3JGDRZM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZVE3JGDRZM');
        `}
      </Script>

      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </main>
  )
}
