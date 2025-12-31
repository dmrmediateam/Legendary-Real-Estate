import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Legendary Real Estate Services',
  description: 'Terms and conditions for using our website and services. Please review these terms before using our real estate services.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Terms & Conditions
          </h1>
          <p className="text-lg text-black/70 font-serif max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            Please read these terms and conditions carefully before using our website and services.
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
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Acceptance of Terms
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Welcome to Legendary Real Estate Services ("we," "us," or "our"). By accessing or using this website, you agree to be bound by these Terms and Conditions ("Terms"). These Terms govern your use of our website and the services we provide.
              </p>
              <p className="text-base leading-relaxed">
                If you do not agree to these Terms, please do not use our website. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting. Your continued use of the website following any changes indicates your acceptance of the new Terms.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Use of Website
              </h2>
              <p className="text-base leading-relaxed mb-4">
                You may use this website for lawful purposes only. You agree not to use this website:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  In any way that violates any applicable federal, state, local, or international law or regulation
                </li>
                <li className="text-base leading-relaxed">
                  To transmit, or procure the sending of, any advertising or promotional material without our prior written consent
                </li>
                <li className="text-base leading-relaxed">
                  To impersonate or attempt to impersonate us, our employees, another user, or any other person or entity
                </li>
                <li className="text-base leading-relaxed">
                  To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website
                </li>
                <li className="text-base leading-relaxed">
                  To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful
                </li>
                <li className="text-base leading-relaxed">
                  To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the website
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Intellectual Property and Website Content
              </h2>
              <p className="text-base leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Legendary Real Estate Services or their respective licensors and is protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-base leading-relaxed mb-4">
                You may view, download, and print content from this website for your personal, non-commercial use only. You may not:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Modify, copy, distribute, transmit, display, reproduce, publish, license, or create derivative works from any content on this website
                </li>
                <li className="text-base leading-relaxed">
                  Use any content for commercial purposes without our express written consent
                </li>
                <li className="text-base leading-relaxed">
                  Remove any copyright, trademark, or other proprietary notices from the content
                </li>
              </ul>
            </div>

            {/* Property Listings */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Property Listings and Information Accuracy
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Property listings and information displayed on this website are provided for informational purposes only and are believed to be accurate but are not guaranteed. Property information may be sourced from Multiple Listing Services (MLS), public records, and other third-party sources.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <span className="font-normal text-black">Important Disclaimers:</span>
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Property information is subject to change without notice and may become outdated or inaccurate
                </li>
                <li className="text-base leading-relaxed">
                  All property details, including but not limited to square footage, lot size, room dimensions, and amenities, should be independently verified
                </li>
                <li className="text-base leading-relaxed">
                  Photos may not reflect the current condition of the property or may show model units or staged homes
                </li>
                <li className="text-base leading-relaxed">
                  Pricing, availability, and terms are subject to change and require confirmation
                </li>
                <li className="text-base leading-relaxed">
                  Property boundaries and lot sizes should be verified through a professional survey
                </li>
                <li className="text-base leading-relaxed">
                  School district information, tax assessments, and zoning details should be confirmed with appropriate authorities
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                This website does not constitute an offer to sell or a solicitation of an offer to buy any real estate. All real estate transactions are subject to formal contracts, inspections, financing, and other contingencies.
              </p>
            </div>

            {/* MLS and IDX */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                MLS and IDX Data
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Some property data displayed on this website is provided through the Internet Data Exchange (IDX) program of Metro MLS – Milwaukee and Wisconsin Real Estate Exchange (WIREX). This data is deemed reliable but is not guaranteed.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Users of this data are hereby notified that:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  The data may be used only for consumers' personal, non-commercial use
                </li>
                <li className="text-base leading-relaxed">
                  The data may not be used for any purpose other than to identify prospective properties for purchase
                </li>
                <li className="text-base leading-relaxed">
                  IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties
                </li>
                <li className="text-base leading-relaxed">
                  Any reproduction or distribution of IDX data is strictly prohibited
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Listings marked as IDX are held by brokerage firms other than Legendary Real Estate Services. Copyright and ownership remain with the respective MLS and listing brokers.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Third-Party Links and Services
              </h2>
              <p className="text-base leading-relaxed mb-4">
                This website may contain links to third-party websites and services that are not owned or controlled by us. These links are provided for your convenience only. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="text-base leading-relaxed">
                We do not endorse or make any representations about third-party websites or services. Your use of third-party websites is at your own risk, and you should review the terms and policies of any third-party sites you visit.
              </p>
            </div>

            {/* Professional Services */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Professional Services and Advice
              </h2>
              <p className="text-base leading-relaxed mb-4">
                The information provided on this website is for general informational purposes only and should not be considered professional advice. Nothing on this website constitutes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Legal, financial, tax, or investment advice
                </li>
                <li className="text-base leading-relaxed">
                  A substitute for professional consultation with qualified real estate, legal, financial, or tax advisors
                </li>
                <li className="text-base leading-relaxed">
                  A guarantee of specific results or outcomes in any real estate transaction
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Before making any real estate decisions, you should consult with appropriate professionals, including but not limited to real estate attorneys, home inspectors, mortgage lenders, financial advisors, and tax professionals.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed mb-4">
                To the fullest extent permitted by law, Legendary Real Estate Services shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or the services provided, including but not limited to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Errors or inaccuracies in property listings or information
                </li>
                <li className="text-base leading-relaxed">
                  Lost profits, revenues, or business opportunities
                </li>
                <li className="text-base leading-relaxed">
                  Loss of data or information
                </li>
                <li className="text-base leading-relaxed">
                  Any unauthorized access to or use of our servers and/or any personal information stored therein
                </li>
                <li className="text-base leading-relaxed">
                  Any interruption or cessation of transmission to or from our website
                </li>
                <li className="text-base leading-relaxed">
                  Any bugs, viruses, or similar issues transmitted to or through our website by any third party
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for certain damages. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Governing Law and Jurisdiction
              </h2>
              <p className="text-base leading-relaxed">
                These Terms and your use of this website shall be governed by and construed in accordance with the laws of the State of Wisconsin, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Walworth County, Wisconsin, for the resolution of any disputes arising out of or relating to these Terms or your use of the website.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-black/10 p-8">
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Questions About These Terms
              </h2>
              <p className="text-base leading-relaxed mb-4">
                If you have any questions, concerns, or comments about these Terms and Conditions, please contact us:
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
