// src/components/Services.jsx
import React, { useState, useRef } from "react";

const services = [
  { file: "Servicios/STARWARS-DILED3D.mp4",     name: "IMPRESIÓN STAR WARS",        category: "Impresión 3D" },
  { file: "Servicios/DEMONSLAYER-DILED3D.mp4",  name: "IMPRESIÓN DEMON SLAYER",     category: "Impresión 3D" },
  { file: "Servicios/JJK-DILED3D.mp4",          name: "IMPRESIÓN JUJUTSU KAISEN",   category: "Impresión 3D" },
  { file: "Servicios/OP-DILED3D.mp4",           name: "IMPRESIÓN ONE PIECE",        category: "Impresión 3D" },
  { file: "Servicios/LLAVEROS-DILED3D.mp4",     name: "IMPRESIÓN DE LLAVEROS",      category: "Impresión 3D" },
  { file: "Servicios/DRAGONES-DILED3D.mp4",     name: "IMPRESIÓN DE DRAGONES",      category: "Impresión 3D" },
  { file: "Servicios/MASCARAS-DILED3D.mp4",     name: "IMPRESIÓN DE MASCARAS",      category: "Impresión 3D" },
  { file: "Servicios/POSTERS-DILED3D.mp4",      name: "IMPRESIÓN DE POSTERS",       category: "Impresión 3D" },
  { file: "Servicios/ESCANER-DILED3D.mp4",      name: "SERVICIO Y CURSO ESCANER",   category: "Escaneo 3D"   },
  { file: "Servicios/MANOROBOTICA-DILED3D.mp4", name: "IMPRESIÓN DE MANO ROBÓTICA", category: "Robótica"     },
];

function ServiceCard({ item }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [muted, setMuted]     = useState(true);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    setMuted(true);
    if (videoRef.current) videoRef.current.pause();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((m) => {
      if (videoRef.current) videoRef.current.muted = !m;
      return !m;
    });
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        aspectRatio: "9/14",
        cursor: "pointer",
        border: hovered
          ? "1px solid rgba(201,169,110,0.6)"
          : "1px solid rgba(201,169,110,0.12)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,169,110,0.2)"
          : "0 8px 24px rgba(0,0,0,0.4)",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        background: "#0f1e38",
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={`/${item.file}`}
        muted={muted}
        loop
        playsInline
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Static dark bg when not hovered */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #0f1e38 0%, #0b1728 100%)",
        opacity: hovered ? 0 : 1,
        transition: "opacity 0.4s ease",
      }} />

      {/* Cube icon when not hovered */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: hovered ? 0 : 0.18,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }}>
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      </div>

      {/* Overlay gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(11,23,40,0.95) 0%, rgba(11,23,40,0.3) 55%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Category badge */}
      <div style={{
        position: "absolute", top: 12, left: 12,
        background: "rgba(201,169,110,0.15)",
        border: "1px solid rgba(201,169,110,0.35)",
        color: "#c9a96e",
        fontSize: 9, fontWeight: 700,
        letterSpacing: "0.15em", textTransform: "uppercase",
        padding: "3px 9px", borderRadius: 999,
        backdropFilter: "blur(6px)",
      }}>
        {item.category}
      </div>

      {/* Mute button — only when hovered */}
      {hovered && (
        <button
          onClick={toggleMute}
          style={{
            position: "absolute", top: 12, right: 12,
            width: 34, height: 34,
            background: "rgba(11,23,40,0.8)",
            border: "1px solid rgba(201,169,110,0.35)",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(8px)",
            zIndex: 10,
          }}
          title={muted ? "Activar sonido" : "Silenciar"}
        >
          {muted ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          )}
        </button>
      )}

      {/* Name */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "16px 14px",
      }}>
        <div style={{
          width: hovered ? 36 : 0,
          height: 2,
          background: "#c9a96e",
          borderRadius: 1,
          marginBottom: 8,
          transition: "width 0.3s ease 0.1s",
        }} />
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
          fontWeight: 700,
          color: "white",
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          {item.name}
        </h3>

      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" style={{ backgroundColor: "#0f1e38", padding: "6rem 0", position: "relative", overflow: "hidden" }}>

      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 3.5rem", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(201,169,110,0.6)" }}>
            Lo que hacemos
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", margin: 0, lineHeight: 1 }}>
              Nuestros <span style={{ color: "#c9a96e" }}>servicios</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", marginTop: 10, marginBottom: 0 }}>
              Pasa el cursor sobre cada card para ver el trabajo en acción.
            </p>
          </div>
          <span style={{ fontSize: 12, color: "rgba(201,169,110,0.4)", letterSpacing: "0.1em" }}>
            Servicios disponibles y más
          </span>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 2rem",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem",
      }}>
        {services.map((item) => (
          <ServiceCard key={item.file} item={item} />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
        <a href="#contacto" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "13px 32px",
          background: "#c9a96e", color: "#0b1728",
          fontWeight: 700, fontSize: 14,
          borderRadius: 12, textDecoration: "none",
          letterSpacing: "0.05em",
          boxShadow: "0 8px 24px rgba(201,169,110,0.25)",
        }}>
          Cotizar un proyecto →
        </a>
      </div>

      {/* Bottom wave */}
      <div style={{ marginTop: "5rem", pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 50, display: "block", fill: "#0b1728" }}>
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #servicios-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #servicios-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}