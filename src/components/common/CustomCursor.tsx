import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      );
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border transition-colors duration-200"
        animate={{
          x: pos.x - (isHovered ? 24 : 16),
          y: pos.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? '#4B8BFF' : 'rgba(220, 227, 234, 0.35)',
          backgroundColor: isHovered ? 'rgba(75, 139, 255, 0.12)' : 'transparent',
          scale: isClicking ? 0.85 : isHovered ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 340,
          mass: 0.45,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          backgroundColor: isHovered ? '#4B8BFF' : '#DCE3EA',
        }}
        animate={{
          x: pos.x - (isHovered ? 3 : 2.5),
          y: pos.y - (isHovered ? 3 : 2.5),
          width: isHovered ? 6 : 5,
          height: isHovered ? 6 : 5,
          opacity: isHovered ? 0.95 : 0.8,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 45,
          stiffness: 750,
        }}
      />
    </>
  );
};
