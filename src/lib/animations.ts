import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: 80, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50, filter: 'blur(8px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50, filter: 'blur(8px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(6px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
