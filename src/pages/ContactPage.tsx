import React, { useState } from "react"
import { EyebrowLabel, SectionWrapper, PanelCard } from "../components/ui/design-system"

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      console.log("Transmission Successful:", formData)
    }, 1500)
  }

  return (
    <SectionWrapper bgType="alt" className="pt-32 min-h-screen">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <EyebrowLabel>START A CONVERSATION</EyebrowLabel>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9] tracking-tight">
            Let's Build Something Reliable
          </h1>
          <p className="text-sm text-[#A9BDBA] leading-relaxed max-w-xl font-light">
            Have a custom systems architecture goal or interested in deploying one of our semantic pipelines? Contact our core desk to schedule a technical alignment briefing.
          </p>
          <div className="flex flex-col gap-6 mt-4 font-mono text-xs text-[#A9BDBA]">
            <div className="flex items-start gap-3">
              <span className="text-[#DA7B93] text-sm mt-0.5">✉</span>
              <div>
                <div className="text-[10px] text-[#DA7B93] uppercase tracking-[0.1em] font-semibold">EMAIL_ENDPOINT</div>
                <a href="mailto:hello@kenettechnologies.in" className="text-[#F2EDE9] hover:text-[#DA7B93] transition-colors mt-1 block">
                  hello@kenettechnologies.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#DA7B93] text-sm mt-0.5">☎</span>
              <div>
                <div className="text-[10px] text-[#DA7B93] uppercase tracking-[0.1em] font-semibold">TEL_ENDPOINT</div>
                <div className="text-[#F2EDE9] mt-1">+91 (11) 4920-0294</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#DA7B93] text-sm mt-0.5">⌖</span>
              <div>
                <div className="text-[10px] text-[#DA7B93] uppercase tracking-[0.1em] font-semibold">LOC_ENDPOINT</div>
                <div className="text-[#F2EDE9] mt-1">Delhi, India</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <PanelCard className="w-full">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#DA7B93] flex items-center justify-center text-[#DA7B93] font-mono text-xs">
                  OK
                </div>
                <h3 className="text-xl font-medium text-[#F2EDE9]">Transmission Successful</h3>
                <p className="text-xs text-[#A9BDBA] max-w-xs leading-relaxed font-light">
                  Your packet has been successfully sent to the Kenet console. Our desk will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: "", email: "", company: "", details: "" })
                  }}
                  className="mt-4 text-xs font-mono text-[#DA7B93] hover:underline uppercase"
                >
                  // SEND_ANOTHER_PACKET
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-1.5">
                  <EyebrowLabel>SENDER_IDENTITY</EyebrowLabel>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-10 px-3 border border-[#3E5A63] bg-[#2F4454] rounded-[3px] text-sm text-[#F2EDE9] placeholder-[#A9BDBA]/40 focus:outline-none focus:border-[#DA7B93] font-mono transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <EyebrowLabel>SENDER_EMAIL</EyebrowLabel>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-10 px-3 border border-[#3E5A63] bg-[#2F4454] rounded-[3px] text-sm text-[#F2EDE9] placeholder-[#A9BDBA]/40 focus:outline-none focus:border-[#DA7B93] font-mono transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <EyebrowLabel>COMPANY_ORG</EyebrowLabel>
                  <input
                    type="text"
                    placeholder="Enter company name (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-10 px-3 border border-[#3E5A63] bg-[#2F4454] rounded-[3px] text-sm text-[#F2EDE9] placeholder-[#A9BDBA]/40 focus:outline-none focus:border-[#DA7B93] font-mono transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <EyebrowLabel>PROJECT_SPECS</EyebrowLabel>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe system parameters and goals..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="p-3 border border-[#3E5A63] bg-[#2F4454] rounded-[3px] text-sm text-[#F2EDE9] placeholder-[#A9BDBA]/40 focus:outline-none focus:border-[#DA7B93] font-mono resize-none transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-10 border border-[#DA7B93] bg-[#DA7B93] text-[#1C3334] rounded-[3px] text-xs font-mono tracking-wider uppercase font-semibold hover:bg-transparent hover:text-[#DA7B93] transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed select-none"
                >
                  {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </PanelCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
