import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";
import { blogPosts } from "./Blog";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 max-w-3xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-secondary-foreground/70">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {post.content.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">{para}</p>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-12 bg-secondary rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-3">
              Need Professional Floor Polishing?
            </h3>
            <p className="text-secondary-foreground/70 mb-6">
              Get a free inspection and quote from our expert team today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917267849960"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/917267849960?text=Hi%2C%20I%20read%20your%20blog%20and%20need%20floor%20polishing%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
