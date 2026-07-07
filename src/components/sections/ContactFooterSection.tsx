import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { ChevronDown } from 'lucide-react';
import '../sections/ContactSection.css'; // For the matte animation

export function ContactFooterSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.privacy) {
      alert("Please fill in all required fields and agree to the privacy policy.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', privacy: false });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <footer id="contact" className="relative overflow-hidden contact-matte-bg">
      <div className="container px-4 md:px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10 pt-24 pb-12">
        
        {/* Top Contact Form Card */}
        <Reveal direction="up">
          <div className="bg-[#121212] rounded-[32px] p-8 md:p-16 lg:p-20 shadow-2xl flex flex-col lg:flex-row gap-16 lg:gap-24 border border-white/5 mb-32">
            
            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex flex-col">
              
              <div className="mb-6 inline-flex">
                <span className="px-4 py-1.5 rounded-full border border-[#f97316]/30 text-[#f97316] text-[14px] font-medium tracking-wide">
                  Contact Us
                </span>
              </div>

              <h2 className="text-[40px] md:text-[56px] font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
                Let's enhance your excellent enterprise with an amazing website
              </h2>

              <p className="text-[#a3a3a3] text-[16px] md:text-[18px] leading-relaxed mb-16 max-w-[90%]">
                For every prosperous enterprise, a proficient website is necessary, and I'm the expert for it. Contact me now, let's kick-start!
              </p>

              <div className="mt-auto">
                <p className="text-white text-[16px] mb-6">Also you can find me here:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6c1.05 0 2.04.1 2.28.14v2.7h-1.56c-1.24 0-1.5.59-1.5 1.48V12h3l-.4 3h-2.6v6.8C18.56 20.87 22 16.84 22 12z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.125 0 12 0 12s0 3.875.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.875 24 12 24 12s0-3.875-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column (Form) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[15px]">First name <span className="text-[#f97316]">*</span></label>
                    <input 
                      type="text" 
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                      className="bg-[#050505] border border-transparent focus:border-white/20 text-white px-4 py-3.5 rounded-lg outline-none transition-colors w-full placeholder:text-[#555]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[15px]">Last name <span className="text-[#f97316]">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                      className="bg-[#050505] border border-transparent focus:border-white/20 text-white px-4 py-3.5 rounded-lg outline-none transition-colors w-full placeholder:text-[#555]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-[15px]">Email <span className="text-[#f97316]">*</span></label>
                  <input 
                    type="email" 
                    placeholder="You@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-[#050505] border border-transparent focus:border-white/20 text-white px-4 py-3.5 rounded-lg outline-none transition-colors w-full placeholder:text-[#555]"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-[15px]">Phone number</label>
                  <div className="flex bg-[#050505] rounded-lg overflow-hidden border border-transparent focus-within:border-white/20 transition-colors">
                    <div className="flex items-center px-4 border-r border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
                      <span className="text-white text-[15px] mr-2">US</span>
                      <ChevronDown className="w-4 h-4 text-white/50" />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-transparent text-white px-4 py-3.5 w-full outline-none placeholder:text-[#555]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-white text-[15px]">Message <span className="text-[#f97316]">*</span></label>
                  <textarea 
                    placeholder="Leave us a message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="bg-[#050505] border border-transparent focus:border-white/20 text-white px-4 py-3.5 rounded-lg outline-none transition-colors w-full resize-y placeholder:text-[#555]"
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      id="privacy"
                      checked={formData.privacy}
                      onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                      required
                      className="appearance-none w-5 h-5 border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-[#f97316] checked:bg-[#f97316] checked:border-transparent transition-colors cursor-pointer"
                    />
                    <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 checkmark transition-opacity" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <label htmlFor="privacy" className="text-[#a3a3a3] text-[15px] cursor-pointer">
                    You agree to our friendly <a href="#" className="text-[#f97316] hover:underline">Privacy policy.</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white font-medium text-[16px] py-4 rounded-xl transition-all mt-2 ${
                    isSubmitted 
                      ? 'bg-green-500' 
                      : 'bg-gradient-to-r from-[#ec4899] to-[#f97316] hover:opacity-90'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'SENDING...' : isSubmitted ? 'MESSAGE SENT!' : 'SUBMIT'}
                </button>

              </form>
            </div>

          </div>
        </Reveal>

        {/* Minimal Bottom Footer */}
        <div className="flex flex-col items-center justify-center pt-8">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#ec4899] to-[#f97316] p-[1.5px] flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              <div className="w-full h-full bg-[#050505] rounded-[6.5px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3v18" />
                  <path d="M20 4 10 12l10 8" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[19px] font-display font-bold text-white tracking-tight leading-none mb-0.5">Kenet</span>
              <span className="text-[11px] font-medium text-white/50 tracking-widest leading-none uppercase">Technologies</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            <a href="#home" className="text-[#a3a3a3] hover:text-white transition-colors text-[15px] flex items-center">
              Home <span className="text-[#f97316] ml-6">•</span>
            </a>
            <a href="#about" className="text-[#a3a3a3] hover:text-white transition-colors text-[15px] flex items-center">
              About Us <span className="text-[#f97316] ml-6">•</span>
            </a>
            <a href="#services" className="text-[#a3a3a3] hover:text-white transition-colors text-[15px] flex items-center">
              Services <span className="text-[#f97316] ml-6">•</span>
            </a>
            <a href="#projects" className="text-[#a3a3a3] hover:text-white transition-colors text-[15px] flex items-center">
              Projects <span className="text-[#f97316] ml-6">•</span>
            </a>
            <a href="#contact" className="text-[#a3a3a3] hover:text-white transition-colors text-[15px]">
              Contact
            </a>
          </div>

          {/* Social Icons (Footer) */}
          <div className="flex space-x-4 mb-20">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6c1.05 0 2.04.1 2.28.14v2.7h-1.56c-1.24 0-1.5.59-1.5 1.48V12h3l-.4 3h-2.6v6.8C18.56 20.87 22 16.84 22 12z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#2a2a2a] transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.125 0 12 0 12s0 3.875.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.875 24 12 24 12s0-3.875-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between text-[13px] text-[#a3a3a3]">
            <span>Copyright &copy; {new Date().getFullYear()} Kenet Technologies, All rights reserved.</span>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
