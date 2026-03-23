// src/components/Contact.jsx
import React, { useState } from "react";

const contactInfo = [
  {
    label: "EMAIL",
    value: "Pendiente",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: "WHATSAPP",
    value: "55 3055 7923",
    href: "https://wa.me/5253055792?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#c9a96e">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.703-1.49A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 0 1-5.012-1.374l-.36-.214-3.733.975.999-3.64-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
      </svg>
    ),
  },
  {
    label: "SEDE",
    value: "Av. Morelos No. 45, Tlamanalco de Velázquez, Estado de México",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "HORARIO",
    value: "Lun–Vie · 24 horas",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1E2CF9rRKe/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#c9a96e">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@diled3d?lang=es",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#c9a96e">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    ),
  },
];

const services = [
  "Pantallas LED",
  "Impresión 3D",
  "Desarrollo Tecnológico",
  "Diseño 3D",
  "Consultoría",
  "Otro",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Placeholder: aquí conectarás EmailJS u otro servicio
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contacto" style={{ backgroundColor: "#122040", padding: "6rem 0", position: "relative", overflow: "hidden" }}>

      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />
      {/* Glow */}
      <div style={{ position: "absolute", bottom: 0, left: "30%", width: 500, height: 400, background: "rgba(201,169,110,0.04)", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 3.5rem", boxSizing: "border-box", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(201,169,110,0.6)" }}>
            Comunícate
          </span>
          <div style={{ width: 40, height: 1, background: "rgba(201,169,110,0.4)" }} />
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", margin: "0 0 10px", lineHeight: 1 }}>
          Hablemos de tu <span style={{ color: "#c9a96e" }}>proyecto</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", margin: 0 }}>
          Cuéntanos tu idea y te enviamos una cotización sin compromiso.
        </p>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }}>

        {/* LEFT — Info */}
        <div>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.95rem", lineHeight: 1.8, marginTop: 0, marginBottom: 32 }}>
            Trabajamos con empresas, instituciones educativas y emprendedores para materializar ideas con tecnología de vanguardia.
          </p>

          {/* Contact items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
            {contactInfo.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  borderRadius: 10,
                  background: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,169,110,0.45)", marginBottom: 3 }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#c9a96e"}
                      onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ borderTop: "1px solid rgba(201,169,110,0.12)", paddingTop: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,169,110,0.4)", marginBottom: 14 }}>
              Redes sociales
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  style={{
                    width: 44, height: 44,
                    borderRadius: 12,
                    background: "rgba(201,169,110,0.07)",
                    border: "1px solid rgba(201,169,110,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.16)"; e.currentTarget.style.borderColor = "#c9a96e"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,169,110,0.07)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Formulario */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(201,169,110,0.15)",
          borderRadius: 20,
          padding: "2.5rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "white", margin: "0 0 10px" }}>
                ¡Mensaje enviado!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem", margin: "0 0 24px" }}>
                Nos pondremos en contacto contigo pronto.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                style={{ padding: "10px 24px", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.3)", color: "#c9a96e", borderRadius: 10, cursor: "pointer", fontSize: 14 }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { name: "name", label: "NOMBRE", placeholder: "Tu nombre completo", type: "text" },
                  { name: "email", label: "CORREO", placeholder: "tu@correo.com", type: "email" },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{ display: "block", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,169,110,0.55)", marginBottom: 7 }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      style={{
                        width: "100%", boxSizing: "border-box",
                        padding: "11px 14px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(201,169,110,0.18)",
                        borderRadius: 10,
                        color: "white", fontSize: "0.9rem",
                        outline: "none",
                      }}
                      onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.55)"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,169,110,0.18)"}
                    />
                  </div>
                ))}
              </div>

              {/* Service */}
              <div>
                <label style={{ display: "block", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,169,110,0.55)", marginBottom: 7 }}>
                  SERVICIO DE INTERÉS
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    background: "#0f1e38",
                    border: "1px solid rgba(201,169,110,0.18)",
                    borderRadius: 10,
                    color: form.service ? "white" : "rgba(255,255,255,0.3)",
                    fontSize: "0.9rem",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.55)"}
                  onBlur={e => e.target.style.borderColor = "rgba(201,169,110,0.18)"}
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ background: "#0f1e38", color: "white" }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,169,110,0.55)", marginBottom: 7 }}>
                  MENSAJE
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe tu proyecto o consulta..."
                  rows={5}
                  style={{
                    width: "100%", boxSizing: "border-box",
                    padding: "11px 14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(201,169,110,0.18)",
                    borderRadius: 10,
                    color: "white", fontSize: "0.9rem",
                    outline: "none", resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.55)"}
                  onBlur={e => e.target.style.borderColor = "rgba(201,169,110,0.18)"}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={sending || !form.name || !form.email || !form.message}
                style={{
                  padding: "14px",
                  background: sending || !form.name || !form.email || !form.message ? "rgba(201,169,110,0.3)" : "#c9a96e",
                  color: "#0b1728",
                  fontWeight: 700, fontSize: 15,
                  border: "none", borderRadius: 12,
                  cursor: sending || !form.name || !form.email || !form.message ? "not-allowed" : "pointer",
                  letterSpacing: "0.05em",
                  transition: "all 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                {sending ? (
                  <>
                    <span style={{ width: 16, height: 16, border: "2px solid #0b1728", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje →"
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}