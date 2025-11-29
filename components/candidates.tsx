"use client"

import { useState } from "react"
import { GlassCard } from "./ui/glass-card"
import { cn } from "@/lib/utils"

// Data for directiva
const directiva = [
  {
    role: "Presidente",
    name: "Morena Kopecky",
    image: "https://i.postimg.cc/1R6fCDLH/More-Pagina1.jpg",
  },
  {
    role: "Vicepresidente",
    name: "Luciano Olcina",
    image: "https://i.postimg.cc/Gm4LtSWw/Luciano-Pagina.jpg",
  },
  {
    role: "Secretaria General",
    name: "Luna Aguilera",
    image: "https://i.postimg.cc/6pkHRym4/Aguilera-Pagina.jpg",
  },
  {
    role: "Secretario de Parlamento",
    name: "Joaquin Valfre",
    image: "https://i.postimg.cc/05B1w4Wx/Valfre-Pagina.jpg",
  },
]

// Data for secretariats team (Corregido y verificado)
const teams: Record<string, Array<{ role: string; name: string; bio: string; image?: string }>> = {
  comunicacion: [
    {
      role: "Secretaria",
      name: "Araceli Romero",
      bio: "",
      image: "https://i.postimg.cc/YSLcwTTj/64096.png",
    },
    { role: "Sub-secretario", name: "Agustin Vega", bio: "Soy Agustin Vega, me comprometo a desempeñar mi funcion lo mejor posible, para tener una comunicación fluida siempre y mantenerte informado por esta pagina y demas medios.", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  hacienda: [
    {
      role: "Secretaria",
      name: "Rocio Albornoz",
      bio: "",
      image: "https://i.postimg.cc/YSLcwTTj/64096.png",
    },
    { role: "Sub-secretario/a", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "Melina Flores", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  salud: [
    { role: "Secretaria", name: "Martina Vega", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretario", name: "Ivan Suarez", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  sociales: [
    { role: "Secretaria", name: "Cecilia Wagner", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretario/a", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  genero: [
    { role: "Secretaria", name: "Guillermina Wagner", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    // SINTAXIS VERIFICADA
    { role: "Subsecretaria", name: "Valentin Cordero", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" }, 
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  humanidades: [
    { role: "Sub-Secretaria", name: "Ariana Kopecky", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "Luca Zuñiga", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "Tomas Alzuarena", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  edilicias: [
    { role: "Secretaria", name: "Carolina Villareal", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretaria", name: "Ari (4A)", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  parlamentaria: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  relaciones: [
    { role: "Secretaria", name: "Julieta Vivas", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretaria", name: "Adriana Cuello", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  actas: [
    { role: "Secretaria", name: "Samira Persin", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretario/a", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  deportes: [
    { role: "Secretaria", name: "Victoria Bariles", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretario/a", name: "Irineo 5(A)", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Comisión", name: "No hay.", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
  ],
  arte: [
    { role: "Secretaria", name: "Barbara Zambrano", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    { role: "Sub-secretaria", name: "Violeta Carraro", bio: "", image: "https://i.postimg.cc/YSLcwTTj/64096.png" },
    {
      role: "Comisión",
      name: "Milagros Buffa",
      bio: "Hola, soy Milagros y entre a la lista por las propuestas que tenía en mente y para hacer del colegio un lugar mejor.",
      image: "https://i.postimg.cc/1X2z73yg/Buffa-Comision-Arte.jpg",
    },
  ],
  default: [
    { role: "Secretario/a", name: "NNNNNNNN/A", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
}

const secretariatButtons = [
  { id: "comunicacion", icon: "📢", label: "Comunicación" },
  { id: "hacienda", icon: "💰", label: "Hacienda" },
  { id: "salud", icon: "🏥", label: "Salud" },
  { id: "sociales", icon: "🤝", label: "Sociales" },
  { id: "genero", icon: "🚺", label: "Género" },
  { id: "humanidades", icon: "📚", label: "Humanidades" },
  { id: "edilicias", icon: "🏫", label: "Edilicias" },
  // { id: "parlamentaria", icon: "🗳️", label: "Parlamentaria" }, // Eliminado
  { id: "relaciones", icon: "🌐", label: "Relaciones" },
  { id: "actas", icon: "📜", label: "Actas" },
  { id: "deportes", icon: "⚽", label: "Deportes" },
  { id: "arte", icon: "🎨", label: "Arte" },
]

export function Candidates() {
  const [activeTeam, setActiveTeam] = useState("comunicacion")

  const currentTeam = teams[activeTeam] || teams.default

  return (
    <section id="candidatos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Directiva Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10 font-sans">
            COMISIÓN <span className="text-celeste-500">DIRECTIVA</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {directiva.map((member, i) => (
              <GlassCard key={i} hoverEffect className="p-4 text-center group">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover bg-slate-200"
                  />
                </div>
                <h3 className="font-bold text-lg text-slate-800">{member.name}</h3>
                <p className="text-celeste-600 font-medium text-sm">{member.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Team Explorer */}
        <div id="equipo">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
            NUESTRO <span className="text-celeste-500">EQUIPO</span>
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Conocé a los estudiantes que trabajarán día a día en cada secretaría.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {secretariatButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveTeam(btn.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  activeTeam === btn.id
                    ? "bg-celeste-500 text-white shadow-md shadow-celeste-300/50 scale-105"
                    : "glass-panel hover:bg-white/80 text-slate-600",
                )}
              >
                <span>{btn.icon}</span>
                <span className="hidden sm:inline">{btn.label}</span>
              </button>
            ))}
          </div>

          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500"
            key={activeTeam}
          >
            {currentTeam.map((member, i) => (
              <GlassCard key={i} className="flex flex-col h-full border-t-4 border-t-celeste-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                    <img
                      src={member.image || "/placeholder.svg?height=100&width=100&text=Foto"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 leading-tight">{member.name}</h4>
                    <p className="text-xs text-celeste-600 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic mt-auto">"{member.bio || '[Texto de presentación pendiente]'}"</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}