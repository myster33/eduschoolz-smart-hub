
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Left side geometric building blocks */}
      <div className="absolute top-32 left-16">
        <div className="relative">
          {/* Blue semi-circles stacked */}
          <div className="w-12 h-6 bg-accent-blue rounded-t-full mb-2"></div>
          <div className="w-12 h-6 bg-accent-blue rounded-t-full mb-2"></div>
          <div className="w-12 h-6 bg-accent-blue rounded-t-full mb-4"></div>
          
          {/* Orange circle with white center */}
          <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          
          {/* Chart-like blue and yellow elements */}
          <div className="relative">
            <div className="w-8 h-12 bg-accent-blue mb-2"></div>
            <div className="w-12 h-8 bg-accent-yellow"></div>
            <div className="absolute -right-4 top-0 w-8 h-16 bg-accent-blue opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Right side geometric elements */}
      <div className="absolute top-20 right-10">
        <div className="relative">
          {/* Orange and teal rectangles */}
          <div className="w-16 h-12 bg-accent-orange mb-2 transform rotate-12"></div>
          <div className="w-12 h-16 bg-accent-turquoise"></div>
          
          {/* Yellow square */}
          <div className="absolute -top-4 right-4 w-12 h-12 bg-accent-yellow"></div>
          
          {/* Blue triangular elements */}
          <div className="absolute top-16 -right-8">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-accent-blue mb-2"></div>
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white"></div>
          </div>
          
          {/* Yellow building block */}
          <div className="absolute -bottom-8 right-0">
            <div className="w-16 h-8 bg-accent-yellow mb-2"></div>
            <div className="w-12 h-6 bg-accent-yellow rounded-b-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-40 right-32 w-12 h-12 bg-accent-yellow rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-60 right-20 w-20 h-8 bg-accent-blue transform rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Additional building elements */}
      <div className="absolute bottom-20 right-16">
        <div className="relative">
          <div className="w-8 h-8 bg-accent-blue mb-2"></div>
          <div className="w-12 h-8 bg-accent-yellow mb-2"></div>
          <div className="w-16 h-8 bg-accent-orange"></div>
        </div>
      </div>
      
      {/* Chart-like elements on the left */}
      <div className="absolute bottom-40 left-20">
        <div className="flex items-end space-x-1">
          <div className="w-3 h-8 bg-accent-blue opacity-60"></div>
          <div className="w-3 h-12 bg-accent-turquoise opacity-60"></div>
          <div className="w-3 h-6 bg-accent-orange opacity-60"></div>
          <div className="w-3 h-10 bg-accent-yellow opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default GeometricShapes;
