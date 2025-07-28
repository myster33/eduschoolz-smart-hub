
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BookDemo = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-600 to-primary-700 animate-dissolve-in">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-6 border-green-400 text-green-400 hover:bg-green-400 hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div ref={heroRef} className={`text-center mb-8 ${heroVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <h1 className="text-4xl font-bold text-white mb-4">Book Your Demo</h1>
            <p className="text-xl text-primary-100">
              Ready to get started? Fill out the form below to schedule your demo.
            </p>
          </div>
          
          <div ref={formRef} className={`bg-white rounded-lg shadow-2xl overflow-hidden ${formVisible ? 'animate-dissolve-in-scroll' : ''}`}>
            <iframe
              src="https://docs.google.com/forms/d/12iNFtnLWnDJftOSKCfutXTOOprTtYq8lh82sLuFrifI/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
