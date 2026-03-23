// src/components/Portfolio.jsx
import React, { useState } from "react";

const photos = [
  { file: "Portafolio/DILED3D1.jpg", size: "tall" },
  { file: "Portafolio/DILED3D2.jpg", size: "wide" },
  { file: "Portafolio/DILED3D3.jpg", size: "normal" },
  { file: "Portafolio/DILED3D4.jpg", size: "normal" },
  { file: "Portafolio/DILED3D5.jpg", size: "wide" },
  { file: "Portafolio/DILED3D6.jpg", size: "tall" },
  { file: "Portafolio/DILED3D7.jpg", size: "wide" },
  { file: "Portafolio/DILED3D8.jpg", size: "normal" },
];

const sizeMap = {
  normal: { col: "span 1", row: "span 1" },
  tall:   { col: "span 1", row: "span 2" },
  wide:   { col: "span 2", row: "span 1" },
};

function PhotoCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: sizeMap[item.size].col,
        gridRow: sizeMap[item.size].row,
        position: "relative",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        border: hovered
          ? "1px solid rgba(201,169,110,0.55)"
          : "1px solid rgba(201,169,110,0.08)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.7)"
          : "0 4px 16px rgba(0,0,0,0.4)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        background: "#0f1e38",
        minHeight: 180,
      }}
    >
      <img
        src={`/${item.file}`}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Hover overlay con ícono expandir */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(11,23,40,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}>
        <div style={{
          width: 44, height: 44,
          background: "rgba(201,169,110,0.15)",
          border: "1px solid rgba(201,169,110,0.5)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(6px)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9"/>
            <polyline points="9 21 3 21 3 15"/>
            <line x1="21" y1="3" x2="14" y2="10"/>
            <line x1="3" y1="21" x2="10" y2="14"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="portafolio" style={{ backgroundColor: "#0f1e38", padding: "6rem 0", position: "relative", overflow: "hidden" }}>

      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 3.5rem", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(201,169,110,0.6)" }}>
            Portafolio de Trabajos
          </span>
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700, color: "white",
          margin: 0, lineHeight: 1,
        }}>
          Bienvenido a <span style={{ color: "#c9a96e" }}>DILED 3D</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", marginTop: 10, marginBottom: 0 }}>
          Haz clic en cualquier imagen para verla en detalle.
        </p>
      </div>

      {/* Mosaic */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 2rem",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 220px)",
        gap: "0.85rem",
        gridAutoFlow: "dense",
      }}>
        {photos.map((item) => (
          <PhotoCard key={item.file} item={item} onClick={setSelected} />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "2rem",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: 860, width: "100%",
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(201,169,110,0.3)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.85)",
            }}
          >
            <img
              src={`/${selected.file}`}
              alt=""
              style={{ width: "100%", display: "block", maxHeight: "80vh", objectFit: "contain", background: "#000" }}
            />
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute", top: 14, right: 14,
                width: 38, height: 38,
                background: "rgba(11,23,40,0.85)",
                border: "1px solid rgba(201,169,110,0.35)",
                borderRadius: "50%", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#c9a96e", fontSize: 16,
                backdropFilter: "blur(8px)",
              }}
            >✕</button>
          </div>
        </div>
      )}

      {/* Bottom wave */}
      <div style={{ marginTop: "5rem", pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 50, display: "block", fill: "#0b1728" }}>
          <path d="M0,30 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}