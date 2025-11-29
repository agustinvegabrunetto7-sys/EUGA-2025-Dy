export function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-celeste-50 via-white to-celeste-100 opacity-80" />

      {/* Animated Blobs - Using CSS animation for low resource usage */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-celeste-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-celeste-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
    </div>
  )
}
