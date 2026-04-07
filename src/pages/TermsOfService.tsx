import { motion } from "framer-motion";
import "./Legal.scss";

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Terms of Service</h1>
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to Ajuserv. By accessing or using our website, platforms (Coursify, Finlink, Qualev, Facentra), and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Ajuserv. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
            </p>

            <h2>2. Description of Services</h2>
            <p>Ajuserv provides AI-powered enterprise solutions, including:</p>
            <ul>
              <li><strong>Coursify:</strong> AI-driven learning management and e-learning platform</li>
              <li><strong>Finlink:</strong> Digital lending platform with Account Aggregator integration</li>
              <li><strong>Qualev:</strong> Autonomous AI-powered software testing platform</li>
              <li><strong>Facentra:</strong> Face recognition-based workforce management system</li>
              <li><strong>Custom Development Services:</strong> Full-stack development, AI/GenAI solutions, data & cloud services, and more</li>
            </ul>

            <h2>3. User Accounts</h2>
            <h3>3.1 Account Registration</h3>
            <p>
              To access certain features of our services, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary.
            </p>

            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3>3.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account at any time for any reason, including violation of these Terms or if we believe your actions may cause legal liability for you, other users, or Ajuserv.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Reverse engineer, decompile, or disassemble any part of our services</li>
              <li>Use our services to send spam or unsolicited communications</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Collect or harvest user data without authorization</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <h3>5.1 Our Intellectual Property</h3>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, software, and underlying code, are the exclusive property of Ajuserv or its licensors and are protected by intellectual property laws.
            </p>

            <h3>5.2 License to Use</h3>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your internal business purposes. This license does not include the right to sublicense, modify, distribute, or create derivative works.
            </p>

            <h3>5.3 Your Content</h3>
            <p>
              You retain ownership of any content you submit or upload to our services. By submitting content, you grant us a worldwide, royalty-free license to use, store, and process such content solely for the purpose of providing our services.
            </p>

            <h2>6. Platform-Specific Terms</h2>
            <h3>6.1 Coursify</h3>
            <p>
              Users of Coursify agree to use the platform solely for legitimate educational purposes. Course content and materials are subject to separate licensing terms. Certificates issued through Coursify are valid only when verified through our official verification system.
            </p>

            <h3>6.2 Finlink</h3>
            <p>
              Finlink operates in compliance with applicable financial regulations and the Account Aggregator framework. Users must provide accurate financial information and consent to data sharing as required for lending decisions. Finlink does not guarantee loan approval.
            </p>

            <h3>6.3 Qualev</h3>
            <p>
              Users are responsible for ensuring that automated tests do not adversely affect target systems. Qualev should only be used on systems you have authorization to test. Test results and configurations are confidential to each user account.
            </p>

            <h3>6.4 Facentra</h3>
            <p>
              Use of biometric data through Facentra is subject to applicable privacy laws and requires appropriate consent from individuals whose data is collected. Organizations are responsible for implementing proper data protection measures.
            </p>

            <h2>7. Payment Terms</h2>
            <h3>7.1 Fees</h3>
            <p>
              Certain services may require payment of fees. All fees are quoted in the currency specified at the time of purchase and are exclusive of applicable taxes unless otherwise stated.
            </p>

            <h3>7.2 Payment Processing</h3>
            <p>
              Payments are processed through secure third-party payment processors. We do not store complete payment card information on our servers.
            </p>

            <h3>7.3 Refunds</h3>
            <p>
              Refund policies vary by service and are specified in the applicable service agreement or order form. Generally, fees for professional services rendered are non-refundable.
            </p>

            <h2>8. Service Level and Support</h2>
            <p>
              We strive to maintain 99.9% platform uptime and provide 24/7 support for enterprise customers. Specific service level commitments are detailed in individual service agreements.
            </p>

            <h2>9. Disclaimers</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that our services will be uninterrupted, error-free, or secure. We are not responsible for any damages resulting from your use of or inability to use our services.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AJUSERV SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
            </p>
            <p>
              Our total liability for any claims arising under these Terms shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Ajuserv and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to your use of our services, violation of these Terms, or infringement of any third-party rights.
            </p>

            <h2>12. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or confidential information exchanged in connection with the services. This obligation shall survive termination of these Terms.
            </p>

            <h2>13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be resolved through binding arbitration in Hyderabad, India, in accordance with applicable arbitration rules.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any applicable service agreements, constitute the entire agreement between you and Ajuserv regarding the use of our services.
            </p>

            <h2>16. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us at:</p>
            <div className="legal-contact">
              <p><strong>Ajuserv</strong></p>
              <p>Email: <a href="mailto:legal@ajuserv.com">legal@ajuserv.com</a></p>
              <p>Address: Hyderabad, India</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
