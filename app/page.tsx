import Hero from '@/components/Hero';
import SearchProperties from '@/components/SearchProperties';
import AboutStats from '@/components/AboutStats';
import MeetAgent from '@/components/MeetAgent';
import Communities from '@/components/Communities';
import MarketInsights from '@/components/MarketInsights';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';
import { getAllBlogPosts } from '@/data/blogPosts';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // Fetch blog posts for Market Insights section
  const blogPosts = await getAllBlogPosts();

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
      <MarketInsights posts={blogPosts} />

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
