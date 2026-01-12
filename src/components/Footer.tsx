import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-rose fill-rose animate-heart-beat" />
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Forever <span className="text-gradient-romantic">Yours</span>
          </h3>

          <p className="font-sans text-muted-foreground max-w-md mx-auto mb-8">
            Thank you for being my person. Here's to many more chapters in our beautiful story.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <span>for you</span>
          </div>

          <p className="mt-4 text-xs text-muted-foreground/60">
            © {currentYear} Our Love Story
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
