import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

const companyStats = [
  { value: "17+", label: "Years designing and delivering residential and mixed-use spaces" },
  { value: "240", label: "Completed villas, apartments, offices, and renovation projects" },
  { value: "24", label: "Active construction sites under project-managed delivery" },
  { value: "93%", label: "Clients arriving through referrals and repeat partnerships" },
];

const services = [
  {
    title: "House Construction",
    blurb:
      "Turnkey structural delivery for villas, townhouses, duplex homes, and premium residential communities.",
    bullets: ["Site planning", "Civil execution", "Quality supervision"],
  },
  {
    title: "Interior Design",
    blurb:
      "Warm, material-rich interiors shaped around storage efficiency, natural light, and daily comfort.",
    bullets: ["Modular detailing", "Custom finishes", "Furniture coordination"],
  },
  {
    title: "Architecture",
    blurb:
      "Concept-to-sanction architecture with facade studies, circulation planning, and build-ready documentation.",
    bullets: ["Master planning", "3D visualisation", "Drawing packages"],
  },
  {
    title: "Renovation",
    blurb:
      "Targeted structural upgrades and full property renewal programs that modernise existing spaces with minimal waste.",
    bullets: ["Retrofit design", "Facade renewal", "Interior remodelling"],
  },
];

const completedProjects = [
  {
    name: "Horizon Crest Residences",
    location: "Whitefield, Bengaluru",
    summary:
      "A gated villa cluster balancing landscaped courtyards, high skylights, and low-maintenance stone finishes.",
    image: "/project-horizon.svg",
    stat: "82,000 sq ft delivered",
  },
  {
    name: "Luma Business Atrium",
    location: "Koramangala, Bengaluru",
    summary:
      "A commercial workspace with daylight-driven floorplates, acoustic meeting zones, and a hospitality-led lobby.",
    image: "/project-luma.svg",
    stat: "11-floor office retrofit",
  },
  {
    name: "Renova Heritage House",
    location: "Mysuru, Karnataka",
    summary:
      "A heritage renovation combining preserved frontage, upgraded services, and contemporary family interiors.",
    image: "/project-renova.svg",
    stat: "14-month restoration",
  },
];

const ongoingProjects = [
  {
    phase: "In Construction",
    title: "Cedar Peak Apartments",
    text:
      "Mid-rise residences with stepped balconies, rooftop amenities, and a fast-tracked MEP execution package.",
    meta: "Target handover: December 2026",
  },
  {
    phase: "Interior Fit-Out",
    title: "Northline Signature Villas",
    text:
      "Luxury home interiors featuring walnut finishes, concealed lighting, and integrated smart-home control.",
    meta: "52 villas under phased delivery",
  },
  {
    phase: "Design Development",
    title: "Axis Healthcare Block",
    text:
      "A specialty outpatient building focused on efficient patient movement, sterile zoning, and energy-conscious materials.",
    meta: "Approvals and cost planning in progress",
  },
];

