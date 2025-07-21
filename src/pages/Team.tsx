import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { faculty, coreTeam } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

const Team = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text">Our Team</h1>
          <Button variant="outline" onClick={() => navigate("/")}>Back to Home</Button>
        </div>
        <h2 className="text-2xl font-bold mb-8 text-center">Faculty & Mentors</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {faculty.map((member, idx) => (
            <AnimatedSection key={member.name} animation="scale" delay={idx * 0.1}>
              <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover-lift card-hover overflow-hidden h-full flex flex-col">
                <CardContent className="flex flex-col items-center p-8 relative flex-grow">
                  <div className="mb-4 relative">
                    <Avatar className="w-24 h-24 shadow-lg ring-4 ring-primary/30 transition-all duration-500 group-hover:w-32 group-hover:h-32">
                      <AvatarFallback className="text-lg font-bold">{member.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors text-center">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1 text-center">{member.role}</p>
                  <p className="text-sm text-accent text-center mb-4">{member.dept}</p>
                  
                  <div className="mt-auto pt-4 border-t border-border/50 w-full space-y-3 text-center">
                    <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-8 text-center">Core Team Members</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {coreTeam.map((member, idx) => (
            <AnimatedSection key={member.name} animation="scale" delay={idx * 0.05}>
              <Card className="group bg-white/60 backdrop-blur-lg shadow-2xl border-0 hover-lift card-hover overflow-hidden h-full flex flex-col transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6 relative flex-grow">
                  <div className="mb-3 relative">
                    <Avatar className="w-16 h-16 shadow-md ring-2 ring-primary/20 transition-all duration-500 group-hover:w-20 group-hover:h-20">
                      <AvatarFallback className="text-sm font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h4 className="text-base font-semibold group-hover:text-primary transition-colors text-center leading-tight">
                    {member.name}
                  </h4>
                  {member.role && (
                    <p className="text-sm text-accent text-center mt-1 font-medium mb-3">
                      {member.role}
                    </p>
                  )}
                  
                  <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden transition-all duration-300 w-full">
                    <div className="mt-3 pt-3 border-t border-border/50 w-full space-y-2 text-center">
                      <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 