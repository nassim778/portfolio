import { useEffect, useRef } from "react";
import { profile, projects } from "./data/profile";

function useReveal() {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>(".work-item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 60}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return ref;
}

export default function App() {
  const workRef = useReveal();

  return (
    <div className="site">
      <header className="wrap">
        <nav className="nav" aria-label="Primary">
          <a className="nav-mark" href="#top">
            Nacim<span> Rached</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#stack">Stack</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap" aria-label="Introduction">
          <div className="hero-stage">
            <div className="hero-copy">
              <h1 className="hero-brand">
                <span className="line">
                  <span className="inner">Nacim</span>
                </span>
                <span className="line">
                  <span className="inner">Rached</span>
                </span>
              </h1>
              <p className="hero-role">{profile.tagline}</p>
              <div className="hero-ctas">
                <a className="btn" href="#work">
                  See selected work
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <img
                className="hero-photo"
                src={profile.avatar}
                alt={profile.name}
                width={640}
                height={640}
              />
              <div className="hero-badge">{profile.title}</div>
            </div>
          </div>
          <div className="hero-rule" aria-hidden="true" />
        </section>

        <section className="section wrap" id="about" aria-labelledby="about-title">
          <div className="section-head">
            <p className="section-kicker">01 — About</p>
            <p className="section-lede">
              Practical builds over demos — apps people can click, install, or ship.
            </p>
            <h2 className="section-title" id="about-title">
              Code that ships.
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m {profile.name}, a full-stack and mobile developer with a{" "}
                {profile.degree}. I work across React and React Native, TypeScript
                frontends, Node tooling, and PHP / Laravel backends — plus data layers
                on MongoDB and PostgreSQL.
              </p>
              <p>
                Recent work spans map-first platforms, fleet ops dashboards, camping
                reservations, remote desktop, and freelance commerce. I care about clear
                interfaces that are useful the first time you open them.
              </p>
            </div>

            <dl className="about-meta">
              <div className="meta-item">
                <dt>Degree</dt>
                <dd>{profile.degree}</dd>
              </div>
              <div className="meta-item">
                <dt>Focus</dt>
                <dd>Full-stack &amp; mobile</dd>
              </div>
              <div className="meta-item">
                <dt>Based</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className="meta-item">
                <dt>WhatsApp</dt>
                <dd>
                  <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
                    {profile.whatsappDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section wrap" id="stack" aria-labelledby="stack-title">
          <div className="section-head">
            <p className="section-kicker">02 — Stack</p>
            <h2 className="section-title" id="stack-title">
              Tools in daily rotation
            </h2>
          </div>
          <ul className="stack-list">
            {profile.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section wrap" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <p className="section-kicker">03 — Work</p>
            <p className="section-lede">
              Selected product, freelance, and personal builds.
            </p>
            <h2 className="section-title" id="work-title">
              Things I&apos;ve built
            </h2>
          </div>

          <ul className="work-list" ref={workRef}>
            {projects.map((project) => (
              <li className="work-item" key={project.id}>
                <div className="work-main">
                  <h3>{project.name}</h3>
                  <span className="work-kind">{project.kind}</span>
                  <p className="work-blurb">{project.blurb}</p>
                  <ul className="work-tags">
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                {project.live || project.download || project.tryCommand ? (
                  <div className="work-links">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live ↗
                      </a>
                    ) : null}
                    {project.download ? (
                      <a href={project.download} target="_blank" rel="noreferrer">
                        Download APK ↗
                      </a>
                    ) : null}
                    {project.tryCommand ? (
                      <code className="work-try" title="Run in your terminal">
                        {project.tryCommand}
                      </code>
                    ) : null}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="section wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-block">
            <div>
              <h2 id="contact-title">Let&apos;s build something solid.</h2>
              <p>
                Open to freelance, product work, and interesting tooling. Message me on
                WhatsApp — {profile.whatsappDisplay}.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="btn"
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
              <a
                className="btn btn-ghost btn-call"
                href={`tel:${profile.whatsapp}`}
              >
                <span className="btn-call-full">Call {profile.whatsappDisplay}</span>
                <span className="btn-call-short">Call me</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp {profile.whatsappDisplay}
        </a>
      </footer>
    </div>
  );
}
