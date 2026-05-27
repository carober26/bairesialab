/* global React, ReactDOM */
function App() {
  const { Nav, Hero } = window.HeroComponents;
  const { Problem, ChaosToOrder, Services, Integrations } = window.MidComponents;
  const { ProcessSection, Testimonials, Team, FAQ, CTAFooter } = window.BottomComponents;

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "theme": "dark",
    "accent": "blue"
  }/*EDITMODE-END*/;

  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
    document.documentElement.setAttribute("data-accent", t.accent);
  }, [t.theme, t.accent]);

  const { TweaksPanel, TweakSection, TweakRadio } = window;

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <ChaosToOrder />
        <Services />
        <Integrations />
        <ProcessSection />
        <Testimonials />
        <Team />
        <FAQ />
        <CTAFooter />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Tema" />
        <TweakRadio
          label="Modo"
          value={t.theme}
          options={["dark", "light"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakSection label="Acento" />
        <TweakRadio
          label="Color"
          value={t.accent}
          options={["blue", "violet", "cyan"]}
          onChange={(v) => setTweak("accent", v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
