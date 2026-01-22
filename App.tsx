
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import SlideLayout from './components/SlideLayout';
import { 
  ChevronLeft, ChevronRight, Maximize, Play, Pause, 
  Layout as LayoutIcon, HelpCircle
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'f') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let interval: any;
    if (isAutoplay) {
      interval = setInterval(nextSlide, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, nextSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#020617] text-slate-100 overflow-hidden font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Progress Bar */}
      <div className="w-full h-1.5 bg-slate-900 flex z-50">
        {SLIDES.map((_, i) => (
          <div 
            key={i} 
            className={`h-full flex-1 transition-all duration-500`}
            style={{ 
               backgroundColor: i === currentSlideIndex ? '#38bdf8' : i < currentSlideIndex ? '#004683' : 'rgba(30,41,59,0.3)',
               boxShadow: i === currentSlideIndex ? '0 0 10px #38bdf8' : 'none'
            }}
          />
        ))}
      </div>

      {/* Main Slide Container */}
      <main className="flex-1 relative overflow-hidden gradient-bg">
        {/* Large Side Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-40 w-16 flex items-center justify-center z-40 text-slate-500 hover:text-sky-400 hover:bg-sky-500/5 transition-all group opacity-0 hover:opacity-100"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={48} className="group-hover:scale-125 transition-transform" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-40 w-16 flex items-center justify-center z-40 text-slate-500 hover:text-sky-400 hover:bg-sky-500/5 transition-all group opacity-0 hover:opacity-100"
          aria-label="Next Slide"
        >
          <ChevronRight size={48} className="group-hover:scale-125 transition-transform" />
        </button>

        <div key={currentSlideIndex} className="h-full w-full slide-transition-enter-active">
          <SlideLayout slide={SLIDES[currentSlideIndex]} />
        </div>

        {/* Floating Controls Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-slate-800 shadow-2xl opacity-0 hover:opacity-100 focus-within:opacity-100 transition-all duration-300 transform hover:translate-y-[-4px] z-50">
          <button 
            onClick={prevSlide}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-sky-400"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-3 px-6 border-l border-r border-slate-800 font-mono text-sm">
            <span className="text-sky-400 font-black text-lg">{currentSlideIndex + 1}</span>
            <span className="opacity-20">/</span>
            <span className="opacity-60 font-bold">{totalSlides}</span>
          </div>

          <button 
            onClick={nextSlide}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-sky-400"
          >
            <ChevronRight size={20} />
          </button>

          <div className="w-px h-6 bg-slate-800 mx-3" />

          <button 
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`p-2 rounded-lg transition-colors ${isAutoplay ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            {isAutoplay ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button 
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`p-2 rounded-lg transition-colors ${showThumbnails ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <LayoutIcon size={20} />
          </button>

          <button 
            onClick={toggleFullscreen}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400"
          >
            <Maximize size={20} />
          </button>
        </div>
      </main>

      {/* Thumbnail Sidebar */}
      {showThumbnails && (
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-slate-950/98 backdrop-blur-3xl border-l border-slate-800 z-[100] p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
               <div className="w-2 h-6 bg-sky-500 rounded-full"></div>
               <h3 className="text-xl font-black tracking-tight">NAVIGATOR</h3>
            </div>
            <button onClick={() => setShowThumbnails(false)} className="text-slate-500 hover:text-white transition-colors">
               <ChevronRight size={24} />
            </button>
          </div>
          <div className="space-y-4">
            {SLIDES.map((s, i) => (
              <div 
                key={i}
                onClick={() => {
                  setCurrentSlideIndex(i);
                  setShowThumbnails(false);
                }}
                className={`group cursor-pointer rounded-2xl border-2 p-4 transition-all ${i === currentSlideIndex ? 'border-sky-500 bg-sky-500/10' : 'border-slate-800 hover:border-slate-600 bg-slate-900/40'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-mono font-black w-8 h-8 flex items-center justify-center rounded-lg ${i === currentSlideIndex ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex flex-col truncate">
                    <span className={`text-sm font-bold truncate ${i === currentSlideIndex ? 'text-sky-100' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      {s.title}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-60">{s.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shortcuts Help */}
      <div className="fixed bottom-6 right-6 opacity-30 hover:opacity-100 transition-all duration-300 z-50">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-full cursor-help group relative shadow-2xl">
          <HelpCircle size={20} className="text-sky-400" />
          <div className="absolute bottom-full right-0 mb-4 w-72 p-6 bg-slate-950 border border-slate-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] invisible group-hover:visible backdrop-blur-2xl">
            <h4 className="font-black mb-4 text-sky-400 flex items-center gap-2 text-sm">SHORTCUTS</h4>
            <ul className="text-xs space-y-4 text-slate-300">
              <li className="flex justify-between items-center bg-slate-900/50 p-2 rounded-lg">
                <span>Next Slide</span> <kbd className="bg-slate-800 px-2 py-1 rounded-md text-sky-300 border border-slate-700 font-mono">Right / Space</kbd>
              </li>
              <li className="flex justify-between items-center bg-slate-900/50 p-2 rounded-lg">
                <span>Prev Slide</span> <kbd className="bg-slate-800 px-2 py-1 rounded-md text-sky-300 border border-slate-700 font-mono">Left</kbd>
              </li>
              <li className="flex justify-between items-center bg-slate-900/50 p-2 rounded-lg">
                <span>Fullscreen</span> <kbd className="bg-slate-800 px-2 py-1 rounded-md text-sky-300 border border-slate-700 font-mono">F</kbd>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
