import { CheckCircle, ShieldCheck, Clock, Users } from "lucide-react"

function About() {
  return (
    <section id="about" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        
        <div className="relative">
          <img
            src="/projects/construction2.webp"
            alt="VSR Construction work"
            className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-black text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-4xl font-extrabold text-yellow-500">20+</h3>
            <p className="font-semibold">Years of Experience</p>
          </div>
        </div>

        <div>
          <p className="text-yellow-500 font-bold uppercase tracking-[4px] text-sm">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            Reliable Construction & Property Services
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            VSR Construction Ltd provides professional construction,
            renovation, landscaping and property maintenance services with a
            strong focus on quality workmanship, reliability and customer
            satisfaction.
          </p>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            From groundwork and fencing to kitchen fittings, bathroom
            renovations, flooring, decorating and cleaning services, our team
            works carefully to deliver clean, durable and high-quality results.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <div className="flex gap-3">
              <CheckCircle className="text-yellow-500 w-6 h-6" />
              <div>
                <h4 className="font-bold text-gray-900">Quality Workmanship</h4>
                <p className="text-gray-600 text-sm">Careful and clean finishing.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="text-yellow-500 w-6 h-6" />
              <div>
                <h4 className="font-bold text-gray-900">Trusted Service</h4>
                <p className="text-gray-600 text-sm">Reliable support from start to finish.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="text-yellow-500 w-6 h-6" />
              <div>
                <h4 className="font-bold text-gray-900">On-Time Delivery</h4>
                <p className="text-gray-600 text-sm">Work completed with responsibility.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Users className="text-yellow-500 w-6 h-6" />
              <div>
                <h4 className="font-bold text-gray-900">Customer Focused</h4>
                <p className="text-gray-600 text-sm">Clear communication and support.</p>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block mt-10 bg-black text-yellow-500 border border-yellow-500 px-8 py-4 font-bold uppercase rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default About