import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { Award, Hammer, Users, Headphones } from "lucide-react"

const slides = [
  {
    image: "/hero-house.png",
    smallTitle: "VSR Construction Ltd",
    title: "Building Quality.",
    highlight: "Delivering Excellence.",
    description:
      "Professional construction and property improvement services delivered with reliable workmanship and attention to detail.",
  },
  {
    image: "/hero-landscaping.png",
    smallTitle: "Outdoor Improvements",
    title: "Beautiful Landscapes.",
    highlight: "Outdoor Living Spaces.",
    description:
      "From landscaping and fencing to patios and outdoor finishes, we create clean and practical spaces for your property.",
  },
  {
    image: "/hero-renovation.png",
    smallTitle: "Home Renovations",
    title: "Modern Renovations.",
    highlight: "Designed For Living.",
    description:
      "Kitchen fittings, bathroom fittings, flooring and decorating services completed with a quality finish.",
  },
]

const stats = [
  { icon: Award, number: "20+", label: "Years Experience" },
  { icon: Hammer, number: "250+", label: "Projects Completed" },
  { icon: Users, number: "100%", label: "Customer Satisfaction" },
  { icon: Headphones, number: "24/7", label: "Customer Support" },
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-3xl">
          <p className="text-yellow-500 font-bold uppercase tracking-widest mb-2 text-xs md:text-sm">
            {slides[currentSlide].smallTitle}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {slides[currentSlide].title}
            <br />
            <span className="text-yellow-500">{slides[currentSlide].highlight}</span>
          </h1>

          <p className="text-gray-100 mt-4 text-base md:text-lg max-w-lg leading-relaxed">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-64}
              className="cursor-pointer bg-yellow-500 text-black px-7 py-3.5 font-bold uppercase hover:bg-yellow-400 transition"
            >
              Get a Free Quote
            </Link>

            <Link
              to="services"
              smooth
              duration={500}
              offset={-64}
              className="cursor-pointer border border-yellow-500 text-yellow-500 px-7 py-3.5 font-bold uppercase hover:bg-yellow-500 hover:text-black transition"
            >
              View Services
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.label}
                  className="bg-black/55 backdrop-blur-md border border-yellow-500/20 rounded-lg p-4 hover:border-yellow-500 transition"
                >
                  <Icon className="w-6 h-6 text-yellow-500 mb-2" />
                  <h3 className="text-2xl font-bold text-white">{stat.number}</h3>
                  <p className="text-xs text-gray-300 mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-3 mt-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-yellow-500" : "w-3 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero