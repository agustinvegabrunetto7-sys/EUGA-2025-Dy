"use client"

import { useState } from "react"
import { GlassCard } from "./ui/glass-card"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const secretariats = [
  {
    id: "salud",
    icon: "🩺",
    title: "Secretaría de Salud y Medio Ambiente",
    subtitle: "Bienestar integral y conciencia ecológica",
    items: [
      {
        emoji: "🧠",
        title: "Campañas de concientización sobre salud mental",
        desc: "Campañas de concientización sobre salud mental y bienestar emocional, mediante talleres y actividades de contención entre pares.",
      },
      {
        emoji: "🍎",
        title: "Jornadas de hábitos saludables",
        desc: "Jornadas de hábitos saludables, enfocadas en alimentación, actividad física e higiene personal.",
      },
      {
        emoji: "🌱",
        title: "Implementación de huertas y espacios verdes",
        desc: "Implementación de huertas y espacios verdes, promoviendo la educación ambiental y la sostenibilidad dentro del colegio.",
      },
      {
        emoji: "🪴",
        title: "Taller de Enverdecimiento de espacios comunes",
        desc: "Taller de Enverdecimiento de los espacios comunes de la escuela. Junto a los compañeros de distintos cursos realizar la creación de macetitas con plantitas para decorar espacios como patios, pasillos, aulas, etc.",
      },
    ],
  },
  {
    id: "comunicacion",
    icon: "📢",
    title: "Secretaría de Comunicación y Prensa",
    subtitle: "Fortaleciendo la comunicación institucional",
    items: [
      {
        emoji: "🌐",
        title: "Página web oficial del Centro de Estudiantes",
        desc: "Creación de una Página web oficial del Centro de Estudiantes para la gestión y mayor eficiencia a la hora de la distribución de la información.",
      },
      {
        emoji: "📱",
        title: "Gestión de redes sociales oficiales",
        desc: "Gestión de redes sociales oficiales del CEGA, para comunicar proyectos, eventos y logros de la comunidad estudiantil.",
      },
      {
        emoji: "🎨",
        title: "Murales informativos y audiovisuales",
        desc: "Murales informativos y audiovisuales, con contenido educativo y de participación estudiantil.",
      },
    ],
  },
  {
    id: "sociales",
    icon: "🤝",
    title: "Secretaría de Asuntos Sociales",
    subtitle: "Acciones solidarias y redes de apoyo comunitario",
    items: [
      {
        emoji: "🤲",
        title: "Campañas solidarias y de voluntariado",
        desc: "Campañas solidarias y de voluntariado, incluyendo colectas, donaciones y colaboración con comedores o barrios cercanos.",
      },
      {
        emoji: "🫂",
        title: "Red de apoyo entre estudiantes",
        desc: "Red de apoyo entre estudiantes, para acompañamiento académico y emocional de los compañeros.",
      },
      {
        emoji: "🎉",
        title: "Actividades recreativas e integradoras",
        desc: "Organización de actividades recreativas e integradoras, fomentando la participación de todos los cursos.",
      },
    ],
  },
  {
    id: "genero",
    icon: "🚺",
    title: "Subsecretaría de Género",
    subtitle: "Espacios seguros y promoción de la igualdad",
    items: [
      {
        emoji: "💜",
        title: "Charlas y talleres sobre perspectiva de género",
        desc: "Charlas y talleres sobre perspectiva de género y prevención de violencia, dirigidos a toda la comunidad escolar.",
      },
      {
        emoji: "🌈",
        title: "Campañas de conciencia sobre diversidad",
        desc: "Campañas de conciencia sobre diversidad y equidad, fomentando el respeto a todas las identidades.",
      },
      {
        emoji: "🤝",
        title: "Talleres de inclusión y diversidad",
        desc: "Talleres de inclusión y diversidad, promoviendo la integración y la igualdad de oportunidades dentro del colegio.",
      },
    ],
  },
  {
    id: "humanidades",
    icon: "📚",
    title: "Subsecretaría de Derechos Humanos",
    subtitle: "Defensa y protección de derechos estudiantiles",
    items: [
      {
        emoji: "⚖️",
        title: "Defensa Activa de Estudiantes",
        desc: "Defensa Activa de los Estudiantes ante situaciones conflictivas y de resolución a través del diálogo.",
      },
      {
        emoji: "🛡️",
        title: "Mediación en derechos estudiantiles",
        desc: "Se podrá Solicitar ante está secretaría mediación ante situaciones donde se pongan en juego los derechos estudiantiles.",
      },
      {
        emoji: "🔒",
        title: "Protección de derechos humanos",
        desc: "Se velará por el respeto de los derechos humanos ante posibles intransigencias de la dirección del establecimiento o del ministerio mismo.",
      },
    ],
  },
  {
    id: "edilicias",
    icon: "🏫",
    title: "Secretaría de Problemáticas Edilicias e Infraestructura",
    subtitle: "Mejora y mantenimiento de nuestras instalaciones",
    items: [
      {
        emoji: "🔍",
        title: "Relevamiento de necesidades edilicias",
        desc: "Relevamiento de necesidades edilicias, identificando mejoras prioritarias en aulas y espacios comunes.",
      },
      {
        emoji: "🛠️",
        title: "Propuestas de mantenimiento y mejoras",
        desc: "Propuestas de mantenimiento y mejoras concretas, en coordinación con la dirección del colegio.",
      },
      {
        emoji: "🎨",
        title: "Jornadas de embellecimiento escolar",
        desc: "Jornadas de embellecimiento de la escuela, incluyendo muralismo y mejora de espacios recreativos.",
      },
    ],
  },
  {
    id: "relaciones",
    icon: "🌐",
    title: "Secretaría de Relaciones Institucionales Internas y Externas",
    subtitle: "Vinculación con otras instituciones",
    items: [
      {
        emoji: "🏟️",
        title: "Eventos interinstitucionales",
        desc: "Realizar eventos como Encuentros de Escritores y Torneos de Futbol en conjunto a otras escuelas.",
      },
      {
        emoji: "🤝",
        title: "Vinculación con instituciones culturales",
        desc: "Vinculación con instituciones culturales y municipales, promoviendo proyectos conjuntos y participación comunitaria.",
      },
      {
        emoji: "📚",
        title: "Actividades interinstitucionales",
        desc: "Desarrollo de actividades interinstitucionales, fomentando la cooperación y el aprendizaje compartido.",
      },
    ],
  },
  {
    id: "actas",
    icon: "📜",
    title: "Secretaría de Actas y Archivo",
    subtitle: "Registro y memoria de nuestra gestión",
    items: [
      {
        emoji: "💾",
        title: "Digitalización de actas y documentos",
        desc: "Digitalización y organización de actas y documentos del CEGA, preservando la memoria institucional.",
      },
      {
        emoji: "🗂️",
        title: "Archivo público accesible web",
        desc: "Creación de un archivo público al que se podrá acceder desde la página web oficial donde se encontrá registro y datos sobre proyectos, miembros, cargos y eventos del Centro.",
      },
      {
        emoji: "📋",
        title: "Registro y seguimiento de proyectos",
        desc: "Registro y seguimiento de proyectos y eventos, asegurando documentación clara y accesible.",
      },
    ],
  },
  {
    id: "deportes",
    icon: "⚽",
    title: "Secretaría de Deportes",
    subtitle: "Promoción de la actividad física y el compañerismo",
    items: [
      {
        emoji: "🏆",
        title: "Jornadas deportivas internas",
        desc: "Organización de jornadas deportivas de deportes como Fútbol, Volley, Handball y demas que sean internos, promoviendo la participación y la actividad física entre los cursos.",
      },
      {
        emoji: "🎯",
        title: "Jornadas deportivas intercolegiales",
        desc: "Jornadas deportivas intercolegiales, promoviendo la integración con otras instituciones educativas.",
      },
    ],
  },
  {
    id: "arte",
    icon: "🎨",
    title: "Secretaría de Arte y Cultura",
    subtitle: "Expresión creativa y difusión artística",
    items: [
      {
        emoji: "🎵",
        title: "Talleres de música, teatro, danza",
        desc: "Talleres de música, teatro, danza y artes plásticas, abiertos a toda la comunidad escolar.",
      },
      {
        emoji: "🖼️",
        title: "Murales y exposiciones artísticas",
        desc: "Murales y exposiciones artísticas, promoviendo la creatividad y expresión estudiantil.",
      },
      {
        emoji: "🎭",
        title: "Festivales culturales",
        desc: "Festivales culturales, integrando distintas disciplinas y fomentando la participación activa de los estudiantes.",
      },
    ],
  },
  {
    id: "hacienda",
    icon: "💰",
    title: "Secretaría de Hacienda y Finanzas",
    subtitle: "Transparencia y gestión responsable",
    items: [
      {
        emoji: "🗳️",
        title: "Presupuesto participativo",
        desc: "Presupuesto participativo, permitiendo que los estudiantes decidan cómo invertir los recursos del CEGA.",
      },
      {
        emoji: "📊",
        title: "Rendición de cuentas periódica",
        desc: "Rendición de cuentas periódica, asegurando transparencia en la gestión de fondos del Centro.",
      },
    ],
  },
]

