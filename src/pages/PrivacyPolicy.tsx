import { motion } from "framer-motion";
import SEO, { pageSEO } from "../components/SEO";
import "./Legal.scss";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <SEO {...pageSEO.privacyPolicy} />
      <section className="legal-hero">
        <div className="legal-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Privacy Policy</h1>
            <p className="legal-hero__date">Last Updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-content__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>1. Introduction</h2>
            <p>
              At Ajuserv, protecting your privacy is a top priority. This
              Privacy Policy explains how your information is collected, used,
              disclosed, and safeguarded when you visit our website, use our
              platforms including Coursify, Finlink, Qualvo, and Facentra, or
              engage with any of our services.
            </p>
            <p>
              By accessing or using our services, you agree to this Privacy
              Policy. If you do not agree with the terms outlined here, please
              do not access our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us, including:
            </p>
            <ul>
              <li>
                Name and contact information (email address, phone number,
                address)
              </li>
              <li>Business information (company name, job title, industry)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you access our services, we may automatically collect:</p>
            <ul>
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Location data (based on IP address)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3>2.3 Platform-Specific Data</h3>
            <p>Depending on the platform you use:</p>
            <ul>
              <li>
                <strong>Coursify:</strong> Learning progress, course
                completions, assessment results
              </li>
              <li>
                <strong>Finlink:</strong> Financial data as authorized through
                Account Aggregator framework
              </li>
              <li>
                <strong>Qualvo:</strong> Testing configurations, automation
                scripts, test results
              </li>
              <li>
                <strong>Facentra:</strong> Biometric data (facial recognition),
                attendance records, location data
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Providing, operating, and maintaining our services</li>
              <li>Improving, personalizing, and expanding our services</li>
              <li>Understanding and analyzing how you use our services</li>
              <li>
                Developing new products, services, features, and functionality
              </li>
              <li>Communicating with you for customer service and support</li>
              <li>
                Sending you updates, marketing communications, and promotional
                materials
              </li>
              <li>Processing transactions and sending related information</li>
              <li>
                Detecting, preventing, and addressing technical issues and
                security threats
              </li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                assist in operating our services
              </li>
              <li>
                <strong>Business Partners:</strong> Partners with whom we
                jointly offer products or services
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with mergers,
                acquisitions, or asset sales
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy, unless a longer
              retention period is required or permitted by law. When data is no
              longer needed, we securely delete or anonymize it.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Restrict or object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@ajuserv.com">privacy@ajuserv.com</a>.
            </p>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect and
              track information about your browsing activities. You can control
              cookies through your browser settings, but disabling cookies may
              limit your ability to use certain features of our services.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our services may contain links to third-party websites or
              services. We are not responsible for the privacy practices of
              these third parties. We encourage you to read their privacy
              policies before providing any personal information.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>

            <h2>11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your country of residence. We ensure appropriate
              safeguards are in place to protect your information in accordance
              with applicable data protection laws.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date. We encourage you
              to review this policy periodically.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <div className="legal-contact">
              <p>
                <strong>Ajuserv</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@ajuserv.com">privacy@ajuserv.com</a>
              </p>
              <p>Address: Hyderabad, India</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
