import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import servicePolishing from "@/assets/service-polishing.jpg";
import granitePolish from "@/assets/granite-polish.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import deepCleaning from "@/assets/deep-cleaning.jpg";
import kotaStone from "@/assets/kota-stone.jpg";
import carpetCleaning from "@/assets/carpet-cleaning.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import heroMarble from "@/assets/hero-marble.jpg";

const galleryImages = [
  { src: heroMarble, title: "Italian Marble Polishing", category: "Marble" },
  { src: beforeAfterImg, title: "Before & After", category: "Restoration" },
  { src: servicePolishing, title: "Professional Polishing", category: "Marble" },
  { src: granitePolish, title: "Granite Finish", category: "Granite" },
  { src: hotelLobby, title: "Hotel Lobby", category: "Commercial" },
  { src: deepCleaning, title: "Deep Cleaning", category: "Cleaning" },
  { src: kotaStone, title: "Kota Stone Restoration", category: "Restoration" },
  { src: carpetCleaning, title: "Carpet Cleaning", category: "Cleaning" },
];

const categories = ["All", "Marble", "Granite", "Restoration", "Commercial", "Cleaning"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <div>
      <section className="bg-secondary py-20">
        <div className="container-custom px-4 text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-gradient">Gallery</span>
          </motion.h1>
          <p className="text-secondary-foreground/70">Our Work Speaks for Itself</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading subtitle="Portfolio" title="Explore Our Work" description="See the transformation in our before & after polishing projects" />

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((img) => (
                <motion.div
                  key={img.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <img src={img.src} alt={img.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-secondary-foreground font-heading text-xl font-bold">{img.title}</h3>
                      <span className="text-primary text-sm">{img.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
