import { useState } from "react"
import emailjs from "@emailjs/browser"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
} from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus("success")
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-black py-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-8 items-stretch">
          <div className="bg-[#151515] border border-yellow-500/10 rounded-3xl p-5 md:p-6 shadow-2xl">
            <p className="text-yellow-500 uppercase tracking-[4px] text-xs font-bold">
              Contact Us
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Get Your Free Quote Today
            </h2>

            <p className="text-gray-400 mt-3 max-w-2xl">
              Tell us about your project and we’ll get back to you with a free
              no-obligation quotation.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-3.5 rounded-xl bg-[#222] text-white border border-gray-700 focus:border-yellow-500 outline-none"
                />

                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 rounded-xl bg-[#222] text-white border border-gray-700 focus:border-yellow-500 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 rounded-xl bg-[#222] text-white border border-gray-700 focus:border-yellow-500 outline-none"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-[#222] text-white border border-gray-700 focus:border-yellow-500 outline-none"
                >
                  <option value="">Select Service</option>
                  <option value="Groundwork">Groundwork</option>
                  <option value="Landscaping">Landscaping</option>
                  <option value="Fencing">Fencing</option>
                  <option value="Kitchen Fittings">Kitchen Fittings</option>
                  <option value="Bathroom Fittings">Bathroom Fittings</option>
                  <option value="Flooring">Flooring</option>
                  <option value="Paint & Decorating">Paint & Decorating</option>
                  <option value="Cleaning Services">Cleaning Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full p-4 rounded-xl bg-[#222] text-white border border-gray-700 focus:border-yellow-500 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-yellow-500 text-black py-4 font-bold uppercase rounded-xl hover:bg-yellow-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending Enquiry..." : "Get My Free Quote"}
                {!loading && <Send className="w-5 h-5" />}
              </button>

              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span>✓ Free Quote</span>
                <span>✓ Fast Response</span>
                <span>✓ No Obligation</span>
                <span>✓ Confirmation Email</span>
              </div>

              {status === "success" && (
                <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 mt-1" />
                  <p>
                    Thank you! Your enquiry has been received and a confirmation
                    email has been sent to your inbox.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl">
                  <AlertCircle className="w-5 h-5 mt-1" />
                  <p>
                    Something went wrong. Please check EmailJS settings and try
                    again.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="bg-[#151515] border border-yellow-500/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Contact Details
              </h3>

              <div className="mt-5 space-y-4">
                <a href="tel:+447754661171" className="flex gap-4 group">
                  <Phone className="text-yellow-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-yellow-500 font-bold">
                      Call Us
                    </p>
                    <p className="text-gray-300 group-hover:text-yellow-500 transition">
                      +44 7754 661171
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:vsrconstructionltd@gmail.com"
                  className="flex gap-4 group"
                >
                  <Mail className="text-yellow-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-yellow-500 font-bold">
                      Email
                    </p>
                    <p className="text-gray-300 group-hover:text-yellow-500 transition break-all">
                      vsrconstructionltd@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <MapPin className="text-yellow-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-yellow-500 font-bold">
                      Location
                    </p>
                    <p className="text-gray-300 leading-7">
                      No.1 Bede Road, Coventry,
                      <br />
                      West Midlands, CV6 3BW
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-yellow-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-yellow-500 font-bold">
                      Working Hours
                    </p>
                    <p className="text-gray-300">Monday - Friday</p>
                    <p className="text-gray-300">8:00 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-black/40 rounded-xl p-3 text-gray-300">
                  ✓ Free Quotes
                </div>
                <div className="bg-black/40 rounded-xl p-3 text-gray-300">
                  ✓ Reliable Team
                </div>
                <div className="bg-black/40 rounded-xl p-3 text-gray-300">
                  ✓ Quality Finish
                </div>
                <div className="bg-black/40 rounded-xl p-3 text-gray-300">
                  ✓ Fast Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact