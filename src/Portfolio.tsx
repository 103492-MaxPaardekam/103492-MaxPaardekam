import { useEffect, useState, type ComponentType } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "./portfolio.css";

/*
THESIS: Projects are inspectable proof, not decoration. The page refuses the centered developer hero and equal-card portfolio grid.
OWN-WORLD: Cool paper, green-black ink, one acid-lime signal, oversized grotesk type, and small-radius working surfaces.
STORY: Meet Max, inspect four real builds, understand his stack, and make direct contact.
FIRST VIEWPORT: Name and statement occupy the left; the latest project proof is cropped on the right; contact and work actions remain visible.
FORM: An editorial workbench with asymmetric proofs, one technical marquee, and scroll reveals that clarify reading order.
*/

type Theme = "light" | "dark";

type Project = {
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  repo: string;
  stack: string[];
  className: string;
};

const projects: Project[] = [
  {
    title: "MAKE-A-THON",
    kicker: "Crisis Signal - cross-platform prototype",
    description:
      "A crisis-information prototype pairing a Mapbox risk map with source-aware signals, safe-location actions, demo updates, and a Node.js API.",
    image: "/projects/makeathon.jpg",
    imageAlt:
      "Crisis Signal interface showing operational status, safety controls, and a dark Mapbox view of Eastern Europe",
    repo: "https://github.com/103492-MaxPaardekam/MAKE-A-THON",
    stack: [
      "React Native",
      "Expo",
      "Mapbox GL",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    className: "project project--lead",
  },
  {
    title: "Red Dead Redemption II",
    kicker: "Bilingual single-page museum exhibit",
    description:
      "A Dutch and English game exhibit with tab navigation, character modals, a landscape gallery, embedded media, and swipe navigation on mobile.",
    image: "/projects/rdr2.jpg",
    imageAlt:
      "Red Dead Redemption II museum exhibit with bilingual controls, tab navigation, and story content",
    repo: "https://github.com/103492-MaxPaardekam/red-dead-redemption-ii-website",
    stack: ["HTML5", "CSS Grid", "JavaScript", "Responsive UI"],
    className: "project project--wide",
  },
  {
    title: "Museum De Pixel",
    kicker: "Collaborative client assignment",
    description:
      "A two-author digital games museum with a split-screen home and About page. Max led the visual design and built the Red Dead Redemption II section.",
    image: "/projects/museum.jpg",
    imageAlt:
      "Museum De Pixel home page split between Counter-Strike and Red Dead Redemption II exhibits",
    repo: "https://github.com/103492-MaxPaardekam/website-museum-de-pixel",
    stack: ["HTML5", "CSS", "JavaScript", "Team project"],
    className: "project project--compact",
  },
  {
    title: "Simple Calculator",
    kicker: "Focused vanilla JavaScript exercise",
    description:
      "A compact calculator with a CSS Grid keypad, basic arithmetic, clear behavior, and direct DOM event handling.",
    image: "/projects/calculator.jpg",
    imageAlt:
      "Dark calculator interface with a large display and color-coded number, operator, clear, and equals keys",
    repo: "https://github.com/103492-MaxPaardekam/simple-calculator",
    stack: ["HTML5", "CSS Grid", "JavaScript"],
    className: "project project--calculator",
  },
];

const stack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "SQLite",
  "Node.js",
];

const socialLinks: Array<{
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}> = [
  {
    label: "Email",
    value: "max@paardekam.nl",
    href: "mailto:max@paardekam.nl",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "103492-MaxPaardekam",
    href: "https://github.com/103492-MaxPaardekam",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "Max Paardekam",
    href: "https://www.linkedin.com/in/max-paardekam-045674383",
    icon: BriefcaseBusiness,
  },
  {
    label: "Hashnode",
    value: "@maxpaardekam",
    href: "https://hashnode.com/@maxpaardekam",
    icon: Braces,
  },
  {
    label: "dev.to",
    value: "/maxpaardekam",
    href: "https://dev.to/maxpaardekam",
    icon: Code2,
  },
];

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem("max-portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function Portfolio() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.22], ["0%", "12%"]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("max-portfolio-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#101813" : "#f2f4f5");
  }, [theme]);

  return (
    <div className="site-shell min-h-dvh overflow-clip">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="hero" id="top">
        <nav className="site-nav" aria-label="Primary navigation">
          <a
            className="wordmark"
            href="#top"
            aria-label="Max Paardekam, back to top"
          >
            MP<span>/26</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <button
              className="icon-button"
              type="button"
              onClick={() =>
                setTheme((current) => (current === "light" ? "dark" : "light"))
              }
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="role-line">
              Owner @ Nuxio <span>&amp;</span> Software Development student @
              Grafisch Lyceum Rotterdam
            </p>
            <h1>
              Max
              <br />
              <span>Paardekam</span>
            </h1>
            <p className="hero-statement">
              Interfaces with a point of view. Systems with a backbone.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                View work <ArrowDown size={17} strokeWidth={2} />
              </a>
              <a className="text-link" href="mailto:max@paardekam.nl">
                Email me <ArrowUpRight size={17} strokeWidth={2} />
              </a>
            </div>
          </motion.div>

          <motion.figure
            className="hero-proof"
            style={reduceMotion ? undefined : { y: heroImageY }}
            initial={reduceMotion ? false : { opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              src="/projects/makeathon.jpg"
              alt="Crisis Signal safety map interface from the MAKE-A-THON project"
              fetchPriority="high"
            />
            <figcaption>
              <span>Current build</span>
              MAKE-A-THON / Crisis Signal
            </figcaption>
          </motion.figure>
        </div>
      </header>

      <section className="stack-strip" aria-label="Technology stack">
        <div className="stack-track">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`} aria-hidden={index >= stack.length}>
              {item} <i aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      <main>
        <section className="work-section" id="work">
          <motion.div
            className="section-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-kicker">Selected work</p>
            <h2>Built to be opened.</h2>
            <p>
              Four projects across product prototyping, themed experiences,
              collaboration, and front-end fundamentals. Every repository is
              public.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className={project.className}
                key={project.title}
                initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : (index % 2) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  className="project-media"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} repository on GitHub`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                  <span className="project-open" aria-hidden="true">
                    <ArrowUpRight size={22} strokeWidth={2} />
                  </span>
                </a>
                <div className="project-info">
                  <div>
                    <p className="project-kicker">{project.kicker}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-copy">
                    <p>{project.description}</p>
                    <ul
                      className="tags"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a
                      className="repo-link"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View repository <GitBranch size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <motion.div
            className="contact-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>Have a role, project, or good technical problem?</p>
            <h2>Let&apos;s make it concrete.</h2>
            <a className="contact-email" href="mailto:max@paardekam.nl">
              max@paardekam.nl <ArrowUpRight aria-hidden="true" />
            </a>
          </motion.div>

          <div className="contact-links">
            {socialLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{label}</span>
                <strong>{value}</strong>
                <ArrowUpRight
                  className="contact-arrow"
                  size={18}
                  strokeWidth={2}
                />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>Max Paardekam / Rotterdam, NL</span>
        <a href="#top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}

export default Portfolio;
