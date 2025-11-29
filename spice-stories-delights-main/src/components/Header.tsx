import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gradient">
              Spice Stories
            </h1>
            <span className="hidden md:inline text-sm text-muted-foreground">
              मसालों की कहानियाँ
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("specialties")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Specialties
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              className="bg-gradient-warm text-primary-foreground hover:opacity-90"
              onClick={() => scrollToSection("order")}
            >
              Order Now
            </Button>
            <a href="tel:+919108690460">
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3 animate-slide-up">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("specialties")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Specialties
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              className="bg-gradient-warm text-primary-foreground w-full"
              onClick={() => scrollToSection("order")}
            >
              Order Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
