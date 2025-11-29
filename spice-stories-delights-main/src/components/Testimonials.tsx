import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The Dal Makhani here reminds me of my mother's cooking. Absolutely divine!",
    hindi: "बिल्कुल घर जैसा स्वाद!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    text: "Best Pav Bhaji in Mumbai! We order from here for all our family gatherings.",
    hindi: "मुंबई में सबसे बढ़िया!",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    text: "The warmth and love in every dish is what makes Spice Stories special. Highly recommended!",
    hindi: "दिल से बनाया हुआ खाना",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Stories from our food family
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="border-border hover-lift animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-secondary font-semibold mb-2">
                  {testimonial.hindi}
                </p>
                <p className="font-semibold text-foreground">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
