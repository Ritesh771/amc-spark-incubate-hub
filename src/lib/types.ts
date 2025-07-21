import type { ComponentType, SVGProps } from 'react';

export type Program = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
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
}; 