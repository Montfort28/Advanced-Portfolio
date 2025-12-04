import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../utils/data';

const ContactNew: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  // Initialize EmailJS with proper error handling
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key not found in environment variables');
      return;
    }
    try {
      emailjs.init(publicKey);
      console.log('✓ EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!form.current) {
        throw new Error('Form reference not found');
      }

      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration in environment variables');
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      if (result.status === 200 && result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: "Message sent! I'll get back to you soon."
        });
        console.log('✓ Email sent successfully', result);

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(`Unexpected response: ${result.text}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('❌ Email submission failed:', errorMessage);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Try emailing me directly.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] py-20 md:py-32 section-rotate">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center animate-fadeInUp">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Got a project, an idea, or just want to chat about coffee and code? Let's talk.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Direct Contact</h3>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group block p-4 border border-white/10 rounded-lg hover:border-clay hover:bg-clay/5 transition-all duration-300"
                >
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-bold group-hover:text-clay transition-colors">
                    {personalInfo.email}
                  </p>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="group block p-4 border border-white/10 rounded-lg hover:border-clay hover:bg-clay/5 transition-all duration-300"
                >
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-bold group-hover:text-clay transition-colors">
                    {personalInfo.phone}
                  </p>
                </a>

                {/* Location */}
                <div className="p-4 border border-white/10 rounded-lg">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Based in</p>
                  <p className="text-white font-bold">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect</h3>
              <div className="space-y-2">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 border border-white/10 rounded-lg hover:border-clay transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-clay transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  <span className="text-white group-hover:text-clay transition-colors font-bold">GitHub</span>
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 border border-white/10 rounded-lg hover:border-clay transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-clay transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-white group-hover:text-clay transition-colors font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-slideInRight" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  submitStatus.success
                    ? 'bg-green-900/20 border-green-500/50'
                    : 'bg-red-900/20 border-red-500/50'
                }`}>
                  <p className={submitStatus.success ? 'text-green-200' : 'text-red-200'}>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-clay transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-clay transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-clay transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-clay transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-clay to-clay/80 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-clay/50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group overflow-hidden relative"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-ivory/0 to-ivory/30 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  {isSubmitting ? (
                    <span className="relative flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="relative">Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;
