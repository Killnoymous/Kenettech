import React, { useRef } from "react"
import { motion } from "framer-motion"
import { EyebrowLabel, SectionWrapper } from "../components/ui/design-system"
import KenetApertureResponsive from "../components/KenetApertureResponsive"

import { Text } from "@react-three/drei"

// --- Custom 3D Text Icons for Aperture centerContent ---
const AIChipIcon = (
  <Text color="#DA7B93" fontSize={0.6} material-toneMapped={false}>
    &lt;/&gt;
  </Text>
)

const WebLayersIcon = (
  <Text color="#DA7B93" fontSize={0.6} material-toneMapped={false}>
    ⬡
  </Text>
)

const GrowthChartIcon = (
  <Text color="#DA7B93" fontSize={0.6} material-toneMapped={false}>
    ↗
  </Text>
)

export const ServicesPage: React.FC = () => {
  const s1Ref = useRef(null)
  const s2Ref = useRef(null)
  const s3Ref = useRef(null)

  return (
    <SectionWrapper bgType="alt" className="pt-32">
      <div className="container mx-auto flex flex-col gap-20">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col gap-3">
          <EyebrowLabel>WHAT WE DO</EyebrowLabel>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-[#F2EDE9] tracking-tight">Services</h1>
        </motion.div>

        {/* Service 1 */}
        <div ref={s1Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-[#3E5A63]/30 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-[#F2EDE9]">AI & Custom Software Solutions</h3>
            <p className="text-sm text-[#A9BDBA] leading-relaxed max-w-xl font-light">
              We design, build, and deploy custom neural architectures, semantic vector retrieval pipelines, and automated intelligence engines that mesh seamlessly with enterprise legacy ecosystems.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[11px] text-[#DA7B93] mt-2">
              <div>// PIPELINE_BUILD: CUSTOM AI PIPELINES</div>
              <div>// SEMANTIC_PARSING: DOCUMENT SCHEMAS</div>
              <div>// INTEGRATION_AUTO: SYSTEM AGENTS</div>
            </div>
          </motion.div>
          <div className="lg:col-span-5 h-[280px] w-full flex items-center justify-center relative overflow-hidden bg-[#1C3334]/40 border border-[#3E5A63] rounded">
            <KenetApertureResponsive openAmount={0.75} scale={1} size={140} centerLabel="</>" centerContent={AIChipIcon} />
          </div>
        </div>

        {/* Service 2 */}
        <div ref={s2Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-[#3E5A63]/30 pb-16">
          <div className="lg:col-span-5 h-[280px] w-full flex items-center justify-center relative overflow-hidden bg-[#1C3334]/40 border border-[#3E5A63] rounded order-last lg:order-first">
            <KenetApertureResponsive openAmount={0.75} scale={1} size={140} centerLabel="⬡" centerContent={WebLayersIcon} />
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-[#F2EDE9]">Web & App Development</h3>
            <p className="text-sm text-[#A9BDBA] leading-relaxed max-w-xl font-light">
              We engineer production-ready, type-safe web frameworks and responsive mobile applications. Every release features micro-animations, scalable component APIs, and complies with absolute core web vitals.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[11px] text-[#DA7B93] mt-2">
              <div>// FRAMEWORK_ENG: MODULAR FRONTEND</div>
              <div>// MOBILE_SYSTEM: IOS & ANDROID APPS</div>
              <div>// INTERACTIVE_ANIM: MICRO-DYNAMICS</div>
            </div>
          </motion.div>
        </div>

        {/* Service 3 */}
        <div ref={s3Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-[#F2EDE9]">Performance Marketing & Growth</h3>
            <p className="text-sm text-[#A9BDBA] leading-relaxed max-w-xl font-light">
              We scale user acquisition funnels by matching analytics tools with real conversion feedback. Through strict dashboard telemetry and custom growth architectures, we align client engines with organic reach.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[11px] text-[#DA7B93] mt-2">
              <div>// AUDIT_CYCLE: CONVERSION FUNNELS</div>
              <div>// ACQUISITION_LOOP: GROWTH CHANNELS</div>
              <div>// METRIC_ATTRIB: ANALYTICS INTEGRATION</div>
            </div>
          </motion.div>
          <div className="lg:col-span-5 h-[280px] w-full flex items-center justify-center relative overflow-hidden bg-[#1C3334]/40 border border-[#3E5A63] rounded">
            <KenetApertureResponsive openAmount={0.75} scale={1} size={140} centerLabel="↗" centerContent={GrowthChartIcon} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
