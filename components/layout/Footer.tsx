import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-lg pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-neon flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Peekabooth<span className="text-brand-neon">USA</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-md mb-8">
              Elevating events with premium, immersive photo booth experiences. 
              We blend cutting-edge technology with high-end aesthetics to create 
              unforgettable memories.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-brand-neon transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Packages", "Gallery", "Corporate Events", "Weddings", "FAQ"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={18} className="text-brand-neon shrink-0 mt-1" />
                <span>Los Angeles, CA<br/>Serving Southern California</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={18} className="text-brand-neon shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={18} className="text-brand-neon shrink-0" />
                <span>hello@peekaboothusa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Peekabooth USA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
