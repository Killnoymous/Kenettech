import React, { useRef } from "react"
import { motion } from "framer-motion"
import { EyebrowLabel, SectionWrapper, PanelCard } from "../components/ui/design-system"
import KenetApertureResponsive from "../components/KenetApertureResponsive"
import { Text } from "@react-three/drei"

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

export const ProductsPage: React.FC = () => {
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)

  return (
    <SectionWrapper bgType="wine" className="pt-32 min-h-screen">
      <div className="container mx-auto flex flex-col gap-24">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col gap-3">
          <EyebrowLabel>IN-HOUSE PROJECTS</EyebrowLabel>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9] tracking-tight">Products</h1>
        </motion.div>

        {/* Product 1: NoteNetra */}
        <div ref={p1Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-[#3E5A63]/30 pb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="lg:col-span-7 flex flex-col gap-6">
            <EyebrowLabel>FLAGSHIP PRODUCT</EyebrowLabel>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9]">NoteNetra</h3>
            <p className="text-sm text-[#C9A8AF] leading-relaxed max-w-xl font-light">
              AI-driven document processing and workflow automation platform for MSMEs. NoteNetra parses unstructured document pools, maps semantic connections, and automatically populates internal organizational workflow schemas.
            </p>
            <div className="flex flex-col gap-2.5 font-mono text-[11px] text-[#C9A8AF] mt-2">
              <div className="flex items-center gap-2"><span className="text-[#DA7B93] font-bold">✓</span><span>DISPATCH_AUTO: SCHEMATIC ROUTING</span></div>
              <div className="flex items-center gap-2"><span className="text-[#DA7B93] font-bold">✓</span><span>SEMANTIC_SEARCH: ARCHIVE PARSING</span></div>
              <div className="flex items-center gap-2"><span className="text-[#DA7B93] font-bold">✓</span><span>SECURE_EXPORTS: TYPE-SAFE SCHEMAS</span></div>
            </div>
            <a href="https://notenetra.in" target="_blank" rel="noopener noreferrer" className="h-10 px-5 text-xs font-mono tracking-wider uppercase border border-[#DA7B93] bg-[#DA7B93] text-[#1C3334] rounded-[3px] font-semibold hover:bg-transparent hover:text-[#DA7B93] transition-colors self-start mt-4 flex items-center justify-center">
              Visit NoteNetra.in →
            </a>
          </motion.div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="h-[280px] w-full flex items-center justify-center relative overflow-hidden bg-[#2F4454]/40 border border-[#3E5A63] rounded">
              <KenetApertureResponsive openAmount={0.85} scale={1.6} size={260} centerLabel="98%" centerContent={NoteNetraCenterText} />
            </div>
            <PanelCard className="h-[140px] flex flex-col justify-between p-4 bg-[#2F4454] border-[#3E5A63]">
              <EyebrowLabel>PRODUCT PREVIEW</EyebrowLabel>
              <div className="flex-1 flex items-center justify-center font-mono text-[9px] text-[#A9BDBA] tracking-[0.15em]">
                [ NOTENETRA_INTERFACE_RENDER_SLOT ]
              </div>
            </PanelCard>
          </div>
        </div>

        {/* Product 2: NetraPay */}
        <div ref={p2Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 order-last lg:order-first">
            <div className="h-[280px] w-full flex items-center justify-center relative overflow-hidden bg-[#2F4454]/40 border border-[#3E5A63] rounded">
              <KenetApertureResponsive openAmount={0.85} scale={1.6} size={260} centerLabel="0.2s" centerContent={NetraPayCenterText} />
            </div>
            <PanelCard className="h-[140px] flex flex-col justify-between p-4 bg-[#2F4454] border-[#3E5A63]">
              <EyebrowLabel>PRODUCT PREVIEW</EyebrowLabel>
              <div className="flex-1 flex items-center justify-center font-mono text-[9px] text-[#A9BDBA] tracking-[0.15em]">
                [ NETRAPAY_INTERFACE_RENDER_SLOT ]
              </div>
            </PanelCard>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="lg:col-span-7 flex flex-col gap-6">
            <EyebrowLabel>FEATURED PRODUCT</EyebrowLabel>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9]">NetraPay</h3>
            <p className="text-sm text-[#C9A8AF] leading-relaxed max-w-xl font-light">
              A spec-based visual payment solution built on Google's payment infrastructure. NetraPay streamlines transactional flows with precise verification algorithms.
            </p>
            <div className="flex flex-col gap-2.5 font-mono text-[11px] text-[#C9A8AF] mt-2">
              <div className="flex items-center gap-2"><span className="text-[#DA7B93] font-bold">✓</span><span>SPEC_MATCH: IMAGE-BASED MAPPING</span></div>
              <div className="flex items-center gap-2"><span className="text-[#DA7B93] font-bold">✓</span><span>GOOGLE_PAY_INFRA: CLOUD ROUTING</span></div>
              <div className="flex items-center gap-2"><span className="text-[#DA7B93] font-bold">✓</span><span>LEDGER_TRIGGER: SETTLEMENT LOOPS</span></div>
            </div>
            <button disabled className="h-10 px-5 text-xs font-mono tracking-wider uppercase border border-[#3E5A63] text-[#A9BDBA]/60 rounded-[3px] font-semibold cursor-not-allowed self-start mt-4">
              Access NetraPay System
            </button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
