
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Target, CheckCircle, Award } from "lucide-react";

interface ProgramModalProps {
  program: {
    icon: React.ComponentType<any>;
    title: string;
    desc: string;
    duration: string;
    level: string;
    participants: string;
    features: string[];
    benefits: string[];
    curriculum: string[];
    requirements: string[];
    outcomes: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, isOpen, onClose }) => {
  if (!program) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <program.icon className="w-8 h-8 text-primary" />
            <DialogTitle className="text-2xl">{program.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            {program.desc}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Program Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-semibold">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
              <Target className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Level</p>
                <Badge variant="secondary">{program.level}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Participants</p>
                <p className="font-semibold">{program.participants}</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {program.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Curriculum Highlights</h3>
            <div className="space-y-2">
              {program.curriculum.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-primary font-semibold text-sm mt-1">{index + 1}.</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Program Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {program.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Requirements</h3>
            <div className="space-y-2">
              {program.requirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-sm">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcomes */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Expected Outcomes</h3>
            <div className="space-y-2">
              {program.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://forms.gle/ZBL1p3WJuGoqb4vC7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Apply Now
                </Button>
              </a>
              <Button variant="outline" onClick={onClose} className="flex-1">
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
