import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useNavigate } from "react-router-dom";
import { programs } from "@/lib/data";
import { ProgramModal } from "@/components/ProgramModal";
import { useState } from "react";
import type { Program } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

const Programs = () => {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProgramClick = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-background py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text text-center sm:text-left mb-4 sm:mb-0">Our Programs</h1>
            <Button variant="outline" onClick={() => navigate(-1)}>Back to Home</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {programs.map((program, idx) => (
              <AnimatedSection key={program.title} animation="scale" delay={idx * 0.1}>
                <Card 
                  className="border-0 shadow-lg hover-lift card-hover bg-white/80 backdrop-blur-sm h-full cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  onClick={() => handleProgramClick(program)}
                >
                  <CardHeader className="text-center p-4 sm:p-6">
                    <program.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="hover:text-primary transition-colors text-base sm:text-lg">{program.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{program.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-2 mb-3 justify-center">
                      <Badge variant="secondary" className="text-xs sm:text-sm">{program.duration}</Badge>
                      <Badge variant="outline" className="text-xs sm:text-sm">{program.level}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="https://forms.gle/ZBL1p3WJuGoqb4vC7" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift animate-pulse-glow">
                Register Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Programs; 