import { ArrowRight, Download, Github, Linkedin, Mail, Code, Database, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profileImage from '@/assets/profile-image.jpg';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 hero-grid-bg opacity-30"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-particle w-2 h-2 top-1/4 left-1/4 animate-float"></div>
        <div className="hero-particle w-1 h-1 top-1/3 right-1/3 animate-bounce-slow"></div>
        <div className="hero-particle w-3 h-3 bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="hero-particle w-1.5 h-1.5 top-1/2 right-1/4 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating Cards */}
      <div className="absolute top-32 right-10 floating-skill-card animate-bounce-slow hidden lg:block">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Code className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-semibold text-card-foreground">Python Expert</span>
        </div>
      </div>

      <div className="absolute top-1/3 left-10 floating-skill-card animate-float hidden lg:block">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Database className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-semibold text-card-foreground">SQL Specialist</span>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-20 floating-skill-card animate-bounce-slow hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-semibold text-card-foreground">Data Visualization</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-20 floating-skill-card animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-semibold text-card-foreground">ML & AI</span>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-12 animate-fade-in">
            <div className="relative profile-glow w-48 h-48 mx-auto mb-8">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-primary/10 p-1.5 backdrop-blur-sm border border-white/20">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src={profileImage} 
                    alt="SK Saminoor Hossain - Data Analyst" 
                    className="object-cover w-full h-full rounded-full shadow-2xl"
                  />
                  <AvatarFallback className="w-full h-full rounded-full bg-gradient-to-br from-primary-light via-primary to-primary-dark flex items-center justify-center text-primary-foreground text-5xl font-bold shadow-2xl">
                    SK
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* Floating indicators */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-white animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary rounded-full animate-bounce-slow"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-foreground leading-tight">
                <span className="text-gradient bg-gradient-to-r from-primary via-primary-dark to-primary-light bg-clip-text text-transparent">
                  SK SAMINOOR
                </span>
                <br />
                <span className="text-foreground/90 text-5xl md:text-7xl">HOSSAIN</span>
              </h1>
            </div>
            
            {/* Tagline with animated background */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl"></div>
              <p className="relative text-2xl md:text-3xl text-primary font-semibold mb-2 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-primary/20">
                <span className="text-gradient bg-gradient-to-r from-primary via-primary-dark to-primary-light bg-clip-text text-transparent">Data Analyst</span> & <span className="text-primary-light">Aspiring Data Scientist</span>
              </p>
            </div>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Python', 'SQL', 'Data Visualization', 'Machine Learning'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-secondary/80 backdrop-blur-sm text-muted-foreground rounded-full text-sm font-medium border border-border/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Passionate about working with <span className="text-primary font-semibold">raw data</span> and transforming it into 
              <span className="text-primary font-semibold"> actionable business insights</span>. 
              Building the future through data-driven decisions and innovative analytics solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group relative px-10 py-4 text-lg rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <a
                href="https://drive.google.com/file/d/1spP8HxfV0mbRh9h1nPilOq0KywxDx3Np/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button 
                  variant="outline"
                  className="px-10 py-4 text-lg rounded-2xl border-2 border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm bg-white/5 font-semibold transition-all duration-300 hover:border-primary hover:scale-105 w-full"
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 mb-12">
              {[
                { href: "mailto:sksaminoor25@gmail.com", icon: Mail, label: "Email", color: "hover:bg-red-500" },
                { href: "https://linkedin.com/in/sk-saminoor-4a20a2331", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                { href: "https://github.com/SkSaminoor1", icon: Github, label: "GitHub", color: "hover:bg-gray-800" }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`group relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-primary/50 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center animate-bounce-slow">
              <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
              <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}