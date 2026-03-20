import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917267849960?text=Hi%2C%20I%20need%20marble%20polishing%20service"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.854.18-1.968.324-5.72-1.23-4.802-1.988-7.894-6.856-8.132-7.174-.228-.318-1.922-2.558-1.922-4.878s1.216-3.462 1.648-3.934c.39-.426.914-.596 1.216-.596.152 0 .29.008.414.014.432.018.648.044.932.722.356.848 1.22 2.98 1.326 3.198.108.218.216.514.068.812-.138.306-.258.496-.478.762-.218.268-.428.472-.648.762-.198.252-.422.522-.178.952.244.424 1.084 1.788 2.328 2.896 1.598 1.424 2.944 1.866 3.362 2.072.338.166.742.138.992-.122.318-.33.71-.878 1.108-1.42.284-.388.642-.436 1.014-.292.378.138 2.394 1.128 2.804 1.334.41.206.682.308.782.478.098.17.098.984-.292 2.084z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
