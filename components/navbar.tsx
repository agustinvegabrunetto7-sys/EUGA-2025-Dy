"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Propuestas", href: "#propuestas" },
  { name: "Candidatos", href: "#candidatos" },
  { name: "Equipo", href: "#equipo" },
  { name: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:py-4",
        scrolled ? "glass-panel shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-celeste-400 to-celeste-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            10
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-800 leading-tight">LISTA CELESTE</span>
            <span className="text-xs text-slate-500 font-medium">ESTUDIANTES UNIDOS</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-celeste-600 font-medium text-sm transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-celeste-400 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#propuestas"
            className="glass-button px-5 py-2 rounded-full text-sm font-semibold text-celeste-600 hover:text-celeste-700"
          >
            Ver Propuestas
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2 text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-t-white/50 animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 font-medium p-2 hover:bg-white/50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
