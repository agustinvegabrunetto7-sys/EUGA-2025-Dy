import { LiquidBackground } from "@/components/background"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Values } from "@/components/values"
import { About } from "@/components/about"
import { Proposals } from "@/components/proposals"
import { Candidates } from "@/components/candidates"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen relative font-sans selection:bg-celeste-200 selection:text-celeste-900 overflow-hidden">
      <LiquidBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Values />
        <About />
        <Proposals />
        <Candidates />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
