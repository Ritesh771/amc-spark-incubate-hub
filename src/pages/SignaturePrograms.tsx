import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useNavigate } from "react-router-dom";
import { signaturePrograms } from "@/lib/data";

const SignaturePrograms = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text text-center sm:text-left mb-4 sm:mb-0">Signature Programs & Initiatives</h1>
          <Button variant="outline" onClick={() => navigate(-1)}>Back to Home</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {signaturePrograms.map((program, idx) => (
            <AnimatedSection key={program.title} animation="scale" delay={idx * 0.05}>
              <Card className="bg-white/80 backdrop-blur-lg shadow-xl border-0 hover-lift card-hover h-full">
                <CardHeader className="flex flex-row items-start gap-3 pb-3 p-4 sm:p-6">
                  <program.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0 mt-1" />
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
      </div>
    </div>
  );
};

export default SignaturePrograms; 