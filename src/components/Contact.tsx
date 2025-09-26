import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Facebook } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Quick responses & product inquiries",
      action: "Message on WhatsApp",
      onClick: () => window.open("https://wa.me/254718854990", "_blank"),
      gradient: "from-accent to-accent/80",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed product information", 
      action: "Send Email",
      onClick: () => {
        const subject = "PureCare Beauty & Wellness Inquiry";
        const body = "Hello! I'm interested in your health products. Please send me more information.";
        window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shellyma08@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
      },
      gradient: "from-primary to-primary-glow", // This was outside the object
    }, // This closing brace was missing
    {
      icon: MessageCircle,
      title: "SMS",
      description: "Text for quick questions",
      action: "Send SMS",
      onClick: () => window.location.href = "sms:+254718854990",
      gradient: "from-wellness to-wellness/80",
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Follow for health tips & updates",
      action: "Visit Facebook",
      onClick: () => window.open("https://www.facebook.com/profile.php?id=61578279154615", "_blank"),
      gradient: "from-accent to-primary-glow",
    },
  ];

  // Also update the email in the bottom section to match:
  return (
    <section id="contact" className="py-20 bg-gradient-to-tr from-secondary/20 via-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your wellness journey? Contact me for personalized product recommendations, 
            pricing information, or any questions about our premium health supplements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index}
                className="group border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-card animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  <Button
                    onClick={method.onClick}
                    className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto border-0 shadow-card bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Ready to Transform Your Health?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join thousands of satisfied customers who have chosen premium health supplements for their wellness journey. 
                Contact me today for personalized recommendations and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open("https://wa.me/254718854990", "_blank")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp: +254 718 854 990
                </Button>
                <Button 
                  onClick={() => {
                    const subject = "PureCare Beauty & Wellness Inquiry";
                    const body = "Hello! I'm interested in your health products. Please send me more information.";
                    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shellyma08@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
                  }}
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 font-semibold px-8 py-3 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  shellyma08@gmail.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;