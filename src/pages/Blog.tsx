import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import granitePolish from "@/assets/granite-polish.jpg";
import servicePolishing from "@/assets/service-polishing.jpg";
import kotaStone from "@/assets/kota-stone.jpg";
import deepCleaning from "@/assets/deep-cleaning.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const blogPosts = [
  {
    id: "marble-polishing-guide",
    title: "Complete Guide to Marble Polishing: Tips & Techniques",
    excerpt: "Learn everything about marble polishing – from understanding different marble types to choosing the right polishing method for a lasting shine.",
    image: servicePolishing,
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Marble Care",
    content: [
      "Marble floors are a symbol of luxury and elegance. However, over time, they can lose their shine due to foot traffic, spills, and general wear and tear. Professional marble polishing can restore that pristine look.",
      "There are two main types of marble polishing: diamond polishing and crystallization. Diamond polishing uses industrial diamond pads to grind the surface, removing scratches and stains. Crystallization involves applying a chemical compound that reacts with the marble to create a hard, glossy surface.",
      "For Italian marble, we recommend diamond polishing as it provides a deeper, more natural shine. Indian marble responds well to both methods. The key is to use the right grit sequence – starting from coarse (50 grit) and working up to fine (3000+ grit).",
      "Regular maintenance is crucial. Sweep daily, mop with a pH-neutral cleaner weekly, and schedule professional polishing every 12-18 months to keep your marble floors looking their best.",
    ],
  },
  {
    id: "granite-vs-marble",
    title: "Granite vs Marble: Which is Better for Your Home?",
    excerpt: "A detailed comparison of granite and marble flooring – durability, maintenance, cost, and aesthetic appeal to help you make the right choice.",
    image: granitePolish,
    date: "March 10, 2026",
    readTime: "4 min read",
    category: "Floor Guide",
    content: [
      "Choosing between granite and marble for your home flooring is a common dilemma. Both are natural stones with unique characteristics.",
      "Granite is harder, more durable, and resistant to scratches and stains. It's ideal for high-traffic areas like kitchens and hallways. Marble, on the other hand, offers unmatched elegance and is softer, making it perfect for living rooms and bathrooms.",
      "In terms of maintenance, granite requires less frequent polishing – once every 2-3 years. Marble needs more attention, with professional polishing recommended every 12-18 months.",
      "Cost-wise, Indian granite is generally more affordable than Italian marble. However, Indian marble offers a good middle ground between cost and elegance.",
    ],
  },
  {
    id: "kota-stone-maintenance",
    title: "How to Maintain Kota Stone Floors: Expert Tips",
    excerpt: "Kota stone is durable and affordable, but it needs proper care. Learn the best maintenance practices to keep your Kota stone floors beautiful.",
    image: kotaStone,
    date: "March 5, 2026",
    readTime: "3 min read",
    category: "Floor Care",
    content: [
      "Kota stone is one of the most popular flooring options in India due to its durability and affordability. However, without proper maintenance, it can look dull and worn.",
      "Regular cleaning with warm water and a mild detergent is essential. Avoid using acidic cleaners as they can damage the stone surface.",
      "For deep cleaning, professional Kota stone polishing involves grinding the surface with diamond pads, followed by sealing to protect against stains and moisture.",
      "Apply a coat of wax or sealant every 6 months to maintain the shine and protect the surface from daily wear.",
    ],
  },
  {
    id: "deep-cleaning-importance",
    title: "Why Deep Cleaning Your Floors Matters for Health",
    excerpt: "Regular mopping isn't enough. Discover why professional deep cleaning is essential for a healthy, hygienic home environment.",
    image: deepCleaning,
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Deep Cleaning",
    content: [
      "Most people underestimate the amount of bacteria, allergens, and dust mites that accumulate in floor surfaces over time. Regular mopping only cleans the surface – it doesn't remove deeply embedded dirt.",
      "Professional deep cleaning uses specialized equipment and cleaning solutions to extract dirt from pores and grout lines that regular cleaning can't reach.",
      "This is especially important for homes with children, elderly family members, or anyone with allergies or respiratory conditions.",
      "We recommend professional deep cleaning at least twice a year for residential spaces and quarterly for commercial spaces like offices and hotels.",
    ],
  },
  {
    id: "hotel-floor-maintenance",
    title: "Hotel & Office Floor Maintenance: Best Practices",
    excerpt: "Commercial spaces need special attention. Learn how hotels and offices keep their floors spotless and professional-looking year-round.",
    image: hotelLobby,
    date: "February 20, 2026",
    readTime: "5 min read",
    category: "Commercial",
    content: [
      "Hotels and offices see thousands of footsteps daily, making floor maintenance a critical aspect of facility management.",
      "A good maintenance schedule includes daily sweeping and mopping, weekly buffing, monthly deep cleaning, and annual professional polishing.",
      "For hotel lobbies with marble flooring, crystallization polishing can provide a quick, impressive shine between major polishing sessions.",
      "Investing in proper entrance mats, using the right cleaning products, and addressing spills immediately can significantly extend the life of your commercial flooring.",
    ],
  },
  {
    id: "before-after-transformation",
    title: "Amazing Floor Transformations: Before & After Stories",
    excerpt: "See real examples of how professional polishing can transform dull, damaged floors into stunning surfaces that look brand new.",
    image: beforeAfter,
    date: "February 15, 2026",
    readTime: "3 min read",
    category: "Case Studies",
    content: [
      "Nothing demonstrates the power of professional floor polishing better than before and after comparisons.",
      "One of our recent projects involved a 20-year-old Italian marble floor in a Bangalore villa. Years of neglect had left it scratched, stained, and dull. After our diamond polishing treatment, the floor was restored to its original glory.",
      "Another memorable project was a hotel lobby with severely damaged granite flooring. We used a combination of grinding, honing, and polishing to achieve a mirror-like finish that impressed both the management and their guests.",
      "These transformations are possible because natural stone, unlike synthetic materials, can be restored multiple times. With proper care and periodic professional polishing, your floors can look stunning for decades.",
    ],
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container-custom px-4 text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-gradient">Blog</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Expert tips, guides, and insights on marble polishing, floor care, and maintenance
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden card-hover group border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { blogPosts };
export default Blog;
