import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer id="about" className="bg-[#111] text-gray-400 py-20 relative overflow-hidden">
    {/* Decorative blur */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#6d519d]/20 to-transparent blur-[100px] pointer-events-none"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-white px-4 py-2 rounded-2xl inline-block w-fit shadow-lg shadow-white/5">
            <Logo />
          </div>
          <p className="text-gray-400 font-light leading-relaxed">
            Experience the perfect blend of traditional Ayurvedic healing and modern wellness in a luxurious environment for you and your baby.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#51C4D3] hover:text-white transition-all hover:scale-110 border border-white/5 group">
              <svg className="w-4 h-4 fill-current group-hover:text-white text-gray-400 transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#51C4D3] hover:text-white transition-all hover:scale-110 border border-white/5 group">
              <svg className="w-4 h-4 fill-current group-hover:text-white text-gray-400 transition-colors" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#51C4D3] hover:text-white transition-all hover:scale-110 border border-white/5 group">
              <svg className="w-4 h-4 fill-current group-hover:text-white text-gray-400 transition-colors" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 font-light">
            <li><Link href="/#home" className="hover:text-[#51C4D3] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"/> Home</Link></li>
            <li><Link href="/services" className="hover:text-[#51C4D3] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"/> Services</Link></li>
            <li><Link href="/moments" className="hover:text-[#51C4D3] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"/> Moments</Link></li>
            <li><Link href="/packages" className="hover:text-[#51C4D3] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"/> Packages</Link></li>
            <li><Link href="/career" className="hover:text-[#51C4D3] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"/> Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Our Specialities</h4>
          <ul className="space-y-4 font-light">
            <li><Link href="/services" className="hover:text-[#6d519d] transition-colors">General Packages</Link></li>
            <li><Link href="/services" className="hover:text-[#6d519d] transition-colors">Special Packages</Link></li>
            <li><Link href="/services" className="hover:text-[#6d519d] transition-colors">Fertility Management</Link></li>
            <li><Link href="/services" className="hover:text-[#6d519d] transition-colors">Women Wellness</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
          <ul className="space-y-4 font-light">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#51C4D3]/10 flex items-center justify-center shrink-0 mt-0.5"><MapPin className="w-4 h-4 text-[#51C4D3]" /></div>
              <span>Near Nayara Petrol Station,<br/>Tanah Mampad, Nilambur,<br/>Kerala 676542</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#51C4D3]/10 flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-[#51C4D3]" /></div>
              <span>+91 99462 23233</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#51C4D3]/10 flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-[#51C4D3]" /></div>
              <span>tenderblissgroup@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-light text-gray-500">© {new Date().getFullYear()} TenderBliss Postnatal Wellness Centre. All rights reserved.</p>
        <div className="flex gap-6 text-sm font-light text-gray-500">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);
