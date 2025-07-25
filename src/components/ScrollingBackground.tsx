
const ScrollingBackground = () => {
  const images = [
    "/lovable-uploads/15091b69-6182-4c9c-aaca-db32fb7944d8.jpg",
    "/lovable-uploads/f3da1d43-08f3-44f2-9780-ae865b2a68b5.jpg",
    "/lovable-uploads/8fca7d9f-82b8-4e27-a7f1-7473c5ed22bf.png",
    "/lovable-uploads/8abef18f-ed3a-4e4a-b478-3d0163a3aaec.png",
    "/lovable-uploads/d3a83b5d-93eb-4a3f-8e67-0df15a7f9138.png",
    "/lovable-uploads/ca425121-ad22-48b3-8e25-dbad083a4682.png",
    "/lovable-uploads/b44015e1-77b3-49a1-98cc-c78067b0eb17.png",
    "/lovable-uploads/50d3cda1-3ecd-4758-914b-3431e2c85ebf.png",
    "/lovable-uploads/fdb96332-5bae-428b-9729-26a7b551148d.png",
    "/lovable-uploads/77e52647-54a0-4428-b6f4-bc0b4aa0ba23.png",
    "/lovable-uploads/22b00c5f-9f63-4a45-ae58-832cd2ba99f2.png",
    "/lovable-uploads/89fe02b7-585d-4ea5-9c60-bcfca73e63ba.png"
  ];

  return (
    <div className="absolute top-16 left-0 right-0 bottom-32 overflow-hidden opacity-[0.09] pointer-events-none">
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
