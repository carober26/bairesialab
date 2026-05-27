/* global React */
const { useState, useEffect, useRef } = React;

/* ============== ARROW ============== */
function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ============== NAV ============== */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo">
          <span className="nav-logo-mark">B</span>
          <span>Baires <span style={{ opacity: 0.6 }}>IA Lab</span></span>
        </a>
        <div className="nav-links">
          <a href="#problema">Problema</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#equipo">Equipo</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#contacto" className="btn btn-gradient nav-cta">
          Diagnóstico gratis
          <Arrow />
        </a>
      </div>
    </nav>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section id="inicio" style={{
      paddingTop: 140, paddingBottom: 80,
      position: "relative", overflow: "hidden"
    }}>
      {/* Background tramas */}
      <div className="trama-grid" style={{
        position: "absolute", inset: 0,
        opacity: 0.4,
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
        pointerEvents: "none"
      }}/>
      <div className="glow-bg"/>

      <div className="wrap" style={{ position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: 64, alignItems: "center"
        }} className="hero-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>
              <span className="live-dot" style={{ marginLeft: 0 }}></span>
              Automatización con IA · Buenos Aires
            </div>
            <h1>
              Tu negocio<br/>
              ya vende.<br/>
              Pero el caos<br/>
              te cuesta <span className="gradient-text">ventas reales.</span>
            </h1>
            <p style={{
              fontSize: 19, color: "var(--text-2)",
              marginTop: 36, maxWidth: 540, lineHeight: 1.55,
              fontWeight: 400
            }}>
              Implementamos la infraestructura que hace que tu negocio funcione
              aunque vos no estés — sin contratar más gente, sin más horas, sin más caos.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
              <a href="#contacto" className="btn btn-gradient">
                Analizar mi negocio
                <Arrow />
              </a>
              <a href="#contacto" className="btn btn-ghost">
                Call de 15 min
              </a>
            </div>
            <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 20 }}>
              <AvatarStack />
              <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>
                <strong style={{ color: "var(--text)", fontWeight: 700 }}>+100 negocios</strong> ya automatizaron<br/>
                su proceso de ventas
              </div>
            </div>
          </div>

          <LiveDashboard />
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function AvatarStack() {
  const items = [
    { c: "linear-gradient(135deg, #007BFF, #7F00FF)", t: "RC" },
    { c: "linear-gradient(135deg, #7F00FF, #ff5c8a)", t: "FA" },
    { c: "linear-gradient(135deg, #00d4ff, #007BFF)", t: "NM" },
    { c: "linear-gradient(135deg, #ff5c8a, #7F00FF)", t: "JG" },
    { c: "linear-gradient(135deg, #007BFF, #00d4ff)", t: "MS" }
  ];
  return (
    <div style={{ display: "flex" }}>
      {items.map((it, i) => (
        <div key={i} style={{
          width: 38, height: 38, borderRadius: "50%",
          background: it.c, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 700,
          marginLeft: i === 0 ? 0 : -10,
          border: "2px solid var(--bg)",
          zIndex: 5 - i,
          letterSpacing: "0.02em"
        }}>
          {it.t}
        </div>
      ))}
    </div>
  );
}

