import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useNavigate } from "react-router-dom";
import { eventsData } from "@/lib/data";

const Events = () => {
  const navigate = useNavigate();

  const handleEventRegister = (eventId: number) => {
    window.open('https://forms.gle/ZBL1p3WJuGoqb4vC7', '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text text-center sm:text-left mb-4 sm:mb-0">Our Events</h1>
          <Button variant="outline" onClick={() => navigate(-1)}>Back to Home</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {eventsData.map((event, idx) => (
            <AnimatedSection key={event.id} animation="scale" delay={idx * 0.1}>
              <EventCard
                {...event}
                className="h-full"
                delay={idx * 0.1}
                onRegister={() => handleEventRegister(event.id)}
              />
            </AnimatedSection>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="https://forms.gle/ZBL1p3WJuGoqb4vC7" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 hover-lift animate-pulse-glow">
              Register for All Events
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events; 