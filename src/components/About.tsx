import { GraduationCap, Target, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 bg-card shadow-card hover:shadow-gold transition-all duration-300 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing an <strong>MBA</strong> at Lovely Professional University (2025–2027) 
                    with a focus on Finance and Marketing. I hold a <strong>B.Tech in Computer Science and Engineering</strong> (2023) 
                    from Lovely Professional University.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-card hover:shadow-gold transition-all duration-300 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Career Objective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To work in a top financial company as a <strong>Finance Manager</strong>, contributing to strategic 
                    financial planning, forecasting, and business development.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-slide-up">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-gold/5 shadow-card border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">My Approach</h3>
              </div>
              <p className="text-foreground/90 leading-relaxed text-lg">
                My background in data-driven technologies, combined with my passion for financial management, 
                strategy, and leadership, allows me to approach business challenges{" "}
                <span className="font-semibold text-primary">analytically</span> and{" "}
                <span className="font-semibold text-gold">innovatively</span>.
              </p>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-muted-foreground italic">
                  "Bridging the gap between finance and technology to create impactful business solutions."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
