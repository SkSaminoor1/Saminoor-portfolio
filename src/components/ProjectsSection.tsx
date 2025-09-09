import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Driven Virtual Assistant for Desktop",
      description: "Voice-enabled desktop assistant built with Python and machine learning algorithms. Features natural language processing, voice recognition, and automated task execution for enhanced productivity.",
      image: "🤖",
      tags: ["Python", "Machine Learning", "NLP", "Voice Recognition", "AI"],
      type: "AI/ML Project",
      status: "Completed",
      github: "https://github.com/SkSaminoor1/PC-assistant-with-AI.git"
    },
    {
      title: "Road Accident Analysis Dashboard",
      description: "Comprehensive Power BI dashboard analyzing road accident patterns and trends. Provides actionable insights for traffic safety improvements through interactive visualizations and statistical analysis.",
      image: "📊",
      tags: ["Power BI", "Data Analysis", "Dashboard", "Statistical Analysis"],
      type: "Business Intelligence",
      status: "Completed",
      github: "https://github.com/SkSaminoor1/Road-Accident-PowerBi-Dashboard.git"
    },
    {
      title: "E-Commerce Business Insights Dashboard",
      description: "Advanced Power BI dashboard analyzing sales performance and customer behavior patterns. Delivers key metrics for revenue optimization and customer retention strategies.",
      image: "🛒",
      tags: ["Power BI", "Sales Analysis", "Customer Analytics", "KPI Tracking"],
      type: "Business Analytics",
      status: "Completed",
      github: "https://github.com/SkSaminoor1/E-commerce-Performance-Analysis-with-Dashboard.git"
    },
    {
      title: "EDA on Play Store Data",
      description: "Comprehensive exploratory data analysis of Google Play Store app data using Python. Uncovered market trends, app performance patterns, and user preference insights through statistical analysis.",
      image: "📱",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      type: "Data Analysis",
      status: "Completed",
      github: "https://github.com/SkSaminoor1/FE_on_car_sale-Red_winquality.git"
    },
    {
      title: "Car Sales Data Feature Engineering",
      description: "Advanced data preprocessing and feature engineering project for car sales prediction. Implemented machine learning pipelines for predictive modeling and sales forecasting.",
      image: "🚗",
      tags: ["Python", "Feature Engineering", "Predictive Modeling", "Scikit-learn"],
      type: "Machine Learning",
      status: "Completed",
      github: "https://github.com/SkSaminoor1/FE_on_car_sale-Red_winquality.git"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing real-world data science projects that demonstrate my analytical skills and technical expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="portfolio-card p-6 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Project Visual */}
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-3xl">
                    {project.image}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="text-xs border-success text-success"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These projects represent my journey in data science and analytics. 
                I'm always working on new projects and exploring innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">
                  <Github className="mr-2 h-4 w-4" />
                  View All on GitHub
                </Button>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}