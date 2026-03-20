import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import beforeAfterImg from "@/assets/before-after.jpg";
import servicePolishing from "@/assets/service-polishing.jpg";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-secondary py-20">
        <div className="container-custom px-4 text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-gradient">SDP Services</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Delivering premium floor polishing and restoration services since years
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src={beforeAfterImg}
              alt="Our work"
              className="rounded-2xl shadow-lg w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Shree Dwarka Marble & Floor Polishing (SDP Services), we are dedicated to delivering premium floor polishing and restoration services for both residential and commercial spaces.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in polishing Italian marble, Indian marble, granite, Kota stone, and luxury surfaces using advanced tools and techniques.
              </p>
              <div className="space-y-3">
                {["High-quality polishing", "Affordable & transparent pricing", "Advanced tools & techniques", "Residential & commercial services"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide high-quality, affordable, and long-lasting solutions that enhance the beauty and durability of your floors. We believe every surface tells a story, and our job is to make it shine.
              </p>
            </motion.div>
            <motion.img
              src={servicePolishing}
              alt="Polishing service"
              className="rounded-2xl shadow-lg w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
