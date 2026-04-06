import { motion } from "framer-motion";
import { useEffect } from "react";
import { Phone, MessageCircle, Star, CheckCircle, Users, Award, ThumbsUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import heroImg from "@/assets/hero-marble.jpg";
import beforeAfterImg from "@/assets/team photo  Marble Polishing .png";
import servicePolishing from "@/assets/service-polishing.jpg";
import granitePolish from "@/assets/granite-polish.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import deepCleaning from "@/assets/deep-cleaning.jpg";
import kotaStone from "@/assets/kota-stone.jpg";
import carpetCleaning from "@/assets/carpet-cleaning.jpg";

const services = [
  { title: "Italian Marble Polishing", desc: "Restore the premium shine and smooth finish of Italian marble with expert care.", img: servicePolishing },
  { title: "Indian Marble Polishing", desc: "Enhance durability and restore the natural look of traditional marble flooring.", img: beforeAfterImg },
  { title: "Granite Polishing", desc: "Get a glossy, long-lasting finish for your granite surfaces.", img: granitePolish },
  { title: "Kota Stone Polishing", desc: "Bring back the natural texture and elegance of Kota stone floors.", img: kotaStone },
  { title: "Luxury Marble Polishing", desc: "Premium polishing for high-end marble surfaces.", img: hotelLobby },
  { title: "Floor Maintenance", desc: "Keep your commercial spaces clean, shiny, and professional.", img: hotelLobby },
  { title: "Deep Cleaning Services", desc: "Complete cleaning solutions for hygienic and spotless spaces.", img: deepCleaning },
  { title: "Carpet Cleaning", desc: "Remove stains, dirt, and odor with deep carpet cleaning.", img: carpetCleaning },
];

const whyChoose = [
  "Experienced & Skilled Team",
  "Advanced Polishing Techniques",
  "Affordable Pricing",
  "On-Time Service",
  "100% Customer Satisfaction",
];

const stats = [
  { icon: ThumbsUp, value: "100%", label: "Customer Satisfaction" },
  { icon: Users, value: "33K+", label: "Happy Clients" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: Star, value: "5★", label: "Trusted by Hotels & Builders" },
];

const testimonials = [
  { text: "SDP Services made our marble floors look brand new. Highly professional team!", name: "Rakesh N", location: "Bangalore" },
  { text: "Outstanding work! Our hotel lobby shines like never before.", name: "Ayesha M", location: "Bangalore" },
  { text: "Best granite polishing service in Bangalore. Highly recommended!", name: "Sandeep K", location: "Bangalore" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {

  // Load Elfsight script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>

      {/* ======= (Hero, About, Services, Why Choose) SAME AS YOUR CODE ======= */}
{/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Polished marble floor" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative z-10 container-custom px-4 py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/30">
              #1 Marble Polishing in Bangalore
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Premium Marble & Floor <span className="text-gradient">Polishing Services</span> in Bangalore
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              Bring back the shine, elegance, and life to your floors with expert polishing and restoration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917267849960"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now for Free Inspection
              </a>
              <a
                href="https://wa.me/917267849960?text=Hi%2C%20I%20need%20a%20free%20quote%20for%20marble%20polishing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Quote on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img
                src={beforeAfterImg}
                alt="Before and after marble polishing"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">About Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bringing Surfaces Back to Life with Precision & Perfection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At SDP Services (Shree Dwarka Marble & Floor Polishing), we specialize in high-quality marble polishing,
                granite polishing, tile polishing, and deep cleaning services across Bangalore.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience and advanced techniques, we restore the natural beauty and shine of your
                floors, making them look brand new again.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="What We Offer"
            description="Complete floor care solutions tailored to your needs"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-card rounded-2xl overflow-hidden card-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading subtitle="Why Choose Us" title="Your Trusted Floor Care Partner" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 bg-secondary-foreground/5 rounded-xl p-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Our Achievements ================= */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading subtitle="Our Achievements" title="Numbers That Speak" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Instagram Feed EXACTLY after Achievements */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div
            className="elfsight-app-3065fe8b-b9ac-4a52-9d49-73ac46cd269d"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* ===== Testimonials, CTA etc SAME AS YOUR CODE ===== */}
 {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading subtitle="Testimonials" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-card rounded-2xl p-8 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={hotelLobby} alt="Polished floor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/90" />
        </div>
        <div className="relative z-10 container-custom px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to <span className="text-gradient">Restore Your Floors?</span>
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Call now and get a free inspection today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917267849960"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7267849960
              </a>
              <a
                href="https://wa.me/917267849960"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Index;