
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-accent-orange rounded-lg transform rotate-45 animate-float"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-accent-yellow rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-60 right-20 w-20 h-8 bg-accent-blue transform rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Left side geometric elements */}
      <div className="absolute top-32 left-16 w-24 h-24 bg-accent-turquoise opacity-20 transform rotate-45"></div>
      <div className="absolute top-80 left-8 w-16 h-16 bg-accent-orange opacity-30 rounded-full"></div>
      
      {/* Abstract building blocks */}
      <div className="absolute bottom-20 right-16">
        <div className="relative">
          <div className="w-8 h-8 bg-accent-blue mb-2"></div>
          <div className="w-12 h-8 bg-accent-yellow mb-2"></div>
          <div className="w-16 h-8 bg-accent-orange"></div>
        </div>
      </div>
      
      {/* Chart-like elements */}
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
