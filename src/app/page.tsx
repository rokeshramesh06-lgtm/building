import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { QuoteForm } from "@/components/quote-form";
import styles from "./page.module.css";

const companyStats = [
  { value: "17+", label: "Years shaping homes, apartment blocks, and commercial spaces" },
  { value: "240", label: "Completed construction, fit-out, and renovation projects" },
  { value: "24", label: "Active projects managed through site and design coordination" },
  { value: "93%", label: "Clients coming through referrals and repeat relationships" },
];

const services = [
  {
    title: "House Construction",
    image: "/photos/hero-house.jpg",
    label: "Residential Build",
    blurb:
      "Turnkey house construction for villas, duplex homes, and premium plotted developments with tight site coordination.",
    bullets: ["Planning and approvals", "Structural execution", "Finish quality control"],
  },
  {
    title: "Interior Design",
    image: "/photos/living-room.jpg",
    label: "Luxury Interiors",
    blurb:
      "Refined interior environments designed around lighting, storage, material balance, and everyday comfort.",
    bullets: ["Material palettes", "Custom furniture layout", "Lighting and decor detailing"],
  },
  {
    title: "Architecture",
    image: "/photos/office-tower.jpg",
    label: "Facade and Form",
    blurb:
      "Architecture services from concept studies to build-ready drawings with a strong focus on elegant modern forms.",
    bullets: ["Concept development", "3D visualisation", "Construction documentation"],
  },
  {
    title: "Renovation",
    image: "/photos/renovation.jpg",
    label: "Retrofit Works",
    blurb:
      "Renovation and retrofit planning for aging homes, offices, and mixed-use properties that need a sharper second life.",
    bullets: ["Structural upgrades", "Layout reworking", "Modern finish refresh"],
  },
];

const completedProjects = [
  {
    name: "Horizon Crest Residences",
    location: "Whitefield, Bengaluru",
    badge: "Residential",
    summary:
      "A calm luxury villa campus with deep glazing, polished stone, and landscape-led private courts.",
    image: "/photos/hero-house.jpg",
    stat: "82,000 sq ft delivered",
  },
  {
    name: "Aster Lobby Suites",
    location: "Richmond Town, Bengaluru",
    badge: "Interior Fit-Out",
    summary:
      "Reception and lobby transformation with warm timber textures, marble detailing, and soft ambient lighting.",
    image: "/photos/interior-lobby.jpg",
    stat: "Premium common-area upgrade",
  },
  {
    name: "Stoneframe Corporate Hub",
    location: "Electronic City, Bengaluru",
    badge: "Architecture",
    summary:
      "Facade-focused design refinement for a commercial block with glazing control and cleaner massing lines.",
    image: "/photos/project-facade.jpg",
    stat: "Envelope and front-elevation refresh",
  },
];

const ongoingProjects = [
  {
    phase: "In Construction",
    title: "Cedar Peak Apartments",
    image: "/photos/construction-site.jpg",
    text:
      "Mid-rise residential blocks moving through civil execution, staged slab work, and services integration.",
    meta: "Target handover: December 2026",
  },
  {
    phase: "Interior Fit-Out",
    title: "Northline Signature Villas",
    image: "/photos/living-room.jpg",
    text:
      "Large-format marble, layered lighting, and bespoke furniture packages under phased interior delivery.",
    meta: "52 villas under finishing works",
  },
  {
    phase: "Design Development",
    title: "Axis Business Centre",
    image: "/photos/office-tower.jpg",
    text:
      "A commercial architecture package focused on efficient circulation, crisp elevation lines, and cost discipline.",
    meta: "Approvals and BOQ planning in progress",
  },
];

const photoMoments = [
  {
    title: "Exterior architecture with premium material depth",
    image: "/photos/hero-house.jpg",
  },
  {
    title: "Reception spaces designed for a polished first impression",
    image: "/photos/interior-lobby.jpg",
  },
  {
    title: "Living rooms with warm light, marble, and layered detailing",
    image: "/photos/living-room.jpg",
  },
  {
    title: "Modern elevations and glazing-led facade composition",
    image: "/photos/project-facade.jpg",
  },
];

