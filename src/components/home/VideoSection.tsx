
import { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Видеоэкскурсия</h2>
          <p className="section-subtitle mx-auto">
            Познакомьтесь с историей университета через видеоматериалы и воспоминания очевидцев
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-xl relative group">
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40">
              <button 
                onClick={togglePlay}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                aria-label="Play video"
              >
                <Play size={36} className="text-white ml-1" />
              </button>
            </div>
          )}
          
          <video 
            ref={videoRef}
            className="w-full aspect-video"
            poster="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            onClick={togglePlay}
          >
            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={togglePlay}
              className="hover:text-gray-300 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <span className="flex items-center">
                  <span className="w-3 h-10 bg-white mx-0.5"></span>
                  <span className="w-3 h-10 bg-white mx-0.5"></span>
                </span>
              ) : (
                <Play size={24} />
              )}
            </button>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleMute}
                className="hover:text-gray-300 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              
              <button 
                onClick={toggleFullscreen}
                className="hover:text-gray-300 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-medium mb-4">О видеоэкскурсии</h3>
          <p className="text-muted-foreground">
            Этот видеоматериал представляет собой уникальную экскурсию по историческим зданиям и помещениям университета. 
            В нем содержатся редкие кадры из архивов, интервью с выпускниками разных лет и профессорами, 
            которые поделились своими воспоминаниями о значимых событиях в истории учебного заведения.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
