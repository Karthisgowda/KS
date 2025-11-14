import { useEffect, useState } from "react";

/**
 * Page Transition Component
 *
 * Elegant loading animation displayed on initial page load.
 * Creates a sophisticated entrance experience.
 */
export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-mono-100 flex items-center justify-center">
      <div className="w-full max-w-xs px-6">
        {/* Loading text */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl text-mono-900 mb-2">
            Loading
          </h2>
          <p className="text-sm text-mono-600">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-px bg-mono-300 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-mono-900 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
