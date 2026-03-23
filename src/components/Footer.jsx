// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#071020", borderTop: "1px solid rgba(201,169,110,0.15)" }}>

      {/* Main grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3.5rem 2rem 2.5rem", boxSizing: "border-box", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem" }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(201,169,110,0.35)", flexShrink: 0 }}>
              <img src="/logo-diled3d.jpeg" alt="DILED 3D" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c9a96e", fontWeight: 700, fontSize: 18, letterSpacing: "0.08em" }}>
                DILED <span style={{ color: "white" }}>3D</span>
              </div>
              <div style={{ fontSize: 9, color: "rgba(201,169,110,0.4)", textTransform: "uppercase", letterSpacing: "0.25em" }}>
                Materializando ideas
              </div>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.85rem", lineHeight: 1.75, maxWidth: 280, margin: "0 0 20px" }}>
            Empresa especializada en impresión 3D, pantallas LED y desarrollo tecnológico. Llevando la Industria 4.0 al Estado de México.
          </p>
          {/* Socials */}
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://www.facebook.com/share/1E2CF9rRKe/" target="_blank" rel="noreferrer"
              style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.18)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.16)"; e.currentTarget.style.borderColor = "#c9a96e"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,169,110,0.07)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.18)"; }}
              title="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a96e">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@diled3d?lang=es" target="_blank" rel="noreferrer"
              style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.18)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.16)"; e.currentTarget.style.borderColor = "#c9a96e"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,169,110,0.07)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.18)"; }}
              title="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a96e">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h4 style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,169,110,0.55)", marginBottom: 16, marginTop: 0 }}>
            Servicios
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {["Impresión 3D", "Pantallas LED", "Escaneo 3D", "Diseño 3D", "Cursos y Talleres", "Desarrollo Tecnológico"].map(s => (
              <li key={s}>
                <a href="#servicios" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#c9a96e"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación */}
        <div>
          <h4 style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,169,110,0.55)", marginBottom: 16, marginTop: 0 }}>
            Navegación
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[["Inicio","#inicio"],["Portafolio","#portafolio"],["Servicios","#servicios"],["Instituciones","#instituciones"],["Contacto","#contacto"]].map(([label, href]) => (
              <li key={label}>
                <a href={href} style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#c9a96e"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,169,110,0.55)", marginBottom: 16, marginTop: 0 }}>
            Contacto
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "WhatsApp", value: "55 3055 7923", href: "https://wa.me/5253055792" },
              { label: "Sede", value: "Av. Morelos No. 45, Tlamanalco de Velázquez, Edo. Méx." },
              { label: "Horario", value: "Lun–Vie · 24 horas" },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: 9, color: "rgba(201,169,110,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 2 }}>{item.label}</div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#c9a96e"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.5 }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.08)", padding: "18px 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, maxWidth: 1200, margin: "0 auto", boxSizing: "border-box" }}>
        <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} DILED 3D — Todos los derechos reservados.
        </p>
        <p style={{ color: "rgba(255,255,255,0.12)", fontSize: 11, margin: 0 }}>
          Tlamanalco de Velázquez, Estado de México
        </p>
      </div>

    </footer>
  );
}