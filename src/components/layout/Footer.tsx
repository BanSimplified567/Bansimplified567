import { Link } from "@tanstack/react-router";
import {
    Clock,
    Coffee,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-[#2a1a12] text-[#f5e5d2]">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-[#c79a6b]" />
              <h3 className="text-xl font-semibold tracking-wide">
                Isla Del Cafe
              </h3>
            </div>

            <p className="text-sm text-[#e4d1bb] leading-relaxed">
              Your tropical coffee escape in the Heritage City of the South —
              handcrafted brews in a warm island atmosphere.
            </p>

            <div className="flex gap-4 mt-5">
              <a
                href="https://www.facebook.com/isladelcafe.ph/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#c79a6b] transition"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/isladelcafe.ph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#c79a6b] transition"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#c79a6b] inline-block pb-1">
              Recent Blog
            </h3>
            <ul className="space-y-2 mt-3 text-sm">
              {[
                "Isla Del Cafe Grand Opening - Feb 20, 2025",
                "Carcar City are you ready? - Feb 11, 2025",
                "Hello April - Apr 1, 2025",
                "Free Drinks Giveaway - May 20, 2025",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/about"
                    className="hover:text-[#c79a6b] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#c79a6b] inline-block pb-1">
              Our Services
            </h3>
            <ul className="space-y-2 mt-3 text-sm">
              {["Specialty Coffee", "Fresh Pastries", "Private Events", "Custom Blends"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/contact"
                      className="hover:text-[#c79a6b] transition"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#c79a6b] inline-block pb-1">
              Have a Question?
            </h3>
            <ul className="space-y-3 text-sm mt-3">

              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-[#c79a6b]" />
                <span>Cogon, Poblacion 1, Carcar City</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#c79a6b]" />
                <a href="tel:+639751883932" className="hover:text-[#c79a6b] transition">
                  0975 188 3932
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-[#c79a6b]" />
                <a
                  href="mailto:isladelcafecarcar@gmail.com"
                  className="hover:text-[#c79a6b] transition"
                >
                  isladelcafecarcar@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="text-[#c79a6b]" />
                <span>Mon–Fri: 11:00 AM – 11:00 PM</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#3c2a21] mt-12 pt-6 text-center text-sm text-[#d6c1a4]">
          © {currentYear} Isla Del Cafe. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
