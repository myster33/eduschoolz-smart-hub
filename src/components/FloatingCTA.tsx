
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link to="/book-demo">
        <Button 
          size="lg" 
          className="bg-accent-coral hover:bg-red-600 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse text-white font-bold rounded-full px-8"
        >
          BOOK NOW
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
