import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountUpNumber } from "@/components/CountUpNumber";
import { ProgramModal } from "@/components/ProgramModal";
import { EventCard } from "@/components/EventCard";
import { 
  Users, 
  Target, 
  Calendar, 
  Award, 
  Building2, 
  Lightbulb, 
  TrendingUp, 
  Network,
  BookOpen,
  User,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Menu,
  X,
  MessageCircle,
  Briefcase,
  BarChart3,
  Brain,
  Settings,
  LineChart,
  PieChart
} from "lucide-react";
import { programs, eventsData, faculty, signaturePrograms, navLinks } from "@/lib/data";
import type { Program } from "@/lib/types";

import heroImage from "@/assets/hero-business.jpg";
import innovationImage from "@/assets/innovation-lab.jpg";
import { useScrollDirection } from "@/hooks/useScrollDirection";


const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleProgramClick = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleEventRegister = (eventId: number) => {
    window.open('https://forms.gle/ZBL1p3WJuGoqb4vC7', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden hover-scale">
                <img src="/logo.png" alt="E-Cell AMC Logo" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain rounded-full" draggable="false" />
              </div>
              <span className="text-xl font-bold text-primary">E-Cell AMC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {navLinks.map((link, index) => (
                link.type === 'scroll' ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`nav-link text-sm font-medium text-foreground hover:text-primary transition-colors delay-${index * 100}`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.id}
                    to={link.path || '/'}
                    className={`nav-link text-sm font-medium text-foreground hover:text-primary transition-colors delay-${index * 100}`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 transition-transform duration-300 hover:scale-110 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-slide-down bg-background/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  link.type === 'scroll' ? (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left py-2 px-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.id}
                      to={link.path || '/'}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-left py-2 px-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-24 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <AnimatedSection animation="fadeLeft" className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fostering <span className="gradient-text">Innovation</span> & <span className="text-primary">Entrepreneurship</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The Entrepreneurship Cell of AMC Engineering College - Building tomorrow's entrepreneurs today through mentorship, innovation, and real-world business experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift w-full sm:w-auto">
                  Join Our Community
                </Button>
              </a>
              <Button size="lg" variant="outline" className="hover-scale w-full sm:w-auto" onClick={() => scrollToSection('programs')}>
                Explore Programs
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeRight" delay={0.2} className="px-4 lg:px-0">
            <div className="relative hover-lift">
              <img 
                src={heroImage} 
                alt="Professional business environment" 
                className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is Entrepreneurship Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Lightbulb className="w-5 h-5" />
              <span>Foundation Knowledge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              What is <span className="gradient-text">Entrepreneurship</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the core principles that drive innovation and business creation
            </p>
          </AnimatedSection>

          {/* Main Definition Card */}
          <AnimatedSection animation="scale" delay={0.1} className="mb-12">
            <Card className="card-hover bg-white/80 backdrop-blur-lg border-0 shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="text-center sm:mb-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Entrepreneurship is the process of <span className="text-primary font-semibold">creating, launching, and managing</span> a new venture to solve problems and create value for society.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Key Concepts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <AnimatedSection animation="fadeLeft" delay={0.2}>
              <Card className="card-hover bg-white/70 backdrop-blur-lg border-0 shadow-xl h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Who is an Entrepreneur?</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        An entrepreneur is someone who <span className="text-primary font-medium">identifies opportunities</span>, takes calculated risks, and builds innovative solutions to fulfill market needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Problem solver and innovator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Risk-taker with vision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Value creator for society</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={0.3}>
              <Card className="card-hover bg-white/70 backdrop-blur-lg border-0 shadow-xl h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Business Owner vs Entrepreneur</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                      <div className="font-semibold text-primary mb-1 text-sm sm:text-base">Business Owner</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Manages existing business models for consistent profit and stability</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-accent">
                      <div className="font-semibold text-accent mb-1 text-base">Entrepreneur</div>
                      <div className="text-sm text-muted-foreground">Creates innovative solutions and disrupts markets to generate new value</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Impact & Importance */}
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    <span className="text-xl sm:text-2xl font-bold">Why This Matters</span>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Understanding entrepreneurship helps you think beyond traditional employment—to become a <span className="text-primary font-semibold">job creator</span>, <span className="text-accent font-semibold">problem solver</span>, and <span className="text-primary font-semibold">innovator</span> who shapes the future.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                  <div className="text-center p-2 sm:p-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">Economic Growth</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Drive innovation and create employment</p>
                  </div>
                  <div className="text-center p-2 sm:p-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">Problem Solving</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Address real-world challenges</p>
                  </div>
                  <div className="text-center p-2 sm:p-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Network className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">Social Impact</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Create positive change in society</p>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-primary"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Ready to become one? Join our journey!
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlighted Event Video */}
      <AnimatedSection animation="scale" className="py-16 sm:py-20 lg:py-24 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-hover rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden aspect-video border border-border mb-4">
            <iframe
              src="https://www.youtube.com/embed/HI7t9mb71yg?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&controls=1"
              title="E-Cell AMC Event Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">E-Cell AMC: Startup Speaker Series Highlight</h3>
            <p className="text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Catch the energy and inspiration from our latest event! Watch the journey, insights, and excitement from our Startup Speaker Series.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animation="fadeUp" className="py-16 sm:py-20 lg:py-24 bg-secondary/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { end: 5, label: "Startups Supported", suffix: "+" },
              { end: 10, label: "Events Conducted", suffix: "+" },
              { end: 1500, label: "Students Reached", suffix: "+" },
              { end: 12, label: "Expert Mentors", suffix: "+" }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <CountUpNumber 
                      end={stat.end} 
                      suffix={stat.suffix}
                      className="text-3xl sm:text-4xl font-bold text-primary mb-2 block"
                    />
                    <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animation="fadeUp" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">E-Cell AMC</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              We are the premier entrepreneurship hub at AMC Engineering College, dedicated to nurturing innovative minds and transforming ideas into successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <AnimatedSection animation="fadeLeft">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                To create a vibrant ecosystem that empowers students to think entrepreneurially, develop innovative solutions, and build sustainable businesses that make a positive impact on society.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Lightbulb, title: "Innovation", desc: "Fostering creative thinking and breakthrough solutions" },
                  { icon: Network, title: "Networking", desc: "Building connections with industry leaders" },
                  { icon: TrendingUp, title: "Growth", desc: "Supporting startups from idea to success" },
                  { icon: Users, title: "Community", desc: "Building a supportive entrepreneurial ecosystem" }
                ].map((item, index) => (
                  <AnimatedSection key={item.title} animation="scale" delay={index * 0.1}>
                    <div className="flex items-start space-x-3 hover-lift p-3 rounded-lg transition-all duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="hover-lift">
                <img 
                  src={innovationImage} 
                  alt="Innovation lab" 
                  className="w-full h-auto rounded-xl lg:rounded-2xl shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Programs Section */}
      <AnimatedSection animation="fadeUp" className="py-16 sm:py-20 lg:py-24 bg-secondary/30 px-4 sm:px-6 lg:px-8" id="programs">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to transform students into successful entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.1}>
                <Card 
                  className="border-0 shadow-lg hover-lift card-hover bg-white/80 backdrop-blur-sm h-full cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  onClick={() => handleProgramClick(program)}
                >
                  <CardHeader className="text-center p-4 sm:p-6">
                    <program.icon className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="hover:text-primary transition-colors text-base sm:text-lg">{program.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{program.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3 justify-center">
                      <Badge variant="secondary" className="text-xs sm:text-sm">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs sm:text-sm">
                        {program.level}
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 opacity-70 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {program.features.length > 3 && (
                        <li className="text-primary font-medium text-center pt-2 text-xs sm:text-sm">
                          Click to see more details...
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="scale" delay={0.3} className="flex justify-center mt-8 sm:mt-12">
            <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift" onClick={() => navigate('/programs')}>
              Explore All Programs
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Signature Programs */}
      <AnimatedSection animation="fadeUp" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-secondary/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Signature <span className="gradient-text">E-Cell Programs</span> & Initiatives
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              E-Cell AMC offers a diverse set of hands-on programs and events designed to inspire, educate, and empower the next generation of entrepreneurs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {signaturePrograms.slice(0, 3).map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.05}>
                <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover-lift card-hover h-full">
                  <CardHeader className="flex flex-row items-start gap-3 pb-3 p-4 sm:p-6">
                    <program.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg leading-tight">{program.title}</CardTitle>
                      {program.timing && (
                        <span className="text-xs sm:text-sm text-muted-foreground">({program.timing})</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="text-xs sm:text-sm text-muted-foreground pt-0 p-4 sm:p-6">
                    <p className="mb-2">{program.desc}</p>
                    {program.outcome && (
                      <p className="text-green-600 font-medium flex items-start gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5"></span>
                        <span>{program.outcome}</span>
                      </p>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift" onClick={() => navigate('/signature-programs')}>
              Explore All Initiatives
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-secondary/20 to-background px-4 sm:px-6 lg:px-8" id="events">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              Join Our <span className="gradient-text">Exciting</span> Events
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Participate in our carefully curated events designed to accelerate your entrepreneurial journey through learning, networking, and hands-on experience.
            </p>
          </AnimatedSection>
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {eventsData.slice(0, 3).map((event, index) => (
              <AnimatedSection key={event.id} animation="scale" delay={index * 0.1}>
                <EventCard
                  {...event}
                  className="h-full"
                  delay={index * 0.1}
                  onRegister={() => handleEventRegister(event.id)}
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Call to Action */}
          <AnimatedSection animation="scale" delay={0.4} className="flex justify-center mt-12">
            <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift" onClick={() => navigate('/events')}>
              Explore All Events
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <AnimatedSection animation="fadeUp" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-secondary/60 px-4 sm:px-6 lg:px-8" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals and mentors guiding E-Cell AMC
            </p>
          </div>
          
          {/* Faculty & Mentors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12">
            {faculty.map((member, index) => (
              <AnimatedSection key={member.name} animation="scale" delay={index * 0.1}>
                <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover-lift card-hover overflow-hidden">
                  <CardContent className="flex flex-col items-center p-6 sm:p-8 relative">
                    <div className="mb-4 relative">
                      <Avatar className="w-20 h-20 sm:w-24 sm:h-24 shadow-lg ring-4 ring-primary/30 transition-all duration-500 group-hover:w-24 group-hover:h-24 sm:group-hover:w-32 sm:group-hover:h-32">
                        <AvatarFallback className="text-base sm:text-lg font-bold">{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full flex items-end justify-center pb-2">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <div className="text-xs sm:text-sm font-semibold">{member.role}</div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors text-center">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1 text-center">{member.role}</p>
                    <p className="text-xs sm:text-sm text-accent text-center">{member.dept}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift" onClick={() => navigate('/team')}>
              Meet the Full Team
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection animation="fadeUp" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to start your entrepreneurial journey? We're here to help you every step of the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", content: "AMC Engineering College\nBangalore, Karnataka, India", link: "https://www.google.com/maps?q=AMC+Engineering+College+Bangalore+Karnataka+India" },
                  { icon: Mail, title: "Email", content: "amcentrepreneurshipcell@gmail.com", link: "mailto:amcentrepreneurshipcell@gmail.com" },
                  { icon: Phone, title: "Phone", content: "8660144040", link: "tel:8660144040" }
                ].map((contact, index) => (
                  <div key={contact.title} className={`flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300 delay-${index * 100}`}>
                    <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-base mb-1">{contact.title}</h4>
                      <a
                        href={contact.link}
                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line hover-scale inline-block text-sm sm:text-base break-words"
                      >
                        {contact.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="card-hover">
                <div className="aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <iframe
                    src="https://www.google.com/maps?q=AMC+Engineering+College+Bangalore+Karnataka+India&output=embed"
                    title="AMC Engineering College Location"
                    allowFullScreen
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Social CTA */}
      <AnimatedSection animation="scale" className="py-16 sm:py-20 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-base sm:text-lg text-muted-foreground text-center font-medium mb-2">
              "Stay connected with us for inspiration, updates, and opportunities!"
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow hover:bg-primary/90 hover-lift btn-primary text-sm sm:text-base"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                Follow us on Instagram
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBWPAL2UPBNBnF63e2m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 hover-lift text-sm sm:text-base"
                aria-label="Join our WhatsApp Channel"
              >
                <MessageCircle className="w-5 h-5" />
                Join our WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden hover-scale">
                  <img src="/logo.png" alt="E-Cell AMC Logo" className="w-8 h-8 object-contain rounded-full" draggable="false" />
                </div>
                <span className="text-lg font-bold text-primary">E-Cell AMC</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fostering innovation and entrepreneurship at AMC Engineering College
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-base mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.filter(link => link.path).map((link) => (
                  <Link
                    key={link.id}
                    to={link.path!}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors nav-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-base mb-4">Programs</h4>
              <div className="space-y-2">
                {programs.slice(0, 4).map((program) => (
                  <p key={program.title} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/programs')}>
                    {program.title}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-base mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">AMC Engineering College</p>
                <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
                <p className="text-sm text-muted-foreground break-words">amcentrepreneurshipcell@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 E-Cell AMC Engineering College. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Program Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProgram(null);
        }}
      />
    </div>
  );
};

export default Index;
