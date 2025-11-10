import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up">
          <Card className="p-8 bg-card shadow-card hover:shadow-gold transition-all duration-300 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 h-16 rounded-xl bg-blue-light flex items-center justify-center flex-shrink-0 shadow-soft">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Full Stack Developer – Intern
                  </h3>
                  <p className="text-xl font-semibold text-primary mb-3">
                    Broadridge Financial Solutions
                  </p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">August 2022 – August 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Internship</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <p className="text-foreground/80 leading-relaxed">
                      Developed, tested, and maintained software applications using{" "}
                      <span className="font-semibold text-primary">Java, SQL, React</span>, 
                      and database technologies.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <p className="text-foreground/80 leading-relaxed">
                      Gained exposure to financial systems and proxy management solutions, 
                      enhancing both <span className="font-semibold text-primary">technical</span> and{" "}
                      <span className="font-semibold text-gold">analytical skills</span>.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {["Java", "SQL", "React", "ANT", "Maven", "Financial Systems"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-light text-primary text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
