import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NavbarProps {
  activeSection?: string
  onSectionClick?: (section: string) => void
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
]

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = "home",
  onSectionClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Track scroll position for header background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false)
    if (onSectionClick) {
      window.scrollTo(0, 0)
      onSectionClick(id)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1C3334] border-b border-[#3E5A63] py-4"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("home")
            }}
            className="flex flex-col gap-0.5 select-none hover:opacity-90 transition-opacity"
          >
            <span className="font-display text-lg font-semibold tracking-[0.05em] text-[#F2EDE9] leading-none">
              KENET
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#A9BDBA] uppercase leading-none">
              TECHNOLOGIES
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative py-1.5 focus:outline-none"
                >
                  <span
                    className={`font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-250 hover:text-[#DA7B93] ${
                      isActive ? "text-[#DA7B93]" : "text-[#A9BDBA]"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#DA7B93]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex md:hidden items-center gap-2.5 focus:outline-none select-none text-[#A9BDBA] hover:text-[#DA7B93] transition-colors"
          >
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
              MENU
            </span>
            <div className="flex flex-col gap-[5px]">
              <span className="w-5 h-[1.5px] bg-current" />
              <span className="w-5 h-[1.5px] bg-current" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#1C3334]/98 z-50 flex flex-col justify-between p-6"
          >
            {/* Header section in overlay */}
            <div className="flex items-center justify-between h-10">
              <div className="flex flex-col gap-0.5 select-none">
                <span className="font-display text-lg font-semibold tracking-[0.05em] text-[#F2EDE9] leading-none">
                  KENET
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#A9BDBA] uppercase leading-none">
                  TECHNOLOGIES
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 focus:outline-none text-[#A9BDBA] hover:text-[#DA7B93] transition-colors"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
                  CLOSE
                </span>
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <span className="absolute w-5 h-[1.5px] bg-current transform rotate-45" />
                  <span className="absolute w-5 h-[1.5px] bg-current transform -rotate-45" />
                </div>
              </button>
            </div>

            {/* Navigation links */}
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="flex flex-col gap-8 my-auto"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="text-left w-full py-1 focus:outline-none group flex items-center gap-4"
                    >
                      <span
                        className={`font-mono text-[10px] tracking-widest ${
                          isActive ? "text-[#DA7B93]" : "text-[#A9BDBA]/60"
                        }`}
                      >
                        // {item.id.toUpperCase()}
                      </span>
                      <span
                        className={`font-display text-3xl font-medium tracking-tight transition-colors duration-250 ${
                          isActive ? "text-[#DA7B93]" : "text-[#F2EDE9] group-hover:text-[#DA7B93]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* Footer lockup info */}
            <div className="border-t border-[#3E5A63] pt-4 flex justify-between items-center text-[10px] font-mono text-[#A9BDBA]">
              <span>KENET_TECH_GLOBAL</span>
              <span>SYS_OK</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
