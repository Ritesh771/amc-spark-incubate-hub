
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
  Lightbulb, 
  TrendingUp, 
  Network,
  BookOpen,
  Rocket,
  User,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Briefcase,
  Globe,
  Code,
  DollarSign,
  Zap,
  Brain,
  Shield,
  Settings,
  BarChart3,
  PieChart,
  LineChart,
  Database,
  Server,
  Monitor
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
      icon: Rocket,
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
      icon: BookOpen,
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
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden hover-scale">
                <img src="/logo.png" alt="E-Cell AMC Logo" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain rounded-full" draggable="false" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-primary">E-Cell AMC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {['home','about','programs','events','team','contact'].map((id, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`nav-link text-foreground hover:text-primary transition-colors text-sm xl:text-base delay-${index * 100}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
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
                {['home','about','programs','events','team','contact'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-left py-2 px-2 text-foreground hover:text-primary transition-colors text-base font-medium"
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
      <section id="home" className="pt-14 sm:pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <AnimatedSection animation="fadeLeft" className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fostering <span className="gradient-text">Innovation</span> & <span className="text-accent">Entrepreneurship</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 sm:mb-6">
              <Lightbulb className="w-4 h-4" />
              <span>Foundation Knowledge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              What is <span className="gradient-text">Entrepreneurship</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Understanding the core principles that drive innovation and business creation
            </p>
          </AnimatedSection>

          {/* Main Definition Card */}
          <AnimatedSection animation="scale" delay={0.1} className="mb-12 lg:mb-16">
            <Card className="card-hover bg-white/80 backdrop-blur-lg border-0 shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Entrepreneurship is the process of <span className="text-primary font-semibold">creating, launching, and managing</span> a new venture to solve problems and create value for society.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Key Concepts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 lg:mb-16">
            <AnimatedSection animation="fadeLeft" delay={0.2}>
              <Card className="card-hover bg-white/70 backdrop-blur-lg border-0 shadow-xl h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">Who is an Entrepreneur?</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        An entrepreneur is someone who <span className="text-primary font-medium">identifies opportunities</span>, takes calculated risks, and builds innovative solutions to fulfill market needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Problem solver and innovator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Risk-taker with vision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Value creator for society</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={0.3}>
              <Card className="card-hover bg-white/70 backdrop-blur-lg border-0 shadow-xl h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">Business Owner vs Entrepreneur</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                      <div className="font-semibold text-primary mb-1 text-sm sm:text-base">Business Owner</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Manages existing business models for consistent profit and stability</div>
                    </div>
                    <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border-l-4 border-accent">
                      <div className="font-semibold text-accent mb-1 text-sm sm:text-base">Entrepreneur</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Creates innovative solutions and disrupts markets to generate new value</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Impact & Importance */}
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <Card className="card-hover bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    <span className="text-xl sm:text-2xl font-bold">Why This Matters</span>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Understanding entrepreneurship helps you think beyond traditional employment—to become a <span className="text-primary font-semibold">job creator</span>, <span className="text-accent font-semibold">problem solver</span>, and <span className="text-primary font-semibold">innovator</span> who shapes the future.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center p-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Economic Growth</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Drive innovation and create employment opportunities</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Problem Solving</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Address real-world challenges with creative solutions</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Network className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Social Impact</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Create positive change in communities and society</p>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-primary"
                  >
                    <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                    Ready to become one? Join our journey!
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlighted Event Video */}
      <AnimatedSection animation="scale" className="py-12 sm:py-16 lg:py-24 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-hover rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden aspect-video border border-border mb-4 sm:mb-6">
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
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Catch the energy and inspiration from our latest event! Watch the journey, insights, and excitement from our Startup Speaker Series.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animation="fadeUp" className="py-12 sm:py-16 lg:py-24 bg-secondary/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2 block"
                    />
                    <div className="text-muted-foreground text-xs sm:text-sm lg:text-base">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animation="fadeUp" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About E-Cell AMC</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We are the premier entrepreneurship hub at AMC Engineering College, dedicated to nurturing innovative minds and transforming ideas into successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <AnimatedSection animation="fadeLeft">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                To create a vibrant ecosystem that empowers students to think entrepreneurially, develop innovative solutions, and build sustainable businesses that make a positive impact on society.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Lightbulb, title: "Innovation", desc: "Fostering creative thinking and breakthrough solutions" },
                  { icon: Network, title: "Networking", desc: "Building connections with industry leaders" },
                  { icon: TrendingUp, title: "Growth", desc: "Supporting startups from idea to success" },
                  { icon: Users, title: "Community", desc: "Building a supportive entrepreneurial ecosystem" }
                ].map((item, index) => (
                  <AnimatedSection key={item.title} animation="scale" delay={index * 0.1}>
                    <div className="flex items-start space-x-3 hover-lift p-3 rounded-lg transition-all duration-300">
                      <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
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
      <AnimatedSection animation="fadeUp" className="py-12 sm:py-16 lg:py-24 bg-secondary/30 px-4 sm:px-6 lg:px-8" id="programs">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Programs</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Comprehensive programs designed to transform students into successful entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.1}>
                <Card 
                  className="border-0 shadow-lg hover-lift card-hover bg-white/80 backdrop-blur-sm h-full cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  onClick={() => handleProgramClick(program)}
                >
                  <CardHeader className="text-center p-4 sm:p-6">
                    <program.icon className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="hover:text-primary transition-colors text-base sm:text-lg">{program.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{program.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
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
            <a
              href="https://forms.gle/ZBL1p3WJuGoqb4vC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift animate-pulse-glow">
                Register Now
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Signature Programs */}
      <AnimatedSection animation="fadeUp" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Signature E-Cell Programs & Initiatives</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              E-Cell AMC offers a diverse set of hands-on programs and events designed to inspire, educate, and empower the next generation of entrepreneurs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Award, title: "Startup Speaker Series", timing: "Monthly", desc: "Invite founders, alumni entrepreneurs, or investors to share their journey, mistakes, and insights with students.", outcome: "Inspires students + builds network." },
              { icon: Target, title: "Ideathon / Pitch & Win", timing: "Quarterly", desc: "A short 1–2 day event where students pitch early startup ideas.", outcome: "Judged by faculty, alumni, or real entrepreneurs." },
              { icon: BookOpen, title: "E-Cell Skill Bootcamps", timing: "Every 2 months", desc: "Skill-specific workshops: Pitching & storytelling, UI/UX & Product design, MVP building, Startup law & IP, Growth marketing 101." },
              { icon: Network, title: "Startup Internship Connect", timing: "Semester-wise", desc: "Partner with 5–10 early-stage startups and let students apply for internships directly through E-Cell.", outcome: "Bridge between student talent and startups." },
              { icon: Settings, title: "Build Something Hack Series", timing: "Monthly / Bi-monthly", desc: "Students team up to solve local problems or startup challenges. Helps create prototypes, apps, AI tools, and even social startups." },
              { icon: LineChart, title: "Startup of the Month Feature", timing: "", desc: "Spotlight one innovative startup every month through reels, carousel posts, and posters. Builds awareness and encourages networking." },
              { icon: Users, title: "Alumni Mentorship Circles", timing: "Bi-annual", desc: "Bring back 3–5 successful AMC alumni working in startups or product roles. Match them with groups of student founders for mentorship." },
              { icon: PieChart, title: "Mini Investment Simulation Program", timing: "", desc: "Teach students how VC/investor rounds work through a mock event — some students become 'investors', others pitch." },
              { icon: User, title: "Entrepreneur-in-Residence Program (EIR)", timing: "", desc: "Invite a local founder to 'reside' (virtually) for a week — students can ask questions, shadow their schedule, etc." },
              { icon: Calendar, title: "AMC Startup Demo Day", timing: "End of year", desc: "Let top student teams showcase their MVPs or ideas in front of the college, mentors, and local ecosystem players." }
            ].map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.05}>
                <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover-lift card-hover h-full">
                  <CardHeader className="flex flex-row items-start gap-3 pb-3 p-4 sm:p-6">
                    <program.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg leading-tight">{program.title}</CardTitle>
                      {program.timing && (
                        <span className="text-xs text-muted-foreground">({program.timing})</span>
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
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background via-secondary/20 to-background px-4 sm:px-6 lg:px-8" id="events">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <AnimatedSection animation="fadeUp" className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 sm:mb-6">
              <Calendar className="w-4 h-4" />
              <span>Upcoming Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Join Our <span className="gradient-text">Exciting</span> Events
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Participate in our carefully curated events designed to accelerate your entrepreneurial journey through learning, networking, and hands-on experience.
            </p>
          </AnimatedSection>
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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

          {/* Call to Action */}
          <AnimatedSection animation="scale" delay={0.4} className="flex justify-center mt-12 lg:mt-16">
            <div className="text-center space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground px-4">
                Ready to take your entrepreneurial journey to the next level?
              </p>
              <a
                href="https://forms.gle/ZBL1p3WJuGoqb4vC7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift animate-pulse-glow">
                  Register for All Events
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <AnimatedSection animation="fadeUp" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/60 px-4 sm:px-6 lg:px-8" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Our Team</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Meet the passionate individuals and mentors guiding E-Cell AMC
            </p>
          </div>
          
          {/* Faculty & Mentors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 lg:mb-16">
            {[
              { name: "Dr. Nandeeswar S B", role: "Faculty Coordinator", dept: "HOD CSE AIML", initials: "NSB" },
              { name: "Prof. Swathi Srikanth", role: "Mentorship", dept: "Industry Expert", initials: "SS" }
            ].map((member, index) => (
              <AnimatedSection key={member.name} animation="scale" delay={index * 0.1}>
                <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover-lift card-hover overflow-hidden">
                  <CardContent className="flex flex-col items-center p-6 sm:p-8 relative">
                    <div className="mb-4 relative">
                      <Avatar className="w-20 sm:w-24 h-20 sm:h-24 shadow-lg ring-4 ring-primary/30 transition-all duration-500 group-hover:w-24 group-hover:h-24 sm:group-hover:w-32 sm:group-hover:h-32">
                        <AvatarFallback className="text-base sm:text-lg font-bold">{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full flex items-end justify-center pb-2">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <div className="text-xs sm:text-sm font-semibold">{member.role}</div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors text-center">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1 text-center">{member.role}</p>
                    <p className="text-xs text-accent text-center">{member.dept}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Core Team - Responsive Grid */}
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Core Team Members</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {[
                { name: "Ritesh N", role: "Team Lead" },
                { name: "Pannaga JA" },
                { name: "Shashank GS" },
                { name: "Ruthu Parinika" },
                { name: "Raghuveer" },
                { name: "Poornima" },
                { name: "Sanath Naik" },
                { name: "Praveen V" }
              ].map((member, index) => (
                <AnimatedSection key={member.name} animation="scale" delay={index * 0.05}>
                  <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover-lift overflow-hidden">
                    <CardContent className="flex flex-col items-center p-4 sm:p-6 relative">
                      <div className="mb-3 relative">
                        <Avatar className="w-12 sm:w-16 h-12 sm:h-16 shadow-md ring-2 ring-primary/20 transition-all duration-500 group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20">
                          <AvatarFallback className="text-xs sm:text-sm font-semibold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                      </div>
                      <h4 className="text-xs sm:text-base font-semibold group-hover:text-primary transition-colors text-center leading-tight">
                        {member.name}
                      </h4>
                      {member.role && (
                        <p className="text-xs text-accent text-center mt-1 font-medium">
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
      <AnimatedSection animation="fadeUp" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Ready to start your entrepreneurial journey? We're here to help you every step of the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: MapPin, title: "Address", content: "AMC Engineering College\nBangalore, Karnataka, India", link: "https://www.google.com/maps?q=AMC+Engineering+College+Bangalore+Karnataka+India" },
                  { icon: Mail, title: "Email", content: "amcentrepreneurshipcell@gmail.com", link: "mailto:amcentrepreneurshipcell@gmail.com" },
                  { icon: Phone, title: "Phone", content: "8660144040", link: "tel:8660144040" }
                ].map((contact, index) => (
                  <div key={contact.title} className={`flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300 delay-${index * 100}`}>
                    <contact.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">{contact.title}</h4>
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
      <AnimatedSection animation="scale" className="py-12 sm:py-16 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-base sm:text-lg text-muted-foreground text-center font-medium mb-2 px-4">
              "Stay connected with us for inspiration, updates, and opportunities!"
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-2xl">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow hover:bg-primary/90 hover-lift btn-primary text-sm sm:text-base"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
                Follow us on Instagram
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBWPAL2UPBNBnF63e2m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 hover-lift text-sm sm:text-base"
                aria-label="Join our WhatsApp Channel"
              >
                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                Join our WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection animation="fadeUp" className="bg-card border-t border-border py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden hover-scale">
                  <img src="/logo.png" alt="E-Cell AMC Logo" className="w-6 sm:w-8 h-6 sm:h-8 object-contain rounded-full" draggable="false" />
                </div>
                <span className="text-base sm:text-lg font-bold text-primary">E-Cell AMC</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Fostering innovation and entrepreneurship at AMC Engineering College
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-2">
                {['home','about','programs','events'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors nav-link"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Programs</h4>
              <div className="space-y-2">
                {["Incubation", "Acceleration", "Mentorship", "Workshops"].map((program) => (
                  <p key={program} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {program}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-muted-foreground">AMC Engineering College</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Bangalore, Karnataka</p>
                <p className="text-xs sm:text-sm text-muted-foreground break-words">amcentrepreneurshipcell@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
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
