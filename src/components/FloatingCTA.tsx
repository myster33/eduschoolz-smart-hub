
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        Sign Up for Demo
      </Button>
    </div>
  );
};

export default FloatingCTA;
