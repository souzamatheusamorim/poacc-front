import { Countdown } from "@/components/countdown"
import { SocialLinks } from "@/components/social-links"
import { BookOpen, Calendar, MapPin, Palette, Users, Video } from "lucide-react"

export default function WaitingPage() {
  // Data do evento (exemplo: 3 meses a partir de agora)
  const eventDate = new Date()
  eventDate.setMonth(eventDate.getMonth() + 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto pt-6 px-4">
        <div className="flex justify-center md:justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-yellow-400" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              COMIC CON 2024
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-yellow-400" />
              <span>{eventDate.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-yellow-400" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative flex items-center justify-center h-full">
              <BookOpen className="h-16 w-16 text-yellow-400" />
            </div>
          </div>

          {/* Comic-style speech bubble */}
          <div className="relative text-black p-8">
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 overflow-hidden">
              <div className="w-16 h-16 bg-white rotate-45 transform origin-top-left border-r-4 border-b-4 border-black translate-y-8"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-red-600 font-comic">
              COMIC CON BRASIL
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mt-4">
              O maior evento de cultura pop e quadrinhos do Brasil está chegando!
            </p>
          </div>

          {/* Countdown */}
          <div className="py-10">
            <Countdown targetDate={eventDate} />
          </div>

          {/* Email signup */}
          <div className="max-w-md mx-auto w-full">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Seu email para novidades"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Notifique-me
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl w-full">
          {[
            {
              icon: <Users className="h-8 w-8 text-yellow-400 mb-2" />,
              title: "Cosplay",
              description: "Concursos e desfiles com os melhores cosplayers do país",
            },
            {
              icon: <Palette className="h-8 w-8 text-yellow-400 mb-2" />,
              title: "Artist Alley",
              description: "Conheça artistas e adquira obras exclusivas de seus personagens favoritos",
            },
            {
              icon: <Video className="h-8 w-8 text-yellow-400 mb-2" />,
              title: "Painéis",
              description: "Encontre seus autores, artistas e atores favoritos do universo geek",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border-2 border-yellow-700 transform hover:-rotate-1 transition-transform"
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Comic Con Brasil. Todos os direitos reservados.
          </p>
          <SocialLinks />
        </div>
      </footer>
    </div>
  )
}
