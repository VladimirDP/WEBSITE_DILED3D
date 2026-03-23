// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-logo-col { order: -1; }
        }
      `}</style>

      <section id="inicio" style={{
        backgroundColor: "#0b1728",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}>
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.055, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }} />
        {/* Glow */}
        <div style={{ position: "absolute", top: "50%", right: "20%", transform: "translateY(-50%)", width: 450, height: 450, borderRadius: "50%", background: "rgba(201,169,110,0.05)", filter: "blur(90px)", pointerEvents: "none" }} />

        {/* Main wrapper */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
          boxSizing: "border-box",
        }}>
          <div className="hero-grid">

            {/* LEFT: Text */}
            <div>
              {/* Badge */}
              <div className="fade-up" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.25)",
                color: "#c9a96e", fontSize: 11, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.15em",
                padding: "6px 14px", borderRadius: 999, marginBottom: 24,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#c9a96e", flexShrink: 0 }} className="led-flicker" />
                Industria 4.0 · Tlamanalco, México
              </div>

              {/* Heading */}
              <h1 className="fade-up delay-1 font-display" style={{ fontWeight: 700, lineHeight: 1.05, marginBottom: 20, marginTop: 0 }}>
                <span style={{ display: "block", color: "white", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}>Impresiones</span>
                <span className="gold-shimmer" style={{ display: "block", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}>3D &amp; LED</span>
                <span style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 300, marginTop: 8 }}>
                  Desarrollo Tecnológico
                </span>
              </h1>

              {/* Description */}
              <p className="fade-up delay-2" style={{ color: "rgba(255,255,255,0.38)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32, maxWidth: 440, marginTop: 0 }}>
                La impresión 3D está abarcando mucho terreno en la industria, por ello DILED 3D ha pensado en preparar lo mejor para usted: desde pantallas LED de alto impacto hasta sistemas tecnológicos a medida.
              </p>

              {/* Buttons */}
              <div className="fade-up delay-3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                <a href="#servicios" style={{ padding: "11px 26px", background: "#c9a96e", color: "#0b1728", fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: "none", letterSpacing: "0.04em" }}>
                  Ver Servicios
                </a>
                <a href="#contacto" style={{ padding: "11px 26px", border: "1px solid rgba(201,169,110,0.35)", color: "#c9a96e", fontWeight: 600, fontSize: 14, borderRadius: 10, textDecoration: "none", letterSpacing: "0.04em" }}>
                  Cotizar proyecto
                </a>
              </div>

              {/* Stats */}
              <div className="fade-up delay-4" style={{ display: "flex", gap: 36, borderTop: "1px solid rgba(201,169,110,0.15)", paddingTop: 24 }}>
                {[{ n: "+50", label: "Proyectos" }, { n: "+10", label: "Instituciones" }, { n: "+5", label: "Años de experiencia" }].map((s) => (
                  <div key={s.label}>
                    <div className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a96e" }}>{s.n}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Logo — tamaño 100% controlado */}
            <div className="hero-logo-col" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>

                {/* Rings */}
                <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(201,169,110,0.1)", animation: "rotateBorder 22s linear infinite", pointerEvents: "none" }} />
                <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(201,169,110,0.07)", animation: "rotateBorder 14s linear infinite reverse", pointerEvents: "none" }} />

                {/* Logo box — FIXED 180×180 */}
                <div style={{
                  width: "180px",
                  height: "180px",
                  minWidth: "180px",
                  minHeight: "180px",
                  maxWidth: "180px",
                  maxHeight: "180px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "2px solid rgba(201,169,110,0.45)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(201,169,110,0.08)",
                  flexShrink: 0,
                  display: "block",
                }} className="pulse-gold">
                  <img
                    src="/logo-diled3d.jpeg"
                    alt="DILED 3D"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* Chip top-left */}
                <div style={{ position: "absolute", top: -6, left: -115, background: "#0f1e38", border: "1px solid rgba(201,169,110,0.3)", borderRadius: 10, padding: "7px 12px", boxShadow: "0 8px 20px rgba(0,0,0,0.5)", whiteSpace: "nowrap" }}>
                  <div style={{ fontSize: 8, color: "rgba(201,169,110,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Especialidad</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#c9a96e" }}>Pantallas LED</div>
                </div>

                {/* Chip bottom-right */}
                <div style={{ position: "absolute", bottom: -6, right: -110, background: "#0f1e38", border: "1px solid rgba(201,169,110,0.3)", borderRadius: 10, padding: "7px 12px", boxShadow: "0 8px 20px rgba(0,0,0,0.5)", whiteSpace: "nowrap" }}>
                  <div style={{ fontSize: 8, color: "rgba(201,169,110,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Tecnología</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#c9a96e" }}>Impresión 3D</div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, pointerEvents: "none" }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 50, display: "block", fill: "#0f1e38" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>
    </>
  );
}