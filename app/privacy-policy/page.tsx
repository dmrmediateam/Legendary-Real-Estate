import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Legendary Real Estate Services',
  description: 'Our commitment to protecting your privacy and personal information. Learn how we collect, use, and safeguard your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-black/70 font-serif max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-black/50 font-serif mt-4" style={{ letterSpacing: '0.02em' }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="w-16 h-px bg-[#890100] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-12 text-black/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Introduction
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Welcome to Legendary Real Estate Services. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-base leading-relaxed">
                By using this website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Information We Collect
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect via our website includes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Personal Data:</span> When you submit a contact form, request a home valuation, or sign up for our newsletter, we may collect personally identifiable information, such as your name, email address, phone number, mailing address, and property preferences.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Financial Information:</span> For mortgage calculations or pre-qualification inquiries, we may collect financial data necessary to provide accurate estimates and guidance.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Property Information:</span> Details about properties you are interested in buying or selling, including addresses, preferences, and timeline.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Derivative Data:</span> Information our servers automatically collect when you access our website, such as your IP address, browser type, operating system, access times, and pages viewed.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Cookies and Tracking Technologies:</span> We may use cookies, web beacons, and other tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts.
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  To provide, operate, and maintain our website and services
                </li>
                <li className="text-base leading-relaxed">
                  To respond to your inquiries, comments, and questions
                </li>
                <li className="text-base leading-relaxed">
                  To assist you in your real estate search, property valuation, or home selling process
                </li>
                <li className="text-base leading-relaxed">
                  To send you marketing communications, newsletters, and updates about our services (you may opt out at any time)
                </li>
                <li className="text-base leading-relaxed">
                  To improve our website functionality and user experience
                </li>
                <li className="text-base leading-relaxed">
                  To analyze usage trends and optimize our marketing strategies
                </li>
                <li className="text-base leading-relaxed">
                  To prevent fraud and enhance security
                </li>
                <li className="text-base leading-relaxed">
                  To comply with legal obligations and industry regulations
                </li>
              </ul>
            </div>

            {/* How We Protect Your Information */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                How We Protect Your Information
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. Your information is stored on secure servers and is only accessible by authorized personnel who are required to keep the information confidential.
              </p>
              <p className="text-base leading-relaxed">
                While we strive to use commercially acceptable means to protect your personal information, please be aware that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to protecting your data to the best of our ability.
              </p>
            </div>

            {/* Sharing and Disclosure */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Sharing and Disclosure of Information
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">With Your Consent:</span> We may disclose your information when you give us explicit permission to do so.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Service Providers:</span> We may share your information with third-party vendors who perform services on our behalf, such as email marketing platforms, analytics providers, and MLS databases.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Business Partners:</span> In connection with real estate transactions, we may share your information with mortgage lenders, home inspectors, title companies, and other professionals involved in the transaction.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </li>
              </ul>
            </div>

            {/* Third-Party Websites */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Third-Party Websites
              </h2>
              <p className="text-base leading-relaxed">
                Our website may contain links to third-party websites, including social media platforms, MLS listings, and partner services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Your Rights and Choices
              </h2>
              <p className="text-base leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Access and Update:</span> You may request access to the personal information we hold about you and request corrections or updates.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Opt-Out:</span> You may opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Delete Information:</span> You may request that we delete your personal information, subject to certain legal exceptions.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Cookies:</span> You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
                </li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Children's Privacy
              </h2>
              <p className="text-base leading-relaxed">
                Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Updates to This Privacy Policy
              </h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-black/10 p-8">
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Contact Us
              </h2>
              <p className="text-base leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-base">
                <p>
                  <span className="font-normal text-black">Legendary Real Estate Services</span>
                </p>
                <p>
                  <span className="font-normal text-black">Email:</span> info@legendaryrealestateservices.com<br />
                  <span className="font-normal text-black">Phone:</span> 262-204-5534
                </p>
                <p>
                  <span className="font-normal text-black">Office Address:</span><br />
                  487 W South St<br />
                  Lake Geneva, WI 53147
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
