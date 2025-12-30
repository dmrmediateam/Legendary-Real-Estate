import Hero from '@/components/Hero';
import SearchProperties from '@/components/SearchProperties';
import AboutStats from '@/components/AboutStats';
import MeetAgent from '@/components/MeetAgent';
import Communities from '@/components/Communities';
import MarketInsights from '@/components/MarketInsights';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Search Properties Section */}
      <SearchProperties />

      {/* About with Stats Section */}
      <AboutStats />

      {/* Meet Agent Section */}
      <MeetAgent />

      {/* Communities/Locations Section */}
      <Communities />

      {/* Market Insights Section */}
      <MarketInsights />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactForm />

      {/* Call to Action Section */}
      <CallToAction />

      {/* About with Stats Section */}
      {/* <AboutStats /> */}

      {/* Meet Agent Section */}
      {/* <MeetAgent /> */}

      {/* Communities/Locations Section */}
      {/* <Communities /> */}

      {/* Market Insights Section */}
      {/* <MarketInsights /> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Contact Section */}
      {/* <ContactForm /> */}

      {/* Call to Action Section */}
      {/* <CallToAction /> */}
    </div>
  );
}
