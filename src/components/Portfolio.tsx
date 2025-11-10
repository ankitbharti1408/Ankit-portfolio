import { Code, Cloud, BarChart3, Calculator, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "ProxyEdge Application",
      period: "Aug 2022 – Aug 2023",
      description: "Developed a proxy management system using Java, ANT, Maven, SQL, and React.",
      impact: "Improved proxy voting tracking and management efficiency.",
      icon: Code,
      tech: ["Java", "React", "SQL", "Maven"],
    },
    {
      title: "Weather App",
      period: "May 2023 – June 2023",
      description: "Built a weather application using ReactJS, HTML, CSS, and API integration.",
      impact: "Provided real-time weather updates for global locations.",
      icon: Cloud,
      tech: ["ReactJS", "API", "CSS"],
    },
    {
      title: "Super Market Sales Analysis",
      period: "Oct 2021 – Dec 2021",
      description: "Analyzed and visualized sales data using Excel and ETL processes.",
      impact: "Enhanced data accuracy and decision-making for business insights.",
      icon: BarChart3,
      tech: ["Excel", "ETL", "Data Viz"],
    },
    {
      title: "Pension Calculator",
      period: "Oct 2020 – Dec 2020",
      description: "Created a Python-MySQL-based pension calculator with GUI.",
      impact: "Simplified computation process, improving service efficiency.",
      icon: Calculator,
      tech: ["Python", "MySQL", "GUI"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demonstrating capability and results through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="p-6 bg-card shadow-card hover:shadow-gold transition-all duration-300 border-l-4 border-primary group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                  </div>
                </div>

                <p className="text-foreground/80 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 p-3 bg-gold/5 border-l-2 border-gold rounded">
                  <p className="text-sm text-foreground/90">
                    <span className="font-semibold text-gold">Impact:</span> {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-light text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary-foreground hover:bg-primary transition-all"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
