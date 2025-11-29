import { GlassCard } from "./ui/glass-card"
import { Instagram, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <GlassCard className="py-12 px-6 md:px-12 bg-gradient-to-br from-white/40 to-celeste-50/40">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">CONTACTO</h2>
          <p className="text-xl text-slate-600 mb-10">Seguinos en nuestras redes y mantenete informado</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://instagram.com/euga.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </a>

            <a
              href="https://whatsapp.com/channel/0029VbBd3742UPBBMqVMpz31"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
