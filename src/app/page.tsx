import Hero from "@/components/hero";
import JsonLd from "@/components/json-ld";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${site.url}/#person`,
              name: site.name,
              alternateName: "El-Hassan Benadardor",
              jobTitle: site.jobTitle,
              worksFor: { "@type": "Organization", name: site.employer },
              address: { "@type": "PostalAddress", addressLocality: site.location.city, addressCountry: site.location.countryCode },
              url: site.url,
              image: `${site.url}/me-character.png`,
              email: `mailto:${site.email}`,
              sameAs: [site.github, site.linkedin],
              knowsAbout: ["Laravel", "PHP", "React", "Next.js", "TypeScript", "Spring Boot", "Flutter", "Docker", "AWS"],
            },
            {
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              url: site.url,
              name: site.name,
              description: site.description,
              publisher: { "@id": `${site.url}/#person` },
            },
          ],
        }}
      />
      <Hero />
    </>
  );
}
