import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-secondary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
      <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
      
    </motion.div>
   
  );
};

export default SectionHeading;
