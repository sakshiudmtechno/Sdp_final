import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const reviews = [
  { text: "SDP Services made our marble floors look brand new. Highly professional team!", name: "Rakesh N", location: "Bangalore", rating: 5 },
  { text: "Outstanding work! Our hotel lobby shines like never before.", name: "Ayesha M", location: "Bangalore", rating: 5 },
  { text: "Best granite polishing service in Bangalore. Highly recommended!", name: "Sandeep K", location: "Bangalore", rating: 5 },
  { text: "Very punctual and professional. The marble in our office looks amazing after their service.", name: "Priya R", location: "Bangalore", rating: 5 },
  { text: "Excellent deep cleaning service. Our tiles look like they were just installed!", name: "Arjun S", location: "Bangalore", rating: 5 },
  { text: "Affordable and high-quality work. Will definitely use again for our other properties.", name: "Meera D", location: "Bangalore", rating: 5 },
];

const Reviews = () => {
  return (
    <div>
      <section className="bg-secondary py-20">
        <div className="container-custom px-4 text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Client <span className="text-gradient">Reviews</span>
          </motion.h1>
          <p className="text-secondary-foreground/70">What Our Clients Say</p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="text-secondary-foreground/70 ml-2">Rated on Google</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading subtitle="Testimonials" title="We're Proud of Our Work" description="Satisfied customers across Bangalore trust us for their floor care needs" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                className="bg-card rounded-2xl p-8 card-hover border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
