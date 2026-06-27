import { Phone, Mail, MapPin } from "lucide-react"
import { Link } from "react-scroll"

function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "gallery" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ]

  const services = [
    "Groundwork",
    "Landscaping",
    "Renovations",
    "Cleaning",
    "Flooring",
    "Fencing",
  ]

  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div>
            <img
              src="/logo.png"
              alt="VSR Construction Ltd"
              className="w-14"
            />

            <h2 className="text-white text-xl font-bold mt-4">
              VSR Construction Ltd
            </h2>

            <p className="text-gray-400 mt-3 leading-7 max-w-md">
              Professional construction, renovation and property improvement
              services delivered with quality workmanship across Coventry and
              surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>

            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-64}
                  className="text-gray-400 hover:text-yellow-500 cursor-pointer transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-7">
              {services.map((service) => (
                <span
                  key={service}
                  className="border border-yellow-500/20 text-gray-400 px-3 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>

            <div className="space-y-4">
              <a
                href="tel:+447754661171"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 transition"
              >
                <Phone className="w-5 h-5 text-yellow-500" />
                +44 7754 661171
              </a>

              <a
                href="mailto:vsrconstructionltd@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 transition break-all"
              >
                <Mail className="w-5 h-5 text-yellow-500" />
                vsrconstructionltd@gmail.com
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                <p>
                  No.1 Bede Road, Coventry,
                  <br />
                  West Midlands, CV6 3BW
                </p>
              </div>
            </div>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-64}
              className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold uppercase hover:bg-yellow-400 transition cursor-pointer"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm">
          <p className="text-gray-500">
            © {year} <span className="text-white">VSR Construction Ltd</span>.
            All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Designed & Developed by{" "}
            <span className="text-yellow-500 font-semibold">Parindi</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer