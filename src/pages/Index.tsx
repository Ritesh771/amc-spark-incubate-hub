import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Lightbulb, 
  Users, 
  Target, 
  Calendar, 
  MapPin, 
  Mail, 
  Linkedin, 
  Instagram, 
  Rocket,
  Star,
  Trophy,
  Globe,
  Heart,
  BookOpen,
  Zap,
  Brain,
  Code,
  Palette,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  TrendingUp,
  Building,
  UserCheck,
  Download,
  ExternalLink,
  Handshake,
  Megaphone,
  Search,
  FileText,
  Video,
  Camera,
  ThumbsUp,
  Send,
  Shield,
  Briefcase,
  GraduationCap,
  Settings,
  Network,
  PieChart,
  BarChart3,
  Users2,
  Coins,
  Clock,
  Eye,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  Crown
} from "lucide-react";

// Counter component for animated stats
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startCount) + startCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span className="counter-animate">{count}{suffix}</span>;
};

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-['Inter'] relative overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <img 
                src="/lovable-uploads/2393551e-f229-4311-96a9-fd84f1257fd7.png" 
                alt="AMC E-Cell" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-transform duration-300 hover:scale-110"
              />
              <div>
                <span className="text-lg sm:text-xl font-bold gradient-text-stalight">AMC E-Cell</span>
                <p className="text-xs text-gray-400 hidden sm:block">Innovation Hub</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Programs', id: 'programs' },
                { name: 'Events', id: 'events' },
                { name: 'Team', id: 'team' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Join E-Cell
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-3 bg-slate-800/95 backdrop-blur-md rounded-xl mt-4 px-6 border border-purple-500/20">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Programs', id: 'programs' },
                { name: 'Events', id: 'events' },
                { name: 'Team', id: 'team' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium w-full text-left py-2 px-3 rounded-lg hover:bg-purple-600/20"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full mt-4 rounded-full"
              >
                Join E-Cell
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="absolute top-10 left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 right-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/2393551e-f229-4311-96a9-fd84f1257fd7.png" 
              alt="AMC E-Cell Logo" 
              className="w-16 h-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto mb-4 rounded-full shadow-2xl hover-glow transition-all duration-500 hover:scale-110 float-animation"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in animation-delay-200 leading-tight px-4">
            <span className="gradient-text-stalight block">Igniting Innovation</span>
            <span className="text-white block mt-2">Empowering Entrepreneurs</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 sm:mb-8 animate-fade-in animation-delay-400 max-w-5xl mx-auto px-4">
            AMC Engineering College's Official Entrepreneurship Cell
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600 px-4 max-w-lg mx-auto sm:max-w-none">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Join E-Cell
            </Button>
            <Button 
              onClick={() => scrollToSection('events')}
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto backdrop-blur-sm"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-400 rounded-full flex justify-center cursor-pointer" onClick={() => scrollToSection('stats')}>
              <div className="w-1 h-2 sm:h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-stalight">Our Impact</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl">Driving innovation and entrepreneurship at AMC</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {[
              { label: "Startups Reached", value: 30, suffix: "+", icon: Rocket },
              { label: "Events Conducted", value: 15, suffix: "+", icon: Calendar },
              { label: "Students Impacted", value: 800, suffix: "+", icon: Users },
              { label: "Alumni Entrepreneurs", value: 12, suffix: "", icon: GraduationCap },
              { label: "Funds Raised", value: 10, suffix: "L+", icon: Coins },
              { label: "Partner Organizations", value: 6, suffix: "", icon: Handshake }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/5 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-center backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 lg:mb-4 text-purple-400" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-tight">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text-stalight">AMC E-Cell</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Founded in 2022 with a vision to foster innovation and entrepreneurship, AMC E-Cell emerged from the collective passion of students who believed in the power of ideas to transform society.
            </p>
          </div>

          {/* Founding Story */}
          <div className="mb-12 sm:mb-16">
            <Card className="bg-white/5 border-purple-500/30 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                      <BookOpen className="mr-3 h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                      Our Founding Story
                    </h3>
                    <div className="space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                      <p>
                        In 2022, a group of visionary students at AMC Engineering College recognized the need for a platform that could bridge the gap between academic learning and real-world entrepreneurship. What started as informal brainstorming sessions in the college corridors evolved into a structured entrepreneurship cell.
                      </p>
                      <p>
                        With support from the faculty and administration, AMC E-Cell was officially established to nurture the entrepreneurial spirit among students and create a thriving startup ecosystem within the campus.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {["Innovation", "Collaboration", "Leadership", "Sustainability"].map((value) => (
                        <Badge key={value} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs sm:text-sm">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/2393551e-f229-4311-96a9-fd84f1257fd7.png" 
                      alt="AMC E-Cell Logo" 
                      className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-2xl hover-glow float-animation"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {[
              { title: "Innovation", icon: Lightbulb, desc: "Fostering creative thinking and breakthrough ideas" },
              { title: "Collaboration", icon: Users, desc: "Building strong partnerships and teamwork" },
              { title: "Leadership", icon: Trophy, desc: "Developing future leaders and changemakers" },
              { title: "Sustainability", icon: Globe, desc: "Creating lasting impact for society" }
            ].map((value, index) => (
              <Card key={index} className="bg-white/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-center backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4 text-purple-400" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Timeline */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 lg:p-12 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
              <span className="gradient-text-stalight">Our Journey</span>
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {[
                { year: "2022", event: "AMC E-Cell Founded", desc: "Official establishment with faculty support" },
                { year: "2023", event: "First Ideathon Launched", desc: "Campus-wide innovation challenge with 200+ participants" },
                { year: "2024", event: "First Startup Incubated", desc: "Successfully launched our first student-led venture" },
                { year: "2024", event: "Industry Partnerships", desc: "Collaborated with 6+ organizations and startups" },
                { year: "2025", event: "External Collaborations", desc: "Expanding beyond campus with regional partnerships" }
              ].map((milestone, index) => (
                <div key={index} className="timeline-item flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm lg:text-base">{milestone.year.slice(-2)}</span>
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">{milestone.event}</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-Cell Programs & Divisions */}
      <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="gradient-text-stalight">Our Programs & Divisions</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">Specialized wings driving innovation across different domains</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                title: "Innovation Wing",
                description: "Idea curation, hackathons, and innovation challenges",
                icon: Lightbulb,
                features: ["Ideation Workshops", "Prototype Development", "Innovation Challenges"]
              },
              {
                title: "Incubation Cell",
                description: "Support for prototypes, mentorship, and startup guidance",
                icon: Rocket,
                features: ["Mentorship Programs", "Funding Guidance", "Legal Support"]
              },
              {
                title: "Community Outreach",
                description: "Local startup interaction, school visits, and awareness",
                icon: Users,
                features: ["School Programs", "Local Partnerships", "Awareness Campaigns"]
              },
              {
                title: "Marketing & PR",
                description: "Social media, branding, newsletters, and communications",
                icon: Megaphone,
                features: ["Social Media", "Event Promotion", "Newsletter"]
              },
              {
                title: "Research & Analysis",
                description: "Industry trends, startup challenges, and market research",
                icon: BarChart3,
                features: ["Market Research", "Trend Analysis", "Case Studies"]
              },
              {
                title: "Startup Support Wing",
                description: "Web development, legal, and branding help for startups",
                icon: Settings,
                features: ["Web Development", "Legal Assistance", "Branding Support"]
              }
            ].map((program, index) => (
              <Card key={index} className="bg-white/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <program.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mr-3" />
                    <CardTitle className="text-white text-base sm:text-lg lg:text-xl">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Knowledge Center / Resources */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 lg:p-12 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
              <span className="gradient-text-stalight">Knowledge Center</span>
            </h3>
            <p className="text-gray-300 text-center mb-8 sm:mb-12 text-base sm:text-lg">Free resources to fuel your entrepreneurial journey</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { title: "E-books", icon: BookOpen, desc: "Startup basics and entrepreneurship guides", count: "15+" },
                { title: "Pitch Decks", icon: FileText, desc: "Winning presentation templates", count: "8+" },
                { title: "Video Lectures", icon: Video, desc: "Recorded sessions from guest speakers", count: "25+" },
                { title: "Startup Toolkits", icon: Briefcase, desc: "Legal checklists and business templates", count: "12+" }
              ].map((resource, index) => (
                <Card key={index} className="bg-white/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-center backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <resource.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4 text-purple-400" />
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-4">{resource.desc}</p>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 mb-4 text-xs">
                      {resource.count} Available
                    </Badge>
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300 w-full text-xs sm:text-sm">
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Access Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events & Activities - Enhanced */}
      <section id="events" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 to-slate-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Events & <span className="gradient-text-stalight">Activities</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">Building trust through active engagement and innovation</p>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 border border-purple-500/30 mb-8">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs sm:text-sm">Upcoming</TabsTrigger>
              <TabsTrigger value="ongoing" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs sm:text-sm">Ongoing</TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs sm:text-sm">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Ideathon 2025",
                    type: "Competition",
                    description: "Campus-wide idea pitching competition with exciting prizes",
                    date: "February 25-26, 2025",
                    participants: "Registration Open",
                    prize: "₹50,000 Total Prize Pool"
                  },
                  {
                    title: "Business Plan Competition",
                    type: "Competition",
                    description: "Comprehensive business plan presentation contest",
                    date: "March 15, 2025",
                    participants: "Teams of 3-5",
                    prize: "₹25,000 Winner Prize"
                  },
                  {
                    title: "Tech Startup Expo",
                    type: "Exhibition",
                    description: "Showcase of student and alumni startups",
                    date: "April 10, 2025",
                    participants: "Expected 300+",
                    prize: "Industry Recognition"
                  }
                ].map((event, index) => (
                  <Card key={index} className="bg-white/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                          Upcoming
                        </Badge>
                        <Badge variant="outline" className="text-purple-300 border-purple-400 text-xs">
                          {event.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-base sm:text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">{event.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-xs sm:text-sm">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{event.date}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{event.participants}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm">
                          <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-yellow-300">{event.prize}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-xs sm:text-sm">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ongoing" className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Startup Saturdays",
                    type: "Series",
                    description: "Monthly founder talks and networking sessions",
                    date: "Every Saturday",
                    participants: "50+ attendees/session"
                  },
                  {
                    title: "Mentorship Program",
                    type: "Program",
                    description: "One-on-one guidance from industry experts",
                    date: "Ongoing",
                    participants: "25 selected students"
                  },
                  {
                    title: "AMC StartHub",
                    type: "Incubation",
                    description: "Mini incubation space for student ventures",
                    date: "Operational",
                    participants: "5 active startups"
                  }
                ].map((event, index) => (
                  <Card key={index} className="bg-white/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-orange-600/20 text-orange-300 text-xs">
                          Ongoing
                        </Badge>
                        <Badge variant="outline" className="text-purple-300 border-purple-400 text-xs">
                          {event.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-base sm:text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs sm:text-sm">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{event.date}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{event.participants}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Innovation Hackathon 2024",
                    type: "Competition",
                    description: "48-hour hackathon for innovative tech solutions",
                    date: "November 20-22, 2024",
                    participants: "120 participants",
                    outcome: "15 prototypes developed"
                  },
                  {
                    title: "Startup Pitch Workshop",
                    type: "Workshop",
                    description: "Learn the art of pitching your startup idea effectively",
                    date: "October 15, 2024",
                    participants: "75 students",
                    outcome: "25 pitch decks created"
                  },
                  {
                    title: "Entrepreneur Talk Series",
                    type: "Seminar",
                    description: "Industry leaders sharing their success stories",
                    date: "September 2024",
                    participants: "200+ attendees",
                    outcome: "3 guest speakers"
                  }
                ].map((event, index) => (
                  <Card key={index} className="bg-white/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-green-600/20 text-green-300 text-xs">
                          Completed
                        </Badge>
                        <Badge variant="outline" className="text-purple-300 border-purple-400 text-xs">
                          {event.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-base sm:text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs sm:text-sm">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{event.date}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{event.participants}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm">
                          <Award className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-green-300">{event.outcome}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section id="team" className="py-12 sm:py-16 lg:py-20 bg-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Meet Our <span className="gradient-text-stalight">Team</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">The passionate individuals driving innovation at AMC</p>
          </div>

          {/* Organizational Structure */}
          <div className="mb-12 sm:mb-16">
            <Card className="bg-white/5 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Organizational Structure</h3>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">Faculty Coordinator</p>
                  </div>
                  <ArrowRight className="text-purple-400 rotate-90 md:rotate-0 h-4 w-4 sm:h-6 sm:w-6" />
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">Mentorship</p>
                  </div>
                  <ArrowRight className="text-purple-400 rotate-90 md:rotate-0 h-4 w-4 sm:h-6 sm:w-6" />
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">Team Lead</p>
                  </div>
                  <ArrowRight className="text-purple-400 rotate-90 md:rotate-0 h-4 w-4 sm:h-6 sm:w-6" />
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Network className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm sm:text-base">Core Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Faculty Coordinator */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Faculty Coordinator</h3>
            <Card className="bg-white/10 border-purple-500/30 max-w-md mx-auto hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Prof. Nandishwar</h4>
                <p className="text-yellow-300 mb-2 text-sm sm:text-base">HOD, CSE AIML Department</p>
                <p className="text-gray-300 text-xs sm:text-sm mb-4">Guiding our vision with academic excellence and industry expertise. Leading the department with innovation and fostering entrepreneurial mindset among students.</p>
                <div className="flex justify-center flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-300 text-xs">Academic Leader</Badge>
                  <Badge variant="secondary" className="bg-orange-600/20 text-orange-300 text-xs">Mentor</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mentorship */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Mentorship</h3>
            <Card className="bg-white/10 border-purple-500/30 max-w-md mx-auto hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Swathi Srikanth</h4>
                <p className="text-green-300 mb-2 text-sm sm:text-base">Senior Mentor & Industry Expert</p>
                <p className="text-gray-300 text-xs sm:text-sm mb-4">Providing strategic guidance and industry insights to our team. With extensive experience in startup ecosystem and business development.</p>
                <div className="flex justify-center flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-600/20 text-green-300 text-xs">Industry Expert</Badge>
                  <Badge variant="secondary" className="bg-teal-600/20 text-teal-300 text-xs">Startup Advisor</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Team Lead */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Team Leadership</h3>
            <Card className="bg-white/10 border-purple-500/30 max-w-md mx-auto hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Ritesh N</h4>
                <p className="text-purple-300 mb-2 text-sm sm:text-base">Team Lead</p>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">4th Year CSE AIML Department</p>
                <p className="text-gray-300 text-xs sm:text-sm mb-4">Leading the E-Cell with vision and dedication. Coordinating all activities and driving the entrepreneurial culture at AMC.</p>
                <div className="flex justify-center flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">Team Lead</Badge>
                  <Badge variant="secondary" className="bg-pink-600/20 text-pink-300 text-xs">Visionary</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Core Team */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Core Team Members</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: "Pannaga JA", role: "Innovation Lead", dept: "4th Year CSE AIML", specialization: "Ideation & Development", linkedin: "#" },
                { name: "Shashank GS", role: "Technical Lead", dept: "4th Year CSE AIML", specialization: "Tech Solutions", linkedin: "#" },
                { name: "Ruthu Parinika", role: "Community Lead", dept: "4th Year CSE AIML", specialization: "Outreach & Events", linkedin: "#" },
                { name: "Sanath Naik", role: "Marketing Lead", dept: "4th Year CSE AIML", specialization: "Branding & PR", linkedin: "#" },
                { name: "Praveen V", role: "Operations Lead", dept: "4th Year CSE AIML", specialization: "Project Management", linkedin: "#" }
              ].map((member, index) => (
                <Card key={index} className="bg-white/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-blue-300 text-xs sm:text-sm mb-1">{member.role}</p>
                    <p className="text-gray-400 text-xs mb-2">{member.dept}</p>
                    <p className="text-gray-300 text-xs mb-3">{member.specialization}</p>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 text-xs">
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="gradient-text-stalight">Experience AMC E-Cell</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">Watch our journey in action</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-2">
              <iframe
                className="w-full h-64 sm:h-80 lg:h-96 rounded-xl"
                src="https://www.youtube.com/embed/HI7t9mb71yg?autoplay=1&mute=1&loop=1&playlist=HI7t9mb71yg"
                title="AMC E-Cell Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 to-slate-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="gradient-text-stalight">Touch</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">Ready to start your entrepreneurial journey?</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Card className="bg-white/5 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300 text-sm sm:text-base">amcecell@amc.edu.in</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300 text-sm sm:text-base">AMC Engineering College, Bangalore</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white hover:bg-purple-600/20">
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white hover:bg-purple-600/20">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                    <Send className="mr-2 h-4 w-4" />
                    Join Our Community
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-white/5 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Visit Our Campus</h3>
                  <div className="rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-64 sm:h-80"
                      src="https://www.google.com/maps/embed?pb=!4v1736967089871!6m8!1m7!1sAF1QipNpwe7RjE9UpG0ktBm8bo7qQEEGSU-FCFluhao1!2m2!1d12.8287112!2d77.5875289!3f180.78!4f-0.8576119402985114!5f0.7820865974627469"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/2393551e-f229-4311-96a9-fd84f1257fd7.png" 
                  alt="AMC E-Cell" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <span className="text-lg sm:text-xl font-bold gradient-text-stalight">AMC E-Cell</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Empowering the next generation of entrepreneurs</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Events', 'Team', 'Contact'].map((link) => (
                  <button key={link} className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Programs</h4>
              <div className="space-y-2">
                {['Ideathon', 'Startup Saturdays', 'Mentorship', 'Incubation'].map((program) => (
                  <button key={program} className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {program}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white hover:bg-purple-600/20 p-2">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white hover:bg-purple-600/20 p-2">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 AMC E-Cell. All rights reserved. | Powered by AMC Innovation Cell
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;