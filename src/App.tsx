import { useState, useEffect } from "react"
import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"
import { HomePage } from "@/pages/HomePage"
import { ServicesPage } from "@/pages/ServicesPage"
import { ProductsPage } from "@/pages/ProductsPage"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  // Scroll to top when page changes (Navbar also handles this for clicks)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />
      case "services":
        return <ServicesPage />
      case "products":
        return <ProductsPage />
      case "about":
        return <AboutPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-[#1C3334] text-[#F2EDE9] font-body flex flex-col overflow-x-hidden">
      <Navbar activeSection={currentPage} onSectionClick={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
