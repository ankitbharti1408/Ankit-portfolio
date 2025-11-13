import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
    background: "var(--gradient-hero)"
  }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-light rounded-full">
              <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ankit Chhabilal{" "}
              <span className="bg-gradient-to-r from-primary to-blue-soft bg-clip-text text-transparent">
                Bharti
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Finance & Marketing Professional | Data-Driven Problem Solver | Strategic Thinker | Tech-Driven Innovator | Growth-Oriented Professional
            </p>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experienced in finance, marketing, strategy, innovation, and leadership, with a strong foundation in computer science engineering and specialization in data science and full stack development. Focused on integrating financial expertise with technology to drive sustainable business growth and strategic advancement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-soft hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-card" onClick={() => scrollToSection("#portfolio")}>
                View Portfolio
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all" onClick={() => scrollToSection("#contact")}>
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-gold border-4 border-primary/20">
                <img src={profilePhoto} alt="Ankit Chhabilal Bharti - Professional Profile" className="w-full h-full object-cover object-[center_20%] scale-110" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-gold animate-bounce">
                <span className="text-3xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>;
};
export default Hero;