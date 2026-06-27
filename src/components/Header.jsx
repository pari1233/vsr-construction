import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "gallery" },
    { name: "About Us", to: "about" },
    { name: "Contact", to: "contact" },
  ]

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 z-50 bg-black/90 backdrop-blur-lg border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 h-full">

          <div className="flex items-center justify-between h-full">

            <Link
              to="home"
              smooth
              duration={500}
              offset={-64}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="VSR Construction"
                className="w-11 h-11 object-contain"
              />

              <div className="hidden lg:block">
                <h2 className="text-white font-bold text-base">
                  VSR Construction
                </h2>

                <p className="text-yellow-500 uppercase tracking-widest text-[10px]">
                  Building Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase">

              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy
                  smooth
                  duration={500}
                  offset={-64}
                  activeClass="!text-yellow-500"
                  className="cursor-pointer text-white hover:text-yellow-500 transition"
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            {/* Desktop Button */}

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-64}
              className="hidden md:flex cursor-pointer bg-yellow-500 text-black px-5 py-2 rounded font-bold uppercase hover:bg-yellow-400 transition"
            >
              Get Free Quote
            </Link>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={30} />
            </button>

          </div>

        </div>
      </header>

      {/* Overlay */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}

      <aside
        className={`fixed top-0 right-0 w-80 h-screen bg-[#111111] z-50 transition-transform duration-500 shadow-2xl ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between px-6 h-16 border-b border-yellow-500/20">

          <div>

            <h2 className="text-white font-bold">
              VSR Construction
            </h2>

            <p className="text-yellow-500 uppercase text-[10px] tracking-widest">
              Building Excellence
            </p>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            <X size={28} />
          </button>

        </div>

        <div className="flex flex-col px-6 py-8 gap-6">

          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy
              smooth
              duration={500}
              offset={-64}
              activeClass="!text-yellow-500"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-white text-lg font-semibold uppercase hover:text-yellow-500 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="contact"
            smooth
            duration={500}
            offset={-64}
            onClick={() => setMenuOpen(false)}
            className="mt-6 text-center bg-yellow-500 text-black py-4 rounded-lg font-bold uppercase hover:bg-yellow-400 transition cursor-pointer"
          >
            Get Free Quote
          </Link>

        </div>

      </aside>
    </>
  )
}

export default Header