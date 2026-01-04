import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle } from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

/**
 * ContactSection Component
 * Contact information and contact form for lead generation
 */
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div ref={sectionRef}>
      <SectionContainer id="contact" className="bg-bg-900">
        <SectionTitle accent="Touch">Get in </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Contact Cards */}
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              ),
              label: 'Email',
              value: 'hello@fubotics.com',
              action: 'mailto:hello@fubotics.com',
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                </svg>
              ),
              label: 'WhatsApp',
              value: 'Message Us',
              action: 'https://wa.me/919731289127',
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              ),
              label: 'LinkedIn',
              value: 'Connect with us',
              action: 'https://www.linkedin.com/company/fubotics/',
            },
          ].map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.action}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover:shadow-glass-lg cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="text-accent-200 text-sm font-semibold mb-1">
                      {contact.label}
                    </p>
                    <p className="text-accent-100 font-semibold group hover:text-accent-100 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-accent-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </motion.a>
          ))}
          <br/>
          <br/>

          {/* Company Address */}         
            <h3 className="text-accent-100 font-semibold mb-3 text-center text-2xl underline">Visit Us</h3>
            <address className="text-accent-200 not-italic leading-relaxed text-center">
              Fubotics Private Limited<br />
              Regus UB City, Level 15, Concorde Tower<br />
              No. 24, Vittal Mallya Road
              Bengaluru 560001, India
            </address>
          
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full">
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <svg className="w-16 h-16 text-accent-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-accent-100 mb-2">Thank You!</h3>
                <p className="text-accent-200 mb-4">
                  We have received your message and will get back to you soon.
                </p>
                <p className="text-sm text-accent-400">
                  Expected response time: 24 hours
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-text-primary text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 glass rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-accent-100 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 glass rounded-xl text-accent-100 placeholder-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-accent-100 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 glass rounded-xl text-accent-100 placeholder-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-accent-100 text-sm font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 glass rounded-xl text-accent-100 placeholder-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all"
                    placeholder="Your company"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-accent-100 text-sm font-semibold mb-2">
                    Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 glass rounded-xl text-accent-100 focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all [&>option]:text-bg-900 [&>option]:bg-accent-100"
                  >
                    <option value="">Select a service</option>
                    <option value="facade">Facade Cleaning Robots</option>
                    <option value="duct">Duct Cleaning Services</option>
                    <option value="both">Both Services</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-accent-100 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 glass rounded-xl text-accent-100 placeholder-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </SectionContainer>

    {/* Floating Recharge Button */}
    <a
      href="https://recharge.fubotics.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-48 right-10 z-40
        flex items-center gap-3
        bg-gradient-to-r from-accent-400 to-accent-300 text-bg-900
        px-6 py-4 rounded-lg
        shadow-lg hover:shadow-glow-tan-lg
        transition-all duration-500
        hover:scale-105
        group
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-6 h-6 group-hover:animate-pulse"
      >
        <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path>
        <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path>
        <path d="m11 7-3 5h4l-3 5"></path>
        <line x1="22" x2="22" y1="11" y2="13"></line>
      </svg>
      <div>
        <div className="font-semibold">Recharge</div>
        <div className="text-sm opacity-90">Power up your robots</div>
      </div>
    </a>
  </div>
  );
};

export default ContactSection;
