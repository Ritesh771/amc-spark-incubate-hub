import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
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
  MessageCircle
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import heroImage from "@/assets/hero-business.jpg";
import teamImage from "@/assets/team-professional.jpg";
import eventsImage from "@/assets/events-conference.jpg";
import innovationImage from "@/assets/innovation-lab.jpg";

// Simple fade/slide-in animation utility
function useRevealOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible] as const;
}

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedCounts, setAnimatedCounts] = useState({
    startups: 0,
    events: 0,
    students: 0,
    mentors: 0
  });

  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (statsVisible) {
      const targets = { startups: 5, events: 10, students: 3000, mentors: 12 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(targets).forEach((key) => {
        let current = 0;
        const target = targets[key as keyof typeof targets];
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedCounts(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepTime);
      });
    }
  }, [statsVisible]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="E-Cell AMC Logo" className="w-10 h-10 object-contain rounded-full" draggable="false" />
              </div>
              <span className="text-xl font-bold text-primary">E-Cell AMC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home','about','programs','events','team','contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative text-foreground hover:text-primary transition-colors after:content-[''] after:block after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 transition-transform duration-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fadeIn">
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
      <AnimatedSection>
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fadeInUp">
              Fostering <span className="text-primary">Innovation</span> & <span className="text-accent">Entrepreneurship</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fadeInUp delay-100">
              The Entrepreneurship Cell of AMC Engineering College - Building tomorrow's entrepreneurs today through mentorship, innovation, and real-world business experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-105 animate-fadeInUp delay-200">
                  Join Our Community
                </Button>
              </a>
              <Button size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105 animate-fadeInUp delay-300" onClick={() => scrollToSection('programs')}>
                Explore Programs
              </Button>
            </div>
          </div>
          <motion.div
            className="relative"
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ y: [30, 0] }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          >
            <img 
              src={heroImage} 
              alt="Professional business environment" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      </AnimatedSection>

      {/* What is Entrepreneurship? Section */}
      <AnimatedSection>
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is Entrepreneurship?</h2>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8">
              <div>
                <p className="text-lg text-muted-foreground text-center mb-2">
                  Entrepreneurship is the process of creating, launching, and managing a new venture to solve problems and create value for society.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <User className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-lg mb-1">Who is an Entrepreneur?</h3>
                  <p className="text-muted-foreground text-sm">
                    An entrepreneur is someone who identifies a need, takes risks, and builds a business around a solution to fulfill that need.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Building2 className="w-8 h-8 text-accent mb-2" />
                  <h3 className="font-semibold text-lg mb-1">Business Owner vs Entrepreneur</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <div><span className="font-medium">Business Owner:</span> Manages an existing business for profit.</div>
                    <div><span className="font-medium">Entrepreneur:</span> Builds something new, innovative, and impactful to create value.</div>
                  </div>
                </div>
              </div>
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
                  className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-base transition-colors hover:bg-primary/20 hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Follow us on Instagram"
                >
                  💬 Want to become one? Follow us and stay tuned.
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Highlighted Event Video */}
      <AnimatedSection>
        <section className="py-12 bg-background">
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
            <h3 className="text-2xl font-bold text-center mb-2">E-Cell AMC: Startup Speaker Series Highlight</h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">Catch the energy and inspiration from our latest event! Watch the journey, insights, and excitement from our Startup Speaker Series.</p>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
      <section ref={statsRef} className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card className="text-center border-0 shadow-lg transition-transform duration-300 hover:scale-105 animate-fadeInUp">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.startups}+</div>
                  <div className="text-muted-foreground">Startups Supported</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card className="text-center border-0 shadow-lg transition-transform duration-300 hover:scale-105 animate-fadeInUp">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.events}+</div>
                  <div className="text-muted-foreground">Events Conducted</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card className="text-center border-0 shadow-lg transition-transform duration-300 hover:scale-105 animate-fadeInUp">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.students}+</div>
                  <div className="text-muted-foreground">Students Reached</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card className="text-center border-0 shadow-lg transition-transform duration-300 hover:scale-105 animate-fadeInUp">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.mentors}+</div>
                  <div className="text-muted-foreground">Expert Mentors</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About E-Cell AMC</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are the premier entrepreneurship hub at AMC Engineering College, dedicated to nurturing innovative minds and transforming ideas into successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To create a vibrant ecosystem that empowers students to think entrepreneurially, develop innovative solutions, and build sustainable businesses that make a positive impact on society.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p className="text-sm text-muted-foreground">Fostering creative thinking and breakthrough solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Network className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Networking</h4>
                    <p className="text-sm text-muted-foreground">Building connections with industry leaders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Growth</h4>
                    <p className="text-sm text-muted-foreground">Supporting startups from idea to success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Community</h4>
                    <p className="text-sm text-muted-foreground">Building a supportive entrepreneurial ecosystem</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={innovationImage} 
                alt="Innovation lab" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Programs Section */}
      <AnimatedSection>
      <section id="programs" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to transform students into successful entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Incubation Program</CardTitle>
                  <CardDescription>
                    6-month intensive program for early-stage startups
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mentorship from industry experts</li>
                    <li>• Seed funding opportunities</li>
                    <li>• Legal and business guidance</li>
                    <li>• Workspace and resources</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Accelerator Program</CardTitle>
                  <CardDescription>
                    3-month intensive program for growth-stage startups
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Market validation support</li>
                    <li>• Investment readiness training</li>
                    <li>• Go-to-market strategies</li>
                    <li>• Investor pitch preparation</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Skill Development</CardTitle>
                  <CardDescription>
                    Workshops and training programs for entrepreneurial skills
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Business model canvas</li>
                    <li>• Financial planning</li>
                    <li>• Digital marketing</li>
                    <li>• Leadership development</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          {/* Register Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://forms.gle/ZBL1p3WJuGoqb4vC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                Register
              </Button>
            </a>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Signature E-Cell Programs & Initiatives */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-background to-secondary/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Signature E-Cell Programs & Initiatives</h2>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              E-Cell AMC offers a diverse set of hands-on programs and events designed to inspire, educate, and empower the next generation of entrepreneurs. Here’s how we make a difference:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. Startup Speaker Series */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Award className="w-7 h-7 text-primary" />
                  <CardTitle className="text-lg">Startup Speaker Series <span className="text-xs text-muted-foreground">(Monthly)</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Invite founders, alumni entrepreneurs, or investors to share their journey, mistakes, and insights with students.<br/>
                  <span className="inline-flex items-center gap-1 mt-2 text-green-600 font-medium">🟢 Outcome: Inspires students + builds network.</span>
                </CardContent>
              </Card>
              {/* 2. Ideathon / Pitch & Win Contest */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-accent" />
                  <CardTitle className="text-lg">Ideathon / Pitch & Win <span className="text-xs text-muted-foreground">(Quarterly)</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  A short 1–2 day event where students pitch early startup ideas.<br/>
                  <span className="inline-flex items-center gap-1 mt-2 text-green-600 font-medium">🟢 Judged by faculty, alumni, or real entrepreneurs.</span>
                </CardContent>
              </Card>
              {/* 3. E-Cell Skill Bootcamps */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <BookOpen className="w-7 h-7 text-primary" />
                  <CardTitle className="text-lg">E-Cell Skill Bootcamps <span className="text-xs text-muted-foreground">(Every 2 months)</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Skill-specific workshops: Pitching & storytelling, UI/UX & Product design, MVP building, Startup law & IP, Growth marketing 101.
                </CardContent>
              </Card>
              {/* 4. Startup Internship Connect */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Network className="w-7 h-7 text-accent" />
                  <CardTitle className="text-lg">Startup Internship Connect <span className="text-xs text-muted-foreground">(Semester-wise)</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Partner with 5–10 early-stage startups and let students apply for internships directly through E-Cell.<br/>
                  <span className="inline-flex items-center gap-1 mt-2 text-green-600 font-medium">🟢 Bridge between student talent and startups.</span>
                </CardContent>
              </Card>
              {/* 5. Build Something Hack Series */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Rocket className="w-7 h-7 text-primary" />
                  <CardTitle className="text-lg">“Build Something” Hack Series <span className="text-xs text-muted-foreground">(Monthly / Bi-monthly)</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Students team up to solve local problems or startup challenges. Helps create prototypes, apps, AI tools, and even social startups.
                </CardContent>
              </Card>
              {/* 6. Startup of the Month Feature */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-accent" />
                  <CardTitle className="text-lg">Startup of the Month Feature</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Spotlight one innovative startup every month through reels, carousel posts, and posters. Builds awareness and encourages networking.
                </CardContent>
              </Card>
              {/* 7. Alumni Mentorship Circles */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Users className="w-7 h-7 text-primary" />
                  <CardTitle className="text-lg">Alumni Mentorship Circles <span className="text-xs text-muted-foreground">(Bi-annual)</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Bring back 3–5 successful AMC alumni working in startups or product roles. Match them with groups of student founders for mentorship.
                </CardContent>
              </Card>
              {/* 8. Mini Investment Simulation Program */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Target className="w-7 h-7 text-accent" />
                  <CardTitle className="text-lg">Mini Investment Simulation Program</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Teach students how VC/investor rounds work through a mock event — some students become "investors", others pitch. Gamified learning of real-world funding mechanics.
                </CardContent>
              </Card>
              {/* 9. Entrepreneur-in-Residence Program (EIR) */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <User className="w-7 h-7 text-primary" />
                  <CardTitle className="text-lg">Entrepreneur-in-Residence Program (EIR)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Invite a local founder to “reside” (virtually) for a week — students can ask questions, shadow their schedule, etc.
                </CardContent>
              </Card>
              {/* 10. AMC Startup Demo Day */}
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Calendar className="w-7 h-7 text-accent" />
                  <CardTitle className="text-lg">AMC Startup Demo Day <span className="text-xs text-muted-foreground">(End of year)</span></CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Let top student teams showcase their MVPs or ideas in front of the college, mentors, and local ecosystem players.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Events Section */}
      <AnimatedSection>
        <section id="events" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our events to learn, network, and grow your entrepreneurial journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
              {/* Event 1 */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-video w-full overflow-hidden">
                  <img src={eventsImage} alt="Startup Pitch Competition" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Upcoming</Badge>
                    <span className="text-sm text-muted-foreground">March 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Startup Pitch Competition</h3>
                  <p className="text-muted-foreground mb-4">
                    Present your business ideas to a panel of expert judges and win prizes worth ₹2 lakhs
                  </p>
                  <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>Register Now</Button>
                </CardContent>
              </Card>
              {/* Event 2 */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-video w-full overflow-hidden">
                  <img src={innovationImage} alt="Entrepreneurship Workshop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Upcoming</Badge>
                    <span className="text-sm text-muted-foreground">March 22, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Entrepreneurship Workshop</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn the fundamentals of starting and scaling a business from industry veterans
                  </p>
                  <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>Register Now</Button>
                </CardContent>
              </Card>
              {/* Event 3 - Example extra event */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-video w-full overflow-hidden">
                  <img src={teamImage} alt="E-Cell Skill Bootcamp" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Upcoming</Badge>
                    <span className="text-sm text-muted-foreground">April 10, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">E-Cell Skill Bootcamp</h3>
                  <p className="text-muted-foreground mb-4">
                    Hands-on workshop on MVP building, UI/UX, and pitching for aspiring founders.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>Register Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
      <section id="team" className="py-20 bg-gradient-to-br from-background to-secondary/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">Meet the passionate individuals and mentors guiding E-Cell AMC</p>
          </div>
          {/* Main Team Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Faculty Coordinator */}
            <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="flex flex-col items-center p-8">
                <div className="mb-4">
                  <Avatar className="w-24 h-24 shadow-lg ring-4 ring-primary/30">
                    <AvatarFallback>NSB</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Dr.  Nandeeswar S B</h3>
                <p className="text-sm text-muted-foreground mb-1">Faculty Coordinator</p>
                <p className="text-xs text-accent">HOD CSE AIML</p>
              </CardContent>
            </Card>
            {/* Mentorship */}
            <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="flex flex-col items-center p-8">
                <div className="mb-4">
                  <Avatar className="w-24 h-24 shadow-lg ring-4 ring-accent/30">
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">Prof. Swathi Srikanth</h3>
                <p className="text-sm text-muted-foreground mb-1">Mentorship</p>
                <p className="text-xs text-accent">Industry Expert</p>
              </CardContent>
            </Card>
            {/* Team Lead */}
            <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="flex flex-col items-center p-8">
                <div className="mb-4">
                  <Avatar className="w-24 h-24 shadow-lg ring-4 ring-primary/30">
                    <AvatarFallback>RN</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Ritesh N</h3>
                <p className="text-sm text-muted-foreground mb-1">Team Lead</p>
                <p className="text-xs text-accent">4th Year CSE AIML</p>
              </CardContent>
            </Card>
          </div>
          {/* Core Members Row */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { name: "Pannaga JA" },
              { name: "Shashank GS" },
              { name: "Ruthu Parinika" },
              { name: "Raghuveer" },
              { name: "Poornima" },
              { name: "Praveen V" }
            ].map((member, idx) => (
              <Card key={idx} className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 min-w-[180px] max-w-xs">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-3">
                    <Avatar className="w-16 h-16 shadow-md ring-2 ring-primary/20">
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h4 className="text-base font-semibold group-hover:text-primary transition-colors mb-1">{member.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
      <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to start your entrepreneurial journey? We're here to help you every step of the way
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <a
                      href="https://www.google.com/maps?q=AMC+Engineering+College+Bangalore+Karnataka+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary underline transition-colors"
                    >
                      AMC Engineering College<br />
                      Bangalore, Karnataka, India
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <a
                      href="mailto:amcentrepreneurshipcell@gmail.com"
                      className="text-muted-foreground hover:text-primary underline transition-colors"
                    >
                      amcentrepreneurshipcell@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <a
                      href="tel:8660144040"
                      className="text-muted-foreground hover:text-primary underline transition-colors"
                    >
                      8660144040
                    </a>
                  </div>
                </div>
              </div>
              {/* Right: Map */}
              <div>
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
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Quote and Social Buttons */}
      <AnimatedSection>
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center mt-12 gap-4">
              <p className="text-lg text-muted-foreground text-center font-medium mb-2">
                "Stay connected with us for inspiration, updates, and opportunities!"
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.instagram.com/amc.ecell?igsh=MXZsMGVwODFpZWp1aA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-full font-semibold shadow hover:bg-primary/90 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbBWPAL2UPBNBnF63e2m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-colors"
                  aria-label="Join our WhatsApp Channel"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join our WhatsApp Channel
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection>
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <img src="/logo.png" alt="E-Cell AMC Logo" className="w-8 h-8 object-contain rounded-full" draggable="false" />
                </motion.div>
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
                <p className="text-sm text-muted-foreground">Incubation</p>
                <p className="text-sm text-muted-foreground">Acceleration</p>
                <p className="text-sm text-muted-foreground">Mentorship</p>
                <p className="text-sm text-muted-foreground">Workshops</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">AMC Engineering College</p>
                <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
                <p className="text-sm text-muted-foreground">ecell@amcengineering.com</p>
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
      </AnimatedSection>
    </div>
  );
};

// AnimatedSection with Framer Motion for fade/slide-in and stagger
function AnimatedSection({ children, stagger=0.15 }: { children: React.ReactNode, stagger?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: stagger } } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

export default Index;