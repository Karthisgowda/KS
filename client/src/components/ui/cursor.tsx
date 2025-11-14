import { useEffect, useState } from "react";

/**
 * Custom Cursor Component
 *
 * Provides a sophisticated custom cursor with smooth following animation
 * and interactive states for hover effects.
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;

      setIsPointer(isInteractive);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-mono-900 rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />

      {/* Cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border border-mono-900 rounded-full pointer-events-none z-[9998] transition-all duration-200 ${
          isHidden ? "opacity-0" : "opacity-50"
        } ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
    </>
  );
}
