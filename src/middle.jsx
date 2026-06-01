/* global React */
const { useState: useStateM, useEffect: useEffectM, useRef: useRefM } = React;

/* ============== PROBLEM SECTION ============== */
function Problem() {
  const items = [
    {
      icon: "01",
      title: "Mensajes sin responder",
      body: "Las consultas llegan por Instagram, Facebook, TikTok, LinkedIn, WhatsApp y email al mismo tiempo. Sin un sistema, muchas quedan sin respuesta a tiempo.",
      stat: "6+ canales"
    },
    {
      icon: "02",
      title: "Tiempo atascado en lo operativo",
      body: "Respondés las mismas preguntas todos los días. Ese tiempo podría ir a crear, vender o estrategia. El caos operativo frena el crecimiento.",
      stat: "~2h diarias"
    },
    {
      icon: "03",
      title: "Ventas que se caen por falta de sistema",
      body: "El cliente preguntó, quedó interesado, y nadie hizo seguimiento. La venta no se perdió por falta de interés — se perdió por falta de proceso.",
      stat: "78% pérdida"
    }
  ];

  return (
    <section id="problema" style={{ padding: "120px 0", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80,
          marginBottom: 72, alignItems: "end"
        }} className="probl-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>El problema</div>
            <h2>
              Así se pierden<br/>
              ventas en negocios<br/>
              que <span className="gradient-text">ya funcionan.</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 18, maxWidth: 520, lineHeight: 1.55 }}>
              No hace falta tener un negocio roto para perder oportunidades.
              Con tráfico, audiencia y producto validado, el problema casi siempre
              está en el <strong style={{ color: "var(--text)", fontWeight: 700 }}>proceso</strong>.
            </p>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16
        }} className="probl-cards">
          {items.map((it, i) => (
            <ProblemCard key={i} {...it} />
          ))}
        </div>

        {/* Big stat */}
        <div style={{
          marginTop: 80, position: "relative", overflow: "hidden",
          padding: "64px 56px",
          borderRadius: 24,
          background: "linear-gradient(135deg, rgba(0,123,255,0.08), rgba(127,0,255,0.08))",
          border: "1px solid var(--line)"
        }} className="big-stat">
          <div className="trama-dots" style={{
            position: "absolute", inset: 0, opacity: 0.4,
            maskImage: "radial-gradient(circle at 80% 50%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 80% 50%, black, transparent 70%)"
          }}/>
          <div style={{
            display: "grid", gridTemplateColumns: "auto 1fr", gap: 64,
            alignItems: "center", position: "relative"
          }} className="big-stat-inner">
            <div className="gradient-text" style={{
              fontSize: "clamp(96px, 13vw, 180px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              fontVariantNumeric: "tabular-nums"
            }}>
              78<span style={{ fontSize: "0.5em", opacity: 0.5 }}>%</span>
            </div>
            <div>
              <p style={{
                fontSize: "clamp(20px, 2.2vw, 28px)",
                lineHeight: 1.4,
                color: "var(--text)",
                fontWeight: 400,
                letterSpacing: "-0.015em"
              }}>
                <strong style={{ fontWeight: 700 }}>de las ventas que se pierden</strong> no son por precio.
                Son porque no respondiste primero. Cada hora sin respuesta es una oportunidad
                que se va a <span className="gradient-text" style={{ fontWeight: 700 }}>la competencia</span> — y no vuelve.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .probl-grid, .probl-cards, .big-stat-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
          .big-stat { padding: 40px 28px !important; }
        }
      `}</style>
    </section>
  );
}

function ProblemCard({ icon, title, body, stat }) {
  return (
    <div className="card" style={{
      padding: 28,
      display: "flex", flexDirection: "column", gap: 18,
      minHeight: 280,
      position: "relative", overflow: "hidden"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
        <span className="mono" style={{
          fontSize: 11, color: "var(--text-3)",
          letterSpacing: "0.1em", fontWeight: 600
        }}>
          {icon}
        </span>
        <span style={{
          fontSize: 10, color: "var(--blue)", fontWeight: 600,
          padding: "5px 10px",
          border: "1px solid rgba(0,123,255,0.3)",
          borderRadius: 999, letterSpacing: "0.04em"
        }}>
          {stat}
        </span>
      </div>
      <h3 style={{ marginTop: "auto", fontWeight: 700 }}>{title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}

/* ============== CHAOS → ORDER VISUAL ============== */
function ChaosToOrder() {
  return (
    <section style={{ padding: "60px 0 120px" }}>
      <div className="wrap">
        <div style={{ marginBottom: 48, maxWidth: 640 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Antes y después</div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}>
            Qué cambia cuando<br/>
            el sistema está <span className="gradient-text">bien diseñado.</span>
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 80px 1fr",
          gap: 24,
          alignItems: "stretch"
        }} className="c2o-grid">
          <ChaosPanel />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              padding: "14px 14px",
              background: "var(--accent-grad)",
              borderRadius: 999,
              fontSize: 11, color: "var(--white)", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              boxShadow: "0 8px 24px rgba(127,0,255,0.4)",
              display: "flex", alignItems: "center", gap: 8
            }}>
              IA
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <OrderPanel />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .c2o-grid { grid-template-columns: 1fr !important; }
          .c2o-grid > div:nth-child(2) { padding: 12px 0; }
        }
      `}</style>
    </section>
  );
}

