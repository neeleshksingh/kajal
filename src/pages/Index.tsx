import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import QuotesSection from "@/components/QuotesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <JourneyTimeline />
      <div id="gallery">
        <PhotoGallery />
      </div>
      <div id="quotes">
        <QuotesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
