import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";

const quotes = [
  {
    text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou"
  },
  {
    text: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Roy Croft"
  },
  {
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn"
  }
];

const QuotesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-rose/10">
        <Heart className="w-32 h-32 fill-current animate-pulse-soft" />
      </div>
      <div className="absolute bottom-10 right-10 text-gold/10">
        <Heart className="w-40 h-40 fill-current animate-float" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Words of <span className="text-gradient-romantic">Love</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Beautiful words that speak to the heart
          </p>
        </motion.div>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-card/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-soft hover:shadow-romantic transition-shadow duration-300">
                <Quote className="w-10 h-10 text-rose/30 mb-4" />
                <blockquote className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
                  "{quote.text}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-gradient-to-r from-rose to-gold" />
                  <cite className="font-sans text-sm text-muted-foreground not-italic">
                    {quote.author}
                  </cite>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
