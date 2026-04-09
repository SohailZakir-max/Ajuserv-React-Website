import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

// Import hero slide images
import slide2 from "../assets/images/hero/slide-2.png";
import slide4 from "../assets/images/hero/slide-4.png";
import slide5 from "../assets/images/hero/slide-5.png";
import slide6 from "../assets/images/hero/slide-6.jpg";
import slide7 from "../assets/images/hero/slide-7.jpg";

export interface HeroItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  label: string;
  stats?: { value: string; label: string }[];
  highlights?: string[];
}

const defaultHeroItems: HeroItem[] = [
  // Stats/Company Overview Slide
  {
    id: 1,
    image: slide5,
    title: "Trusted by 100+ Enterprises Worldwide",
    subtitle: "Delivering AI-powered platforms and digital transformation solutions that drive measurable business impact",
    label: "Ajuserv",
    stats: [
      { value: "100+", label: "Enterprise Clients" },
      { value: "50+", label: "AI Solutions Deployed" },
      { value: "99.9%", label: "Platform Uptime" },
      { value: "24/7", label: "Support" },
    ],
  },
  // Product - Coursify
  {
    id: 2,
    image: slide2,
    title: "Coursify - AI-Enabled Smart Learning",
    subtitle: "Personalized learning paths with AI-driven recommendations, gamification, and real-time analytics for enterprise training",
    label: "Coursify",
    stats: [
      { value: "2x", label: "Learner Engagement" },
      { value: "40%", label: "Improved Completion" },
    ],
    highlights: ["AI-based Recommendations", "Gamification Tools", "Learning Analytics"],
  },
  // Product - Finlink
  {
    id: 3,
    image: slide6,
    title: "Finlink - Digital Lending Platform",
    subtitle: "AA-powered real-time financial data access with AI-driven underwriting and instant credit decisioning",
    label: "Finlink",
    stats: [
      { value: "10x", label: "Faster Approvals" },
      { value: "60%", label: "Reduced Processing" },
    ],
    highlights: ["AA-based Aggregation", "AI Credit Scoring", "Risk Analytics"],
  },
  // Product - Qualvo
  {
    id: 4,
    image: slide4,
    title: "Qualvo - Autonomous Testing Platform",
    subtitle: "AI-powered test automation with auto-generated test cases, self-healing scripts, and seamless CI/CD integration",
    label: "Qualvo",
    stats: [
      { value: "70%", label: "Reduced QA Effort" },
      { value: "3x", label: "Faster Releases" },
    ],
    highlights: ["Auto Test Generation", "Self-Healing Scripts", "CI/CD Integration"],
  },
  // Product - Facentra
  {
    id: 5,
    image: slide7,
    title: "Facentra - Workforce Management",
    subtitle: "Secure face recognition attendance with geofencing validation and real-time workforce tracking",
    label: "Facentra",
    stats: [
      { value: "100%", label: "Attendance Authenticity" },
      { value: "Real-time", label: "Workforce Visibility" },
    ],
    highlights: ["Face Recognition", "Geofencing", "Real-time Tracking"],
  },
  // Services Slide
  {
    id: 6,
    image: slide5,
    title: "Comprehensive Enterprise Services",
    subtitle: "End-to-end digital transformation with expert teams across technologies",
    label: "Services",
    highlights: ["AI & GenAI Solutions", "Data & Cloud Services", "Full Stack Development", "E-Learning & Staff Augmentation"],
  },
];

interface HeroProps {
  items?: HeroItem[];
  autoRotateInterval?: number;
  imageAlign?: "center" | "left";
}

export default function Hero({ items = defaultHeroItems, autoRotateInterval = 5000, imageAlign = "center" }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [items.length, autoRotateInterval, isPaused]);

  return (
    <section
      className={`hero ${imageAlign === "left" ? "hero--align-left" : ""}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero__accordion">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.id}
              className={`hero__panel ${isActive ? "hero__panel--active" : ""}`}
              onClick={() => setActiveIndex(index)}
              data-active={isActive}
            >
              <div
                className="hero__panel-image"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Expanded content */}
              <motion.div
                className="hero__panel-content"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
              >
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
                {item.stats && (
                  <div className="hero__panel-stats">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="hero__stat">
                        <span className="hero__stat-value">{stat.value}</span>
                        <span className="hero__stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                {item.highlights && (
                  <ul className="hero__panel-highlights">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </motion.div>

              {/* Collapsed label */}
              <motion.div
                className="hero__panel-label"
                initial={false}
                animate={{
                  opacity: isActive ? 0 : 1,
                }}
                transition={{ duration: 0.3, delay: isActive ? 0 : 0.2 }}
              >
                <span>{item.label}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
