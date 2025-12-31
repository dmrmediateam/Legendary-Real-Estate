'use client';

import { useState } from 'react';

export default function HomeValuationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'WI',
    zipCode: '',
    propertyType: 'single-family',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('/api/home-valuation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit valuation request');
      }

      // Success!
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: 'WI',
          zipCode: '',
          propertyType: 'single-family',
          bedrooms: '',
          bathrooms: '',
          squareFeet: '',
          yearBuilt: '',
          message: '',
        });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert(error instanceof Error ? error.message : 'Failed to submit request. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-black/10 p-12 text-center">
          <div className="w-16 h-16 border border-[#890100] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#890100]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-normal text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Thank You!
          </h3>
          <p className="text-base text-black/70 mb-6 leading-relaxed font-serif" style={{ letterSpacing: '0.02em' }}>
            Your home valuation request has been received. We will review your property information and contact you within 24 hours with a comprehensive market analysis.
          </p>
          <p className="text-sm text-black/60 font-serif">
            Need immediate assistance? Call <a href="tel:2622045534" className="text-[#890100] hover:underline">262-204-5534</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white border border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Info Panel */}
          <div className="lg:col-span-1 bg-black text-white p-8 lg:p-10">
            <h3 className="text-2xl font-serif font-normal mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              What You'll Receive
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-sm mb-1 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>Accurate Market Value</h4>
                  <p className="text-xs text-white/70 font-serif" style={{ letterSpacing: '0.02em' }}>Comprehensive analysis based on recent comparable sales</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-sm mb-1 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>Market Trends Report</h4>
                  <p className="text-xs text-white/70 font-serif" style={{ letterSpacing: '0.02em' }}>Current market conditions in your neighborhood</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-sm mb-1 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>Pricing Strategy</h4>
                  <p className="text-xs text-white/70 font-serif" style={{ letterSpacing: '0.02em' }}>Expert recommendations for listing your home</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-sm mb-1 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>No Obligation</h4>
                  <p className="text-xs text-white/70 font-serif" style={{ letterSpacing: '0.02em' }}>Free consultation with no pressure or commitment</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-xs text-white/70 mb-4 font-serif" style={{ letterSpacing: '0.05em' }}>Questions? Contact us directly:</p>
              <div className="space-y-2 text-sm font-serif">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:2622045534" className="hover:text-[#890100] transition-colors duration-300">262-204-5534</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:info@legendaryrealestateservices.com" className="hover:text-[#890100] transition-colors duration-300 text-xs">info@legendaryrealestateservices.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-2 p-8 md:p-10">
            <h3 className="text-xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Property Information
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    Email Address *
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
                  <label htmlFor="phone" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label htmlFor="address" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street Address"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    State *
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif bg-white transition-colors duration-300"
                  >
                    <option value="WI">Wisconsin</option>
                    <option value="IL">Illinois</option>
                    <option value="MN">Minnesota</option>
                    <option value="MI">Michigan</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Property Details */}
              <div className="pt-6 border-t border-black/10">
                <h4 className="text-sm font-serif text-black mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>Property Details</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif bg-white transition-colors duration-300"
                    >
                      <option value="single-family">Single Family Home</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="multi-family">Multi-Family</option>
                      <option value="land">Land</option>
                      <option value="waterfront">Waterfront</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="yearBuilt" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                      Year Built
                    </label>
                    <input
                      type="number"
                      id="yearBuilt"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleChange}
                      placeholder="e.g., 2005"
                      className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label htmlFor="bedrooms" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="bathrooms" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      min="0"
                      step="0.5"
                      className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="squareFeet" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                      Square Feet
                    </label>
                    <input
                      type="number"
                      id="squareFeet"
                      name="squareFeet"
                      value={formData.squareFeet}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="message" className="block text-xs font-serif text-black/70 mb-2 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your property, recent upgrades, timeline, or any questions you have..."
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#890100] text-sm font-serif resize-none transition-colors duration-300"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white font-serif py-4 px-8 text-xs tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {isSubmitting ? 'Sending Request...' : 'Request Free Home Valuation'}
                </button>
                <p className="text-xs text-black/50 text-center mt-4 font-serif" style={{ letterSpacing: '0.05em' }}>
                  By submitting this form, you agree to be contacted by Legendary Real Estate Services regarding your property valuation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

