import { 
  Code, 
  Database, 
  BarChart3, 
  Brain,
  FileSpreadsheet,
  GitBranch,
  MessageSquare,
  Target,
  Users,
  Lightbulb
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Data Tools",
      icon: Code,
      skills: [
        { name: "Python", level: 90, tools: "Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn" },
        { name: "SQL", level: 85, tools: "MySQL, PostgreSQL, Query Optimization" },
        { name: "Jupyter Notebook", level: 90, tools: "Interactive Development" }
      ]
    },
    {
      title: "Visualization & BI Tools",
      icon: BarChart3,
      skills: [
        { name: "Tableau", level: 80, tools: "Dashboard Creation, Data Stories" },
        { name: "Power BI", level: 85, tools: "Reports, DAX, Power Query" },
        { name: "Matplotlib & Seaborn", level: 88, tools: "Statistical Plots, Custom Visualizations" }
      ]
    },
    {
      title: "Analytics & Tools",
      icon: Database,
      skills: [
        { name: "Excel", level: 85, tools: "Pivot Tables, VLOOKUP, Power Query" },
        { name: "ETL", level: 75, tools: "Data Pipeline, Transformation" },
        { name: "Google Analytics", level: 70, tools: "Web Analytics, Reporting" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: [
        { name: "Analytical Thinking", level: 90, tools: "Problem Decomposition, Critical Analysis" },
        { name: "Communication", level: 85, tools: "Data Storytelling, Presentations" },
        { name: "Leadership", level: 80, tools: "Team Management, Project Leadership" }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Git", icon: GitBranch },
    { name: "HTML Basics", icon: Code },
    { name: "Problem-Solving", icon: Lightbulb },
    { name: "Team Collaboration", icon: Users }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and tools I use to transform data into actionable insights
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="portfolio-card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-secondary rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-dark h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground">{skill.tools}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="portfolio-card p-6 text-center hover:scale-105 transition-transform">
                  <div className="p-3 bg-primary/10 rounded-lg mx-auto mb-3 w-fit">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Summary Stats */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Programming Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Visualization Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}