
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="bg-accent-coral hover:bg-red-600 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse text-white font-bold rounded-full px-8"
      >
        BOOK NOW
      </Button>
    </div>
  );
};

export default FloatingCTA;
