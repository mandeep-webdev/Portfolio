import React, { useEffect, useRef } from "react";

type Props = React.HTMLAttributes<HTMLCanvasElement>;

const AnimatedBackground = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create non-null references for TS
    const safeCanvas = canvas;
    const safeCtx = ctx;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      safeCanvas.width = window.innerWidth;
      safeCanvas.height = window.innerHeight;
    };

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * safeCanvas.width;
        this.y = Math.random() * safeCanvas.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 2 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > safeCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > safeCanvas.height) this.vy *= -1;
      }

      draw() {
        safeCtx.fillStyle = "rgba(139, 92, 246, 0.9)";
        safeCtx.beginPath();
        safeCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        safeCtx.fill();
      }
    }

    const init = () => {
      particles = Array.from(
        { length: window.innerWidth < 768 ? 50 : 120 },
        () => new Particle(),
      );
    };

    const animate = () => {
      safeCtx.clearRect(0, 0, safeCanvas.width, safeCanvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            safeCtx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - dist / 120)})`;
            safeCtx.lineWidth = 0.7;
            safeCtx.beginPath();
            safeCtx.moveTo(p.x, p.y);
            safeCtx.lineTo(particles[j].x, particles[j].y);
            safeCtx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);

    resize(); // Important before init
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      {...props} // now allows id, className, etc.
      className={`fixed inset-0 z-0 pointer-events-none ${props.className ?? ""}`}
    />
  );
};

export default AnimatedBackground;