/* ============== LIVE DASHBOARD ============== */
function LiveDashboard() {
  const [messages, setMessages] = useState([
    { ch: "WhatsApp", text: "Hola, vi su servicio en IG…", time: "0s", color: "#25D366", auto: null },
    { ch: "Instagram", text: "Tienen disponibilidad para…", time: "12s", color: "#E4405F", auto: "Sí, te paso info" },
    { ch: "Email", text: "Consulta por presupuesto", time: "1m", color: "#EA4335", auto: "Respondido" },
    { ch: "WhatsApp", text: "Cuánto cuesta el plan…", time: "2m", color: "#25D366", auto: "Calificado · Hot" }
  ]);
  const [respCount, setRespCount] = useState(247);
  const [pipeline, setPipeline] = useState(89);

  useEffect(() => {
    const id = setInterval(() => {
      setRespCount(c => c + Math.floor(Math.random() * 3) + 1);
      setPipeline(p => Math.min(p + 1, 142));
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const [pulseIdx, setPulseIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulseIdx(i => (i + 1) % 4), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute", inset: -60,
        background: "radial-gradient(50% 50% at 50% 50%, rgba(127,0,255,0.18), transparent 70%)",
        pointerEvents: "none"
      }}/>

      <div className="card" style={{
        padding: 0, overflow: "hidden",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06) inset"
      }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px",
          borderBottom: "1px solid var(--line)",
          background: "rgba(255,255,255,0.02)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}/>
            </div>
            <span className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginLeft: 8, letterSpacing: "0.05em" }}>
              baires.lab/operación
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="live-dot"></span>
            <span style={{
              fontSize: 10, color: "var(--blue)", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase"
            }}>
              Sistema activo
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          borderBottom: "1px solid var(--line)"
        }}>
          <Metric label="Resp. hoy" value={respCount} suffix="" />
          <Metric label="En pipeline" value={pipeline} suffix="" border />
          <Metric label="Tiempo resp." value="0" suffix="s" gradient />
        </div>

        {/* Messages */}
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{
            fontSize: 10, color: "var(--text-3)", letterSpacing: "0.14em",
            textTransform: "uppercase", padding: "4px 4px 8px", fontWeight: 700
          }}>
            Consultas entrantes · automatizadas
          </div>
          {messages.map((m, i) => (
            <MessageRow key={i} m={m} active={i === pulseIdx} />
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: "12px 18px",
          borderTop: "1px solid var(--line)",
          background: "rgba(255,255,255,0.02)",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <span className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.05em" }}>
            6 canales · 24/7
          </span>
          <span className="mono" style={{ fontSize: 10, color: "var(--text-2)", letterSpacing: "0.05em" }}>
            ↑ +40% conv. (60d)
          </span>
        </div>
      </div>

      {/* Floating cards */}
      <FloatingCard
        style={{ top: -24, right: -28 }}
        title="Lead calificado"
        body="Romina · Consultoría"
        gradient
      />
      <FloatingCard
        style={{ bottom: 40, left: -42 }}
        title="Reunión agendada"
        body="Mañana 11:00 · Federico A."
      />
    </div>
  );
}

function Metric({ label, value, suffix, border, gradient }) {
  return (
    <div style={{
      padding: "16px 18px",
      borderLeft: border ? "1px solid var(--line)" : "none",
      borderRight: border ? "1px solid var(--line)" : "none"
    }}>
      <div style={{
        fontSize: 10, color: "var(--text-3)", letterSpacing: "0.12em",
        textTransform: "uppercase", marginBottom: 8, fontWeight: 700
      }}>
        {label}
      </div>
      <div className={gradient ? "gradient-text" : ""} style={{
        fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em",
        color: gradient ? undefined : "var(--text)",
        fontFamily: "var(--font-sans)",
        fontVariantNumeric: "tabular-nums",
        display: "flex", alignItems: "baseline", gap: 2
      }}>
        {value}<span style={{ fontSize: 14, color: "var(--text-3)", fontWeight: 500 }}>{suffix}</span>
      </div>
    </div>
  );
}

function MessageRow({ m, active }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "10px 12px",
      borderRadius: 10,
      background: active ? "var(--accent-soft)" : "transparent",
      border: active ? "1px solid rgba(0,123,255,0.3)" : "1px solid transparent",
      transition: "all 0.4s ease"
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: "50%",
        background: m.color, flexShrink: 0,
        boxShadow: active ? `0 0 8px ${m.color}` : "none"
      }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: "var(--text)", fontWeight: 600 }}>{m.ch}</span>
          <span className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>· {m.time}</span>
        </div>
        <div style={{
          fontSize: 12, color: "var(--text-2)",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          fontWeight: 400
        }}>
          {m.text}
        </div>
      </div>
      {m.auto && (
        <span style={{
          fontSize: 10, color: "var(--blue)", fontWeight: 600,
          padding: "5px 10px",
          border: "1px solid rgba(0,123,255,0.3)",
          borderRadius: 999, whiteSpace: "nowrap",
          letterSpacing: "0.02em"
        }}>
          ✓ {m.auto}
        </span>
      )}
    </div>
  );
}

function FloatingCard({ style, title, body, gradient }) {
  return (
    <div className="card" style={{
      position: "absolute",
      padding: "12px 16px",
      background: "var(--midnight-2)",
      animation: "drift 4s ease-in-out infinite",
      boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
      borderColor: gradient ? "rgba(127,0,255,0.3)" : "var(--line-2)",
      ...style
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: gradient ? "var(--accent-grad)" : "var(--blue)"
        }}/>
        <span style={{
          fontSize: 9, letterSpacing: "0.14em", fontWeight: 700,
          textTransform: "uppercase", color: "var(--text-3)"
        }}>
          {title}
        </span>
      </div>
      <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 600 }}>{body}</div>
    </div>
  );
}

window.HeroComponents = { Nav, Hero, Arrow };
