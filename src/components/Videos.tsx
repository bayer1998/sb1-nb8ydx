import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Videos() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'h89EXM-VFuI',
      title: 'LESKY - PLACALI',
      thumbnail: 'https://img.youtube.com/vi/h89EXM-VFuI/maxresdefault.jpg'
    },
    {
      id: 'FrrcdOAf-Go',
      title: 'LESKY - SON CUI',
      thumbnail: 'https://img.youtube.com/vi/FrrcdOAf-Go/maxresdefault.jpg'
    },
    {
      id: 'Q9LEnCDpo8k',
      title: 'LESKY - DJINZIN',
      thumbnail: 'https://img.youtube.com/vi/Q9LEnCDpo8k/maxresdefault.jpg'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-dark relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Clips Vidéos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                  <Play size={48} className="text-light" />
                </div>
              </div>
              <h3 className="mt-4 font-bold text-light group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <a
            href="https://youtube.com/@leskyy2304?si=Mxg4s3v7zOpU5eOx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-primary text-light px-8 py-3 rounded-full hover:opacity-90 transition-all transform hover:scale-105"
          >
            <span>Voir Plus de Vidéos</span>
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}