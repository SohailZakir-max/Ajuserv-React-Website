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
}

const defaultHeroItems: HeroItem[] = [
  {
    id: 1,
    image: slide5,
    title: "AI-Powered Platforms",
    subtitle: "Transform your business with intelligent automation",
    label: "AI",
  },
  {
    id: 2,
    image: slide2,
    title: "Enterprise Solutions",
    subtitle: "Scalable platforms built for growth",
    label: "Enterprise",
  },
  {
    id: 3,
    image: slide6,
    title: "Digital Innovation",
    subtitle: "From idea to production, faster than ever",
    label: "Innovation",
  },
  {
    id: 4,
    image: slide4,
    title: "Smart Learning",
    subtitle: "AI-driven personalized learning experiences",
    label: "Digital",
  },
  {
    id: 5,
    image: slide7,
    title: "Cloud Solutions",
    subtitle: "Secure, location-aware tracking solutions",
    label: "Cloud",
  },
];

interface HeroProps {
  items?: HeroItem[];
  autoRotateInterval?: number;
  imageAlign?: "center" | "left"; // left = cuts from right side
}

export default function Hero({ items = defaultHeroItems, autoRotateInterval = 5000, imageAlign = "center" }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [items.length, autoRotateInterval, isPaused]);

  const heroItems = items;

  return (
    <section
      className={`hero ${imageAlign === "left" ? "hero--align-left" : ""}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero__accordion">
        {heroItems.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.id}
              className={`hero__panel ${isActive ? "hero__panel--active" : ""}`}
              onClick={() => setActiveIndex(index)}
              initial={false}
              animate={{
                flex: isActive ? 4 : 0.5,
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
              </motion.div>

              {/* Collapsed vertical label */}
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
