import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Product1 from "@/assets/Product1.jpeg";
import Product2 from "@/assets/Product2.jpeg";
import Product3 from "@/assets/Product3.jpeg";
import Product4 from "@/assets/Product4.jpeg";
import Product5 from "@/assets/Product5.jpeg";
import Black from "@/assets/Black.jpg";
import White from "@/assets/White.jpg";

const products = [
  {
    id: 1,
    name: "VR YOUNG - Anti-Aging & Skin Glow",
    description: "Powered by NMN and enriched with powerful antioxidants for youthful skin, strong immunity, and natural cell renewal.",
    image: Product1,
    category: "Anti-Aging",
    benefits: ["Boost Collagen", "Fight Aging", "Restore Glow", "Strengthen Bones", "Better Cell Turnover"],
    price: 50
  },
  {
    id: 2,
    name: "TYGROPLUS - Immunity & Anti-Cancer Support",
    description: "Made with Tiger Milk Mushroom, your go-to supplement for strong immunity, anti-aging, and natural energy.",
    image: Product2,
    category: "Immunity",
    benefits: ["Fights Inflammation", "Strengthens Immune System", "Boosts Energy", "Supports Lung Health", "Reduces Cancer Risk"],
    price: 50
  },
  {
    id: 3,
    name: "BITSULIN - Blood Sugar & Metabolism Support",
    description: "Bitter Melon + Spirulina: Your trusted partner for stable blood sugar. Stay energized, balanced, and naturally healthy.",
    image: Product3,
    category: "Metabolism",
    benefits: ["Supports Organ Health", "Regulates Blood Sugar", "Boosts Metabolism", "Fights Inflammation", "Weight Management"],
    price: 50
  },
  {
    id: 4,
    name: "BIOTOX - Gut Health & Weight Management",
    description: "Psyllium Husk + Food Enzymes: Your daily solution for better digestion & clean gut health!",
    image: Product4,
    category: "Digestive Health",
    benefits: ["Relieves Constipation", "High in Antioxidants", "Lowers Cholesterol", "Improves Digestion", "100% Natural & Vegan"],
    price: 50
  },
  {
    id: 5,
    name: "VR YOUNG - Premium Anti-Aging Formula",
    description: "Advanced anti-aging formula for youthful skin, strong immunity, and natural cell renewal with powerful antioxidants.",
    image: Product5,
    category: "Premium",
    benefits: ["Boost Collagen", "Fight Aging", "Restore Glow", "Strengthen Immunity", "Cell Renewal"],
    price: 50
  },
  {
    id: 6,
    name: "Black T-shirt",
    description: "Stylish unisex black T-shirt with VR branding.",
    image: Black,
    category: "Merchandise",
    benefits: ["Soft Cotton", "Comfort Fit", "Durable Print"],
    price: 10
  },
  {
    id: 7,
    name: "White T-shirt",
    description: "Classic white T-shirt with a clean, minimal design.",
    image: White,
    category: "Merchandise",
    benefits: ["Lightweight", "Breathable", "Perfect for Summer"],
    price: 10
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Health Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Carefully selected supplements to support your wellness journey. Each product is backed by science 
            and formulated with the highest quality natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
                />                
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-semibold">
                    {product.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Price Display Added Here */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">USD</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-card-foreground">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.slice(0, 3).map((benefit, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                    {product.benefits.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.benefits.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in any of these products? Get in touch for more information and pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;