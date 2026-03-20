import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground text-xs sm:text-sm py-2 border-b border-secondary-foreground/10">
        <div className="container-custom flex justify-center sm:justify-between items-center px-4 gap-3 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="tel:+918494858565" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>+91 84948 58565</span>
            </a>
            <a href="tel:+917267849960" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>7267849960</span>
            </a>
          </div>
          <a href="mailto:info@sdpservices.com" className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>info@sdpservices.com</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
        <div className="container-custom flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SDP Services" className="h-12 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="tel:+917267849960"
            className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-secondary-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-secondary overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-secondary-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="tel:+917267849960"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm justify-center mt-4"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
