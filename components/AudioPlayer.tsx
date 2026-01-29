import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Auto-play prevented", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/02/07/audio_18227b6862.mp3?filename=piano-moment-9835.mp3" type="audio/mpeg" />
      </audio>
      
      <button 
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all shadow-lg text-white"
        title={isPlaying ? "Mute Music" : "Play Romantic Music"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
