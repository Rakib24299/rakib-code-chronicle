const galleryImages = [
  { title: "Campus View", category: "Campus" },
  { title: "Science Lab", category: "Facilities" },
  { title: "Library", category: "Facilities" },
  { title: "Sports Day", category: "Events" },
  { title: "Annual Function", category: "Events" },
  { title: "Classroom", category: "Campus" },
  { title: "Computer Lab", category: "Facilities" },
  { title: "Art Exhibition", category: "Events" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          A glimpse into life at Sunrise School
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 card-hover cursor-pointer"
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{image.title}</p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

export default Gallery;
