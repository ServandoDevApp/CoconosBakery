/* ============================================================
   Coconos Bakery — app principal
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   👇  BANNER DE PROMOS / PAN DE TEMPORADA
   Cambia a  false  para ESCONDER el banner, o a  true  para MOSTRARLO.
   ────────────────────────────────────────────────────────── */
const SHOW_BANNER = true;
/* ────────────────────────────────────────────────────────── */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direccion": "mantequilla",
  "idioma": "es",
  "banner": true,
  "acento": ["#c08348", "#8a5a32"]
}/*EDITMODE-END*/;

const ACCENTS = {
  "#c08348": { a: "oklch(0.625 0.108 55)", a2: "oklch(0.50 0.095 45)", ai: "oklch(0.36 0.07 50)" }, // caramelo
  "#b85c3c": { a: "oklch(0.575 0.13 48)",  a2: "oklch(0.44 0.10 40)",  ai: "oklch(0.33 0.08 45)" }, // terracota
  "#9c6b4a": { a: "oklch(0.585 0.075 60)", a2: "oklch(0.46 0.06 52)",  ai: "oklch(0.38 0.05 55)" }, // cacao con leche
  "#7a8b5a": { a: "oklch(0.60 0.06 130)",  a2: "oklch(0.47 0.05 130)", ai: "oklch(0.40 0.045 130)"}, // pistache
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = React.useState(t.idioma || "es");
  const [bannerDismissed, setBannerDismissed] = React.useState(false);

  // idioma <-> tweak en ambos sentidos
  React.useEffect(() => { if (t.idioma && t.idioma !== lang) setLangState(t.idioma); }, [t.idioma]);
  const setLang = (l) => { setLangState(l); setTweak("idioma", l); };

  // aplicar dirección visual
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.direccion || "mantequilla");
  }, [t.direccion]);

  // aplicar acento
  React.useEffect(() => {
    const key = Array.isArray(t.acento) ? t.acento[0] : t.acento;
    const c = ACCENTS[key];
    const root = document.documentElement.style;
    if (c) { root.setProperty("--accent", c.a); root.setProperty("--accent-2", c.a2); root.setProperty("--accent-ink", c.ai); }
    else { root.removeProperty("--accent"); root.removeProperty("--accent-2"); root.removeProperty("--accent-ink"); }
  }, [t.acento]);

  useReveal();

  const strings = window.I18N[lang];
  const bannerOn = SHOW_BANNER && t.banner && !bannerDismissed;

  return (
    <React.Fragment>
      <PromoBanner t={strings} show={bannerOn} onClose={() => setBannerDismissed(true)} />
      <Nav t={strings} lang={lang} setLang={setLang} />
      <main>
        <Hero t={strings} />
        <Strip t={strings} />
        <Menu t={strings} lang={lang} />
        <About t={strings} />
        <Gallery t={strings} />
        <Locations t={strings} lang={lang} />
        <Wholesale t={strings} />
      </main>
      <Footer t={strings} lang={lang} />

      <TweaksPanel>
        <TweakSection label={lang === "es" ? "Dirección visual" : "Visual direction"} />
        <TweakRadio
          label={lang === "es" ? "Estilo" : "Style"}
          value={t.direccion}
          options={["mantequilla", "cacao", "lino"]}
          onChange={(v) => setTweak("direccion", v)}
        />
        <TweakColor
          label={lang === "es" ? "Acento" : "Accent"}
          value={t.acento}
          options={[["#c08348", "#8a5a32"], ["#b85c3c", "#7a4329"], ["#9c6b4a", "#6f4a32"], ["#7a8b5a", "#566440"]]}
          onChange={(v) => setTweak("acento", v)}
        />
        <TweakSection label={lang === "es" ? "Contenido" : "Content"} />
        <TweakRadio
          label={lang === "es" ? "Idioma" : "Language"}
          value={lang}
          options={["es", "en"]}
          onChange={(v) => setLang(v)}
        />
        <TweakToggle
          label={lang === "es" ? "Banner de temporada" : "Season banner"}
          value={t.banner}
          onChange={(v) => setTweak("banner", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
