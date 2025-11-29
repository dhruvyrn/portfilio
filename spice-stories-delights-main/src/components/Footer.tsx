import { Facebook, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Spice Stories
            </h3>
            <p className="text-secondary-foreground/80 text-sm">
              Proudly serving Mumbai since 2010 <br />
              मुंबई का स्वाद, दिल से
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("specialties")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Our Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Popular Items</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Dal Makhani</li>
              <li>Butter Chicken</li>
              <li>Mumbai Pav Bhaji</li>
              <li>Biryani Special</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/dhruvyrn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Follow us for daily specials! <br />
              रोज़ का स्पेशल देखें
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 fill-accent text-accent" /> in
            Mumbai © {currentYear} Spice Stories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
