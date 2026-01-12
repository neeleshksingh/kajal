import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  const scrollToJourney = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Our love story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: "100%",
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{
              y: "-20%",
              x: `${Math.random() * 100}%`
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <Heart className="w-8 h-8 fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-rose fill-rose" />
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4">
            <span className="block">Our Love</span>
            <span className="text-gradient-romantic font-medium">Story</span>
          </h1>

          <motion.p
            className="font-sans text-lg md:text-xl text-black max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A journey of two hearts becoming one, filled with beautiful moments,
            endless laughter, and unconditional love.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="font-serif text-2xl md:text-3xl italic text-foreground">You</span>
            <Heart className="w-5 h-5 text-rose fill-rose animate-heart-beat" />
            <span className="font-serif text-2xl md:text-3xl italic text-foreground">& Me</span>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToJourney}
          className="flex flex-col items-center gap-2 mx-auto text-muted-foreground hover:text-rose transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-sm font-sans uppercase tracking-widest">Explore Our Journey</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
