import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <Products />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;