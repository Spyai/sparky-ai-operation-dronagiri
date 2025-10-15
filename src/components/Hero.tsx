import heroBg from "@/assets/hero-bg.jpg";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur">
              Early Stage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur">
              Agriculture Sector
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur">
              Pilot: Bidar, Karnataka
            </Badge>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Empowering Farmers with AI-Driven Precision Agriculture
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
            Integrating satellite imagery with real-time farm intelligence for sustainable, data-driven farming
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