export function Proposals() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="propuestas" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            NUESTRAS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-celeste-400 to-blue-600">
              PROPUESTAS
            </span>
          </h2>
          <p className="text-xl text-slate-600">Ideas concretas para transformar nuestra realidad educativa.</p>
        </div>

        <div className="space-y-4">
          {secretariats.map((sec) => (
            <GlassCard
              key={sec.id}
              className={cn(
                "cursor-pointer transition-all duration-300 border-l-4 border-l-transparent hover:border-l-celeste-400 overflow-hidden p-0",
                openId === sec.id && "border-l-celeste-500 ring-2 ring-celeste-200",
              )}
            >
              <div
                className="p-6 flex items-start gap-4 select-none"
                onClick={() => setOpenId(openId === sec.id ? null : sec.id)}
              >
                <div className="text-4xl shrink-0 p-2 bg-celeste-50 rounded-xl">{sec.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-800">{sec.title}</h3>
                    <ChevronDown
                      className={cn(
                        "text-slate-400 transition-transform duration-300",
                        openId === sec.id && "rotate-180",
                      )}
                    />
                  </div>
                  <p className="text-slate-500 mt-1">{sec.subtitle}</p>
                </div>
              </div>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openId === sec.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 grid gap-4 sm:grid-cols-2">
                    {sec.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/40 p-4 rounded-xl border border-white/50 hover:bg-white/60 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{item.emoji}</span>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
