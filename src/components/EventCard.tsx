
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  attendees?: number;
  status: "upcoming" | "ongoing" | "registration-open";
  className?: string;
  delay?: number;
  onRegister?: () => void;
}

export const EventCard = ({
  image,
  title,
  date,
  time,
  location,
  description,
  attendees,
  status,
  className = "",
  delay = 0,
  onRegister
}: EventCardProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "upcoming":
        return { label: "Upcoming", variant: "secondary" as const, color: "text-blue-600" };
      case "ongoing":
        return { label: "Live Now", variant: "destructive" as const, color: "text-red-600" };
      case "registration-open":
        return { label: "Registration Open", variant: "default" as const, color: "text-green-600" };
      default:
        return { label: "Event", variant: "secondary" as const, color: "text-muted-foreground" };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <AnimatedSection animation="scale" delay={delay}>
      <Card className={`group relative overflow-hidden border-0 shadow-xl hover-lift bg-white/90 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${className}`}>
        {/* Image Header */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge 
              variant={statusConfig.variant}
              className={`${status === 'ongoing' ? 'animate-pulse' : ''} font-medium shadow-lg`}
            >
              {statusConfig.label}
            </Badge>
          </div>

          {/* Date Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{date}</span>
            </div>
            {time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{time}</span>
              </div>
            )}
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
            {attendees && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{attendees}+ attendees</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Action Button */}
          <Button 
            variant={status === 'registration-open' ? 'default' : 'outline'}
            size="sm" 
            className="w-full hover-scale group-hover:shadow-lg transition-all duration-300"
            onClick={onRegister}
          >
            {status === 'registration-open' ? 'Register Now' : 'Learn More'}
          </Button>
        </CardContent>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg" />
        </div>
      </Card>
    </AnimatedSection>
  );
};
