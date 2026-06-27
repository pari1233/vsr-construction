import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    review:
      "Professional workmanship from start to finish. The team completed our project on time and the quality exceeded our expectations.",
  },
  {
    name: "Sarah Williams",
    role: "Property Owner",
    review:
      "Very reliable and easy to work with. Communication was excellent throughout the entire project.",
  },
  {
    name: "David Brown",
    role: "Customer",
    review:
      "Outstanding attention to detail and high-quality workmanship. I would highly recommend VSR Construction Ltd.",
  },
]

function Testimonials() {
  return (
    <section
      className="bg-gradient-to-b from-[#f8f8f8] to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-yellow-500 uppercase tracking-[4px] text-sm font-bold">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            Customer satisfaction is at the heart of everything we do.
            Here is what our clients have to say about working with VSR Construction Ltd.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                border
                border-gray-100
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed text-lg">
                "{testimonial.review}"
              </p>

              {/* Client */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-yellow-500 font-medium text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">

          <div className="text-center">
            <h3 className="text-5xl font-extrabold text-yellow-500">
              20+
            </h3>
            <p className="text-gray-600 mt-2">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-extrabold text-yellow-500">
              250+
            </h3>
            <p className="text-gray-600 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-extrabold text-yellow-500">
              100%
            </h3>
            <p className="text-gray-600 mt-2">
              Client Satisfaction
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-extrabold text-yellow-500">
              24/7
            </h3>
            <p className="text-gray-600 mt-2">
              Customer Support
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Testimonials