import { Trophy, Award, Users, GraduationCap, Medal, TrendingUp, Clock, Code, Coffee, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "ProxyEdge Migration Lead",
      description: "Led the successful migration of ProxyEdge, resulting in a 75% increase in operational efficiency",
      color: "gold",
    },
    {
      icon: Clock,
      title: "ITSM Process Optimization",
      description: "Streamlined ITSM ticket creation processes, reducing resolution times by 80%",
      color: "primary",
    },
    {
      icon: Medal,
      title: "National-Level Cricket Tournament",
      description: "Represented state at prestigious national sports competition",
      color: "gold",
    },
    {
      icon: Users,
      title: "Founded Triple T Club",
      description: "Established student club for peer learning and career development",
      color: "primary",
    },
    {
      icon: Award,
      title: "Best Student Leader",
      description: "Recognized for outstanding leadership and contribution to student community",
      color: "gold",
    },
    {
      icon: GraduationCap,
      title: "Certified in Financial Management",
      description: "Professional certification in financial analysis and strategic planning",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Data Analytics Certification",
      description: "Advanced certification in data science and analytics tools",
      color: "gold",
    },
    {
      icon: Code,
      title: "Python Training – Coding Ninjas",
      description: "Gained hands-on experience in Python programming, covering fundamentals, data structures, and real-world problem-solving through practical assignments and projects",
      color: "primary",
    },
    {
      icon: Coffee,
      title: "Java Training – Cipher School",
      description: "Completed comprehensive training in Java covering object-oriented programming, exception handling, collections, and GUI development",
      color: "gold",
    },
    {
      icon: GitBranch,
      title: "GitHub & Version Control – Microsoft Student Partners",
      description: "Learned efficient code management using Git and GitHub, including version control concepts, branching, pull requests, and collaborative development practices",
      color: "primary",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-dark text-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gold">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-primary mx-auto mb-4" />
          <p className="text-lg text-dark-foreground/80 max-w-2xl mx-auto">
            Establishing credibility through measurable success and recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isGold = achievement.color === "gold";
            
            return (
              <Card
                key={achievement.title}
                className="p-6 bg-dark-foreground/5 backdrop-blur-sm border-2 border-dark-foreground/10 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${isGold ? "bg-gold/10" : "bg-primary/10"} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${isGold ? "text-gold" : "text-primary"}`} />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-dark-foreground group-hover:text-gold transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-dark-foreground/70 leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <Card className="inline-block p-8 bg-gradient-to-r from-gold/10 to-primary/10 border-2 border-gold/20 shadow-gold">
            <p className="text-2xl font-bold text-foreground mb-2">Continuous Growth</p>
            <p className="text-foreground/90">
              Committed to excellence in finance, technology, and leadership
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
