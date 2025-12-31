import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Legendary Real Estate Services',
  description: 'Our commitment to making our website accessible to all users. Learn about our accessibility features and how to request assistance.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Accessibility Statement
          </h1>
          <p className="text-lg text-black/70 font-serif max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            We are committed to ensuring digital accessibility for all people, including those with disabilities.
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
            {/* Our Commitment */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Our Commitment to Accessibility
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Legendary Real Estate Services is committed to ensuring that our website is accessible to everyone, including individuals with disabilities. We believe that all people should have equal access to real estate information and services, and we strive to provide an inclusive online experience for all visitors.
              </p>
              <p className="text-base leading-relaxed">
                We are continuously working to improve the accessibility and usability of our website to ensure that it meets or exceeds the requirements of applicable accessibility standards. This commitment reflects our dedication to serving all members of our community with dignity and respect.
              </p>
            </div>

            {/* Accessibility Standards */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Accessibility Standards
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines are internationally recognized standards for web accessibility and outline how to make web content more accessible to people with disabilities.
              </p>
              <p className="text-base leading-relaxed mb-4">
                We have implemented various accessibility features and best practices, including:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Semantic HTML:</span> Proper use of HTML elements to ensure content structure is clear and meaningful to assistive technologies.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Keyboard Navigation:</span> All interactive elements can be accessed and operated using a keyboard alone.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Alt Text:</span> Descriptive alternative text for images to convey information to screen reader users.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Color Contrast:</span> Sufficient color contrast between text and background to ensure readability.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Responsive Design:</span> Content that adapts to different screen sizes and can be zoomed without loss of functionality.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Clear Navigation:</span> Consistent and logical navigation structure throughout the website.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">Form Labels:</span> Clear labels and instructions for all form fields to assist users in completing tasks.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-normal text-black">ARIA Landmarks:</span> Use of ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility for dynamic content.
                </li>
              </ul>
            </div>

            {/* Assistive Technologies */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Assistive Technologies Compatibility
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Our website is designed to be compatible with a variety of assistive technologies, including:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Screen readers (such as JAWS, NVDA, and VoiceOver)
                </li>
                <li className="text-base leading-relaxed">
                  Screen magnification software
                </li>
                <li className="text-base leading-relaxed">
                  Speech recognition software
                </li>
                <li className="text-base leading-relaxed">
                  Keyboard-only navigation
                </li>
                <li className="text-base leading-relaxed">
                  Alternative input devices
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                We test our website with various assistive technologies to ensure the best possible experience for all users.
              </p>
            </div>

            {/* Ongoing Efforts */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Ongoing Accessibility Efforts
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Accessibility is an ongoing commitment. We continuously work to improve the accessibility of our website through:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Regular accessibility audits and testing with real users who have disabilities
                </li>
                <li className="text-base leading-relaxed">
                  Staying current with the latest accessibility guidelines and best practices
                </li>
                <li className="text-base leading-relaxed">
                  Training our team on accessibility principles and inclusive design
                </li>
                <li className="text-base leading-relaxed">
                  Incorporating accessibility considerations into all new features and updates
                </li>
                <li className="text-base leading-relaxed">
                  Responding promptly to accessibility feedback and reports from users
                </li>
              </ul>
            </div>

            {/* Known Limitations */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Known Limitations and Planned Improvements
              </h2>
              <p className="text-base leading-relaxed mb-4">
                While we strive for full accessibility, we acknowledge that some areas of our website may not yet be fully accessible. We are aware of the following limitations and are actively working to address them:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Some third-party content and embedded features (such as property listing widgets from external MLS providers) may not be fully accessible. We are working with our vendors to improve these elements.
                </li>
                <li className="text-base leading-relaxed">
                  Certain PDF documents may not be fully accessible. We are working to ensure all documents meet accessibility standards or provide accessible alternatives.
                </li>
                <li className="text-base leading-relaxed">
                  Some older property photos may lack comprehensive alternative text. We are systematically updating image descriptions across our site.
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                We are committed to resolving these issues and welcome your feedback to help us prioritize improvements.
              </p>
            </div>

            {/* Third-Party Content */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Third-Party Content
              </h2>
              <p className="text-base leading-relaxed">
                Our website may include links to third-party websites and services, including MLS listings, mortgage calculators, and social media platforms. While we strive to link only to accessible resources, we cannot guarantee the accessibility of external websites. If you encounter accessibility issues with linked content, please contact us, and we will work to provide an accessible alternative when possible.
              </p>
            </div>

            {/* Accessibility Assistance */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Accessibility Assistance
              </h2>
              <p className="text-base leading-relaxed mb-4">
                If you need assistance accessing any content on our website or require information in an alternative format, please don't hesitate to reach out. We are here to help and will work with you to provide the information or services you need in a format that works for you.
              </p>
              <p className="text-base leading-relaxed">
                Alternative formats may include large print, audio, accessible electronic formats, or other accommodations based on your specific needs. We will respond to all accessibility requests as quickly as possible, typically within 2-3 business days.
              </p>
            </div>

            {/* Feedback */}
            <div>
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Feedback and Reporting
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers, have suggestions for improvement, or need assistance, please let us know. Your input helps us identify areas for improvement and better serve all members of our community.
              </p>
              <p className="text-base leading-relaxed">
                When reporting an accessibility issue, please include:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="text-base leading-relaxed">
                  The specific page or feature you were trying to access
                </li>
                <li className="text-base leading-relaxed">
                  A description of the problem you encountered
                </li>
                <li className="text-base leading-relaxed">
                  The assistive technology you were using (if applicable)
                </li>
                <li className="text-base leading-relaxed">
                  Your contact information so we can follow up with you
                </li>
              </ul>
              <p className="text-base leading-relaxed">
                We take all accessibility feedback seriously and will work to address reported issues promptly.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-black/10 p-8">
              <h2 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Contact Us About Accessibility
              </h2>
              <p className="text-base leading-relaxed mb-4">
                For accessibility assistance, to report an accessibility issue, or to request information in an alternative format, please contact us:
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
                <p className="text-sm text-black/60 mt-4">
                  We will respond to accessibility inquiries within 2-3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
