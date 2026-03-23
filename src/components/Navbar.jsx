// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const links = [
  { label: "Inicio",        href: "#inicio" },
  { label: "Servicios",     href: "#servicios" },
  { label: "Portafolio",    href: "#portafolio" },
  { label: "Instituciones", href: "#instituciones" },
  { label: "Contacto",      href: "#contacto" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      transition: "all 0.4s",
      backgroundColor: scrolled ? "rgba(11,23,40,0.97)" : "rgba(11,23,40,0.85)",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,169,110,0.2)" : "none",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* Logo */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          {/* Imagen logo — tamaño fijo 40×40 forzado */}
          <div style={{
            width: 40,
            height: 40,
            minWidth: 40,
            minHeight: 40,
            maxWidth: 40,
            maxHeight: 40,
            borderRadius: 10,
            overflow: "hidden",
            border: "1px solid rgba(201,169,110,0.4)",
            flexShrink: 0,
          }}>
            <img
              src="/logo-diled3d.jpeg"
              alt="DILED 3D"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9a96e", fontWeight: 700, fontSize: 18, letterSpacing: "0.08em" }}>
              DILED <span style={{ color: "white" }}>3D</span>
            </span>
            <span style={{ fontSize: 9, color: "rgba(201,169,110,0.5)", textTransform: "uppercase", letterSpacing: "0.25em", marginTop: 2 }}>
              Materializando ideas
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "8px 16px",
                color: "rgba(201,169,110,0.65)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.05em",
                textDecoration: "none",
                borderRadius: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.target.style.color = "#c9a96e"; e.target.style.background = "rgba(201,169,110,0.08)"; }}
              onMouseLeave={e => { e.target.style.color = "rgba(201,169,110,0.65)"; e.target.style.background = "transparent"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              marginLeft: 12,
              padding: "9px 20px",
              background: "#c9a96e",
              color: "#0b1728",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 16px rgba(201,169,110,0.25)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.target.style.background = "#e2c98a"; }}
            onMouseLeave={e => { e.target.style.background = "#c9a96e"; }}
          >
            Cotizar
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
          className="show-mobile"
          aria-label="Menú"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ display: "block", width: 24, height: 2, background: "#c9a96e", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#c9a96e", borderRadius: 2, transition: "all 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#c9a96e", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: "hidden",
        maxHeight: open ? 400 : 0,
        transition: "max-height 0.3s ease",
        background: "rgba(11,23,40,0.98)",
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}>
        <div style={{ padding: "12px 24px 20px" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "rgba(201,169,110,0.75)",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                borderBottom: "1px solid rgba(201,169,110,0.08)",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: 16,
              padding: "12px",
              background: "#c9a96e",
              color: "#0b1728",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Cotizar proyecto
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile   { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}