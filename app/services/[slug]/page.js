import PageHero from "../../../components/PageHero";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, detail, serviceWaMessage } from "../../../lib/data";
import ServiceCard from "../../../components/ServiceCard";
import Photo from "../../../components/Photo";
import { AppointmentCTA } from "../../../components/Sections";
import WhatsAppButton from "../../../components/WhatsAppButton";

export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);

  if (!s) return {};

  return {
    title: `${s.title} in Kamothe, Navi Mumbai`,
    description: `${s.short} Book ${s.title} at Manwa Beauty Salon & Academy, Kamothe.`,
    keywords: [`${s.title} in Kamothe`, `${s.title} Navi Mumbai`, "Manwa Beauty Salon & Academy"],
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} in Kamothe | Manwa Beauty Salon & Academy`,
      description: s.short,
      url: `https://www.manwasalon.in/services/${s.slug}`,
    },
  };
}

export default function Page({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const d = detail(s);
  const rel = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({
      "@type": "Question",
      name: f[0],
      acceptedAnswer: { "@type": "Answer", text: f[1] },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero title={`${s.title} in Kamothe`} description={d.intro} image={s.slug}>
        <span className="badge st">{s.tag}</span><br />
        <div className="row"><Link className="btn gold" href="/book">Book Appointment</Link><WhatsAppButton message={serviceWaMessage(s.slug)} className="btn">WhatsApp Us</WhatsAppButton></div>
      </PageHero>

      <section>
        <div className="wrap two-c">
          <div className="big">
            <Photo k={s.slug} label={`${s.title} inspiration`} />
          </div>
          <div>
            <h2 className="l">Benefits</h2>
            <ul className="tick">{s.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
            <h3>Who may consider it</h3>
            <p>{d.who}</p>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap two-c"><div className="big"><Photo k="consultation" label="Discussing a personalised beauty care plan"/></div><div>
          <h2 className="l">What to expect</h2>
          <ol className="steps">{d.steps.map((t) => <li key={t}>{t}</li>)}</ol>
          <h3>Aftercare</h3>
          <p>{d.aftercare}</p>
        </div></div>
      </section>

      <section>
        <div className="wrap two-c"><div>
          <h2 className="l">FAQs</h2>
          {d.faqs.map((f) => (
            <details key={f[0]}>
              <summary>{f[0]}</summary>
              <p>{f[1]}</p>
            </details>
          ))}
        </div><div className="big"><Photo k="products" label="Skincare products and clean towels for aftercare"/></div></div>
      </section>

      <section className="alt">
        <div className="wrap">
          <h2>Related Services</h2>
          <div className="g3">
            {rel.map((x, i) => (
              <ServiceCard key={x.slug} s={x} i={i} />
            ))}
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}

