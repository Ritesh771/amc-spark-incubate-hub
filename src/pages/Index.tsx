import { useEffect, useState } from "react";
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
  Linkedin,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

import heroImage from "@/assets/hero-business.jpg";
import teamImage from "@/assets/team-professional.jpg";
import eventsImage from "@/assets/events-conference.jpg";
import innovationImage from "@/assets/innovation-lab.jpg";

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
      const targets = { startups: 200, events: 50, students: 5000, mentors: 25 };
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
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">E-Cell AMC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('programs')} className="text-foreground hover:text-primary transition-colors">Programs</button>
              <button onClick={() => scrollToSection('events')} className="text-foreground hover:text-primary transition-colors">Events</button>
              <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-foreground hover:text-primary">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-primary">About</button>
                <button onClick={() => scrollToSection('programs')} className="text-left py-2 text-foreground hover:text-primary">Programs</button>
                <button onClick={() => scrollToSection('events')} className="text-left py-2 text-foreground hover:text-primary">Events</button>
                <button onClick={() => scrollToSection('team')} className="text-left py-2 text-foreground hover:text-primary">Team</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-foreground hover:text-primary">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Fostering <span className="text-primary">Innovation</span> & <span className="text-accent">Entrepreneurship</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Entrepreneurship Cell of AMC Engineering College - Building tomorrow's entrepreneurs today through mentorship, innovation, and real-world business experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline">
                Explore Programs
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional business environment" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.startups}+</div>
                <div className="text-muted-foreground">Startups Supported</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.events}+</div>
                <div className="text-muted-foreground">Events Conducted</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.students}+</div>
                <div className="text-muted-foreground">Students Reached</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{animatedCounts.mentors}+</div>
                <div className="text-muted-foreground">Expert Mentors</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to transform students into successful entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our events to learn, network, and grow your entrepreneurial journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Upcoming</Badge>
                  <span className="text-sm text-muted-foreground">March 15, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Startup Pitch Competition</h3>
                <p className="text-muted-foreground mb-4">
                  Present your business ideas to a panel of expert judges and win prizes worth ₹2 lakhs
                </p>
                <Button variant="outline" size="sm">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Upcoming</Badge>
                  <span className="text-sm text-muted-foreground">March 22, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Entrepreneurship Workshop</h3>
                <p className="text-muted-foreground mb-4">
                  Learn the fundamentals of starting and scaling a business from industry veterans
                </p>
                <Button variant="outline" size="sm">Register Now</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <img 
              src={eventsImage} 
              alt="Conference event" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg mb-8"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals driving entrepreneurship at AMC Engineering College
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "John Doe", role: "President", image: teamImage },
              { name: "Jane Smith", role: "Vice President", image: teamImage },
              { name: "Mike Johnson", role: "Technical Lead", image: teamImage },
              { name: "Sarah Wilson", role: "Marketing Head", image: teamImage },
              { name: "David Brown", role: "Finance Head", image: teamImage },
              { name: "Emily Davis", role: "Events Coordinator", image: teamImage },
              { name: "Alex Chen", role: "Outreach Lead", image: teamImage },
              { name: "Lisa Garcia", role: "Operations Manager", image: teamImage }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center overflow-hidden group">
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <h4 className="font-bold text-lg">{member.name}</h4>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your entrepreneurial journey? We're here to help you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    AMC Engineering College<br />
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">ecell@amcengineering.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+91 80-1234-5678</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your idea..."
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary-foreground" />
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
                <button onClick={() => scrollToSection('home')} className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('programs')} className="block text-sm text-muted-foreground hover:text-primary transition-colors">Programs</button>
                <button onClick={() => scrollToSection('events')} className="block text-sm text-muted-foreground hover:text-primary transition-colors">Events</button>
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
    </div>
  );
};

export default Index;