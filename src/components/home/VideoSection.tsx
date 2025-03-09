
import { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Maximize, Sparkles } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/40 to-transparent opacity-50"></div>
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-blue-200/5 blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-purple-300/5 blur-3xl opacity-20 animate-blob" style={{ animationDelay: '7s' }}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-blue-600 mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-wider text-sm">Мультимедиа</span>
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-purple-600 animate-gradient-x">Видеоэкскурсия</h2>
          <p className="section-subtitle mx-auto">
            Познакомьтесь с историей университета через видеоматериалы и воспоминания очевидцев
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl relative group hover-lift"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
          
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40">
              <button 
                onClick={togglePlay}
                className="group w-20 h-20 relative overflow-hidden rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-110"
                aria-label="Play video"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="absolute inset-0 backdrop-blur-sm"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse-slow"></span>
                </span>
                <Play size={36} className="text-white ml-1 relative z-10" />
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
          
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex items-center justify-between text-white transition-opacity duration-300 ${isHovering || isPlaying ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={togglePlay}
              className="group relative overflow-hidden p-3 rounded-full hover:bg-white/10 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <div className="flex items-center justify-center h-6 gap-1">
                  <span className="w-1.5 h-10 bg-white transform scale-y-50 group-hover:scale-y-75 transition-transform"></span>
                  <span className="w-1.5 h-10 bg-white transform scale-y-50 group-hover:scale-y-75 transition-transform"></span>
                </div>
              ) : (
                <Play size={24} />
              )}
            </button>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleMute}
                className="p-3 rounded-full hover:bg-white/10 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              
              <button 
                onClick={toggleFullscreen}
                className="p-3 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover-lift transition-all duration-500">
            <h3 className="font-serif text-2xl font-medium mb-4 relative inline-block">
              О видеоэкскурсии
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <p className="text-muted-foreground">
              Этот видеоматериал представляет собой уникальную экскурсию по историческим зданиям и помещениям университета. 
              В нем содержатся редкие кадры из архивов, интервью с выпускниками разных лет и профессорами, 
              которые поделились своими воспоминаниями о значимых событиях в истории учебного заведения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
