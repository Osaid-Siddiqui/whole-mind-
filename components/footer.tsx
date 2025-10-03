"use client"

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Image src="/logo.png" alt="WholeMind Logo" width={60} height={60} className="mb-4" />
            <p className="text-sm leading-relaxed opacity-90">
              Healing the Mind • Nourishing the Soul • Restoring Wholeness
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#providers")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  Our Providers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#faq")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  123 Wellness Way
                  <br />
                  Tampa, FL 33602
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+18135551234" className="opacity-90 hover:opacity-100">
                  (813) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@wholemindhealth.com" className="opacity-90 hover:opacity-100">
                  info@wholemindhealth.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="opacity-90 hover:opacity-100 transition-opacity">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} WholeMind Behavioral Health & Wellness. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            {" • "}
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            {" • "}
            <a href="#" className="hover:underline">
              HIPAA Notice
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
