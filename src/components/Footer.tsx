import { Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">Esther Ndiwa</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner in health and wellness. Providing premium supplements 
              for a healthier, more vibrant life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="text-muted-foreground">+254 718 854 990</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="text-muted-foreground">estherndiwa@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Esther Ndiwa. Made with <Heart className="h-4 w-4 text-accent fill-current" /> for your wellness journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;