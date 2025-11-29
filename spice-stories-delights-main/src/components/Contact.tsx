import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 pattern-paisley">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl text-muted-foreground">
            Come, share a meal and create memories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card className="border-border hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Shop 42, Linking Road, <br />
                      Bandra West, Mumbai 400050 <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a
                      href="tel:+919108690460"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9108690460
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday <br />
                      11:00 AM - 11:00 PM <br />
                      <span className="text-sm italic">
                        रोज़ खुला (Open Daily)
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href="mailto:dhruv.yadav.office@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  dhruv.yadav.office@gmail.com
                </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7426468087436!2d72.82576931490184!3d19.05542958711034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94fa5e5f79f%3A0x1b4f5e5c4e5f7a9c!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spice Stories Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
