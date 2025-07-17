import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Users, 
  Calendar, 
  MapPin, 
  Mail, 
  ExternalLink,
  Target,
  Rocket,
  Building,
  Award,
  Quote,
  ArrowRight,
  Play,
  Instagram,
  Linkedin,
  ChevronRight,
  Star,
  Zap,
  TrendingUp,
  Globe,
  Heart,
  Sparkles
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="blur-orb blur-orb-1"></div>
      <div className="blur-orb blur-orb-2"></div>
      <div className="blur-orb blur-orb-3"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 animate-fade-in">
            <img 
              src="/lovable-uploads/2393551e-f229-4311-96a9-fd84f1257fd7.png" 
              alt="AMC Logo" 
              className="h-12 w-auto hover-scale"
            />
            <div>
              <span className="font-bold text-xl gradient-text">AMC E-Cell</span>
              <p className="text-xs text-muted-foreground">Innovation Hub</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('initiatives')} className="hover:text-primary transition-colors">Initiatives</button>
            <button onClick={() => scrollToSection('events')} className="hover:text-primary transition-colors">Events</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Team</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="animate-pulse-glow">
            Join E-Cell
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-8 animate-scale-in">
            <img 
              src="/lovable-uploads/2393551e-f229-4311-96a9-fd84f1257fd7.png" 
              alt="AMC Logo" 
              className="h-24 w-auto mr-6 hover-scale"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold gradient-text">AMC Institutions</h3>
              <p className="text-muted-foreground">Innovation • Excellence • Leadership</p>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in">
            Igniting Innovation
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
            Empowering Entrepreneurs
          </h2>
          <div className="flex items-center justify-center mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              AMC Engineering College's Official Entrepreneurship Cell - Fostering the next generation of innovators and startup founders
            </p>
            <Sparkles className="h-6 w-6 text-accent ml-2" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 animate-pulse-glow"
              onClick={() => scrollToSection('contact')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Join E-Cell
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 glass-card"
              onClick={() => scrollToSection('events')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
              AMC E-Cell Journey
            </h3>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/HI7t9mb71yg?autoplay=1&mute=1&loop=1&playlist=HI7t9mb71yg"
                title="AMC E-Cell Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 gradient-text">About AMC E-Cell</h2>
            <div className="flex items-center justify-center mb-4">
              <Star className="h-5 w-5 text-primary mr-2" />
              <p className="text-xl text-muted-foreground max-w-3xl">
                Founded in 2023, AMC E-Cell is a student-run initiative to cultivate entrepreneurial talent and drive startup success stories on campus and beyond
              </p>
              <Star className="h-5 w-5 text-accent ml-2" />
            </div>
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Events Organized</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Startups Incubated</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="animate-pulse-glow">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To foster a culture of innovation and entrepreneurship at AMC Engineering College, creating the next generation of successful entrepreneurs and industry leaders
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center">
                <div className="animate-pulse-glow">
                  <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower students with comprehensive guidance, mentorship, and resources to transform innovative ideas into successful ventures and real-world impact
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8 text-center">
                <div className="animate-pulse-glow">
                  <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Objectives</h3>
                <ul className="text-muted-foreground text-left space-y-3">
                  <li className="flex items-center"><Zap className="h-4 w-4 mr-2 text-primary" />Promote startup culture on campus</li>
                  <li className="flex items-center"><Calendar className="h-4 w-4 mr-2 text-accent" />Host innovative events & workshops</li>
                  <li className="flex items-center"><Globe className="h-4 w-4 mr-2 text-primary" />Build strong industry relations</li>
                  <li className="flex items-center"><TrendingUp className="h-4 w-4 mr-2 text-accent" />Provide comprehensive incubation support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Ongoing Initiatives</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Know Your Surroundings",
                description: "Startup interaction survey to understand local ecosystem",
                status: "Active",
                badge: "Survey"
              },
              {
                title: "Ideathon 2025",
                description: "Campus-wide idea pitching competition",
                status: "Upcoming",
                badge: "Competition"
              },
              {
                title: "Startup Saturdays",
                description: "Monthly founder talks and networking sessions",
                status: "Monthly",
                badge: "Workshop"
              },
              {
                title: "AMC StartHub",
                description: "Mini incubation space for student ventures",
                status: "Beta",
                badge: "Incubation"
              }
            ].map((initiative, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary">{initiative.badge}</Badge>
                    <Badge variant={initiative.status === 'Active' ? 'default' : 'outline'}>
                      {initiative.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                  <p className="text-muted-foreground mb-4">{initiative.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Events & Activities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pitch Perfect Workshop",
                type: "Workshop",
                description: "Learn how to pitch your startup idea effectively",
                date: "March 15, 2025",
                participants: "50+"
              },
              {
                title: "Innovation Hackathon",
                type: "Competition",
                description: "48-hour coding marathon for innovative solutions",
                date: "April 10-12, 2025",
                participants: "200+"
              },
              {
                title: "Industry Connect",
                type: "Seminar",
                description: "Networking with successful entrepreneurs",
                date: "February 28, 2025",
                participants: "100+"
              }
            ].map((event, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Badge className="mb-4">{event.type}</Badge>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.participants} participants
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Dynamic Team</h2>
            <p className="text-xl text-muted-foreground">Meet the passionate leaders driving innovation at AMC E-Cell</p>
          </div>
          
          {/* Leadership Team */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Leadership</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white animate-pulse-glow">
                    RN
                  </div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">Ritesh N</h3>
                  <Badge variant="default" className="mb-3 animate-pulse-glow">Team Lead</Badge>
                  <p className="text-sm text-muted-foreground mb-3">4th Year CSE AIML</p>
                  <p className="text-sm leading-relaxed">Visionary leader driving innovation and entrepreneurship, orchestrating the E-Cell's strategic direction and fostering a culture of excellence</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white animate-pulse-glow">
                    SS
                  </div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">Swathi Srikanth</h3>
                  <Badge variant="secondary" className="mb-3">Mentor</Badge>
                  <p className="text-sm text-muted-foreground mb-3">Faculty Guidance</p>
                  <p className="text-sm leading-relaxed">Experienced mentor providing strategic guidance and industry insights to nurture entrepreneurial talent and ensure academic excellence</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Team */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Core Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Pannaga JA",
                  initials: "PJ",
                  role: "Vice President",
                  dept: "4th Year CSE AIML",
                  description: "Strategic planning and team coordination specialist"
                },
                {
                  name: "Shashank GS",
                  initials: "SG",
                  role: "Technical Lead",
                  dept: "4th Year CSE AIML", 
                  description: "Innovation catalyst and technical architecture expert"
                },
                {
                  name: "Ruthu Parinika",
                  initials: "RP",
                  role: "Events Manager",
                  dept: "4th Year CSE AIML",
                  description: "Event orchestration and community engagement leader"
                },
                {
                  name: "Sanath Naik",
                  initials: "SN",
                  role: "Marketing Head",
                  dept: "4th Year CSE AIML",
                  description: "Brand building and digital outreach strategist"
                },
                {
                  name: "Praveen V",
                  initials: "PV",
                  role: "Operations Manager",
                  dept: "4th Year CSE AIML",
                  description: "Operational excellence and resource management expert"
                }
              ].map((member, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold text-white hover-scale">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                    <Badge variant="outline" className="mb-2 text-xs">{member.role}</Badge>
                    <p className="text-xs text-muted-foreground mb-3">{member.dept}</p>
                    <p className="text-xs leading-relaxed">{member.description}</p>
                    <div className="flex justify-center mt-3">
                      <Button variant="ghost" size="sm" className="hover-scale">
                        <Linkedin className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Advisory */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Faculty Advisory</h3>
            <div className="flex justify-center">
              <Card className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in max-w-md">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white animate-pulse-glow">
                    N
                  </div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">Prof. Nandishwar</h3>
                  <Badge variant="secondary" className="mb-3">HOD - CSE AIML</Badge>
                  <p className="text-sm text-muted-foreground mb-3">Department Head</p>
                  <p className="text-sm leading-relaxed">Visionary academic leader fostering innovation and excellence in AI/ML education, guiding students towards entrepreneurial success</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">What Our Members Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The E-Cell helped me network with like-minded peers and turn my idea into a working prototype.",
                author: "Rakesh Kumar",
                position: "CSE 2024, Founder of TechSolutions"
              },
              {
                quote: "Amazing workshops and mentorship opportunities. The startup ecosystem here is truly inspiring.",
                author: "Anita Desai",
                position: "ECE 2023, Co-founder of InnovateLab"
              },
              {
                quote: "From idea to implementation, E-Cell provided all the support I needed for my entrepreneurial journey.",
                author: "Suresh Reddy",
                position: "Mech 2024, CEO of GreenTech"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Visit Us</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>amcecell@amc.edu.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>AMC Engineering College, Bangalore</span>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Join Our Community</h4>
                <p className="text-muted-foreground mb-6">
                  Ready to be part of the entrepreneurial revolution? Join AMC E-Cell today and start your startup journey.
                </p>
                <Button className="w-full animate-pulse-glow">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join E-Cell Now
                </Button>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.840267553756!2d77.58752897480615!3d12.828711118772804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b72df6be0d%3A0x8e3de654b632a37f!2sAMC%20Engineering%20College!5e0!3m2!1sen!2sin!4v1705668234567!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMC Engineering College Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg gradient-text">AMC E-Cell</span>
              </div>
              <p className="text-muted-foreground">
                Empowering the next generation of entrepreneurs and innovators.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('initiatives')} className="hover:text-primary transition-colors">Initiatives</button></li>
                <li><button onClick={() => scrollToSection('events')} className="hover:text-primary transition-colors">Events</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Team</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Startup Incubation</li>
                <li>Mentorship</li>
                <li>Workshops</li>
                <li>Networking Events</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>amcecell@amc.edu.in</li>
                <li>AMC Engineering College</li>
                <li>Bangalore, Karnataka</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2025 AMC E-Cell. All rights reserved. | Powered by AMC Innovation Cell</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;