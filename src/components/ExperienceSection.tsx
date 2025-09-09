import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "Shadowfox",
      period: "Aug 1, 2025 – Sept 7, 2025",
      type: "Internship",
      description: "Worked on advanced data science projects focusing on machine learning algorithms and predictive modeling. Collaborated with senior data scientists to develop innovative solutions for real-world business problems.",
      skills: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Data Modeling"],
      status: "Current"
    },
    {
      role: "Data Science Intern",
      company: "YBI Foundation",
      period: "Oct 26, 2024 – Nov 9, 2024",
      type: "Internship",
      description: "Gained hands-on experience in data analysis and visualization. Developed comprehensive data dashboards and performed exploratory data analysis on various datasets to extract meaningful insights.",
      skills: ["Python", "Data Analysis", "Matplotlib", "Seaborn", "Power BI"],
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and internships that have shaped my data science journey
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="portfolio-card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                      <p className="text-lg font-medium text-primary mb-2">{exp.company}</p>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        exp.status === 'Current' 
                          ? 'bg-primary/10 text-primary border-primary/20' 
                          : 'bg-success/10 text-success border-success/20'
                      }`}
                    >
                      {exp.status}
                    </Badge>
                    <Badge variant="outline">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills Used */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 portfolio-card animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div className="text-center p-6 portfolio-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-6 portfolio-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Skills</div>
            </div>
            <div className="text-center p-6 portfolio-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}