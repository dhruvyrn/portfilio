import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  const scrollToOrder = () => {
    const element = document.getElementById("order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious Indian cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Flavors that tell{" "}
            <span className="text-gradient">stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Where every dish is a chapter from Mumbai's culinary heritage
          </p>
          <p className="text-lg text-muted-foreground mb-8 italic">
            हर खाने में छुपी है एक कहानी
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-warm text-primary-foreground hover:opacity-90 text-lg"
              onClick={scrollToOrder}
            >
              Order Fresh Hot Food
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="tel:+919108690460">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg w-full sm:w-auto"
              >
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
