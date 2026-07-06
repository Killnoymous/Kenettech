import React from "react"
import { motion } from "framer-motion"
import { EyebrowLabel, SectionWrapper, PanelCard, StatBlock } from "../components/ui/design-system"

export const AboutPage: React.FC = () => {
  return (
    <SectionWrapper bgType="deep" className="pt-32 min-h-screen">
      <div className="container mx-auto flex flex-col gap-12">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col gap-3">
          <EyebrowLabel>WHO WE ARE</EyebrowLabel>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9] tracking-tight">
            Built by Engineers Who <span className="text-[#DA7B93] italic">Ship</span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} className="text-sm md:text-base text-[#A9BDBA] leading-relaxed max-w-2xl font-light">
          At Kenet Technologies, we build operational pipelines with structural integrity. We map neural models, construct robust frontends, and implement ledger automations engineered to scale reliably.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Founder 1 */}
          <PanelCard className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2F4454] border border-[#DA7B93] flex items-center justify-center font-display text-lg text-[#DA7B93] font-semibold select-none">
                A
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#F2EDE9]">Anmol</h4>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#DA7B93]">Principal Architect</span>
              </div>
            </div>
            <p className="text-xs text-[#A9BDBA] leading-relaxed font-light">
              Oversees neural networking schemas, real-time R3F visual components, and payment pipeline integrations.
            </p>
          </PanelCard>

          {/* Founder 2 */}
          <PanelCard className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2F4454] border border-[#DA7B93] flex items-center justify-center font-display text-lg text-[#DA7B93] font-semibold select-none">
                K
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#F2EDE9]">K. Sharma</h4>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#DA7B93]">Lead Developer</span>
              </div>
            </div>
            <p className="text-xs text-[#A9BDBA] leading-relaxed font-light">
              Drives workflow dispatch automation engines, semantic data parsing algorithms, and core cloud infrastructure deployments.
            </p>
          </PanelCard>
        </div>

        <div className="grid grid-cols-3 gap-6 border-t border-[#3E5A63]/60 pt-8 mt-6 max-w-2xl">
          <StatBlock number={2} caption="Core Founders" />
          <StatBlock number={2} caption="In-House Suite" />
          <StatBlock number={1} caption="HQ Delhi office" />
        </div>
      </div>
    </SectionWrapper>
  )
}
