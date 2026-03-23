// src/components/Institutions.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";

const events = [
  {
    id: 1,
    file: "Instituciones/CBTIXTAPALUCA-DILED3D.mp4",
    name: "CBT IXTAPALUCA",
    short: "Semana de la Ciencia y Tecnología",
    description:
      "Invitación por parte del CBT Ixtapaluca para participar en la Semana de la Ciencia y Tecnología, donde se impartieron pláticas sobre Impresión 3D y sus aplicaciones, provocando un gran interés entre los estudiantes.",
    tag: "Impresión 3D",
  },
  {
    id: 2,
    file: "Instituciones/TESOEM-DILED3D.mp4",
    name: "TESOEM",
    short: "1ª Cumbre Creativa · 10° Aniversario TICS",
    description:
      "Invitación por parte del Tecnológico de Estudios Superiores Oriente del Estado de México para la primera cumbre creativa y décimo aniversario de la carrera TICS, donde se impartió un curso de diseño 3D y sus aplicaciones.",
    tag: "Diseño 3D",
  },
  {
    id: 3,
    file: "Instituciones/UPA-DILED3D.mp4",
    name: "UPA",
    short: "Encuentro de Robótica",
    description:
      "Invitación por parte de la Universidad Politécnica de Atlautla en el Encuentro de Robótica, donde se dieron pláticas y promoción de impresiones 3D a todos los interesados dentro de la institución.",
    tag: "Robótica",
  },
  {
    id: 4,
    file: "Instituciones/TESI-DILED3D.mp4",
    name: "TESI",
    short: "FLISOL — Festival Latinoamericano de Software Libre",
    description:
      "Invitación por parte del Tecnológico de Estudios Superiores de Ixtapaluca para el evento FLISOL, donde se dieron pláticas y promoción de impresiones 3D a todos los interesados dentro de la institución.",
    tag: "Software Libre",
  },
  {
    id: 5,
    file: "Instituciones/ITRCHALCO-DILED3D.mp4",
    name: "ITR CHALCO",
    short: "Presentación de Impresión 3D",
    description:
      "Invitación por parte del Instituto Tecnológico Roosevelt Chalco para una presentación de aplicaciones en impresión 3D y más acerca de esta tecnología, provocando mucho interés entre la comunidad estudiantil.",
    tag: "Impresión 3D",
  },
  {
    id: 6,
    file: "Instituciones/TESCHA-DILED3D.mp4",
    name: "TESCHA",
    short: "25° Aniversario de la Institución",
    description:
      "Invitación por parte del Tecnológico de Estudios Superiores de Chalco para el evento del 25° Aniversario, donde se dieron pláticas y promoción de impresiones 3D a todos los interesados dentro de la institución.",
    tag: "Aniversario",
  },
  {
    id: 7,
    file: "Instituciones/CONALEPCHALCO-DILED3D.mp4",
    name: "CONALEP CHALCO",
    short: "Pláticas de Impresión 3D · Electromecánica",
    description:
      "Invitación por parte del CONALEP CHALCO para impartir pláticas sobre impresión 3D y sus aplicaciones dirigidas a los estudiantes de la carrera de Electromecánica.",
    tag: "Electromecánica",
  },
];

function VideoSlide({ event, isActive, isMuted, onToggleMute, onEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000" }}>
      <video
        ref={videoRef}
        src={`/${event.file}`}
        muted={isMuted}
        loop={false}
        playsInline
        onEnded={onEnded}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(11,23,40,0.9) 0%, rgba(11,23,40,0.25) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Mute button */}
      <button
        onClick={onToggleMute}
        style={{
          position: "absolute", top: 14, right: 14,
          width: 38, height: 38,
          background: "rgba(11,23,40,0.8)",
          border: "1px solid rgba(201,169,110,0.35)",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}
        title={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        )}
      </button>

      {/* Tag */}
      <div style={{
        position: "absolute", top: 14, left: 14,
        background: "rgba(201,169,110,0.15)",
        border: "1px solid rgba(201,169,110,0.35)",
        color: "#c9a96e",
        fontSize: 10, fontWeight: 700,
        letterSpacing: "0.15em", textTransform: "uppercase",
        padding: "4px 10px", borderRadius: 999,
        backdropFilter: "blur(8px)",
      }}>
        {event.tag}
      </div>
    </div>
  );
}

