import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import dalMakhani from "@/assets/dal-makhani.jpg";
import pavBhaji from "@/assets/pav-bhaji.jpg";
import gulabJamun from "@/assets/gulab-jamun.jpg";

const specialties = [
  {
    name: "Dadi's Dal Makhani",
    hindi: "दादी की दाल मखनी",
    story:
      "Slow-cooked for 8 hours with love, just like our grandmother made it every Sunday. The secret? A pinch of kasuri methi at the perfect moment.",
    image: dalMakhani,
  },
  {
    name: "Mumbai Street Pav Bhaji",
    hindi: "मुंबई की पाव भाजी",
    story:
      "Inspired by the street vendors of Juhu Beach. We use 7 vegetables and our special masala blend that took 3 generations to perfect.",
    image: pavBhaji,
  },
  {
    name: "Celebration Gulab Jamun",
    hindi: "गुलाब जामुन",
    story:
      "Made with khoya from our trusted dairy partner. Soft, sweet, and soaked in rose-cardamom syrup. No celebration is complete without these!",
    image: gulabJamun,
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-20 pattern-paisley">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-accent h-6 w-6" />
            <h2 className="text-4xl md:text-5xl font-bold">Our Specialties</h2>
            <Sparkles className="text-accent h-6 w-6" />
          </div>
          <p className="text-xl text-muted-foreground">
            Dishes with stories that warm the heart
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((dish, idx) => (
            <Card
              key={idx}
              className="hover-lift overflow-hidden border-border animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {dish.name}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-3">
                  {dish.hindi}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {dish.story}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
