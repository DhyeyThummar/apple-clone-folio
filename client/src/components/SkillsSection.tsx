import { Code, Database, TrendingUp, Globe, Smartphone, Brain } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Python",
      description: "Data analysis, machine learning, and backend development with frameworks like Django and Flask.",
      level: 90
    },
    {
      icon: Database,
      title: "SQL",
      description: "Database design, complex queries, and data manipulation across various database systems.",
      level: 85
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Predictive modeling, data preprocessing, and implementing ML algorithms for real-world applications.",
      level: 80
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Statistical analysis, data visualization, and deriving actionable insights from complex datasets.",
      level: 88
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack development with modern frameworks including React, Node.js, and responsive design.",
      level: 82
    },
    {
      icon: Smartphone,
      title: "Flutter",
      description: "Cross-platform mobile app development with beautiful UI and seamless user experiences.",
      level: 75
    }
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="apple-headline text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="apple-body text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills that I've developed through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="apple-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-apple-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-apple-blue/20 transition-colors duration-300">
                <skill.icon className="w-8 h-8 text-apple-blue" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>

                {/* Skill Level */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-medium text-apple-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className="bg-apple-blue h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;