export function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="mt-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-slate-800 mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-celeste-500 to-blue-600 font-extrabold">
              EVENTOS
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* First event - Clash Royale */}
            <div className="rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 md:p-10 border border-celeste-500/30 hover:border-celeste-400/50 transition-all duration-300">
                {/* Decorative glow effect */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-celeste-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-start gap-4">
                      <span className="text-5xl">🎮</span>
                      <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-celeste-300 via-sky-400 to-celeste-400 bg-clip-text text-transparent">
                          Torneo de Clash Royale
                        </h3>
                        <p className="text-celeste-300/70 text-sm">¡Demostrá tus habilidades y competí!</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-celeste-500/50 to-transparent"></div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-celeste-400 text-lg">📍</span>
                      <div>
                        <p className="text-celeste-400/60 text-xs font-mono uppercase tracking-widest">Ubicación</p>
                        <p className="text-white/90 font-light">Espacio a Confirmar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-celeste-400 text-lg">📅</span>
                      <div>
                        <p className="text-celeste-400/60 text-xs font-mono uppercase tracking-widest">Fecha</p>
                        <p className="text-white/90 font-light">A confirmar</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-celeste-600/20 to-sky-600/20 border border-celeste-500/40 rounded-lg p-4 text-center">
                    <p className="font-mono text-celeste-300 text-sm tracking-widest">ENTRADA</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-celeste-300 to-sky-400 bg-clip-text text-transparent">
                      GRATUITA
                    </p>
                  </div>

                  <a
                    href="https://whatsapp.com/channel/0029VbBd3742UPBBMqVMpz31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 mt-2 bg-gradient-to-r from-celeste-500/90 to-sky-500/90 hover:from-celeste-400 hover:to-sky-400 text-black font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-celeste-500/40 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">💬</span>
                    Para más información entra a nuestro canal de WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 md:p-10 border border-celeste-500/30 hover:border-celeste-400/50 transition-all duration-300">
                {/* Decorative glow effect */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-celeste-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-start gap-4">
                      <span className="text-5xl">🎯</span>
                      <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-celeste-300 via-sky-400 to-celeste-400 bg-clip-text text-transparent">
                          Nombre del Evento
                        </h3>
                        <p className="text-celeste-300/70 text-sm">Descripción del evento</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-celeste-500/50 to-transparent"></div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-celeste-400 text-lg">📍</span>
                      <div>
                        <p className="text-celeste-400/60 text-xs font-mono uppercase tracking-widest">Ubicación</p>
                        <p className="text-white/90 font-light">Lugar a confirmar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-celeste-400 text-lg">📅</span>
                      <div>
                        <p className="text-celeste-400/60 text-xs font-mono uppercase tracking-widest">Fecha</p>
                        <p className="text-white/90 font-light">Fecha a confirmar</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-celeste-600/20 to-sky-600/20 border border-celeste-500/40 rounded-lg p-4 text-center">
                    <p className="font-mono text-celeste-300 text-sm tracking-widest">ENTRADA</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-celeste-300 to-sky-400 bg-clip-text text-transparent">
                      GRATUITA
                    </p>
                  </div>

                  <a
                    href="https://whatsapp.com/channel/0029VbBd3742UPBBMqVMpz31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 mt-2 bg-gradient-to-r from-celeste-500/90 to-sky-500/90 hover:from-celeste-400 hover:to-sky-400 text-black font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-celeste-500/40 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">💬</span>
                    Para más información entra a nuestro canal de WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
