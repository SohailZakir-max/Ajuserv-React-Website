import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const defaultSEO = {
  siteName: "Ajuserv",
  title: "Ajuserv - AI-Powered Enterprise Solutions & Digital Transformation",
  description:
    "Ajuserv delivers AI-powered enterprise platforms and digital transformation services. Explore our products Coursify, Finlink, Qualvo, Facentra and services including AI & GenAI, Data & Cloud, Full Stack Development.",
  keywords:
    "AI solutions, enterprise software, digital transformation, Ajuserv, Coursify, Finlink, Qualvo, Facentra, AI & GenAI, Data & Cloud, Full Stack Development, E-Learning, Low Code, No Code, Staff Augmentation, Cloud Migration, Machine Learning",
  image: "/images/logo.png",
  url: "https://ajuserv.com",
  type: "website",
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type,
  structuredData,
}: SEOProps) {
  const seoTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;
  const seoType = type || defaultSEO.type;

  // Default Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ajuserv",
    url: "https://ajuserv.com",
    logo: "https://ajuserv.com/images/logo.png",
    description: defaultSEO.description,
    sameAs: [
      "https://www.linkedin.com/company/ajuserv",
      "https://twitter.com/ajuserv",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Ajuserv" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoType} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Additional Structured Data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Export SEO data for different pages
export const pageSEO = {
  home: {
    title: undefined, // Uses default title
    description:
      "Ajuserv delivers AI-powered enterprise platforms and digital transformation services. Transform your business with our innovative solutions including Coursify, Finlink, Qualvo, and Facentra.",
    keywords:
      "AI solutions, enterprise software, digital transformation, Ajuserv, AI platforms, business automation, enterprise AI, digital innovation",
    url: "https://ajuserv.com",
  },
  platforms: {
    title: "Enterprise Products",
    description:
      "Explore Ajuserv's AI-powered enterprise products: Coursify (Smart Learning), Finlink (Digital Lending), Qualvo (Autonomous Testing), and Facentra (Workforce Management).",
    keywords:
      "Coursify, Finlink, Qualvo, Facentra, AI platforms, enterprise products, learning management, digital lending, test automation, workforce management",
    url: "https://ajuserv.com/platforms",
  },
  services: {
    title: "Our Services",
    description:
      "Comprehensive IT services including AI & GenAI, Data & Cloud, Full Stack Development, E-Learning, Infrastructure & Security, Low Code/No Code, and Staff Augmentation.",
    keywords:
      "AI services, GenAI, data engineering, cloud services, full stack development, e-learning solutions, IT security, low code, no code, staff augmentation",
    url: "https://ajuserv.com/services",
  },
  solutions: {
    title: "Solutions",
    description:
      "Industry-specific solutions powered by AI and digital transformation. Custom enterprise solutions for banking, education, healthcare, and more.",
    keywords:
      "enterprise solutions, industry solutions, AI solutions, digital solutions, custom software, business solutions",
    url: "https://ajuserv.com/solutions",
  },
  about: {
    title: "About Us",
    description:
      "Learn about Ajuserv - a technology company specializing in AI-powered enterprise solutions. Our mission is to empower enterprises with intelligent technology.",
    keywords:
      "about Ajuserv, AI company, enterprise technology, digital transformation company, tech company India",
    url: "https://ajuserv.com/about",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Ajuserv for AI-powered enterprise solutions and digital transformation services. Contact our team for consultations and inquiries.",
    keywords:
      "contact Ajuserv, AI consultation, enterprise solutions inquiry, digital transformation contact",
    url: "https://ajuserv.com/contact",
  },
  privacyPolicy: {
    title: "Privacy Policy",
    description:
      "Ajuserv's privacy policy - Learn how we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection, Ajuserv privacy",
    url: "https://ajuserv.com/privacy-policy",
  },
  termsOfService: {
    title: "Terms of Service",
    description:
      "Ajuserv's terms of service - Read our terms and conditions for using our services and platforms.",
    keywords: "terms of service, terms and conditions, Ajuserv terms",
    url: "https://ajuserv.com/terms-of-service",
  },
  // Product pages
  finlink: {
    title: "Finlink - AI-Powered Digital Lending Platform",
    description:
      "Finlink enables real-time financial data access, AI-driven underwriting, and instant credit decisioning using Account Aggregator ecosystem. 10x faster loan approvals.",
    keywords:
      "Finlink, digital lending, AI underwriting, credit scoring, loan automation, Account Aggregator, fintech platform",
    url: "https://ajuserv.com/platforms/finlink",
  },
  coursify: {
    title: "Coursify - AI-Enabled Smart Learning Platform",
    description:
      "Coursify delivers adaptive, AI-driven learning experiences with personalized paths, gamification, and real-time analytics. 2x learner engagement.",
    keywords:
      "Coursify, e-learning platform, AI learning, LMS, learning management system, adaptive learning, corporate training",
    url: "https://ajuserv.com/platforms/coursify",
  },
  qualvo: {
    title: "Qualvo - AI-Driven Autonomous Testing Platform",
    description:
      "Qualvo automates testing with AI-powered test generation and self-healing capabilities. 70% reduced QA effort and 3x faster releases.",
    keywords:
      "Qualvo, test automation, AI testing, QA automation, self-healing tests, regression testing, CI/CD testing",
    url: "https://ajuserv.com/platforms/Qualvo",
  },
  facentra: {
    title: "Facentra - Face Recognition Workforce Management",
    description:
      "Facentra provides secure, location-aware workforce management using face recognition and geofencing. 100% attendance authenticity.",
    keywords:
      "Facentra, face recognition, workforce management, attendance system, geofencing, employee tracking, biometric attendance",
    url: "https://ajuserv.com/platforms/facentra",
  },
  // Service pages
  fullstackDevelopment: {
    title: "Full Stack Development Services",
    description:
      "End-to-end web and mobile application development with React, Angular, Django, and React Native. Expert full stack developers for your projects.",
    keywords:
      "full stack development, React development, Angular development, Django, React Native, web development, mobile app development",
    url: "https://ajuserv.com/services/fullstack-development",
  },
  aiGenai: {
    title: "AI & GenAI Services",
    description:
      "Leverage cutting-edge AI and generative AI for automation, insights, and intelligent solutions. Machine learning, NLP, computer vision, and predictive analytics.",
    keywords:
      "AI services, GenAI, generative AI, machine learning, NLP, computer vision, predictive analytics, AI automation",
    url: "https://ajuserv.com/services/ai-genai",
  },
  dataCloud: {
    title: "Data & Cloud Services",
    description:
      "Modern data architecture and cloud solutions for scalable, secure operations. Data engineering, cloud migration, data lakes, and real-time analytics.",
    keywords:
      "data engineering, cloud services, cloud migration, data lakes, data warehouse, real-time analytics, AWS, Azure, GCP",
    url: "https://ajuserv.com/services/data-cloud",
  },
  infraSecurity: {
    title: "Infrastructure & Security Services",
    description:
      "Robust infrastructure and security solutions. DevSecOps, cloud security, compliance automation, and 24/7 monitoring.",
    keywords:
      "infrastructure services, IT security, DevSecOps, cloud security, compliance automation, cybersecurity, monitoring",
    url: "https://ajuserv.com/services/infra-security",
  },
  elearning: {
    title: "E-Learning Solutions",
    description:
      "Comprehensive digital learning solutions for employee training and education. LMS implementation, content development, and learning analytics.",
    keywords:
      "e-learning, LMS, learning management, corporate training, online learning, educational technology, content development",
    url: "https://ajuserv.com/services/elearning",
  },
  lowcodeNocode: {
    title: "Low Code / No Code Development",
    description:
      "Accelerate development with low-code platforms for rapid application delivery. Platform selection, app development, and integration services.",
    keywords:
      "low code, no code, rapid development, citizen development, Power Platform, OutSystems, Mendix",
    url: "https://ajuserv.com/services/lowcode-nocode",
  },
  workplaceTransformation: {
    title: "Workplace Transformation Services",
    description:
      "Modernize your workplace with digital tools and collaborative platforms. Microsoft 365, collaboration tools, and process automation.",
    keywords:
      "workplace transformation, Microsoft 365, digital workplace, collaboration tools, process automation, change management",
    url: "https://ajuserv.com/services/workplace-transformation",
  },
  staffAugmentation: {
    title: "Staff Augmentation Services",
    description:
      "Scale your teams with skilled IT professionals across technologies. Technical talent, project teams, and managed services.",
    keywords:
      "staff augmentation, IT staffing, technical talent, project teams, managed services, IT consulting",
    url: "https://ajuserv.com/services/staff-augmentation",
  },
};