const quotationHighlights = [
  "Transparent structural, finishing, and MEP cost planning.",
  "Design-led recommendations for budget, timeline, and materials.",
  "A response from the team within one business day.",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#home">
          <span className={styles.brandMark} aria-hidden="true" />
          <span>
            <strong>Aurum Buildworks</strong>
            <small>Construction, Architecture & Interiors</small>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#company">Company</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#quote">Quotation</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className={styles.headerAction} href="#quote">
          Request Estimate
        </a>
      </header>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`} id="home">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Built for modern living and lasting value</p>
            <h1 className={styles.heroTitle}>
              Elegant spaces crafted by a building company that knows how to
              design, deliver, and detail.
            </h1>
            <p className={styles.heroText}>
              Aurum Buildworks creates homes, commercial spaces, and
              renovations that feel premium from the first sketch to the final
              handover. We combine architecture, construction, and interior
              execution under one team.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#projects">
                Explore Projects
              </a>
              <a className={styles.secondaryAction} href="#contact">
                Talk to the Team
              </a>
            </div>

            <div className={styles.heroStats}>
              {companyStats.slice(0, 3).map((item) => (
                <article className={styles.heroStatCard} key={item.label}>
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.heroPanelHeader}>
              <p>Featured project snapshot</p>
              <span>Luxury residential campus</span>
            </div>
            <div className={styles.heroPanelImage}>
              <Image
                src="/hero-structure.svg"
                alt="Illustration of an elegant residential construction project"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div className={styles.heroPanelFooter}>
              <div>
                <strong>Stone, light, and calm lines</strong>
                <p>
                  Contemporary forms, structured schedules, and premium
                  finishing standards from one integrated team.
                </p>
              </div>
              <ul className={styles.heroPanelList}>
                <li>Architecture + execution</li>
                <li>Interior detailing</li>
                <li>Quality-led site supervision</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.companySection}`} id="company">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Company Information</p>
            <h2 className={styles.sectionTitle}>About the building company</h2>
            <p className={styles.sectionText}>
              We manage the full building lifecycle with a detail-oriented
              approach, from concept design and approvals through execution,
              interiors, and after-handover support.
            </p>
          </div>

          <div className={styles.companyGrid}>
            <article className={styles.storyCard}>
              <h3>Experience and services under one roof</h3>
              <p>
                Aurum Buildworks was shaped for clients who want fewer handoff
                points and better control over design quality, cost, and time.
                The studio brings architects, project managers, interior
                specialists, and site engineers together so each decision keeps
                the final build in focus.
              </p>
              <p>
                Our work spans custom homes, apartment developments, commercial
                spaces, office upgrades, and renovation-led transformation
                projects across Karnataka.
              </p>
            </article>

            <div className={styles.statsGrid}>
              {companyStats.map((item) => (
                <article className={styles.statCard} key={item.label}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="services">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Services Section</p>
            <h2 className={styles.sectionTitle}>What we deliver</h2>
            <p className={styles.sectionText}>
              Every service is built around clear planning, elegant material
              choices, and disciplined on-site execution.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceIcon} aria-hidden="true">
                  <span />
                </div>
                <h3>{service.title}</h3>
                <p>{service.blurb}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Project Gallery</p>
            <h2 className={styles.sectionTitle}>Completed buildings and active sites</h2>
            <p className={styles.sectionText}>
              A sample of completed buildings, interiors, and ongoing projects
              currently moving through construction and fit-out.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {completedProjects.map((project) => (
              <article className={styles.projectCard} key={project.name}>
                <div className={styles.projectImageWrap}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectMeta}>
                    <span>Completed</span>
                    <p>{project.location}</p>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <strong>{project.stat}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.ongoingGrid}>
            {ongoingProjects.map((project) => (
              <article className={styles.ongoingCard} key={project.title}>
                <span>{project.phase}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <strong>{project.meta}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.quoteSection}`} id="quote">
          <div className={styles.quoteCopy}>
            <p className={styles.eyebrow}>Quotation Request</p>
            <h2 className={styles.sectionTitle}>Request a building cost estimate</h2>
            <p className={styles.sectionText}>
              Share your project basics and our team will respond with an
              initial cost view, planning guidance, and the recommended next
              step for design or execution.
            </p>
            <ul className={styles.highlightList}>
              {quotationHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <QuoteForm />
        </section>

        <section className={`${styles.section} ${styles.contactSection}`} id="contact">
          <div className={styles.contactInfo}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Contact & Location</p>
              <h2 className={styles.sectionTitle}>Visit the office or send a message</h2>
              <p className={styles.sectionText}>
                Use the contact form for project discussions, site visits,
                interior consultations, or partnership enquiries.
              </p>
            </div>

            <div className={styles.contactCard}>
              <div>
                <h3>Office location</h3>
                <p>21 Richmond Road, Bengaluru 560025, Karnataka</p>
              </div>
              <div>
                <h3>Contact</h3>
                <p>+91 80 4567 3400</p>
                <p>hello@aurumbuildworks.com</p>
              </div>
              <div>
                <h3>Hours</h3>
                <p>Monday to Saturday</p>
                <p>9:00 AM to 6:30 PM</p>
              </div>
            </div>

            <div className={styles.mapFrame}>
              <iframe
                title="Aurum Buildworks office map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.5950%2C12.9570%2C77.6115%2C12.9705&layer=mapnik&marker=12.9638%2C77.6033"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Aurum Buildworks delivers architecture, house construction, interior
          design, and renovation services with local SQLite-backed enquiry
          capture.
        </p>
        <div>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#quote">Quotation</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
