"use client";

import { motion } from 'framer-motion';

export default function AnimatedSection({
    children,
    className = "",
    style = {},
    delay = 0,
    animationType = "slideUp" // "slideUp", "fadeIn", "slideLeft", "slideRight"
}) {

    const variants = {
        slideUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: delay } }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut", delay: delay } }
        },
        slideLeft: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: delay } }
        },
        slideRight: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: delay } }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants[animationType]}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
