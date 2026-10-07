import React, { useEffect, useRef } from 'react';

export const CodeBackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Code snippets and tokens
    const tokens = [
      'const [code, setCode] = useState()',
      'function renderApp() { return <Core /> }',
      'async (req, res) => { await deploy() }',
      'git push origin main --force-with-lease',
      'export default function FullStack()',
      '<CODE//CORE />',
      'npm run build:prod',
      'SELECT * FROM developers WHERE active = true',
      'interface Props { ready: boolean }',
      'docker compose up -d',
      'return { status: 200, data }',
      'import { useState, useEffect } from "react"',
      'const api = axios.create({ baseURL })',
      '01100011 01101111 01100100 01100101',
      '{ ...state, loading: false }',
      'addEventListener("deploy", onSuccess)',
      'chmod +x ./build.sh',
      'useEffect(() => { startCoding() }, [])',
    ];

    interface Particle {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      baseOpacity: number;
      size: number;
    }

    const particlesCount = Math.floor(Math.min(width / 70, 24));
    const particles: Particle[] = [];

    for (let i = 0; i < particlesCount; i++) {
      const baseOpacity = 0.04 + Math.random() * 0.08;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: tokens[Math.floor(Math.random() * tokens.length)],
        speed: 0.25 + Math.random() * 0.45,
        opacity: baseOpacity,
        baseOpacity,
        size: 11 + Math.random() * 4,
      });
    }

    // Gentle flowing grid lines
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw very subtle cybernetic code grid dots
      ctx.fillStyle = 'rgba(47, 243, 74, 0.015)';
      const step = 48;
      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, (y + offset * 0.2) % height, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw floating code particles
      ctx.font = '12px "JetBrains Mono", monospace';
      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
          p.text = tokens[Math.floor(Math.random() * tokens.length)];
        }

        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(47, 243, 74, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
      });

      offset += 0.5;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
};