export default function Institutions() {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [animDir, setAnimDir] = useState("next");

  const goTo = useCallback((index, dir = "next") => {
    if (transitioning) return;
    setAnimDir(dir);
    setTransitioning(true);
    setIsMuted(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 320);
  }, [transitioning]);

  // Advance to next when video ends
  const handleEnded = useCallback(() => {
    const next = (current + 1) % events.length;
    goTo(next, "next");
  }, [current, goTo]);

  const prev = () => goTo((current - 1 + events.length) % events.length, "prev");
  const next = () => goTo((current + 1) % events.length, "next");

  const ev = events[current];

  return (
    <section id="instituciones" style={{ backgroundColor: "#0b1728", padding: "6rem 0", position: "relative", overflow: "hidden" }}>

      {/* Dot grid bg */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 3rem", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(201,169,110,0.6)" }}>
            Presencia Institucional
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", margin: 0, lineHeight: 1 }}>
              Instituciones que{" "}
              <span style={{ color: "#c9a96e" }}>nos han invitado</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", marginTop: 10, maxWidth: 520, marginBottom: 0 }}>
              Llevando tecnología e innovación a instituciones educativas del Estado de México y más.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 700, color: "#c9a96e", lineHeight: 1 }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.5rem" }}>/</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "rgba(255,255,255,0.25)", lineHeight: 1 }}>
              {String(events.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Carousel — más gap entre video e info */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", boxSizing: "border-box" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",          /* ← separación aumentada */
          alignItems: "center",
        }}>

          {/* Video */}
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(201,169,110,0.2)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            aspectRatio: "16/10",
            opacity: transitioning ? 0 : 1,
            transform: transitioning
              ? `translateX(${animDir === "next" ? "-24px" : "24px"})`
              : "translateX(0)",
            transition: "opacity 0.32s ease, transform 0.32s ease",
          }}>
            <VideoSlide
              event={ev}
              isActive={!transitioning}
              isMuted={isMuted}
              onToggleMute={() => setIsMuted(m => !m)}
              onEnded={handleEnded}
            />
          </div>

          {/* Info — padding izquierdo extra para separarlo visualmente */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: "1rem",   /* ← espacio extra */
            minHeight: 340,
            opacity: transitioning ? 0 : 1,
            transform: transitioning
              ? `translateX(${animDir === "next" ? "24px" : "-24px"})`
              : "translateX(0)",
            transition: "opacity 0.32s ease, transform 0.32s ease",
          }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,169,110,0.5)", marginBottom: 10 }}>
                Evento
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700, color: "white",
                margin: "0 0 6px", lineHeight: 1,
              }}>
                {ev.name}
              </h3>
              <p style={{ color: "#c9a96e", fontSize: 13, fontWeight: 600, margin: "0 0 22px", letterSpacing: "0.04em" }}>
                {ev.short}
              </p>
              <div style={{ width: 48, height: 2, background: "linear-gradient(to right, #c9a96e, transparent)", marginBottom: 22, borderRadius: 1 }} />
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.85, margin: 0 }}>
                {ev.description}
              </p>
            </div>

            {/* Controls */}
            <div style={{ marginTop: 32 }}>
              {/* Dots */}
              <div style={{ display: "flex", gap: 7, marginBottom: 22 }}>
                {events.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                    style={{
                      width: i === current ? 26 : 8,
                      height: 8, borderRadius: 4,
                      background: i === current ? "#c9a96e" : "rgba(201,169,110,0.2)",
                      border: "none", cursor: "pointer", padding: 0,
                      transition: "all 0.3s",
                    }}
                    title={events[i].name}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div style={{ display: "flex", gap: 10 }}>
                {[{ fn: prev, icon: "←", label: "Anterior" }, { fn: next, icon: "→", label: "Siguiente" }].map(btn => (
                  <button
                    key={btn.label}
                    onClick={btn.fn}
                    style={{
                      width: 50, height: 50,
                      border: "1px solid rgba(201,169,110,0.3)",
                      background: "rgba(201,169,110,0.05)",
                      color: "#c9a96e", fontSize: 18,
                      borderRadius: 12, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.14)"; e.currentTarget.style.borderColor = "#c9a96e"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,169,110,0.05)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)"; }}
                    title={btn.label}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div style={{ display: "flex", gap: 10, marginTop: "2.5rem", overflowX: "auto", paddingBottom: 6 }}>
          {events.map((e, i) => (
            <button
              key={e.id}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              style={{
                flexShrink: 0,
                width: 118, height: 66,
                borderRadius: 10, overflow: "hidden",
                border: i === current ? "2px solid #c9a96e" : "2px solid rgba(201,169,110,0.12)",
                background: "#0f1e38",
                cursor: "pointer", padding: 0,
                position: "relative",
                opacity: i === current ? 1 : 0.5,
                transition: "opacity 0.2s, border-color 0.2s",
              }}
              title={e.name}
            >
              <video src={`/${e.file}`} muted playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(11,23,40,0.9) 0%, transparent 60%)",
                display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 5,
              }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: i === current ? "#c9a96e" : "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {e.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ marginTop: "5rem", pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 50, display: "block", fill: "#122040" }}>
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}