import { GraduationCap, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const education = [
    {
      degree: "B.E in Computer Science and Engineering",
      institution: "HKBK College of Engineering",
      period: "2022–2026",
      status: "Current"
    },
    {
      degree: "Higher Secondary (HS)",
      institution: "Garh Bhawanipur R.P. Institution",
      period: "2020–2022",
      status: "Completed"
    },
    {
      degree: "Secondary",
      institution: "Garh Bhawanipur R.P. Institution",
      period: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming raw data into meaningful insights and driving business decisions through analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Personal Bio */}
            <div className="animate-slide-up">
              <div className="portfolio-card p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Personal Bio</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a dedicated Computer Science Engineering student with a strong passion for data analysis 
                  and business intelligence. My journey in data science has been driven by curiosity and the 
                  desire to solve complex problems through analytical thinking.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With strong foundations in Python, SQL, and data visualization tools, I specialize in 
                  transforming raw data into actionable business insights. My leadership experience and 
                  problem-solving skills complement my technical expertise, enabling me to deliver 
                  comprehensive data solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://drive.google.com/file/d/1spP8HxfV0mbRh9h1nPilOq0KywxDx3Np/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="btn-primary w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </a>

                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Projects
                  </Button>
                </div>
              </div>
            </div> {/* <-- Close Personal Bio card here */}

            {/* Education Timeline */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="portfolio-card p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index !== education.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        {/* Timeline dot */}
                        <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                          edu.status === 'Current' ? 'bg-primary' : 'bg-muted'
                        }`}></div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                            <span className={`text-sm px-2 py-1 rounded-full ${
                              edu.status === 'Current' 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-muted/50 text-muted-foreground'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground font-medium">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}