function ChaosPanel() {
  const msgs = [
    { c: "#25D366", t: "WA · Hola, info?" },
    { c: "#E4405F", t: "IG · Cuánto cuesta" },
    { c: "#EA4335", t: "Email · Presupuesto" },
    { c: "#1877F2", t: "FB · Disponibilidad" },
    { c: "#ffffff", t: "TT · Trabajan online" },
    { c: "#25D366", t: "WA · Sigo esperando" },
    { c: "#E4405F", t: "IG · Hola?" },
    { c: "#EA4335", t: "Email · Re: presupuesto" }
  ];
  return (
    <div style={{
      padding: 28,
      borderRadius: 20,
      background: "var(--midnight-2)",
      border: "1px solid var(--line)",
      minHeight: 420,
      position: "relative",
      overflow: "hidden"
    }}>
      <div className="trama-diag" style={{ position: "absolute", inset: 0 }}/>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, position: "relative" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--danger)" }}/>
        <span style={{
          fontSize: 10, color: "var(--danger)", letterSpacing: "0.16em",
          textTransform: "uppercase", fontWeight: 700
        }}>
          Sin sistema · caos
        </span>
      </div>
      {msgs.map((m, i) => (
        <div key={i} style={{
          position: "absolute",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 10,
          padding: "8px 12px",
          fontSize: 12, fontWeight: 500,
          color: "var(--text-2)",
          display: "flex", alignItems: "center", gap: 8,
          left: `${8 + (i * 13) % 62}%`,
          top: `${22 + (i * 17) % 62}%`,
          transform: `rotate(${(i % 5 - 2) * 4}deg)`,
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          whiteSpace: "nowrap"
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: m.c }}/>
          {m.t}
        </div>
      ))}
    </div>
  );
}

