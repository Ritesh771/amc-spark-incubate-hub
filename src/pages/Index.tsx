import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountUpNumber } from "@/components/CountUpNumber";
import { ProgramModal } from "@/components/ProgramModal";
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
  Brain
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleProgramClick = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden hover-scale">
                <img src="/logo.png" alt="E-Cell AMC Logo" className="w-10 h-10 object-contain rounded-full" draggable="false" />
              </div>
              <span className="text-xl font-bold text-primary">E-Cell AMC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home','about','programs','events','team','contact'].map((id, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`nav-link text-foreground hover:text-primary transition-colors delay-${index * 100}`}
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
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeLeft" className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Fostering <span className="gradient-text">Innovation</span> & <span className="text-accent">Entrepreneurship</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Entrepreneurship Cell of AMC Engineering College - Building tomorrow's entrepreneurs today through mentorship, innovation, and real-world business experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift">
                  Join Our Community
                </Button>
              </a>
              <Button size="lg" variant="outline" className="hover-scale" onClick={() => scrollToSection('programs')}>
                Explore Programs
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="relative hover-lift">
              <img 
                src={heroImage} 
                alt="Professional business environment" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is Entrepreneurship Section */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is Entrepreneurship?</h2>
          <div className="card-hover bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8 border border-white/20">
            <div>
              <p className="text-lg text-muted-foreground text-center mb-2">
                Entrepreneurship is the process of creating, launching, and managing a new venture to solve problems and create value for society.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation="scale" delay={0.1} className="flex flex-col items-center text-center">
                <User className="w-8 h-8 text-primary mb-2 animate-float" />
                <h3 className="font-semibold text-lg mb-1">Who is an Entrepreneur?</h3>
                <p className="text-muted-foreground text-sm">
                  An entrepreneur is someone who identifies a need, takes risks, and builds a business around a solution to fulfill that need.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="scale" delay={0.2} className="flex flex-col items-center text-center">
                <Building2 className="w-8 h-8 text-accent mb-2 animate-float delay-200" />
                <h3 className="font-semibold text-lg mb-1">Business Owner vs Entrepreneur</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div><span className="font-medium">Business Owner:</span> Manages an existing business for profit.</div>
                  <div><span className="font-medium">Entrepreneur:</span> Builds something new, innovative, and impactful to create value.</div>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="mt-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-base">Why this matters:</span>
                </div>
                <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto">
                  Understanding the core of entrepreneurship helps you think beyond employment—to become a job creator, problem solver, and innovator.
                </p>
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full font-medium text-base transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Follow us on Instagram"
                >
                  💬 Want to become one? Follow us and stay tuned.
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Highlighted Event Video */}
      <AnimatedSection animation="scale" className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-hover rounded-2xl shadow-2xl overflow-hidden aspect-video border border-border mb-6">
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
            <h3 className="text-2xl font-bold text-center mb-2">E-Cell AMC: Startup Speaker Series Highlight</h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Catch the energy and inspiration from our latest event! Watch the journey, insights, and excitement from our Startup Speaker Series.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-secondary/50">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { end: 5, label: "Startups Supported", suffix: "+" },
              { end: 10, label: "Events Conducted", suffix: "+" },
              { end: 3000, label: "Students Reached", suffix: "+" },
              { end: 12, label: "Expert Mentors", suffix: "+" }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <CountUpNumber 
                      end={stat.end} 
                      suffix={stat.suffix}
                      className="text-4xl font-bold text-primary mb-2 block"
                    />
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animation="fadeUp" className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About E-Cell AMC</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are the premier entrepreneurship hub at AMC Engineering College, dedicated to nurturing innovative minds and transforming ideas into successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="fadeLeft">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To create a vibrant ecosystem that empowers students to think entrepreneurially, develop innovative solutions, and build sustainable businesses that make a positive impact on society.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Lightbulb, title: "Innovation", desc: "Fostering creative thinking and breakthrough solutions" },
                  { icon: Network, title: "Networking", desc: "Building connections with industry leaders" },
                  { icon: TrendingUp, title: "Growth", desc: "Supporting startups from idea to success" },
                  { icon: Users, title: "Community", desc: "Building a supportive entrepreneurial ecosystem" }
                ].map((item, index) => (
                  <AnimatedSection key={item.title} animation="scale" delay={index * 0.1}>
                    <div className="flex items-start space-x-3 hover-lift p-3 rounded-lg transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary mt-1 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
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
                  alt="Innovation lab" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Programs Section */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-secondary/30" id="programs">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to transform students into successful entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.1}>
                <Card 
                  className="border-0 shadow-lg hover-lift card-hover bg-white/80 backdrop-blur-sm h-full cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  onClick={() => handleProgramClick(program)}
                >
                  <CardHeader className="text-center">
                    <program.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-float" style={{ animationDelay: `${index * 0.7}s` }} />
                    <CardTitle className="hover:text-primary transition-colors">{program.title}</CardTitle>
                    <CardDescription>{program.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {program.level}
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 opacity-70"></span>
                          {feature}
                        </li>
                      ))}
                      {program.features.length > 3 && (
                        <li className="text-primary font-medium text-center pt-2">
                          Click to see more details...
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
              <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift animate-pulse-glow">
                Register Now
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Signature Programs */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-gradient-to-br from-background to-secondary/40">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Signature E-Cell Programs & Initiatives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              E-Cell AMC offers a diverse set of hands-on programs and events designed to inspire, educate, and empower the next generation of entrepreneurs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Startup Speaker Series", timing: "Monthly", desc: "Invite founders, alumni entrepreneurs, or investors to share their journey, mistakes, and insights with students.", outcome: "Inspires students + builds network." },
              { icon: Lightbulb, title: "Ideathon / Pitch & Win", timing: "Quarterly", desc: "A short 1–2 day event where students pitch early startup ideas.", outcome: "Judged by faculty, alumni, or real entrepreneurs." },
              { icon: BookOpen, title: "E-Cell Skill Bootcamps", timing: "Every 2 months", desc: "Skill-specific workshops: Pitching & storytelling, UI/UX & Product design, MVP building, Startup law & IP, Growth marketing 101." },
              { icon: Network, title: "Startup Internship Connect", timing: "Semester-wise", desc: "Partner with 5–10 early-stage startups and let students apply for internships directly through E-Cell.", outcome: "Bridge between student talent and startups." },
              { icon: Rocket, title: "Build Something Hack Series", timing: "Monthly / Bi-monthly", desc: "Students team up to solve local problems or startup challenges. Helps create prototypes, apps, AI tools, and even social startups." },
              { icon: TrendingUp, title: "Startup of the Month Feature", timing: "", desc: "Spotlight one innovative startup every month through reels, carousel posts, and posters. Builds awareness and encourages networking." },
              { icon: Users, title: "Alumni Mentorship Circles", timing: "Bi-annual", desc: "Bring back 3–5 successful AMC alumni working in startups or product roles. Match them with groups of student founders for mentorship." },
              { icon: Target, title: "Mini Investment Simulation Program", timing: "", desc: "Teach students how VC/investor rounds work through a mock event — some students become 'investors', others pitch." },
              { icon: User, title: "Entrepreneur-in-Residence Program (EIR)", timing: "", desc: "Invite a local founder to 'reside' (virtually) for a week — students can ask questions, shadow their schedule, etc." },
              { icon: Calendar, title: "AMC Startup Demo Day", timing: "End of year", desc: "Let top student teams showcase their MVPs or ideas in front of the college, mentors, and local ecosystem players." }
            ].map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 0.05}>
                <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover-lift card-hover h-full">
                  <CardHeader className="flex flex-row items-center gap-3 pb-3">
                    <program.icon className="w-7 h-7 text-primary animate-float" style={{ animationDelay: `${index * 0.3}s` }} />
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
                      {program.timing && (
                        <span className="text-xs text-muted-foreground">({program.timing})</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground pt-0">
                    <p className="mb-2">{program.desc}</p>
                    {program.outcome && (
                      <p className="text-green-600 font-medium flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
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
      <AnimatedSection animation="fadeUp" className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our events to learn, network, and grow your entrepreneurial journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {[
              { image: eventsImage, title: "Startup Pitch Competition", date: "March 15, 2024", desc: "Present your business ideas to a panel of expert judges and win prizes worth ₹2 lakhs" },
              { image: innovationImage, title: "Entrepreneurship Workshop", date: "March 22, 2024", desc: "Learn the fundamentals of starting and scaling a business from industry veterans" },
              { image: teamImage, title: "E-Cell Skill Bootcamp", date: "April 10, 2024", desc: "Hands-on workshop on MVP building, UI/UX, and pitching for aspiring founders." }
            ].map((event, index) => (
              <AnimatedSection key={event.title} animation="scale" delay={index * 0.1}>
                <Card className="border-0 shadow-xl hover-lift card-hover overflow-hidden group bg-white/90 backdrop-blur-sm">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="animate-pulse">Upcoming</Badge>
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.desc}</p>
                    <Button variant="outline" size="sm" className="hover-scale" onClick={() => scrollToSection('contact')}>
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-gradient-to-br from-background to-secondary/60" id="team">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals and mentors guiding E-Cell AMC
            </p>
          </div>
          
          {/* Faculty & Mentors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              { name: "Dr. Nandeeswar S B", role: "Faculty Coordinator", dept: "HOD CSE AIML", initials: "NSB" },
              { name: "Prof. Swathi Srikanth", role: "Mentorship", dept: "Industry Expert", initials: "SS" },
              { name: "Ritesh N", role: "Team Lead", dept: "4th Year CSE AIML", initials: "RN" }
            ].map((member, index) => (
              <AnimatedSection key={member.name} animation="scale" delay={index * 0.1}>
                <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover-lift card-hover overflow-hidden">
                  <CardContent className="flex flex-col items-center p-8 relative">
                    <div className="mb-4 relative">
                      <Avatar className="w-24 h-24 shadow-lg ring-4 ring-primary/30 transition-all duration-500 group-hover:w-32 group-hover:h-32">
                        <AvatarFallback className="text-lg font-bold">{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full flex items-end justify-center pb-2">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <div className="text-sm font-semibold">{member.role}</div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                    <p className="text-xs text-accent">{member.dept}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Core Team - Horizontal Scroll */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-8">Core Team Members</h3>
            <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
              {[
                { name: "Pannaga JA" },
                { name: "Shashank GS" },
                { name: "Ruthu Parinika" },
                { name: "Raghuveer" },
                { name: "Poornima" },
                { name: "Praveen V" }
              ].map((member, index) => (
                <AnimatedSection key={member.name} animation="scale" delay={index * 0.05}>
                  <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 min-w-[200px] flex-shrink-0 hover-lift overflow-hidden">
                    <CardContent className="flex flex-col items-center p-6 relative">
                      <div className="mb-3 relative">
                        <Avatar className="w-16 h-16 shadow-md ring-2 ring-primary/20 transition-all duration-500 group-hover:w-20 group-hover:h-20">
                          <AvatarFallback className="text-sm font-semibold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                      </div>
                      <h4 className="text-base font-semibold group-hover:text-primary transition-colors text-center">
                        {member.name}
                      </h4>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your entrepreneurial journey? We're here to help you every step of the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Address", content: "AMC Engineering College\nBangalore, Karnataka, India", link: "https://www.google.com/maps?q=AMC+Engineering+College+Bangalore+Karnataka+India" },
                  { icon: Mail, title: "Email", content: "amcentrepreneurshipcell@gmail.com", link: "mailto:amcentrepreneurshipcell@gmail.com" },
                  { icon: Phone, title: "Phone", content: "8660144040", link: "tel:8660144040" }
                ].map((contact, index) => (
                  <div key={contact.title} className={`flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300 delay-${index * 100}`}>
                    <contact.icon className="w-6 h-6 text-primary mt-1 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
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
              <div className="card-hover">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
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
      <AnimatedSection animation="scale" className="py-16 bg-background">
        <div className="container-width">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-lg text-muted-foreground text-center font-medium mb-2">
              "Stay connected with us for inspiration, updates, and opportunities!"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow hover:bg-primary/90 hover-lift btn-primary"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                Follow us on Instagram
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBWPAL2UPBNBnF63e2m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 hover-lift"
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
      <AnimatedSection animation="fadeUp" className="bg-card border-t border-border py-12">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
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
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['home','about','programs','events'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors nav-link"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <div className="space-y-2">
                {["Incubation", "Acceleration", "Mentorship", "Workshops"].map((program) => (
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
