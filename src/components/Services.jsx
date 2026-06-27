import { useState } from "react"

const featuredServices = [
  {
    image: "/services/groundwork.webp",
    category: "Construction",
    title: "Groundwork",
    description:
      "Excavation, foundations, drainage and complete site preparation services.",
  },
  {
    image: "/services/landscaping.webp",
    category: "Outdoor",
    title: "Landscaping",
    description:
      "Garden design, patios, paving and outdoor improvements tailored to your property.",
  },
  {
    image: "/services/kitchen.webp",
    category: "Renovation",
    title: "Renovations",
    description:
      "Kitchen fitting, bathroom installation, flooring and decorating solutions.",
  },
  {
    image: "/services/driveway-cleaning.webp",
    category: "Maintenance",
    title: "Cleaning Services",
    description:
      "Driveway cleaning, patio cleaning, gutter maintenance and car valeting.",
  },
]

const additionalServices = [
  {
    image: "/services/fencing.webp",
    category: "Outdoor",
    title: "Fencing",
    description: "Wooden, concrete and metal fencing for privacy and security.",
  },
  {
    image: "/services/bathroom.webp",
    category: "Renovation",
    title: "Bathroom Fittings",
    description: "Complete bathroom installation and renovation services.",
  },
  {
    image: "/services/painting.webp",
    category: "Finishing",
    title: "Paint & Decorating",
    description: "Interior and exterior painting and decorating solutions.",
  },
  {
    image: "/services/flooring.webp",
    category: "Finishing",
    title: "Flooring",
    description: "Laminate, hardwood and tile flooring installation.",
  },
  {
    image: "/services/gutter-cleaning.webp",
    category: "Maintenance",
    title: "Patio & Gutter Cleaning",
    description: "Professional patio and gutter cleaning services.",
  },
  {
    image: "/services/car-valeting.webp",
    category: "Cleaning",
    title: "Car Valeting",
    description: "Professional vehicle valeting and detailing services.",
  },
]

function Services() {
  const [showAllServices, setShowAllServices] = useState(false)

  const serviceCards = showAllServices
    ? [...featuredServices, ...additionalServices]
    : featuredServices

  const handleToggleServices = () => {
    if (showAllServices) {
      setShowAllServices(false)

      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    } else {
      setShowAllServices(true)
    }
  }

  return (
    <section id="services" className="bg-[#f7f7f7] py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-yellow-500 font-bold uppercase tracking-[4px] text-sm">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            Construction & Property Services
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            From groundworks to renovations and property maintenance, VSR
            Construction Ltd delivers reliable workmanship for homes and
            businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-extrabold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleToggleServices}
            className="bg-black text-yellow-500 border border-yellow-500 px-9 py-4 font-bold uppercase rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            {showAllServices ? "Show Less Services" : "View All Services"}
          </button>
        </div>

        <div className="mt-20 bg-black rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-sm font-bold">
              Need Professional Help?
            </p>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Request A Free Quote Today
            </h3>

            <p className="text-gray-300 mt-4 max-w-2xl">
              Tell us about your project and receive a free, no-obligation
              quotation from our experienced team.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-yellow-500 text-black px-8 py-4 font-bold uppercase rounded-lg hover:bg-yellow-400 transition"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services