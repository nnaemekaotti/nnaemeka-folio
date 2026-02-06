import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GlowEffect = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const cursorX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
    const cursorY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 250); // Center the 500px glow
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: cursorX,
                top: cursorY,
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 71, 255, 0.15) 0%, rgba(0, 71, 255, 0) 60%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'multiply'
            }}
        />
    );
};

export default GlowEffect;
