import { useEffect, useState } from 'react';

export default function LoadingPage() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-coffee-dark to-black text-coffee-cream"
    >
      <div className="flex flex-col items-center gap-6">

        {/* Coffee Cup */}
        <div className="relative">
          {/* Steam */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-3">
            <span className="steam" />
            <span className="steam delay-150" />
            <span className="steam delay-300" />
          </div>

          {/* Cup */}
          <div className="relative w-28 h-24 bg-coffee-cream rounded-b-full rounded-t-md shadow-lg overflow-hidden">
            {/* Coffee Liquid */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-coffee-gold animate-pulse" />

            {/* Cup Handle */}
            <div className="absolute right-[-18px] top-6 w-8 h-10 border-4 border-coffee-cream rounded-full" />
          </div>

          {/* Plate */}
          <div className="w-36 h-2 bg-coffee-gold/70 rounded-full mt-2" />
        </div>

        {/* Text */}
        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-widest uppercase">
            Brewing Your Coffee{dots}
          </h1>
          <p className="text-sm opacity-80 mt-1">
            Please wait while we prepare your perfect cup.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-52 h-2 bg-coffee-cream/20 rounded-full overflow-hidden">
          <div className="h-full w-full bg-coffee-gold animate-loading-bar" />
        </div>
      </div>

      {/* Inline Tailwind Animation Helpers */}
      <style>
        {`
          .steam {
            @apply w-2 h-8 bg-coffee-cream/60 rounded-full blur-sm animate-steam;
          }

          @keyframes steam {
            0% { transform: translateY(0) scale(1); opacity: 0.3; }
            50% { opacity: 1; }
            100% { transform: translateY(-20px) scale(1.2); opacity: 0; }
          }

          .animate-steam {
            animation: steam 2s infinite;
          }

          @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }

          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
