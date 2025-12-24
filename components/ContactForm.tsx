'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        body: JSON.stringify(formData),
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
          message: '',
        });
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="bg-white p-16 text-center max-w-md relative">
          {/* Pencil-thin borders */}
          <div className="absolute top-0 left-0 w-full h-[0.5px] bg-black/20"></div>
          <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-black/20"></div>
          <div className="absolute top-0 left-0 w-[0.5px] h-full bg-black/20"></div>
          <div className="absolute top-0 right-0 w-[0.5px] h-full bg-black/20"></div>
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 bg-[#890100] flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h3 className="text-4xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>Thank You</h3>
          <div className="w-16 h-[0.5px] bg-black/20 mx-auto mb-8"></div>
          <p className="text-black/60 text-sm leading-relaxed font-serif" style={{ letterSpacing: '0.02em' }}>
            Your message has been received. We'll get back to you soon.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <section ref={sectionRef} className="relative py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Minimal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="w-16 h-[0.5px] bg-[#890100] mx-auto mb-16"></div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal text-black mb-16 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Get In Touch
          </h2>
          <div className="w-16 h-[0.5px] bg-[#890100] mx-auto"></div>
        </motion.div>

        {/* Contact Section - Pencil Lines Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl mx-auto">
          
          {/* LEFT SIDE - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 lg:p-16 relative"
          >
            {/* Pencil-thin borders */}
            <div className="absolute top-0 left-0 w-full h-[0.5px] bg-black/20"></div>
            <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-black/20"></div>
            <div className="absolute top-0 left-0 w-[0.5px] h-full bg-black/20"></div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-serif font-normal mb-12 tracking-[0.05em] text-black"
              style={{ letterSpacing: '0.05em' }}
            >
              Contact <span className="text-[#890100]">Legendary</span>
            </motion.h3>
            
            {/* Contact Details */}
            <div className="space-y-12 mb-12">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="text-xs text-black/40 uppercase tracking-[0.2em] font-serif mb-3">Phone</div>
                <a href="tel:2622045534" className="text-2xl sm:text-3xl font-serif font-normal text-black hover:text-[#890100] transition-colors duration-300 block tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                  262-204-5534
                </a>
              </motion.div>

              {/* Office */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-xs text-black/40 uppercase tracking-[0.2em] font-serif mb-3">Office</div>
                <address className="text-lg sm:text-xl font-serif font-normal not-italic leading-relaxed text-black" style={{ letterSpacing: '0.02em' }}>
                  487 W South St<br />
                  Lake Geneva, WI 53147
                </address>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-8 border-t border-black/10"
            >
              <p className="text-black/50 leading-relaxed text-sm font-serif" style={{ letterSpacing: '0.02em' }}>
                We're dedicated to providing you with personalized service for all your real estate needs in <span className="text-[#890100]">Lake Geneva, Fontana, Salem, Burlington, Elkhorn, and Delavan</span>.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 lg:p-16 relative"
          >
            {/* Pencil-thin borders */}
            <div className="absolute top-0 right-0 w-full h-[0.5px] bg-black/20"></div>
            <div className="absolute bottom-0 right-0 w-full h-[0.5px] bg-black/20"></div>
            <div className="absolute top-0 right-0 w-[0.5px] h-full bg-black/20"></div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-serif font-normal text-black mb-12 tracking-[0.05em]"
              style={{ letterSpacing: '0.05em' }}
            >
              Send a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-black/50 mb-3 font-serif">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#890100] transition-all duration-300 font-serif text-black placeholder:text-black/30"
                  placeholder=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-black/50 mb-3 font-serif">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#890100] transition-all duration-300 font-serif text-black placeholder:text-black/30"
                  placeholder=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-black/50 mb-3 font-serif">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#890100] transition-all duration-300 font-serif text-black placeholder:text-black/30"
                  placeholder=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-black/50 mb-3 font-serif">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/20 focus:outline-none focus:border-[#890100] resize-none transition-all duration-300 font-serif text-black placeholder:text-black/30"
                  placeholder=""
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed py-4 border border-black/20 hover:border-[#890100] bg-transparent hover:bg-[#890100] text-black hover:text-white transition-all duration-500 font-serif tracking-[0.2em] uppercase text-xs"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
