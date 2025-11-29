import spicesBg from "@/assets/spices-bg.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 pattern-paisley">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              At Spice Stories, we bring three generations of family recipes to life. 
              From our grandmother's secret garam masala to the vibrant street food of Mumbai, 
              every dish carries the warmth of home cooking and the soul of our city.
            </p>
            <p className="text-lg mb-4 leading-relaxed italic text-secondary">
              हमारी दादी की रसोई से, सीधे आपकी थाली तक। <br />
              <span className="text-sm text-muted-foreground">
                (From our grandmother's kitchen, straight to your plate)
              </span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Perfect for your next Marine Drive picnic or a cozy family dinner at home. 
              We celebrate Mumbai's food culture with every meal we serve.
            </p>
          </div>
          
          <div className="relative">
            <img
              src={spicesBg}
              alt="Traditional Indian spices"
              className="rounded-lg shadow-warm hover-lift w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
