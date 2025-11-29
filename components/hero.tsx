import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <div className="inline-block mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="glass-panel px-4 py-1.5 rounded-full text-sm font-semibold text-celeste-600 border-celeste-200">
            Elecciones 2025
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 drop-shadow-sm">
          EUGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-celeste-400 to-blue-600">2025</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <span className="font-semibold text-slate-800">Transformemos nuestra escuela juntos.</span>
          <br />
          Estudiantes Unidos por un futuro mejor, con propuestas reales y un equipo comprometido.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <a
            href="#propuestas"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-celeste-400 to-celeste-600 hover:from-celeste-500 hover:to-celeste-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-celeste-300/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Ver Propuestas
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#equipo"
            className="w-full sm:w-auto px-8 py-4 glass-button rounded-xl font-bold text-slate-700 text-lg hover:text-celeste-600 flex items-center justify-center"
          >
            Nuestro Equipo
          </a>
        </div>

        {/* Floating decorative cards */}
        <div className="hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2 w-64 glass-panel p-4 rounded-xl rotate-[-6deg] animate-in fade-in duration-1000 delay-500 hover:rotate-0 transition-transform">
          <div className="text-4xl mb-2">🗳️</div>
          <div className="font-bold text-slate-800">Participación</div>
          <div className="text-sm text-slate-500">Tu voz cuenta en cada decisión.</div>
        </div>

        <div className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2 w-64 glass-panel p-4 rounded-xl rotate-[6deg] animate-in fade-in duration-1000 delay-700 hover:rotate-0 transition-transform">
          <div className="text-4xl mb-2">🤝</div>
          <div className="font-bold text-slate-800">Unidad</div>
          <div className="text-sm text-slate-500">Trabajando juntos por el bien común.</div>
        </div>
      </div>
    </section>
  )
}
