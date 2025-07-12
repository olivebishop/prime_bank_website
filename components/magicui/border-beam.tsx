"use client";
import { cn } from "@/lib/utils";
import { motion, MotionStyle, Transition } from "motion/react";

interface BorderBeamProps {
  /**
   * The size of the border beam.
   */
  size?: number;
  /**
   * The duration of the border beam.
   */
  duration?: number;
  /**
   * The delay of the border beam.
   */
  delay?: number;
  /**
   * The color of the border beam from.
   */
  colorFrom?: string;
  /**
   * The color of the border beam to.
   */
  colorTo?: string;
  /**
   * The motion transition of the border beam.
   */
  transition?: Transition;
  /**
   * The class name of the border beam.
   */
  className?: string;
  /**
   * The style of the border beam.
   */
  style?: React.CSSProperties;
  /**
   * Whether to reverse the animation direction.
   */
  reverse?: boolean;
  /**
   * The initial offset position (0-100).
   */
  initialOffset?: number;
  /**
   * The border width of the beam.
   */
  borderWidth?: number;
  /**
   * Whether to apply grain overlay effect to the beam.
   */
  withGrain?: boolean;
}

const GrainOverlay = () => {
  return (
    <>
      {/* SVG Noise Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-20 mix-blend-soft-light opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0.05 0.1 0.15 0.2'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.6,
          mixBlendMode: "screen",
        }}
      />
      {/* Radial Gradient Layer - Blue Shades Only */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(30,58,138,0.4) 0%, transparent 50%),
                       radial-gradient(circle at 70% 70%, rgba(59,130,246,0.3) 0%, transparent 50%)`,
          mixBlendMode: "multiply",
        }}
      />
    </>
  );
};

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#111111",
  colorTo = "#acb0b9",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
  withGrain = false,
}: BorderBeamProps) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] border-(length:--border-beam-width)"
      style={{
        "--border-beam-width": `${borderWidth}px`,
      } as React.CSSProperties}
    >
      <motion.div
        className={cn(
          "absolute aspect-square overflow-hidden",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className,
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      >
        {withGrain && <GrainOverlay />}
      </motion.div>
    </div>
  );
};