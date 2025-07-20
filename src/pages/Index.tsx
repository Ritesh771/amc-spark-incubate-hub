import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  TrendingUp, 
  Network,
  BookOpen,
  User,
  Mail,
  Phone,
  MapPin,
  Instagram,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Briefcase,
  Globe,
  Code,
  DollarSign,
  BarChart3,
  GraduationCap,
  Settings,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  PieChart,
  LineChart,
  Layers,
  Database,
  Monitor,
  Smartphone
} from "lucide-react";

import heroImage from "@/assets/hero-business.jpg";
import teamImage from "@/assets/team-professional.jpg";
import eventsImage from "@/assets/events-conference.jpg";
import innovationImage from "@/assets/innovation-lab.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      icon: Building2,
      title: "Startup Incubation Program",
      desc: "Comprehensive 6-month program for transforming ideas into viable businesses",
      duration: "6 Months",
      level: "Beginner to Intermediate",
      participants: "20-25 startups per batch",
      features: [
        "Dedicated mentorship from industry experts",
        "Seed funding opportunities up to ₹5 lakhs",
        "Legal and IP guidance",
        "Co-working space access",
        "Technical infrastructure support",
        "Market research assistance"
      ],
      benefits: [
        "Access to investor network",
        "Government scheme guidance",
        "Product development support",
        "Marketing and branding assistance",
        "Financial planning and accounting",
        "Pitch deck preparation"
      ],
      curriculum: [
        "Business Model Canvas Development",
        "Market Validation Techniques",
        "Financial Planning and Fundraising",
        "Legal Framework and Compliance",
        "Product Development Lifecycle",
        "Go-to-Market Strategy",
        "Investor Pitch Preparation",
        "Scaling and Growth Strategies"
      ],
      requirements: [
        "Original business idea or early-stage startup",
        "Commitment to full program duration",
        "Basic business knowledge",
        "Team of 2-4 members (preferred)"
      ],
      outcomes: [
        "Fully developed business plan",
        "Working prototype or MVP",
        "Investor-ready pitch deck",
        "Market validation data",
        "Legal entity establishment",
        "Potential seed funding"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Accelerator Program",
      desc: "3-month intensive program for scaling existing startups to the next level",
      duration: "3 Months",
      level: "Intermediate to Advanced",
      participants: "15-20 startups per batch",
      features: [
        "Revenue optimization strategies",
        "Advanced digital marketing",
        "Investment readiness training",
        "International market expansion",
        "Partnership development",
        "Advanced analytics and metrics"
      ],
      benefits: [
        "Series A funding preparation",
        "Strategic partnership opportunities",
        "Advanced technology integration",
        "International market access",
        "Leadership development",
        "Exit strategy planning"
      ],
      curriculum: [
        "Advanced Growth Hacking Techniques",
        "Data-Driven Decision Making",
        "International Expansion Strategies",
        "Series A Fundraising",
        "Strategic Partnerships",
        "Advanced Digital Marketing",
        "Leadership and Team Scaling",
        "Exit Strategy Planning"
      ],
      requirements: [
        "Existing startup with minimum viable product",
        "Revenue generation (minimum ₹1 lakh/month)",
        "Team of 3+ members",
        "Growth potential demonstration"
      ],
      outcomes: [
        "100%+ revenue growth target",
        "Series A funding readiness",
        "International market entry plan",
        "Strategic partnerships established",
        "Advanced product features",
        "Scalable business processes"
      ]
    },
    {
      icon: GraduationCap,
      title: "Entrepreneurship Foundation Course",
      desc: "8-week comprehensive course covering entrepreneurship fundamentals",
      duration: "8 Weeks",
      level: "Beginner",
      participants: "50-60 students per batch",
      features: [
        "Interactive online and offline sessions",
        "Case study analysis",
        "Guest lectures from successful entrepreneurs",
        "Hands-on project work",
        "Peer learning groups",
        "Industry exposure visits"
      ],
      benefits: [
        "Entrepreneurial mindset development",
        "Business opportunity identification",
        "Risk assessment capabilities",
        "Leadership skills enhancement",
        "Network building",
        "Career direction clarity"
      ],
      curriculum: [
        "Introduction to Entrepreneurship",
        "Opportunity Recognition and Evaluation",
        "Business Model Innovation",
        "Marketing and Customer Development",
        "Financial Management Basics",
        "Leadership and Team Building",
        "Risk Management",
        "Business Plan Development"
      ],
      requirements: [
        "Interest in entrepreneurship",
        "Basic English proficiency",
        "Commitment to attend all sessions",
        "No prior business experience required"
      ],
      outcomes: [
        "Entrepreneurship certificate",
        "Business idea validation",
        "Network of like-minded peers",
        "Basic business plan",
        "Industry exposure",
        "Career clarity"
      ]
    },
    {
      icon: Code,
      title: "Tech Startup Bootcamp",
      desc: "4-month intensive program focused on technology-driven startups",
      duration: "4 Months",
      level: "Intermediate",
      participants: "25-30 participants per batch",
      features: [
        "Technical product development",
        "AI/ML integration guidance",
        "Cloud infrastructure setup",
        "Cybersecurity best practices",
        "API development and integration",
        "Mobile app development"
      ],
      benefits: [
        "Technical expertise development",
        "Industry-standard development practices",
        "Cloud platform partnerships",
        "Technical mentorship",
        "Product development acceleration",
        "Technology trend insights"
      ],
      curriculum: [
        "Tech Stack Selection and Architecture",
        "MVP Development Methodologies",
        "AI/ML Integration for Startups",
        "Cloud Infrastructure and DevOps",
        "Cybersecurity for Startups",
        "Mobile-First Development",
        "API Design and Development",
        "Technology Scaling Strategies"
      ],
      requirements: [
        "Basic programming knowledge",
        "Tech startup idea or concept",
        "Laptop with development environment",
        "Commitment to technical learning"
      ],
      outcomes: [
        "Fully functional MVP",
        "Technical architecture documentation",
        "Cloud deployment capability",
        "Security implementation",
        "Mobile application",
        "Technical team building skills"
      ]
    },
    {
      icon: DollarSign,
      title: "FinTech Innovation Program",
      desc: "5-month specialized program for financial technology startups",
      duration: "5 Months",
      level: "Advanced",
      participants: "15-20 startups per batch",
      features: [
        "Regulatory compliance guidance",
        "Blockchain technology integration",
        "Payment gateway development",
        "Financial modeling expertise",
        "Banking partnership facilitation",
        "Regulatory sandbox access"
      ],
      benefits: [
        "Financial industry expertise",
        "Regulatory compliance assurance",
        "Banking sector partnerships",
        "Investment from FinTech VCs",
        "Technology infrastructure support",
        "Market entry facilitation"
      ],
      curriculum: [
        "FinTech Landscape and Opportunities",
        "Regulatory Framework and Compliance",
        "Blockchain and Cryptocurrency",
        "Payment Systems and Security",
        "Financial Data Analytics",
        "Banking APIs and Integration",
        "Investment and Funding in FinTech",
        "Risk Management in Financial Services"
      ],
      requirements: [
        "FinTech startup idea or existing solution",
        "Understanding of financial services",
        "Technical background preferred",
        "Regulatory compliance commitment"
      ],
      outcomes: [
        "Compliance-ready FinTech solution",
        "Banking partnerships established",
        "Regulatory approvals initiated",
        "Secure payment integration",
        "Investment readiness",
        "Market launch preparation"
      ]
    },
    {
      icon: Globe,
      title: "Social Impact Venture Program",
      desc: "6-month program for startups creating positive social and environmental impact",
      duration: "6 Months",
      level: "Intermediate",
      participants: "20-25 ventures per batch",
      features: [
        "Impact measurement frameworks",
        "Sustainable business model development",
        "Grant funding guidance",
        "CSR partnership facilitation",
        "Community engagement strategies",
        "Environmental impact assessment"
      ],
      benefits: [
        "Social impact measurement",
        "Grant funding access",
        "CSR partnership opportunities",
        "Sustainable scaling strategies",
        "Community network building",
        "Impact investor connections"
      ],
      curriculum: [
        "Social Entrepreneurship Fundamentals",
        "Impact Measurement and Management",
        "Sustainable Business Models",
        "Grant Writing and Funding",
        "Community Engagement and Partnerships",
        "Environmental Impact Assessment",
        "Policy Advocacy and Change",
        "Scaling Social Impact"
      ],
      requirements: [
        "Social or environmental impact focus",
        "Commitment to sustainable practices",
        "Community engagement experience",
        "Passion for social change"
      ],
      outcomes: [
        "Sustainable business model",
        "Impact measurement system",
        "Grant funding secured",
        "Community partnerships",
        "Policy influence capability",
        "Scalable social impact"
      ]
    }
  ];

  const eventsData = [
    {
      id: 1,
      image: eventsImage,
      title: "Global Startup Pitch Championship 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "AMC Main Auditorium",
      description: "Present your revolutionary business ideas to a distinguished panel of industry leaders, VCs, and successful entrepreneurs. Compete for prizes worth ₹5 lakhs and secure potential seed funding for your startup.",
      attendees: 200,
      status: "registration-open" as const
    },
    {
      id: 2,
      image: innovationImage,
      title: "Entrepreneurship Masterclass Series",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      description: "Intensive workshop covering the complete entrepreneurial journey - from ideation to scaling. Learn directly from industry veterans who have built successful startups from the ground up.",
      attendees: 150,
      status: "upcoming" as const
    },
    {
      id: 3,
      image: teamImage,
      title: "Tech Startup Bootcamp - MVP Building",
      date: "April 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub",
      description: "Hands-on intensive workshop focused on rapid MVP development, UI/UX best practices, and effective pitching strategies. Perfect for aspiring tech founders ready to build their first product.",
      attendees: 100,
      status: "upcoming" as const
    },
    {
      id: 4,
      image: eventsImage,
      title: "Investor Connect Networking Night",
      date: "April 25, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "E-Cell Lounge",
      description: "Exclusive networking event connecting student entrepreneurs with angel investors, VCs, and successful alumni. An opportunity to showcase your startup and build valuable connections.",
      attendees: 80,
      status: "registration-open" as const
    },
    {
      id: 5,
      image: innovationImage,
      title: "Women in Entrepreneurship Summit",
      date: "May 8, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Hall",
      description: "Celebrating and empowering women entrepreneurs through inspiring talks, panel discussions, and mentorship sessions with successful female business leaders.",
      attendees: 120,
      status: "upcoming" as const
    },
    {
      id: 6,
      image: teamImage,
      title: "Startup Funding Workshop",
      date: "May 20, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Seminar Hall",
      description: "Comprehensive workshop on funding strategies, investor relations, and financial planning for startups. Learn how to prepare for different funding rounds and pitch to investors.",
      attendees: 90,
      status: "upcoming" as const
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleProgramClick = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleEventRegister = (eventId: number) => {
    window.open('https://forms.gle/ZBL1p3WJuGoqb4vC7', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="E-Cell AMC Logo" className="w-8 h-8 object-contain" draggable="false" />
              </div>
              <span className="text-xl font-bold text-primary">E-Cell AMC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home','about','programs','events','team','contact'].map((id, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 transition-transform duration-300 hover:scale-110 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-slide-down">
              <div className="flex flex-col space-y-2">
                {['home','about','programs','events','team','contact'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-left py-2 text-foreground hover:text-primary transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeLeft" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Building2 className="w-4 h-4" />
                <span>Entrepreneurship Excellence</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Building Tomorrow's <span className="gradient-text">Business Leaders</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Entrepreneurship Cell of AMC Engineering College - Empowering students with practical business skills, industry connections, and real-world entrepreneurial experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Join Our Community
                </Button>
              </a>
              <Button size="lg" variant="outline" className="hover-scale" onClick={() => scrollToSection('programs')}>
                <Target className="w-4 h-4 mr-2" />
                Explore Programs
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="relative hover-lift">
              <img 
                src={heroImage} 
                alt="Professional business environment" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is Entrepreneurship Section - Enhanced */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
        <div className="container-width relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Foundation Knowledge</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              What is <span className="gradient-text">Entrepreneurship</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the core principles that drive innovation and business creation
            </p>
          </AnimatedSection>

          {/* Main Definition Card */}
          <AnimatedSection animation="scale" delay={0.1} className="mb-16">
            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Entrepreneurship is the process of <span className="text-primary font-semibold">creating, launching, and managing</span> innovative ventures that solve real problems and create sustainable value in the marketplace.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Key Concepts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection animation="fadeLeft" delay={0.2}>
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Who is an Entrepreneur?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        An entrepreneur is a <span className="text-primary font-medium">visionary leader</span> who identifies market opportunities, takes calculated risks, and builds innovative solutions to address unmet needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Strategic problem solver and innovator</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Risk-taking leader with clear vision</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Value creator for society and economy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={0.3}>
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Business Owner vs Entrepreneur</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-primary">
                      <div className="font-semibold text-primary mb-1">Business Owner</div>
                      <div className="text-sm text-muted-foreground">Operates established business models focusing on consistent profitability and operational efficiency</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-accent">
                      <div className="font-semibold text-accent mb-1">Entrepreneur</div>
                      <div className="text-sm text-muted-foreground">Creates disruptive innovations and new market opportunities to generate unprecedented value</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Impact & Importance */}
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-lg border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-8 h-8 text-primary" />
                    <span className="text-2xl font-bold">Strategic Importance</span>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Entrepreneurship education develops critical thinking beyond traditional employment—creating <span className="text-primary font-semibold">job creators</span>, <span className="text-accent font-semibold">market innovators</span>, and <span className="text-primary font-semibold">economic drivers</span> who shape industries.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Economic Growth</h4>
                    <p className="text-sm text-muted-foreground">Drive market innovation and create sustainable employment opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2">Strategic Solutions</h4>
                    <p className="text-sm text-muted-foreground">Address complex market challenges with innovative and scalable solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/60 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Network className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Market Impact</h4>
                    <p className="text-sm text-muted-foreground">Create transformative change in industries and communities worldwide</p>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Start Your Entrepreneurial Journey
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlighted Event Video */}
      <AnimatedSection animation="scale" className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl shadow-2xl overflow-hidden aspect-video border border-border mb-6">
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
            <h3 className="text-2xl font-bold text-center mb-2">E-Cell AMC: Professional Development Series</h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Experience the excellence and professional standards of our entrepreneurship programs through this comprehensive overview of our initiatives.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { end: 5, label: "Startups Launched", suffix: "+", icon: Building2 },
              { end: 10, label: "Programs Delivered", suffix: "+", icon: Award },
              { end: 3000, label: "Students Impacted", suffix: "+", icon: Users },
              { end: 12, label: "Industry Mentors", suffix: "+", icon: Star }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover-lift bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CountUpNumber 
                      end={stat.end} 
                      suffix={stat.suffix}
                      className="text-4xl font-bold text-primary mb-2 block"
                    />
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animation="fadeUp" className="section-padding" id="about">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>About Our Organization</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">E-Cell AMC Engineering</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The premier center for entrepreneurship excellence at AMC Engineering College, fostering innovation through structured programs and industry partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="fadeLeft">
              <h3 className="text-2xl font-bold mb-6">Our Strategic Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To establish a comprehensive entrepreneurial ecosystem that transforms students into industry-ready business leaders through structured learning, practical experience, and strategic mentorship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Strategic Innovation", desc: "Developing market-ready solutions through systematic approach" },
                  { icon: Network, title: "Industry Connections", desc: "Building partnerships with established business leaders" },
                  { icon: TrendingUp, title: "Business Growth", desc: "Supporting ventures from concept to market success" },
                  { icon: Users, title: "Professional Community", desc: "Creating networks of entrepreneurial excellence" }
                ].map((item, index) => (
                  <AnimatedSection key={item.title} animation="scale" delay={index * 0.1}>
                    <div className="flex items-start space-x-3 hover-lift p-4 rounded-lg transition-all duration-300 border border-border/50 bg-white/50">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
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
                  alt="Professional innovation environment" 
                  className="w-full h-auto rounded-2xl shadow-lg border border-border/20"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Programs Section */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-secondary/20" id="programs">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Professional Programs</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Business Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured learning pathways designed to develop entrepreneurial expertise and business acumen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.1}>
                <Card 
                  className="border-0 shadow-lg hover-lift bg-white/90 backdrop-blur-sm h-full cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                  onClick={() => handleProgramClick(program)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <program.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="hover:text-primary transition-colors">{program.title}</CardTitle>
                    <CardDescription className="text-center">{program.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {program.level}
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {program.features.length > 3 && (
                        <li className="text-primary font-medium text-center pt-2">
                          View complete program details...
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="scale" delay={0.3} className="flex justify-center mt-12">
            <a
              href="https://forms.gle/ZBL1p3WJuGoqb4vC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift">
                <ArrowRight className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Signature Programs */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-gradient-to-br from-background to-secondary/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              <span>Signature Initiatives</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Development Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive suite of professional programs designed to develop business acumen and entrepreneurial excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Executive Speaker Series", timing: "Monthly", desc: "Industry leaders and successful entrepreneurs share strategic insights and market intelligence with participants.", outcome: "Professional networking + industry knowledge." },
              { icon: Target, title: "Business Plan Competition", timing: "Quarterly", desc: "Comprehensive business plan development and presentation to industry experts and investment professionals.", outcome: "Evaluated by business leaders and potential investors." },
              { icon: GraduationCap, title: "Professional Skill Development", timing: "Bi-monthly", desc: "Core business competencies: Strategic presentation skills, Business model design, MVP development, Corporate compliance, Growth marketing strategies." },
              { icon: Network, title: "Corporate Partnership Program", timing: "Semester-wise", desc: "Strategic partnerships with established companies providing internship and career opportunities for qualified candidates.", outcome: "Direct pathway to professional opportunities." },
              { icon: Building2, title: "Innovation Challenge Series", timing: "Monthly", desc: "Teams collaborate on solving real business challenges and developing market-ready solutions across various industries." },
              { icon: LineChart, title: "Business Spotlight Program", timing: "", desc: "Monthly feature highlighting innovative businesses and successful case studies through professional content and industry analysis." },
              { icon: Users, title: "Alumni Advisory Board", timing: "Bi-annual", desc: "Established AMC alumni in senior business roles provide strategic mentorship and industry guidance to current participants." },
              { icon: DollarSign, title: "Investment Simulation Program", timing: "", desc: "Professional training in investment principles, venture capital processes, and strategic business evaluation methodologies." },
              { icon: Briefcase, title: "Executive-in-Residence Program", timing: "", desc: "Senior business executives provide week-long intensive mentorship and strategic guidance to selected participants." },
              { icon: Star, title: "AMC Business Showcase", timing: "Annual", desc: "Premier event showcasing top business innovations and entrepreneurial achievements to industry stakeholders and potential partners." }
            ].map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.05}>
                <Card className="bg-white/90 backdrop-blur-lg shadow-xl border-0 hover-lift h-full group">
                  <CardHeader className="flex flex-row items-center gap-3 pb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
                      {program.timing && (
                        <span className="text-xs text-muted-foreground font-medium">({program.timing})</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground pt-0">
                    <p className="mb-3 leading-relaxed">{program.desc}</p>
                    {program.outcome && (
                      <p className="text-primary font-medium flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {program.outcome}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <section className="section-padding bg-gradient-to-br from-background via-secondary/15 to-background" id="events">
        <div className="container-width">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              <span>Professional Events</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Business <span className="gradient-text">Excellence</span> Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional development events designed to enhance business acumen through strategic learning and industry networking.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
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

          <AnimatedSection animation="scale" delay={0.4} className="flex justify-center mt-16">
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Ready to advance your professional development?
              </p>
              <a
                href="https://forms.gle/ZBL1p3WJuGoqb4vC7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift">
                  <Calendar className="w-4 h-4 mr-2" />
                  Register for Events
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-gradient-to-br from-background to-secondary/40" id="team">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Professional Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals and dedicated team members driving entrepreneurship excellence at AMC Engineering
            </p>
          </div>
          
          {/* Faculty & Mentors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {[
              { name: "Dr. Nandeeswar S B", role: "Faculty Coordinator", dept: "HOD CSE AIML", initials: "NSB" },
              { name: "Prof. Swathi Srikanth", role: "Industry Mentor", dept: "Business Strategy Expert", initials: "SS" }
            ].map((member, index) => (
              <AnimatedSection key={member.name} animation="scale" delay={index * 0.1}>
                <Card className="group bg-white/80 backdrop-blur-lg shadow-2xl border-0 hover-lift overflow-hidden">
                  <CardContent className="flex flex-col items-center p-8 relative">
                    <div className="mb-6 relative">
                      <Avatar className="w-24 h-24 shadow-lg ring-4 ring-primary/20 transition-all duration-500 group-hover:w-28 group-hover:h-28">
                        <AvatarFallback className="text-lg font-bold bg-primary/10 text-primary">{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-center">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground text-center">{member.dept}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Core Team */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-8">Executive Team Members</h3>
            <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
              {[
                { name: "Ritesh N", role: "Team Lead" },
                { name: "Pannaga JA", role: "Operations" },
                { name: "Shashank GS", role: "Technology" },
                { name: "Ruthu Parinika", role: "Communications" },
                { name: "Raghuveer", role: "Events" },
                { name: "Poornima", role: "Marketing" },
                { name: "Praveen V", role: "Partnerships" }
              ].map((member, index) => (
                <AnimatedSection key={member.name} animation="scale" delay={index * 0.05}>
                  <Card className="group bg-white/80 backdrop-blur-lg shadow-xl border-0 min-w-[200px] flex-shrink-0 hover-lift overflow-hidden">
                    <CardContent className="flex flex-col items-center p-6 relative">
                      <div className="mb-4 relative">
                        <Avatar className="w-16 h-16 shadow-md ring-2 ring-primary/20 transition-all duration-500 group-hover:w-20 group-hover:h-20">
                          <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {member.role === "Team Lead" && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <h4 className="text-base font-semibold group-hover:text-primary transition-colors text-center">
                        {member.name}
                      </h4>
                      {member.role && (
                        <p className="text-xs text-primary text-center mt-1 font-medium">
                          {member.role}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection animation="fadeUp" className="section-padding" id="contact">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Professional Contact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Connect With Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to begin your professional entrepreneurial journey? Our team is here to provide guidance and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Location", content: "AMC Engineering College\nBangalore, Karnataka, India", link: "https://www.google.com/maps?q=AMC+Engineering+College+Bangalore+Karnataka+India" },
                  { icon: Mail, title: "Email", content: "amcentrepreneurshipcell@gmail.com", link: "mailto:amcentrepreneurshipcell@gmail.com" },
                  { icon: Phone, title: "Phone", content: "+91 8660144040", link: "tel:8660144040" }
                ].map((contact, index) => (
                  <div key={contact.title} className="flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300 border border-border/50 bg-white/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{contact.title}</h4>
                      <a
                        href={contact.link}
                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line hover-scale inline-block"
                      >
                        {contact.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                <div className="aspect-video">
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

      {/* Professional CTA */}
      <AnimatedSection animation="scale" className="py-16 bg-background">
        <div className="container-width">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-center space-y-4 max-w-2xl">
              <h3 className="text-2xl font-bold">Stay Connected for Professional Updates</h3>
              <p className="text-lg text-muted-foreground">
                Join our professional network for industry insights, program updates, and business opportunities.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow hover:bg-primary/90 hover-lift btn-primary"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                Follow Our Updates
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBWPAL2UPBNBnF63e2m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold shadow hover:bg-green-700 hover-lift"
                aria-label="Join our WhatsApp Channel"
              >
                <MessageCircle className="w-5 h-5" />
                Join Professional Network
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection animation="fadeUp" className="bg-card border-t border-border py-12">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center overflow-hidden hover-scale">
                  <img src="/logo.png" alt="E-Cell AMC Logo" className="w-8 h-8 object-contain" draggable="false" />
                </div>
                <span className="text-lg font-bold text-primary">E-Cell AMC</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional entrepreneurship development at AMC Engineering College
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                {['home','about','programs','events'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <div className="space-y-2">
                {["Business Incubation", "Growth Acceleration", "Professional Development", "Industry Partnerships"].map((program) => (
                  <p key={program} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {program}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">AMC Engineering College</p>
                <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
                <p className="text-sm text-muted-foreground">amcentrepreneurshipcell@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 E-Cell AMC Engineering College. All rights reserved.
            </p>
          </div>
        </div>
      </AnimatedSection>

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
