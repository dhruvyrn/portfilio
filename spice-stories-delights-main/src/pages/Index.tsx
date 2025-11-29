import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import Order from "@/components/Order";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Specialties />
        <Testimonials />
        <Order />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
