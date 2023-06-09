import { Organization, Person, WithContext } from "schema-dts";

export const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alberto Rodríguez García",
    "jobTitle": "Web & Mobile Developer",
    "url": "https://albertorodriguez.link/",
    "sameAs": [
        "https://www.linkedin.com/in/alberto-rodriguez-0b2441218",
        "https://github.com/albertorg",
        "https://twitter.com/ticoc911"
    ],
    "image": "https://albertorodriguez.link/perfil.jpg",
    "description": "I am a front-end developer focused on building websites and mobile applications that deliver the best user experience and have a beautiful interface.",
    "email": "ticoc911@gmail.com",
    "telephone": "+39-331-422-8403",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Milan",
        "addressCountry": "Italy"
    },
    "worksFor": {
        "@type": "Organization",
        "name": "Freelancer",
        "url": "https://albertorodriguez.link/"
    },
    "knowsAbout": [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js"
    ]
}

export const jsonOrganization: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alberto Rodríguez García",
    "funder": "Alberto Rodríguez García",
    "url": "https://albertoridriguez.link/",
    "logo": "https://albertoridriguez.link/logo1.png",
    "description": "I am a front-end developer focused on building websites and mobile applications that deliver the best user experience and have a beautiful interface.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Milan",
        "addressCountry": "Italy"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+39-331-422-8403",
        "email": "ticoc911@gmail.com"
    },
    "sameAs": [
        "https://www.linkedin.com/in/alberto-rodriguez-0b2441218",
        "https://github.com/albertorg",
        "https://twitter.com/ticoc911"
    ],
    "knowsAbout": [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js"
    ]
}