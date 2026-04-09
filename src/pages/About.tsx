import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";
import "./About.scss";

const values = [
  {
    title: "Innovation",
    description: "We push boundaries with AI-powered solutions that transform how businesses operate.",
    icon: "innovation"
  },
  {
    title: "Excellence",
    description: "We deliver enterprise-grade solutions with the highest standards of quality and reliability.",
    icon: "excellence"
  },
  {
    title: "Partnership",
    description: "We work closely with our clients to understand their unique challenges and goals.",
    icon: "partnership"
  },
  {
    title: "Impact",
    description: "We measure success by the tangible business outcomes we deliver for our clients.",
    icon: "impact"
  }
];

const stats = [
  { value: "100+", label: "Enterprise Clients" },
  { value: "50+", label: "AI Solutions Deployed" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "24/7", label: "Support Available" }
];

export default function About() {
  return (
    <div className="about-page">
      <SEO {...pageSEO.about} />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-hero__badge">About Us</span>
            <h1>AI-Powered Platforms. Enterprise-Scale Execution.</h1>
            <p className="about-hero__description">
              Ajuserv is a technology company specializing in AI-powered enterprise solutions.
              We help businesses transform their operations through intelligent automation,
              data-driven insights, and scalable digital platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section about-section--mission">
        <div className="about-section__container">
          <motion.div
            className="about-section__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="badge">Our Mission</span>
            <h2>Empowering Enterprises with Intelligent Technology</h2>
            <p className="about-section__subtitle">
              We believe in creating technology that solves real business problems.
              Our mission is to make enterprise-grade AI accessible, reliable, and impactful
              for organizations of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section about-section--values">
        <div className="about-section__container">
          <motion.div
            className="about-section__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="badge badge--primary">Our Values</span>
            <h2>What Drives Us</h2>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section about-section--stats">
        <div className="about-section__container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta__container">
          <motion.div
            className="about-cta__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our AI-powered solutions can help you achieve your goals.</p>
            <Link to="/contact" className="cta-button">
              Get in Touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
