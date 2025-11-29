import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";

const Order = () => {
  const phoneNumber = "+919108690460";
  const whatsappNumber = "919108690460";

  return (
    <section id="order" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Order Fresh Hot Food Now!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Call us or order through your favorite delivery app
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-primary-foreground/20 bg-card/95 hover-lift">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Call for Fresh Orders</h3>
                <p className="text-muted-foreground mb-4">
                  तुरंत गरम खाना चाहिए? हमें कॉल करें!
                </p>
                <a href={`tel:${phoneNumber}`}>
                  <Button
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-foreground/20 bg-card/95 hover-lift">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">WhatsApp Us</h3>
                <p className="text-muted-foreground mb-4">
                  Quick queries? Message us on WhatsApp
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi! I'd like to order from Spice Stories`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    WhatsApp Order
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card/95 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Order via Delivery Apps</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="bg-background hover:bg-muted"
              >
                Swiggy
              </Button>
              <Button
                variant="outline"
                className="bg-background hover:bg-muted"
              >
                Zomato
              </Button>
              <Button
                variant="outline"
                className="bg-background hover:bg-muted"
              >
                Dunzo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Payment Options: UPI, Cards, Cash on Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