const quotationHighlights = [
  "Transparent structural, finishing, and MEP cost planning.",
  "Design-led recommendations for budget, timeline, and material strategy.",
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
          <a href="#gallery">Gallery</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className={styles.headerAction} href="#quote">
          Request Estimate
        </a>
      </header>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`} id="home">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Built with elegance, managed with precision</p>
            <h1 className={styles.heroTitle}>
              Building beautiful homes, interiors, and architecture with real
              site experience behind every detail.
            </h1>
            <p className={styles.heroText}>
              Aurum Buildworks brings architecture, house construction,
              renovation, and interior design together in one disciplined
              delivery model. The result is cleaner coordination, stronger
              finishing quality, and spaces that feel premium in real life, not
              just on paper.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#gallery">
                View Gallery
              </a>
              <a className={styles.secondaryAction} href="#quote">
                Get Quotation
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

          <div className={styles.heroMediaGrid}>
            <article className={`${styles.photoCard} ${styles.heroPrimaryPhoto}`}>
              <Image
                src="/photos/hero-house.jpg"
                alt="Luxury modern house exterior"
                fill
                priority
                sizes="(max-width: 1120px) 100vw, 34vw"
              />
              <div className={styles.photoOverlay}>
                <p className={styles.photoKicker}>Featured Residence</p>
                <h2 className={styles.photoTitle}>Stone, glass, calm light, and precise construction lines.</h2>
                <div className={styles.photoMetaRow}>
                  <span className={styles.photoMetaChip}>Design + Build</span>
                  <span className={styles.photoMetaChip}>Premium Finishes</span>
                </div>
              </div>
            </article>

            <div className={styles.heroSecondaryStack}>
              <article className={`${styles.photoCard} ${styles.heroSecondaryPhoto}`}>
                <Image
                  src="/photos/interior-lobby.jpg"
                  alt="Elegant building lobby interior"
                  fill
                  sizes="(max-width: 1120px) 100vw, 18vw"
                />
                <div className={styles.photoOverlay}>
                  <p className={styles.photoKicker}>Arrival Experience</p>
                  <h2 className={styles.photoTitle}>Hotel-style lobbies and reception zones.</h2>
                </div>
              </article>

              <article className={`${styles.photoCard} ${styles.heroSecondaryPhoto}`}>
                <Image
                  src="/photos/office-tower.jpg"
                  alt="Modern architecture facade detail"
                  fill
                  sizes="(max-width: 1120px) 100vw, 18vw"
                />
                <div className={styles.photoOverlay}>
                  <p className={styles.photoKicker}>Architecture</p>
                  <h2 className={styles.photoTitle}>Sharp elevations with modern facade discipline.</h2>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.companySection}`} id="company">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Company Information</p>
            <h2 className={styles.sectionTitle}>About the building company</h2>
            <p className={styles.sectionText}>
              We handle the full lifecycle of residential and commercial
              building projects, from concept design and approvals to
              construction, interiors, and handover coordination.
            </p>
          </div>

          <div className={styles.companyLayout}>
            <article className={styles.storyCard}>
              <h3>Experience and services under one roof</h3>
              <p>
                Aurum Buildworks is structured for clients who want thoughtful
                design and clean execution without juggling multiple disconnected
                vendors. Architects, engineers, interior specialists, and
                project managers work as one team so the final result stays
                consistent from the first concept to the last site inspection.
              </p>
              <p>
                Our work covers custom houses, apartment buildings, office
                upgrades, reception areas, renovation-led transformations, and
                premium interior packages across Karnataka.
              </p>

              <div className={styles.statsGrid}>
                {companyStats.map((item) => (
                  <article className={styles.statCard} key={item.label}>
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </article>

            <div className={styles.companyVisual}>
              <article className={`${styles.photoCard} ${styles.companyLeadPhoto}`}>
                <Image
                  src="/photos/living-room.jpg"
                  alt="Elegant living room interior designed by building company"
                  fill
                  sizes="(max-width: 1120px) 100vw, 42vw"
                />
                <div className={styles.photoOverlay}>
                  <p className={styles.photoKicker}>Interior Detailing</p>
                  <h2 className={styles.photoTitle}>Spaces that feel finished, calm, and genuinely livable.</h2>
                </div>
              </article>

              <div className={styles.companyPhotoGrid}>
                <article className={`${styles.photoCard} ${styles.companyMiniPhoto}`}>
                  <Image
                    src="/photos/construction-site.jpg"
                    alt="Construction site with cranes"
                    fill
                    sizes="(max-width: 1120px) 100vw, 20vw"
                  />
                  <div className={styles.photoOverlay}>
                    <p className={styles.photoKicker}>Execution</p>
                    <h2 className={styles.photoTitle}>Live site supervision and staged delivery.</h2>
                  </div>
                </article>

                <article className={`${styles.photoCard} ${styles.companyMiniPhoto}`}>
                  <Image
                    src="/photos/project-facade.jpg"
                    alt="Modern facade detail"
                    fill
                    sizes="(max-width: 1120px) 100vw, 20vw"
                  />
                  <div className={styles.photoOverlay}>
                    <p className={styles.photoKicker}>Facade Design</p>
                    <h2 className={styles.photoTitle}>Modern geometry and material restraint.</h2>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.servicesSection}`} id="services">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Services Section</p>
            <h2 className={styles.sectionTitle}>Design-first services with real construction depth</h2>
            <p className={styles.sectionText}>
              Each service combines visual quality with practical site logic, so
              decisions work both aesthetically and technically.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceImageWrap}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1120px) 50vw, 25vw"
                  />
                  <span className={styles.serviceBadge}>{service.label}</span>
                </div>

                <div className={styles.serviceBody}>
                  <h3>{service.title}</h3>
                  <p>{service.blurb}</p>
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.pictureSection}`} id="gallery">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Picture Gallery</p>
            <h2 className={styles.sectionTitle}>Photography-led view of our design language</h2>
            <p className={styles.sectionText}>
              A curated visual slice of the textures, facades, interiors, and
              construction environments that shape the kind of projects we take on.
            </p>
          </div>

          <div className={styles.pictureWall}>
            {photoMoments.map((item) => (
              <article className={`${styles.photoCard} ${styles.pictureTile}`} key={item.title}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1120px) 100vw, 33vw"
                />
                <div className={styles.photoOverlay}>
                  <h2 className={styles.photoTitle}>{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.projectsSection}`} id="projects">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Project Gallery</p>
            <h2 className={styles.sectionTitle}>Completed buildings and ongoing projects</h2>
            <p className={styles.sectionText}>
              From residential builds to facade upgrades and interior fit-outs,
              the portfolio balances strong visual tone with buildable detail.
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
                    sizes="(max-width: 680px) 100vw, (max-width: 1120px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectMeta}>
                    <span>{project.badge}</span>
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
                <div className={styles.ongoingImageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1120px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.ongoingBody}>
                  <span>{project.phase}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <strong>{project.meta}</strong>
                </div>
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
              initial cost view, planning guidance, and the next step for
              design or execution.
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
          capture. Photography references are sourced from Unsplash.
        </p>
        <div>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#projects">Projects</a>
          <a href="#quote">Quotation</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
