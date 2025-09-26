import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import estherImage from "@/assets/esther.jpeg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254718854990", "_blank");
  };

  const handleEmailClick = () => {
    const subject = "PureCare Beauty & Wellness Inquiry";
    const body = "Hello! I'm interested in your health products. Please send me more information.";
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shellyma08@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-glow rounded-full blur-xl animate-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-2xl animate-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-wellness rounded-full blur-lg animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              PureCare <span className="text-accent">Beauty and Wellness</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary-foreground/90 mb-8">
              Pure solutions for a healthier life
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Discover premium health supplements designed to enhance your well-being. 
              From anti-aging solutions to immunity boosters, I provide authentic products 
              that help you live your healthiest life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Me
              </Button>
              <Button 
                onClick={handleEmailClick}
                className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 font-semibold px-8 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-md"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-50 animate-glow"></div>
              <img
                src={estherImage}
                alt="PureCare Beauty and Wellness - Pure solutions for a healthier life"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-glow border-4 border-primary-foreground/20 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;