function OrderPanel() {
  const stages = [
    { label: "Nuevo", count: 12, color: "rgba(255,255,255,0.4)" },
    { label: "Calificado", count: 8, color: "#00d4ff" },
    { label: "Reunión", count: 5, color: "#007BFF" },
    { label: "Ganado", count: 3, color: "#7F00FF" }
  ];
  return (
    <div style={{
      padding: 28,
      borderRadius: 20,
      background: "var(--midnight-2)",
      border: "1px solid rgba(0,123,255,0.25)",
      minHeight: 420,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 0 60px rgba(0,123,255,0.08) inset"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <span className="live-dot"></span>
        <span style={{
          fontSize: 10, color: "var(--blue)", letterSpacing: "0.16em",
          textTransform: "uppercase", fontWeight: 700
        }}>
          Con Baires IA · orden
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {stages.map((s, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: 12,
            padding: "16px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            border: "1px solid var(--line)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: s.color,
                boxShadow: i > 0 ? `0 0 8px ${s.color}` : "none"
              }}/>
              <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 600 }}>{s.label}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="mono" style={{
                fontSize: 11, color: "var(--text-3)",
                fontVariantNumeric: "tabular-nums", fontWeight: 600
              }}>
                {s.count} leads
              </span>
              <div style={{
                width: 70, height: 4, borderRadius: 2,
                background: "rgba(255,255,255,0.06)", overflow: "hidden"
              }}>
                <div style={{
                  height: "100%", width: `${(s.count / 12) * 100}%`,
                  background: s.color
                }}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============== SERVICES BENTO ============== */
function Services() {
  return (
    <section id="servicios" style={{ padding: "120px 0", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ marginBottom: 64, maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Lo que hacemos</div>
          <h2>
            Sistemas que <span className="gradient-text">organizan</span><br/>
            y escalan tu proceso de venta.
          </h2>
          <p style={{ marginTop: 28, fontSize: 18, maxWidth: 560 }}>
            Diseñamos la infraestructura operativa que hace que tu negocio
            funcione sin depender de vos para cada respuesta.
          </p>
        </div>

        <div className="bento">
          <ServiceCard
            num="01"
            title="Automatización de consultas y ventas"
            body="Conectamos tus canales de venta — WhatsApp, Instagram, formularios — y diseñamos flujos automáticos que responden, califican y guían al cliente sin intervención manual."
            tag="Flujos · Multicanal"
            featured
          />
          <ServiceCard
            num="02"
            title="CRM y seguimiento automático"
            body="Organizamos todos tus contactos en un sistema inteligente que segmenta, etiqueta y hace seguimiento automatizado para que ninguna oportunidad se pierda."
            tag="Gestión · Pipelines"
          />
          <ServiceCard
            num="03"
            title="Chatbots y asistentes virtuales"
            body="Asistentes que responden, envían info de productos, agendan llamadas y guían al cliente hacia la compra. Disponibles 24/7."
            tag="IA · 24/7"
          />
          <ServiceCard
            num="04"
            title="Auditoría y consultoría de procesos"
            body="Analizamos cómo llegan y se gestionan tus consultas, identificamos cuellos de botella y diseñamos la hoja de ruta para automatizar lo que más impacta."
            tag="Diagnóstico"
          />
        </div>
      </div>

      <style>{`
        .bento {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 16px;
        }
        .bento > :nth-child(1) { grid-column: 1; grid-row: 1 / 3; }
        .bento > :nth-child(2) { grid-column: 2 / 4; grid-row: 1; }
        .bento > :nth-child(3) { grid-column: 2; grid-row: 2; }
        .bento > :nth-child(4) { grid-column: 3; grid-row: 2; }
        @media (max-width: 900px) {
          .bento { grid-template-columns: 1fr; }
          .bento > * { grid-column: 1 !important; grid-row: auto !important; min-height: auto !important; }
          .bento > :nth-child(1) { min-height: 380px !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ num, title, body, tag, featured }) {
  return (
    <div className="card" style={{
      padding: featured ? 36 : 28,
      display: "flex", flexDirection: "column", gap: 16,
      minHeight: featured ? 500 : 220,
      position: "relative", overflow: "hidden",
      background: featured
        ? "linear-gradient(160deg, rgba(0,123,255,0.08) 0%, rgba(127,0,255,0.05) 50%, var(--surface) 100%)"
        : "var(--surface)"
    }}>
      {featured && (
        <div className="trama-dots" style={{
          position: "absolute", inset: 0, opacity: 0.25,
          maskImage: "radial-gradient(circle at 100% 0%, black, transparent 60%)",
          WebkitMaskImage: "radial-gradient(circle at 100% 0%, black, transparent 60%)"
        }}/>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
        <span className="mono" style={{
          fontSize: 11, color: "var(--text-3)",
          letterSpacing: "0.1em", fontWeight: 600
        }}>
          {num}
        </span>
        <span style={{
          fontSize: 10, color: "var(--text-2)", fontWeight: 600,
          padding: "5px 10px",
          border: "1px solid var(--line-2)",
          borderRadius: 999, letterSpacing: "0.06em",
          textTransform: "uppercase"
        }}>
          {tag}
        </span>
      </div>
      <div style={{ marginTop: featured ? "auto" : 16, position: "relative" }}>
        <h3 style={{
          fontSize: featured ? "clamp(26px, 2.8vw, 40px)" : 19,
          fontWeight: 700,
          marginBottom: 14,
          letterSpacing: featured ? "-0.025em" : "-0.015em",
          lineHeight: featured ? 1.05 : 1.2
        }}>
          {title}
        </h3>
        <p style={{ fontSize: featured ? 15.5 : 14, lineHeight: 1.55 }}>{body}</p>
      </div>
      {featured && (
        <div style={{
          marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8,
          color: "var(--blue)", fontSize: 14, fontWeight: 600,
          position: "relative"
        }}>
          Ver caso de uso
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}

/* ============== INTEGRATIONS MARQUEE ============== */
function Integrations() {
  const tools = [
    "WhatsApp", "Instagram", "Facebook", "Make", "n8n", "Zapier",
    "Gmail", "Calendly", "Mercado Pago", "HubSpot", "Notion", "TikTok",
    "Go High Level", "Stripe", "PayPal"
  ];
  return (
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--line)", overflow: "hidden" }}>
      <div className="wrap" style={{ marginBottom: 40, textAlign: "center" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Integramos con las herramientas que ya usás
        </span>
      </div>
      <div style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)"
      }}>
        <div className="marquee-track">
          {[...tools, ...tools].map((t, i) => (
            <div key={i} style={{
              fontSize: "clamp(32px, 3.8vw, 52px)",
              color: "var(--text-3)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              transition: "color 0.2s, transform 0.2s",
              cursor: "default",
              whiteSpace: "nowrap"
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-3)"; }}
            >
              {t}
              <span style={{ marginLeft: 56, color: "rgba(127,0,255,0.4)" }}>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.MidComponents = { Problem, ChaosToOrder, Services, Integrations };
