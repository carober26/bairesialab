/* global React */
const { useState: useStateB, useEffect: useEffectB } = React;

/* ============== "Is this for me?" + PROCESS ============== */
function ProcessSection() {
  const steps = [
    {
      n: "01",
      title: "Análisis del negocio",
      body: "Revisamos cómo llegan tus consultas, cómo las gestionás hoy y dónde se están perdiendo oportunidades."
    },
    {
      n: "02",
      title: "Diseño del sistema",
      body: "Definimos qué automatizar primero según impacto real. Sin automatizar por automatizar — con foco en resultados."
    },
    {
      n: "03",
      title: "Implementación",
      body: "Construimos y conectamos el sistema a tus canales de venta. Te entregamos algo que funciona desde el primer día."
    },
    {
      n: "04",
      title: "Optimización continua",
      body: "Ajustamos el proceso según los resultados reales. El sistema mejora con el tiempo y con tu negocio."
    }
  ];

  return (
    <section id="proceso" style={{ padding: "120px 0", borderTop: "1px solid var(--line)", position: "relative" }}>
      <div className="trama-grid" style={{
        position: "absolute", inset: 0, opacity: 0.3,
        maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent 70%)"
      }}/>
      <div className="wrap" style={{ position: "relative" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80,
          marginBottom: 64, alignItems: "end"
        }} className="proc-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>El proceso</div>
            <h2>
              Simple, rápido,<br/>
              <span className="gradient-text">orientado a resultados.</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 18, maxWidth: 480, lineHeight: 1.55 }}>
              Implementación en 2 a 4 semanas según complejidad. Sin tecnicismos,
              sin complejidades innecesarias.
            </p>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16
        }} className="proc-steps">
          {steps.map((s, i) => (
            <ProcessStep key={i} {...s} isLast={i === steps.length - 1} />
          ))}
        </div>

        {/* Metrics row */}
        <div style={{
          marginTop: 64,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1, background: "var(--line)",
          borderRadius: 20, overflow: "hidden",
          border: "1px solid var(--line)"
        }} className="proc-metrics">
          {[
            { v: "+40%", l: "Más conversiones en promedio en los primeros 60 días" },
            { v: "1 mes", l: "Tiempo promedio para recuperar la inversión" },
            { v: "24/7", l: "El sistema trabaja aunque vos no estés" }
          ].map((m, i) => (
            <div key={i} style={{ padding: "40px 32px", background: "var(--bg-2)" }}>
              <div className="gradient-text" style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1
              }}>
                {m.v}
              </div>
              <p style={{ marginTop: 16, fontSize: 14, maxWidth: 280, color: "var(--text-2)" }}>{m.l}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proc-head, .proc-steps, .proc-metrics { grid-template-columns: 1fr !important; gap: 32px !important; }
          .proc-metrics { gap: 1px !important; }
        }
      `}</style>
    </section>
  );
}

function ProcessStep({ n, title, body, isLast }) {
  return (
    <div style={{
      padding: 24, borderRadius: 16,
      background: "var(--surface)",
      border: "1px solid var(--line)",
      position: "relative", overflow: "hidden",
      minHeight: 220, display: "flex", flexDirection: "column", gap: 12
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="gradient-text" style={{
          fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em",
          fontVariantNumeric: "tabular-nums"
        }}>
          {n}
        </span>
        {!isLast && (
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none" style={{ color: "var(--text-3)" }}>
            <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: "auto" }}>{title}</h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}

/* ============== TESTIMONIALS ============== */
function Testimonials() {
  const items = [
    {
      quote: "Antes perdía 2 horas diarias respondiendo consultas por WhatsApp e Instagram mientras daba clases. Ahora el sistema responde solo, agenda la clase de prueba y me avisa cuando alguien está listo para inscribirse. El primer mes cerré un 35% más de nuevos alumnos sin cambiar nada de mi lado.",
      name: "Romina Casas",
      role: "Dueña · Estudio Alma Vital",
      city: "CABA",
      tag: "Bienestar & Fitness",
      stat: "+35%",
      statLabel: "más alumnos"
    },
    {
      quote: "El onboarding de cada cliente nuevo nos costaba horas de emails y llamadas. Baires IA Lab armó un flujo que automatizó todo ese proceso. Ahorramos 5 horas por cliente y el equipo por fin puede enfocarse en lo que importa. En 3 meses recuperamos la inversión con creces.",
      name: "Federico Álvarez",
      role: "CEO · Agencia Impulso Digital",
      city: "Córdoba",
      tag: "Marketing Digital",
      stat: "-5h",
      statLabel: "por cliente"
    },
    {
      quote: "Teníamos casi un 30% de turnos que no se presentaban. Implementaron recordatorios automáticos por WhatsApp con confirmación y el número bajó al 7%. Solo eso pagó la inversión en el primer mes. Ahora también tenemos el seguimiento post-turno funcionando solo.",
      name: "Natalia Moreno",
      role: "Directora · Centro Estético Nova",
      city: "Rosario",
      tag: "Salud & Estética",
      stat: "30→7%",
      statLabel: "no-shows"
    }
  ];

  return (
    <section style={{ padding: "120px 0", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ marginBottom: 64, maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Resultados reales</div>
          <h2>
            Lo que dicen los que<br/>
            <span className="gradient-text">ya automatizaron.</span>
          </h2>
          <p style={{ marginTop: 24, fontSize: 18, color: "var(--text-2)" }}>
            Negocios reales, problemas reales, resultados concretos.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16
        }} className="testim-grid">
          {items.map((t, i) => <TestimonialCard key={i} {...t} index={i} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) {
          .testim-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ quote, name, role, city, tag, stat, statLabel, index }) {
  const grads = [
    "linear-gradient(135deg, #007BFF, #7F00FF)",
    "linear-gradient(135deg, #7F00FF, #00d4ff)",
    "linear-gradient(135deg, #00d4ff, #007BFF)"
  ];
  return (
    <div className="card" style={{
      padding: 32,
      display: "flex", flexDirection: "column",
      minHeight: 420
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 24 }}>
        <Stars />
        <div style={{
          padding: "5px 10px",
          border: "1px solid var(--line-2)",
          borderRadius: 999,
          fontSize: 10, fontWeight: 600,
          color: "var(--text-2)",
          letterSpacing: "0.06em", textTransform: "uppercase"
        }}>
          {tag}
        </div>
      </div>

      {/* Stat */}
      <div style={{ marginBottom: 24 }}>
        <div className="gradient-text" style={{
          fontSize: 44, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1
        }}>
          {stat}
        </div>
        <div style={{
          fontSize: 11, color: "var(--text-3)", marginTop: 4,
          letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600
        }}>
          {statLabel}
        </div>
      </div>

      <p style={{
        fontSize: 14.5, lineHeight: 1.6, color: "var(--text-2)",
        marginBottom: 24
      }}>
        "{quote}"
      </p>

      <div style={{
        marginTop: "auto",
        display: "flex", alignItems: "center", gap: 12,
        paddingTop: 20, borderTop: "1px solid var(--line)"
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: grads[index % grads.length],
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 700, fontSize: 14,
          flexShrink: 0
        }}>
          {name.split(" ").map(w => w[0]).join("")}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{name}</div>
          <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>{role} · {city}</div>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="url(#starGrad)">
          <defs>
            <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#007BFF"/>
              <stop offset="100%" stopColor="#7F00FF"/>
            </linearGradient>
          </defs>
          <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"/>
        </svg>
      ))}
    </div>
  );
}

/* ============== TEAM ============== */
function Team() {
  return (
    <section id="equipo" style={{ padding: "120px 0", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ marginBottom: 64, maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Quiénes somos</div>
          <h2>
            El equipo detrás de<br/>
            <span className="gradient-text">Baires IA Lab.</span>
          </h2>
          <p style={{ marginTop: 24, fontSize: 18 }}>
            Dos especialistas que combinan tecnología, automatización y
            comunicación para construir sistemas que realmente funcionan.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16
        }} className="team-grid">
          <TeamCard
            name="Carolina Bernasconi"
            role="Co-fundadora"
            specialties={["Automatización", "Integraciones", "CRM", "Chatbots"]}
            bio="Especialista en automatización de procesos y sistemas de ventas digitales, con trayectoria en desarrollo de software, testing e integraciones técnicas. No solo diseña estrategias — las implementa. Configura CRMs, construye chatbots y arma flujos de automatización multicanal para que cada consulta se convierta en una oportunidad real."
            initials="CB"
            gradient="linear-gradient(135deg, #007BFF, #7F00FF)"
            image="archivos/Chicasentec-436-2.jpg"
          />
          <TeamCard
            name="Josefina Obejero Paz"
            role="Co-fundadora"
            specialties={["Comunicación", "Contenido IA", "Experiencia", "Marca"]}
            bio="Especialista en comunicación estratégica y experiencia de cliente. Sabe que un sistema automatizado sin la comunicación correcta es solo tecnología — y que la diferencia entre un lead frío y una venta cerrada muchas veces está en el mensaje. Diseña la voz de cada automatización para que suene humana aunque trabaje sola."
            initials="JO"
            gradient="linear-gradient(135deg, #7F00FF, #00d4ff)"
            image="archivos/WhatsApp Image 2026-03-10 at 21.17.25.jpeg"
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function TeamCard({ name, role, specialties, bio, initials, gradient, image }) {
  return (
    <div className="card" style={{
      padding: 36, display: "flex", flexDirection: "column", gap: 24,
      position: "relative", overflow: "hidden"
    }}>
      <div className="trama-dots" style={{
        position: "absolute", inset: 0, opacity: 0.2,
        maskImage: "radial-gradient(circle at 100% 100%, black, transparent 50%)",
        WebkitMaskImage: "radial-gradient(circle at 100% 100%, black, transparent 50%)"
      }}/>
      <div style={{
        display: "flex", alignItems: "center", gap: 20, position: "relative"
      }}>
        <div style={{
          width: 96, height: 96, borderRadius: "50%",
          background: gradient,
          overflow: "hidden",
          flexShrink: 0,
          boxShadow: "0 12px 30px rgba(0,123,255,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          {image ? (
            <img
              src={image}
              alt={name}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top"
              }}
            />
          ) : (
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em" }}>
              {initials}
            </span>
          )}
        </div>
        <div>
          <div style={{
            fontSize: 10, color: "var(--text-3)", letterSpacing: "0.16em",
            textTransform: "uppercase", fontWeight: 700, marginBottom: 6
          }}>
            {role}
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 700 }}>{name}</h3>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, position: "relative" }}>
        {specialties.map((s, i) => (
          <span key={i} style={{
            fontSize: 11, padding: "5px 12px",
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            borderRadius: 999,
            color: "var(--text-2)", fontWeight: 600
          }}>
            {s}
          </span>
        ))}
      </div>

      <p style={{ fontSize: 14.5, lineHeight: 1.65, position: "relative" }}>{bio}</p>
    </div>
  );
}

/* ============== FAQ ============== */
function FAQ() {
  const items = [
    {
      q: "¿Cuánto cuesta implementar una automatización?",
      a: "Depende del alcance. Trabajamos con una inversión inicial de implementación y, según el caso, una tarifa mensual de mantenimiento. Hacemos una reunión diagnóstico sin costo donde te decimos exactamente qué necesitás y cuánto cuesta, sin vueltas. No hay propuesta genérica: todo está pensado para tu negocio."
    },
    {
      q: "¿Cuánto tiempo tarda en implementarse?",
      a: "Un chatbot básico puede estar online en una semana. Un sistema completo de automatización con CRM, seguimiento multicanal y flujos personalizados lleva entre 3 y 4 semanas. Una vez que arranca, el sistema trabaja solo. Empezás a ver resultados desde el primer día de uso."
    },
    {
      q: "¿La IA va a reemplazar a mi equipo?",
      a: "No. La automatización no reemplaza personas: las libera de las tareas repetitivas para que puedan enfocarse en lo que sí requiere criterio humano. El bot filtra, califica y organiza; el humano convierte. Es un equipo, no una sustitución."
    },
    {
      q: "¿Necesito saber de tecnología para usar el sistema?",
      a: "Para nada. Nos encargamos de toda la configuración, integración y puesta en marcha. Cuando te entregamos el sistema hacemos una sesión de onboarding para explicarte cómo usarlo. Tu trabajo es vender y atender; el nuestro es que la tecnología trabaje para vos."
    },
    {
      q: "¿Para qué tipo de negocios funciona?",
      a: "Para negocios que ya están vendiendo pero pierden oportunidades por falta de respuesta rápida, seguimiento inconsistente o procesos manuales. Funciona especialmente bien en servicios, consultoría, educación, salud, real estate, e-commerce y cualquier modelo que involucre conversaciones con clientes."
    },
    {
      q: "¿Mis datos y los de mis clientes están seguros?",
      a: "Sí. Trabajamos con plataformas que cumplen estándares internacionales de seguridad y privacidad. La información de tus clientes no se comparte con terceros ni se usa para entrenar modelos externos. Antes de arrancar te explicamos exactamente qué herramientas usamos, qué datos procesan y cómo están protegidos."
    },
    {
      q: "¿Funciona con las herramientas que ya uso?",
      a: "En la mayoría de los casos, sí. Integramos con WhatsApp, Instagram, email, CRMs y las principales plataformas. Si ya usás alguna herramienta, evaluamos cómo conectarla al nuevo sistema. Si no tenés ninguna, te recomendamos las que mejor se adapten a tu negocio."
    },
    {
      q: "¿Qué pasa si necesito cambios después de implementado?",
      a: "Los negocios cambian y los sistemas también. Ofrecemos soporte y acompañamiento post-implementación para ajustar flujos, incorporar nuevos canales o escalar cuando sea necesario. No te entregamos algo y desaparecemos."
    }
  ];

  const [openIdx, setOpenIdx] = useStateB(0);

  return (
    <section id="faq" style={{ padding: "120px 0", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80
        }} className="faq-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(34px, 4.4vw, 56px)" }}>
              Lo que todos<br/>
              nos <span className="gradient-text">preguntan.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, color: "var(--text-2)" }}>
              Si tu pregunta no está acá, hablemos 15 minutos sin costo.
            </p>
            <a href="#contacto" className="btn btn-gradient" style={{ marginTop: 24 }}>
              Agendar llamada
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div>
            {items.map((it, i) => (
              <FAQItem
                key={i} {...it}
                open={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

function FAQItem({ q, a, open, onClick }) {
  return (
    <div style={{
      borderBottom: "1px solid var(--line)",
      transition: "background 0.2s"
    }}>
      <button onClick={onClick} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 4px",
        background: "transparent", border: "none", color: "var(--text)",
        textAlign: "left",
        fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em",
        fontFamily: "var(--font-sans)"
      }}>
        <span style={{ flex: 1, paddingRight: 16 }}>{q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: "50%",
          background: open ? "var(--accent-grad)" : "var(--surface)",
          border: "1px solid var(--line-2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.25s"
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.25s",
            color: open ? "#fff" : "var(--text-2)"
          }}>
            <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: "hidden",
        transition: "max-height 0.35s ease, padding 0.35s ease",
        paddingBottom: open ? 24 : 0
      }}>
        <p style={{ fontSize: 15, lineHeight: 1.65, maxWidth: 640, paddingRight: 48 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

/* ============== CTA + FOOTER ============== */
function CTAFooter() {
  return (
    <>
      <section id="contacto" style={{
        padding: "140px 0", borderTop: "1px solid var(--line)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `
            radial-gradient(50% 60% at 20% 30%, rgba(0,123,255,0.18), transparent 60%),
            radial-gradient(50% 60% at 80% 70%, rgba(127,0,255,0.18), transparent 60%)
          `,
          pointerEvents: "none"
        }}/>
        <div className="trama-grid" style={{
          position: "absolute", inset: 0, opacity: 0.3,
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 70%)"
        }}/>
        <div className="wrap" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            maxWidth: 1100, margin: "0 auto"
          }}>
            Cada semana sin sistema<br/>
            es una semana de ventas<br/>
            que <span className="gradient-text">no volvés a recuperar.</span>
          </h2>
          <p style={{
            marginTop: 32, fontSize: 19,
            maxWidth: 640, margin: "32px auto 0", color: "var(--text-2)"
          }}>
            Hablemos 15 minutos y te decimos exactamente qué se puede automatizar
            en tu negocio — sin costo, sin compromiso.
          </p>
          <div style={{
            marginTop: 48, display: "flex", gap: 12,
            justifyContent: "center", flexWrap: "wrap"
          }}>
            <a href="https://link.bairesialab.com/widget/bookings/baires-ia-lab"
               target="_blank" rel="noreferrer"
               className="btn btn-gradient" style={{ padding: "18px 32px", fontSize: 16 }}>
              Reservar mi lugar
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://wa.me/5491168041842"
               target="_blank" rel="noreferrer"
               className="btn btn-ghost" style={{ padding: "18px 28px", fontSize: 16 }}>
              WhatsApp
            </a>
          </div>

          <div style={{
            marginTop: 40, display: "flex", gap: 32,
            justifyContent: "center", flexWrap: "wrap",
            fontSize: 13, color: "var(--text-3)", fontWeight: 500
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Check /> Sin compromiso
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Check /> Diagnóstico gratuito
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Check /> Sin contratos largos
            </span>
          </div>

          {/* Form Section */}
          <div style={{ marginTop: 56, maxWidth: 680, margin: "56px auto 0" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16, marginBottom: 24
            }}>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
              <span style={{
                fontSize: 11, color: "var(--text-3)", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase", whiteSpace: "nowrap"
              }}>o si preferís escribir primero</span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
            </div>
            <p style={{ fontSize: 14, color: "var(--text-3)", marginBottom: 24 }}>
              Completá el formulario y te respondemos en menos de 24hs hábiles.
            </p>
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid var(--line)",
              background: "rgba(255,255,255,0.02)"
            }}>
              <iframe
                src="https://link.bairesialab.com/widget/survey/pY8fYleT2dYnMuE1zZO8"
                style={{ border: "none", width: "100%", minHeight: 500, display: "block" }}
                scrolling="no"
                id="pY8fYleT2dYnMuE1zZO8"
                title="Formulario de contacto"
              />
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        padding: "48px 0",
        borderTop: "1px solid var(--line)",
        background: "var(--bg-2)"
      }}>
        <div className="wrap" style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
              width: 28, height: 28, borderRadius: 7,
              background: "var(--accent-grad)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 13
            }}>B</span>
            <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Baires IA Lab
            </span>
          </div>
          <div style={{
            display: "flex", gap: 28, fontSize: 13,
            color: "var(--text-3)", fontWeight: 500
          }}>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#equipo">Equipo</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div style={{ fontSize: 12, color: "var(--text-3)" }}>
            © 2026 Baires IA Lab · Buenos Aires
          </div>
        </div>
      </footer>
    </>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.4" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <path d="M4 7L6 9L10 5" stroke="url(#chkG)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="chkG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#007BFF"/>
          <stop offset="100%" stopColor="#7F00FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

window.BottomComponents = { ProcessSection, Testimonials, Team, FAQ, CTAFooter };
