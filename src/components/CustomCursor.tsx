import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(false);
    const cursorX = useSpring(0, { damping: 20, stiffness: 100 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 100 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('resize', checkMobile);
        };
    }, [cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <>
            <motion.div
                className="cursor-dot"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
            />
            <motion.div
                className="cursor-outline"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
            />
            <style>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: var(--primary);
          border-radius: 50%;
          z-index: 10000;
          pointer-events: none;
        }
        .cursor-outline {
          position: fixed;
          top: -6px;
          left: -6px;
          width: 32px;
          height: 32px;
          border: 1px solid var(--primary);
          border-radius: 50%;
          z-index: 9999;
          pointer-events: none;
          opacity: 0.5;
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
