import { Phone, MessageCircle, ArrowUp } from "lucide-react"
import { Link } from "react-scroll"

function FloatingButtons() {
  const phoneNumber = "+447754661171"
  const whatsappNumber = "447754661171" 

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      <a
        href={`tel:${phoneNumber}`}
        className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center shadow-lg hover:bg-yellow-400 transition"
        aria-label="Call VSR Construction"
      >
        <Phone size={22} />
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-400 transition"
        aria-label="WhatsApp VSR Construction"
      >
        <MessageCircle size={22} />
      </a>

      <Link
        to="home"
        smooth
        duration={500}
        offset={-64}
        className="w-12 h-12 rounded-full bg-black text-yellow-500 border border-yellow-500 flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-black transition cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </Link>
    </div>
  )
}

export default FloatingButtons