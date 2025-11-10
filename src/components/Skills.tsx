import { TrendingUp, Code, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Finance & Business",
      icon: TrendingUp,
      color: "primary",
      skills: [
        "Financial Analysis",
        "Budgeting",
        "Forecasting",
        "Accounting",
        "Marketing",
      ],
    },
    {
      title: "Technical",
      icon: Code,
      color: "gold",
      skills: [
        "Python",
        "SQL",
        "Data Science",
        "Tableau",
        "Power BI",
        "Java",
        "ReactJS",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "primary",
      skills: [
        "Leadership",
        "Team Management",
        "Problem Solving",
        "Communication",
        "Strategic Thinking",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of finance expertise, technical capabilities, and leadership qualities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const bgColor = category.color === "primary" ? "bg-blue-light" : "bg-gold/10";
            const textColor = category.color === "primary" ? "text-primary" : "text-gold";
            const borderColor = category.color === "primary" ? "border-primary" : "border-gold";
            
            return (
              <Card
                key={category.title}
                className="p-6 bg-card shadow-card hover:shadow-gold transition-all duration-300 border-t-4 animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderTopColor: category.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--gold))",
                }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                    <Icon className={`h-8 w-8 ${textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${category.color === "primary" ? "bg-primary" : "bg-gold"}`} />
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
