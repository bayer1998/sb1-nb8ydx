import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Minimize2, Maximize2 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm text-white transition-all duration-300 ${
      isMinimized ? 'h-12' : 'p-4'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center space-x-4">
          {!isMinimized && (
            <img 
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Current track" 
              className="w-12 h-12 object-cover rounded"
            />
          )}
          <div>
            <h3 className="font-medium">Latest Single</h3>
            {!isMinimized && <p className="text-sm text-gray-400">LESKY</p>}
          </div>
        </div>
        
        {!isMinimized && (
          <div className="flex items-center space-x-6">
            <button className="hover:text-primary transition-colors">
              <SkipBack size={20} />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="hover:text-primary transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
        )}

        <button 
          className="hover:text-primary transition-colors p-2"
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? "Maximize player" : "Minimize player"}
        >
          {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
        </button>
      </div>
    </div>
  );
}