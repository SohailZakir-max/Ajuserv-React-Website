import Hero from "../sections/Hero";
import ExploreSection from "../sections/ExploreSection";
import WhySection from "../sections/WhySection";
import ClientsSection from "../sections/ClientsSection";
import GallerySection from "../sections/GallerySection";
import CTA from "../sections/CTA";
import Chatbot from "../components/Chatbot";
import SEO, { pageSEO } from "../components/SEO";

export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ajuserv",
    url: "https://ajuserv.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ajuserv.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SEO {...pageSEO.home} structuredData={homeStructuredData} />
      <Hero />
      <ExploreSection />
      <WhySection />
      <ClientsSection />
      <GallerySection />
      <CTA />
      <Chatbot />
    </>
  );
}
