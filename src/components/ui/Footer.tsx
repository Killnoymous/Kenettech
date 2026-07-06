import React from "react"
import { EyebrowLabel } from "./design-system"

interface FooterProps {
  onNavigate: (page: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C3334] border-t border-[#3E5A63] py-16 text-[#F2EDE9]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Block */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex flex-col gap-0.5 select-none">
            <span className="font-display text-lg font-semibold tracking-[0.05em] text-[#F2EDE9] leading-none">
              KENET
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#A9BDBA] uppercase leading-none">
              TECHNOLOGIES
            </span>
          </div>
          <p className="text-xs text-[#A9BDBA] leading-relaxed max-w-sm font-light">
            AI solutions and high-performance product engineering. Built to hold.
          </p>
        </div>

        {/* Middle Links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <EyebrowLabel>SITE_MAP</EyebrowLabel>
            <div className="flex flex-col gap-2.5 text-xs text-[#A9BDBA]">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }} className="hover:text-[#DA7B93] transition-colors">Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("services"); }} className="hover:text-[#DA7B93] transition-colors">Services</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("products"); }} className="hover:text-[#DA7B93] transition-colors">Products</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("about"); }} className="hover:text-[#DA7B93] transition-colors">About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("contact"); }} className="hover:text-[#DA7B93] transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <EyebrowLabel>SUITE_LINKS</EyebrowLabel>
            <div className="flex flex-col gap-2.5 text-xs text-[#A9BDBA]">
              <a href="https://notenetra.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#DA7B93] transition-colors">NoteNetra</a>
              <a href="#" className="hover:text-[#DA7B93] transition-colors">NetraPay</a>
            </div>
          </div>
        </div>

        {/* Right Contact Info */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <EyebrowLabel>LOC_ENDPOINT</EyebrowLabel>
          <div className="flex flex-col gap-2 text-xs text-[#A9BDBA] font-mono leading-relaxed">
            <div>HQ: Delhi, India</div>
            <div>hello@kenettechnologies.in</div>
            <div>+91 (11) 4920-0294</div>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="container mx-auto border-t border-[#3E5A63] mt-12 pt-6 flex justify-between items-center text-[10px] font-mono text-[#A9BDBA]">
        <span>© {new Date().getFullYear()} KENET TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
        <span>SYS_STATUS_OK</span>
      </div>
    </footer>
  )
}
