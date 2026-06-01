/* ============================================================
   Coconos Bakery — componentes de sección (React, JSX)
   ============================================================ */
const { useState, useEffect, useRef } = React;

// Slot de imagen — muestra img real si tiene src, si no el web component drag-drop
function Slot({ id, src, shape, radius, placeholder, style, className }) {
  const r = radius != null ? String(radius) : "14";
  if (src) {
    const borderRadius = shape === "circle" ? "50%" : r + "px";
    return (
      <div className={"slot-wrap" + (className ? " " + className : "")} style={{ borderRadius, overflow: "hidden", ...style }}>
        <img src={src} alt={placeholder} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  return React.createElement("image-slot", {
    id: id,
    shape: shape || "rounded",
    radius: r,
    placeholder: placeholder || "Arrastra una foto",
    style: style,
    class: "slot-wrap" + (className ? " " + className : ""),
  });
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------------- Promo banner ---------------- */
function PromoBanner({ t, show, onClose }) {
  if (!show) return null;
  return (
    <div className="promo">
      <div className="promo-inner">
        <span className="tag">{t.promo.tag}</span>
        <span><strong>{t.promo.text}</strong></span>
        <a href="#menu">{t.promo.cta} →</a>
        <button className="promo-close" onClick={onClose} aria-label="cerrar">✕</button>
      </div>
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner">
        <a className="brand" href="#top">
          <Slot id="logo" shape="circle" placeholder="Logo" radius={999} />
          <span className="brand-type">
            <span className="brand-name">Coconos</span>
            <span className="brand-sub">Bakery</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#menu">{t.nav.menu}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#locations">{t.nav.locations}</a>
          <a href="#wholesale">{t.nav.wholesale}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="idioma">
            <button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a className="btn btn-primary nav-cta" href="#wholesale">{t.nav.order}</a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ t }) {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title1}<span className="accent">{t.hero.title2}</span></h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#menu">{t.hero.ctaPrimary}</a>
            <a className="btn btn-ghost" href="#wholesale">{t.hero.ctaGhost}</a>
          </div>
          <div className="hero-meta">
            {t.hero.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-art">
          <Slot id="hero" src="banner.png" radius={22} placeholder="Foto principal — vitrina o producto estrella" />
          <div className="badge">
            <span className="seal">✸</span>
            <span className="seal-txt">
              <b>{t.hero.badgeTitle}</b>
              <span>{t.hero.badgeSub}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Marquee strip ---------------- */
function Strip({ t }) {
  const items = [...t.strip, ...t.strip];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        <span>{items.map((w, i) => <React.Fragment key={i}>{w}</React.Fragment>)}</span>
        <span>{items.map((w, i) => <React.Fragment key={"b" + i}>{w}</React.Fragment>)}</span>
      </div>
    </div>
  );
}

/* ---------------- Menu ---------------- */
function Menu({ t, lang }) {
  const cats = window.MENU;
  const [active, setActive] = useState("all");
  const shown = active === "all" ? cats : cats.filter((c) => c.id === active);
  return (
    <section className="section wrap" id="menu">
      <div className="section-head center reveal">
        <span className="eyebrow">{t.menu.eyebrow}</span>
        <h2>{t.menu.title}</h2>
        <p>{t.menu.sub}</p>
      </div>
      <div className="menu-cats">
        <button className={"cat-pill" + (active === "all" ? " active" : "")} onClick={() => setActive("all")}>{t.menu.all}</button>
        {cats.map((c) => (
          <button key={c.id} className={"cat-pill" + (active === c.id ? " active" : "")} onClick={() => setActive(c.id)}>
            {c[lang].name}
          </button>
        ))}
      </div>
      {shown.map((c) => (
        <div className="cat-block" key={c.id} id={"cat-" + c.id}>
          <div className="cat-title">
            <span className="eyebrow">{c[lang].note}</span>
            <h3>{c[lang].name}</h3>
            <span className="count">{t.menu.count(c.items.length)}</span>
          </div>
          <div className="grid-products">
            {c.items.map((it) => (
              <article className="product" key={it.id}>
                <Slot id={"p-" + it.id} src={it.img} radius={14} placeholder={lang === "es" ? it.name : it.en} />
                <div className="product-row">
                  <h4>{lang === "es" ? it.name : it.en}</h4>
                  {it.star && <span className="tag">★</span>}
                </div>
                {it.star && <span className="star">✦ {t.menu.fav}</span>}
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ---------------- About ---------------- */
function About({ t }) {
  return (
    <section className="section wrap" id="about">
      <div className="about-grid">
        <div className="about-art reveal">
          <Slot id="about-1" radius={18} placeholder="Manos amasando" />
          <Slot id="about-2" radius={18} placeholder="Horno" />
          <Slot id="about-3" radius={18} placeholder="Detalle" />
        </div>
        <div className="about-copy reveal">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="about-sign">{t.about.sign}</div>
          <div className="values">
            {t.about.values.map((v, i) => (
              <div className="value" key={i}>
                <div className="vt">{v.t}</div>
                <div className="vd">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery({ t }) {
  const layout = ["tall", "wide", "tall", "", "", "", "wide", ""];
  return (
    <section className="section section-tight wrap" id="gallery">
      <div className="section-head center reveal">
        <span className="eyebrow">{t.gallery.eyebrow}</span>
        <h2>{t.gallery.title}</h2>
        <p>{t.gallery.sub}</p>
      </div>
      <div className="gallery-grid reveal">
        {layout.map((cls, i) => (
          <Slot key={i} id={"gal-" + i} className={cls} radius={14} placeholder="Foto" />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Locations ---------------- */
function Locations({ t, lang }) {
  const locs = window.LOCATIONS;
  return (
    <section className="section section-tight wrap" id="locations">
      <div className="section-head center reveal">
        <span className="eyebrow">{t.locations.eyebrow}</span>
        <h2>{t.locations.title}</h2>
        <p>{t.locations.sub}</p>
      </div>
      <div className="loc-grid">
        {locs.map((l) => (
          <article className="loc-card reveal" key={l.id}>
            <Slot id={"loc-" + l.id} radius={16} placeholder={t.locations.photoPh} />
            <div className="loc-body">
              <span className="loc-pin">◆ {l.area[lang]}</span>
              <h3>{l.name}</h3>
              <div className="loc-hours">
                <span className="loc-hours-label">{t.locations.hoursLabel}</span>
                <span>{t.locations.hours}</span>
              </div>
              <a className="btn btn-ghost" href={l.map} target="_blank" rel="noopener">
                {t.locations.directions} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Wholesale + form ---------------- */
function Wholesale({ t }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    const base = "https://docs.google.com/forms/d/e/1FAIpQLSc2kYIWd9Wp9rMYk-pato8DYF1L1fC0EYdxwD5koKk4N1KtfA/viewform";
    const params = new URLSearchParams({
      "entry.1371906752": name,
      "entry.329552569": phone,
      "entry.366505263": subject,
    });
    window.open(base + "?" + params.toString(), "_blank", "noopener");
  };
  return (
    <section className="section wholesale" id="wholesale">
      <div className="wrap wholesale-grid">
        <div className="reveal">
          <span className="eyebrow">{t.wholesale.eyebrow}</span>
          <div className="kicker" style={{ margin: "10px 0 14px" }}>{t.wholesale.kicker}</div>
          <h2>{t.wholesale.title}</h2>
          <p className="lead">{t.wholesale.lead}</p>
          <ul className="wholesale-points">
            {t.wholesale.points.map((p, i) => (
              <li key={i}><span className="dot">✦</span><span>{p}</span></li>
            ))}
          </ul>
        </div>
        <div className="form-card reveal" id="contact">
          <h3>{t.wholesale.formTitle}</h3>
          <p className="sub">{t.wholesale.formSub}</p>
          <form onSubmit={submit}>
            <div className="field">
              <label>{t.wholesale.fName}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.wholesale.fNamePh} required />
            </div>
            <div className="field">
              <label>{t.wholesale.fPhone}</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.wholesale.fPhonePh} required />
            </div>
            <div className="field">
              <label>{t.wholesale.fSubject}</label>
              <textarea value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={t.wholesale.fSubjectPh} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{t.wholesale.submit} →</button>
            <p className="form-note">{t.wholesale.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Icon({ name }) {
  const paths = {
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></>,
    facebook: <path d="M14.5 8.2h2V5.4h-2.4c-2 0-3.3 1.3-3.3 3.4v1.7H8.6V13h2.2v6h2.8v-6h2.2l.4-2.5h-2.6V9c0-.6.3-.8.9-.8z" fill="currentColor"/>,
    tiktok: <path d="M14 4c.3 2 1.6 3.4 3.6 3.6v2.5c-1.2 0-2.4-.4-3.5-1.1v5.4c0 2.7-2.2 4.6-4.7 4.4-2.2-.1-3.9-2-3.8-4.2.1-2.2 2-3.9 4.2-3.8.2 0 .4 0 .6.1v2.6c-.2-.1-.4-.1-.6-.1-1 0-1.8.8-1.8 1.7 0 1 .8 1.7 1.8 1.7s1.8-.8 1.8-1.8V4H14z" fill="currentColor"/>,
  };
  return <svg viewBox="0 0 24 24">{paths[name]}</svg>;
}

function Footer({ t, lang }) {
  const s = window.SOCIALS;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="brand-name" style={{ fontFamily: "var(--font-script)" }}>Coconos</span>
            <p className="footer-blurb">{t.footer.blurb}</p>
            <div className="socials">
              <a href={s.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href={s.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><Icon name="tiktok" /></a>
              <a href={s.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Icon name="facebook" /></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>{t.footer.explore}</h5>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#wholesale">{t.nav.wholesale}</a>
          </div>
          <div className="footer-col">
            <h5>{t.footer.visit}</h5>
            {window.LOCATIONS.map((l) => (
              <a href={l.map} target="_blank" rel="noopener" key={l.id} style={{ marginBottom: 12 }}>
                {l.name}<br /><span style={{ color: "oklch(0.74 0.015 75)", fontSize: "0.85rem" }}>{l.area[lang]}</span>
              </a>
            ))}
            <p style={{ marginTop: 6 }}>{t.footer.hours}</p>
          </div>
          <div className="footer-col">
            <h5>{t.footer.orderTitle}</h5>
            <p className="footer-blurb" style={{ marginTop: 0 }}>{t.footer.orderText}</p>
            <a href={s.instagram} target="_blank" rel="noopener" style={{ color: "var(--accent)", fontWeight: 600 }}>@coconosbakery →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Coconos Bakery. {t.footer.rights}</span>
          <span style={{ fontFamily: "var(--font-script)", fontSize: "1.1rem", color: "var(--accent)" }}>{t.footer.made}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Slot, useReveal, PromoBanner, Nav, Hero, Strip, Menu, About, Gallery, Locations, Wholesale, Footer });
