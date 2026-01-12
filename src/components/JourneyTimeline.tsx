import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Star } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: "heart" | "calendar" | "location" | "star";
}

const events: TimelineEvent[] = [
  {
    date: "The Beginning",
    title: "When We First Met",
    description: "That magical moment when our eyes met and everything changed. Little did we know, this was the start of something beautiful.",
    icon: "heart"
  },
  {
    date: "First Date",
    title: "Coffee & Conversations",
    description: "Hours felt like minutes as we talked about everything and nothing. The world around us faded away.",
    icon: "calendar"
  },
  {
    date: "Adventures",
    title: "Exploring Together",
    description: "From spontaneous road trips to quiet evenings at home, every moment with you became an adventure worth remembering.",
    icon: "location"
  },
  {
    date: "Forever",
    title: "Building Our Future",
    description: "Every day with you is a gift. Here's to countless more memories, laughter, and love that grows stronger with time.",
    icon: "star"
  }
];

const iconMap = {
  heart: Heart,
  calendar: Calendar,
  location: MapPin,
  star: Star
};

const JourneyTimeline = () => {
  return (
    <section id="journey" className="py-24 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our <span className="text-gradient-romantic">Journey</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Every love story is beautiful, but ours is my favorite
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose via-gold to-rose" />

          {events.map((event, index) => {
            const Icon = iconMap[event.icon];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-gradient-card p-6 rounded-lg shadow-romantic hover:shadow-gold transition-shadow duration-300">
                    <span className="inline-block font-sans text-xs uppercase tracking-widest text-rose mb-2">
                      {event.date}
                    </span>
                    <h3 className="font-serif text-2xl text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-rose to-gold flex items-center justify-center shadow-romantic"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
