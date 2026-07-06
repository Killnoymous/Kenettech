import React, { useRef } from "react"
import { motion } from "framer-motion"
import {
  EyebrowLabel,
  SectionWrapper,
  PanelCard,
  StatBlock,
} from "../components/ui/design-system"
import KenetApertureResponsive from "../components/KenetApertureResponsive"
import { Text } from "@react-three/drei"

// --- Custom 3D Text Icons for Aperture centerContent ---
const AIChipIcon = (
  <Text color="#DA7B93" fontSize={0.4} material-toneMapped={false}>
    &lt;/&gt;
  </Text>
)

const WebLayersIcon = (
  <Text color="#DA7B93" fontSize={0.4} material-toneMapped={false}>
    ⬡
  </Text>
)

const GrowthChartIcon = (
  <Text color="#DA7B93" fontSize={0.4} material-toneMapped={false}>
    ↗
  </Text>
)

const NoteNetraCenterText = (
  <Text color="#DA7B93" fontSize={0.4} material-toneMapped={false}>
    98%
  </Text>
)

const NetraPayCenterText = (
  <Text color="#DA7B93" fontSize={0.4} material-toneMapped={false}>
    0.2s
  </Text>
)

interface HomePageProps {
  onNavigate: (page: string) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const sRef = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as any

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: "linear-gradient(160deg, #1C3334 0%, #2E151B 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-22" style={{ backgroundImage: "radial-gradient(#2F4454 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12 md:py-20">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-7 flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <EyebrowLabel>KENET TECHNOLOGIES — PRODUCT ENGINEERING</EyebrowLabel>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-display font-medium tracking-tight leading-[1.15] text-[#F2EDE9]">
              Solutions cut with <span className="text-[#DA7B93] italic">precision.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-sm md:text-base text-[#A9BDBA] max-w-xl leading-relaxed font-light">
              We design and construct high-performance AI frameworks, robust automation engines, and scalable digital products built to withstand industrial-grade enterprise demands.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mt-2">
              <button onClick={() => onNavigate("services")} className="h-11 px-6 text-xs font-mono tracking-wider uppercase border border-[#DA7B93] bg-[#DA7B93] text-[#1C3334] rounded-[3px] font-semibold hover:bg-transparent hover:text-[#DA7B93] transition-all duration-250 cursor-pointer">
                Explore Services
              </button>
              <button onClick={() => onNavigate("contact")} className="h-11 px-6 text-xs font-mono tracking-wider uppercase border border-[#3E5A63] hover:border-[#DA7B93] bg-transparent text-[#F2EDE9] hover:text-[#DA7B93] rounded-[3px] font-semibold transition-all duration-250 cursor-pointer">
                Get in Touch
              </button>
            </motion.div>
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#3E5A63] pt-6 mt-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#DA7B93]">HEADQUARTERS</span>
                <span className="font-display text-lg text-[#F2EDE9]">Delhi, India</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#DA7B93]">DISCIPLINE</span>
                <span className="font-display text-lg text-[#F2EDE9]">AI · Product Eng</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#DA7B93]">IN-HOUSE</span>
                <span className="font-display text-lg text-[#F2EDE9]">NoteNetra · NetraPay</span>
              </div>
            </motion.div>
          </motion.div>
          <div className="lg:col-span-5 h-[320px] md:h-[480px] w-full relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <KenetApertureResponsive openAmount={1} scale={2.4} size={420} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <SectionWrapper bgType="alt">
        <div className="container mx-auto flex flex-col gap-12" ref={sRef}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col gap-3 items-center text-center">
            <EyebrowLabel className="justify-center">WHAT WE DO</EyebrowLabel>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9] tracking-tight">Services</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PanelCard className="flex flex-col gap-6" onClick={() => onNavigate("services")}>
              <div className="h-[120px] w-full flex items-center justify-start relative overflow-hidden bg-[#1C3334]/40 border border-[#3E5A63] rounded">
                <KenetApertureResponsive openAmount={0.75} scale={1} size={140} centerLabel="</>" centerContent={AIChipIcon} />
              </div>
              <div>
                <h3 className="font-body font-semibold text-lg text-[#F2EDE9] mb-2">AI & Custom Software Solutions</h3>
                <p className="text-xs text-[#A9BDBA] leading-relaxed">Neural architectures and automated intelligence engines.</p>
              </div>
            </PanelCard>
            
            <PanelCard className="flex flex-col gap-6" onClick={() => onNavigate("services")}>
              <div className="h-[120px] w-full flex items-center justify-start relative overflow-hidden bg-[#1C3334]/40 border border-[#3E5A63] rounded">
                <KenetApertureResponsive openAmount={0.75} scale={1} size={140} centerLabel="⬡" centerContent={WebLayersIcon} />
              </div>
              <div>
                <h3 className="font-body font-semibold text-lg text-[#F2EDE9] mb-2">Web & App Development</h3>
                <p className="text-xs text-[#A9BDBA] leading-relaxed">Production-ready web frameworks and mobile apps.</p>
              </div>
            </PanelCard>
            
            <PanelCard className="flex flex-col gap-6" onClick={() => onNavigate("services")}>
              <div className="h-[120px] w-full flex items-center justify-start relative overflow-hidden bg-[#1C3334]/40 border border-[#3E5A63] rounded">
                <KenetApertureResponsive openAmount={0.75} scale={1} size={140} centerLabel="↗" centerContent={GrowthChartIcon} />
              </div>
              <div>
                <h3 className="font-body font-semibold text-lg text-[#F2EDE9] mb-2">Performance Marketing</h3>
                <p className="text-xs text-[#A9BDBA] leading-relaxed">Scaling user acquisition funnels via analytics telemetry.</p>
              </div>
            </PanelCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Products Teaser */}
      <SectionWrapper bgType="wine">
        <div className="container mx-auto flex flex-col gap-24">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col gap-3">
            <EyebrowLabel>IN-HOUSE PROJECTS</EyebrowLabel>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9] tracking-tight">Featured Products</h2>
          </motion.div>

          <div ref={p1Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className="text-4xl font-display font-medium text-[#F2EDE9]">NoteNetra</h3>
              <p className="text-sm text-[#C9A8AF] leading-relaxed max-w-xl font-light">
                AI-driven document processing and workflow automation platform for MSMEs. NoteNetra parses unstructured document pools and maps semantic connections.
              </p>
              <div className="flex gap-12 mt-2">
                <StatBlock number={98} suffix="%" caption="Precision Rate" />
                <StatBlock number={10} suffix="x" caption="Faster Retrieval" />
              </div>
              <button onClick={() => onNavigate("products")} className="font-mono text-xs uppercase text-[#DA7B93] hover:text-[#F2EDE9] transition-colors self-start mt-2">
                VISIT NOTENETRA.IN →
              </button>
            </div>
            <div className="lg:col-span-5 h-[280px] w-full flex items-center justify-center relative overflow-hidden bg-[#2F4454]/40 border border-[#3E5A63] rounded">
              <KenetApertureResponsive openAmount={0.85} scale={1.6} size={260} centerLabel="98%" centerContent={NoteNetraCenterText} />
            </div>
          </div>

          <div ref={p2Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 h-[280px] w-full flex items-center justify-center relative overflow-hidden bg-[#2F4454]/40 border border-[#3E5A63] rounded order-last lg:order-first">
              <KenetApertureResponsive openAmount={0.85} scale={1.6} size={260} centerLabel="0.2s" centerContent={NetraPayCenterText} />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className="text-4xl font-display font-medium text-[#F2EDE9]">NetraPay</h3>
              <p className="text-sm text-[#C9A8AF] leading-relaxed max-w-xl font-light">
                A spec-based visual payment solution built on Google's payment infrastructure. NetraPay streamlines transactional flows with precise verification algorithms.
              </p>
              <div className="flex gap-12 mt-2">
                <StatBlock number={0.2} suffix="s" caption="Verification Time" />
                <StatBlock number={100} suffix="%" caption="Ledger Accuracy" />
              </div>
              <button onClick={() => onNavigate("products")} className="font-mono text-xs uppercase text-[#DA7B93] hover:text-[#F2EDE9] transition-colors self-start mt-2">
                VISIT NETRAPAY.IN →
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Strip */}
      <section className="bg-[#1C3334] border-t border-[#3E5A63] py-16 relative overflow-hidden">
        <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-between gap-8 z-10">
          <div className="flex flex-col gap-3">
            <EyebrowLabel>START A CONVERSATION</EyebrowLabel>
            <h2 className="text-3xl font-display font-medium text-[#F2EDE9]">Let's build something <span className="text-[#DA7B93] italic">reliable</span>.</h2>
          </div>
          <button onClick={() => onNavigate("contact")} className="h-11 px-6 text-xs font-mono tracking-wider uppercase border border-[#DA7B93] bg-[#DA7B93] text-[#1C3334] rounded-[3px] font-semibold hover:bg-transparent hover:text-[#DA7B93] transition-all duration-250 cursor-pointer shadow-lg shadow-[#DA7B93]/10">
            Start a Conversation
          </button>
        </div>
      </section>
    </>
  )
}
