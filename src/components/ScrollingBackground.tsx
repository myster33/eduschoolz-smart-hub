
const ScrollingBackground = () => {
  const images = [
    "/lovable-uploads/15091b69-6182-4c9c-aaca-db32fb7944d8.jpg",
    "/lovable-uploads/f3da1d43-08f3-44f2-9780-ae865b2a68b5.jpg",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <div className="flex animate-scroll-horizontal space-x-8">
        {/* First set of images */}
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-64 h-48 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-64 h-48 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Second row scrolling in opposite direction */}
      <div className="flex animate-scroll-horizontal-reverse space-x-8 mt-8">
        {images.reverse().map((image, index) => (
          <div
            key={`reverse-first-${index}`}
            className="flex-shrink-0 w-64 h-48 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {images.map((image, index) => (
          <div
            key={`reverse-second-${index}`}
            className="flex-shrink-0 w-64 h-48 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingBackground;
