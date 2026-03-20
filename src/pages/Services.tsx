import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import servicePolishing from "@/assets/service-polishing.jpg";
import granitePolish from "@/assets/granite-polish.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import deepCleaning from "@/assets/deep-cleaning.jpg";
import kotaStone from "@/assets/kota-stone.jpg";
import carpetCleaning from "@/assets/carpet-cleaning.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import heroMarble from "@/assets/hero-marble.jpg";

const services = [
  { title: "Italian Marble Polishing in Bangalore", desc: "Expert polishing to restore shine and smoothness of Italian marble. We use diamond polishing pads and professional-grade compounds.", img: servicePolishing },
  { title: "Indian Marble Polishing", desc: "Enhance durability and restore the natural look of traditional marble flooring with our expert techniques.", img: beforeAfterImg },
  { title: "Granite Polishing Services", desc: "Long-lasting glossy finish for granite surfaces. We handle all types of granite with precision.", img: granitePolish },
  { title: "Kota Stone Polishing", desc: "Bring back the natural texture and elegance of Kota stone floors with professional care.", img: kotaStone },
  { title: "Luxury Marble Polishing", desc: "Premium polishing for high-end marble surfaces in luxury homes and commercial properties.", img: heroMarble },
  { title: "Floor Maintenance (Hotel & Office)", desc: "Keep your commercial spaces clean, shiny, and professional with regular maintenance.", img: hotelLobby },
  { title: "Deep Cleaning Services in Bangalore", desc: "Professional cleaning for homes and offices. Complete hygiene solutions.", img: deepCleaning },
  { title: "Carpet Cleaning", desc: "Remove stains, dirt, and odor with our professional deep carpet cleaning service.", img: carpetCleaning },
];

const Services = () => {
  return (
    <div>
      <section className="bg-secondary py-20">
        <div className="container-custom px-4 text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Marble & Floor Polishing Services in Bangalore
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading subtitle="What We Do" title="Complete Floor Care Solutions" description="We offer complete floor care solutions tailored to your needs" />
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:direction-rtl" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                  <img src={service.img} alt={service.title} className="rounded-2xl shadow-lg w-full h-72 object-cover" />
                </div>
                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <a
                    href="https://wa.me/917267849960"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
