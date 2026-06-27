const videos = [
  {
    video: "/videos/Fence Installation.mp4",
    title: "Fence Installation",
    category: "Fencing",
  },
  {
    video: "/videos/Pressure Washing.mp4",
    title: "Pressure Washing",
    category: "Cleaning",
  },
  {
    video: "/videos/Cleaning Services.mp4",
    title: "Cleaning Service",
    category: "Maintenance",
  },
  {
    video: "/videos/Kitchen Renovation.mp4",
    title: "Kitchen Renovation",
    category: "Renovation",
  },
]

function VideoShowcase() {
  return (
    <section id="work" className="bg-[#f8f8f8] py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-yellow-500 font-bold uppercase tracking-[4px] text-sm">
            Work In Action
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            See Our Team At Work
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            A closer look at real work completed by VSR Construction Ltd,
            including fencing, cleaning, washing and renovation services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-80 bg-black">
                <video
                  src={item.video}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  preload="metadata"
                />

                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="bg-yellow-500 text-black text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  Watch our work process and quality finishing in action.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase