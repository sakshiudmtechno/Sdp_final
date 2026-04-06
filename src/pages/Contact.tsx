import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917267849960?text=${text}`, "_blank");
  };

  return (
    <div>
      <section className="bg-secondary py-20">
        <div className="container-custom px-4 text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <p className="text-secondary-foreground/70">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                <a href="tel:+917267849960" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-semibold">+91 7267849960</p>
                  </div>
                </a>

                <a href="tel:+918494858565" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-semibold">+91 8494858565</p>
                  </div>
                </a>

                <a href="mailto:info@sdpservices.com" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-semibold">info@sdpservices.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-semibold">
                      Konnena Agrahara, Murugesh Palya Bengaluru – 560017 Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <a
                  href="tel:+917267849960"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/917267849960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* form fields unchanged */}
                  {/* ... (same as your original) */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" /> Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* ✅ Google Map Added Here */}
          <div className="mt-16">
  <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
    <iframe
      src="https://www.google.com/maps?q=Konena%20Agrahara%2C%20Murugeshpalya%2C%20Bengaluru%20560017&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      title="SDP Services Location Map"
    />
  </div>
</div>
        </div>
      </section>
    </div>
  );
};

export default Contact;