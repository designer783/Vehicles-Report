"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage({ src, alt, width, height, style, className, parallaxOffset = -150 }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, parallaxOffset]);

    return (
        <div ref={ref} className={className} style={{ ...style, overflow: "hidden", position: "relative" }}>
            <motion.div style={{ y, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={src} alt={alt} width={width} height={height} style={{ objectFit: "contain" }} priority={false} />
            </motion.div>
        </div>
    );
}
