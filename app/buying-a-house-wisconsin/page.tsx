'use client';

import { useState } from 'react';

export default function BuyersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.comments,
          formSource: 'buyers',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: '',
        });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
          Find Your Dream Home with Legendary Real Estate Services
        </h1>
          <p className="text-lg sm:text-xl text-black/70 font-serif max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            Buying a home is one of the most significant decisions you'll ever make. That's why we're here to guide you every step of the way, ensuring you find the perfect property and feel confident throughout the process.
          </p>
          <div className="w-16 h-px bg-[#890100] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Why Buy with Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Why Buy with Us?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-normal text-[#890100] mb-3 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Access to the Best Listings
              </h3>
              <p className="text-black/70 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                With our extensive network, you'll gain access to the most current and exclusive listings in South East Wisconsin.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-normal text-[#890100] mb-3 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Personalized Guidance
              </h3>
              <p className="text-black/70 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                Your needs come first. Whether it's location, budget, or specific features, we'll work tirelessly to match you with the right home.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-normal text-[#890100] mb-3 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Negotiation Experts
              </h3>
              <p className="text-black/70 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                Our team has the skills and experience to negotiate the best terms, ensuring you get the best value for your investment.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-normal text-[#890100] mb-3 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Local Knowledge
              </h3>
              <p className="text-black/70 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                We live and work in the South East Wisconsin area, giving us deep insights into neighborhoods, schools, and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Buying Process */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-8 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
              Our Buying Process
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center font-serif text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-serif font-normal mb-2 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                  Discovery Meeting
                </h3>
                <p className="text-white/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                  We'll learn about your goals, preferences, and budget.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center font-serif text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-serif font-normal mb-2 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                  Property Search
                </h3>
                <p className="text-white/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                  We'll curate a list of homes tailored to your needs and schedule showings at your convenience.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center font-serif text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif font-normal mb-2 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                  Making an Offer
                </h3>
                <p className="text-white/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                  Once you've found your dream home, we'll help you craft a competitive offer.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center font-serif text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif font-normal mb-2 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                  Closing
                </h3>
                <p className="text-white/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                  From inspections to final paperwork, we'll be by your side to ensure a smooth transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="w-16 h-px bg-[#890100] mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-lg text-black/70 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
              Let's start the journey to your dream home together.
            </p>
            <div className="w-16 h-px bg-[#890100] mx-auto mt-6"></div>
          </div>

          {isSubmitted ? (
            <div className="bg-white border border-black/10 p-12 text-center">
              <div className="w-16 h-16 border border-[#890100] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#890100]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                Thank You!
              </h3>
              <p className="text-base text-black/70 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                Your message has been received. We'll contact you soon to start your home buying journey.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em] uppercase" style={{ letterSpacing: '0.05em' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em] uppercase" style={{ letterSpacing: '0.05em' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em] uppercase" style={{ letterSpacing: '0.05em' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em] uppercase" style={{ letterSpacing: '0.05em' }}>
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif resize-none transition-colors duration-300"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                <p className="text-xs text-black/50 text-center mt-4 font-serif" style={{ letterSpacing: '0.05em' }}>
                  By clicking on submit you are agreeing to our terms of use and giving us expressed written consent to contact you
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
