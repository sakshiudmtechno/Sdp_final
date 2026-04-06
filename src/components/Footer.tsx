import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="SDP Services" className="h-14 mb-4" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Premium marble & floor polishing services in Bangalore. Bringing surfaces back to life with precision & perfection.
            </p>

            {/* Social Icons Added */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/shreedwarkapolishing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/shreedwarkapolishingservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-heading text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Reviews", path: "/reviews" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-heading text-lg mb-4">Our Services</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <p>Italian Marble Polishing</p>
              <p>Granite Polishing</p>
              <p>Kota Stone Polishing</p>
              <p>Deep Cleaning</p>
              <p>Floor Restoration</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-heading text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <a href="tel:+917267849960" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +91 7267849960
              </a>
              <a href="tel:+918494858565" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +91 8494858565
              </a>
              <a href="mailto:info@sdpservices.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@sdpservices.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-9 h-10 text-primary mt-0.5" />
                <span>Konnena Agrahara, Murugesh Palya Bengaluru – 560017 Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 py-6 text-sm text-secondary-foreground/50">
  <div className="container-custom px-4 flex items-center justify-center gap-2">
    <span>© {new Date().getFullYear()} SDP Services. All Rights Reserved.</span>
    <span>|</span>
    <span>Develop By UDM❤️</span>
  </div>
</div>
    </footer>
  );
};

export default Footer;