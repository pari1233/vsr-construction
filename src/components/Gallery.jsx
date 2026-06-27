import { useRef, useState } from "react"
import { Link } from "react-scroll"

const projects = [
  {
    image: "/projects/construction2.jpeg",
    title: "Groundworks & Concrete Slab",
    category: "Groundwork",
  },
  {
    image: "/projects/drainage Installation.jpeg",
    title: "Drainage Installation",
    category: "Groundwork",
  },
  {
    image: "/projects/flooring installation.jpeg",
    title: "Flooring Installation",
    category: "Flooring",
  },
  {
    image: "/projects/painting.jpeg",
    title: "Interior Painting",
    category: "Decorating",
  },
  {
    image: "/projects/bathroom renovation.jpeg",
    title: "Bathroom Renovation",
    category: "Bathroom",
  },
  {
    image: "/projects/external Cladding.jpeg",
    title: "External Wall Cladding",
    category: "Exterior Works",
  },
]

function Gallery() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const galleryRef = useRef(null)

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)

  const handleToggleProjects = () => {
    if (showAllProjects) {
      setShowAllProjects(false)

      setTimeout(() => {
        galleryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    } else {
      setShowAllProjects(true)
    }
  }

  return (
    <section
      ref={galleryRef}
      id="gallery"
      className="bg-gradient-to-b from-black to-[#111111] py-24 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-yellow-500 uppercase tracking-[5px] font-bold text-sm">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Recent Project Portfolio
          </h2>

          <p className="text-gray-400 mt-5 text-lg leading-relaxed">
            Explore selected construction, renovation and property improvement
            projects completed by VSR Construction Ltd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="group relative h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-yellow-500 text-sm font-semibold mt-2">
                  Completed Project ✓
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleToggleProjects}
            className="border border-yellow-500 text-yellow-500 px-8 py-4 font-bold uppercase rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            {showAllProjects ? "Show Less" : "View All Projects"}
          </button>
        </div>

        <div className="mt-20 text-center">
          <p className="text-yellow-500 uppercase tracking-[4px] text-sm font-bold">
            See Our Work In Action
          </p>

          <h3 className="text-white text-3xl md:text-4xl font-extrabold mt-3">
            Real Projects. Real Results.
          </h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Watch our team delivering quality workmanship across construction,
            renovation and property improvement projects.
          </p>

          <Link
            to="work"
            smooth
            duration={500}
            offset={-64}
            className="inline-block cursor-pointer mt-8 bg-yellow-500 text-black px-8 py-4 font-bold uppercase rounded-lg hover:bg-yellow-400 transition"
          >
            Watch Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery