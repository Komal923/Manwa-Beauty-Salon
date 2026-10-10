import Photo from "../../components/Photo";
import SalonLocations from "../../components/SalonLocations";
import ContactForm from "../../components/ContactForm";
import { contactInfo, openingHours, telLink, waLink } from "../../lib/data";
import styles from "./contact.module.css";

export const metadata = { title: "Contact", description: "Contact Manwa Beauty Salon & Academy. Plan a visit to our Sector 34 and Sector 07 branches in Kamothe, Navi Mumbai.", alternates: { canonical: "/contact" } };
export default function Contact() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="contact-title"><div className="wrap">
      <h1 id="contact-title">Contact Manwa Beauty Salon &amp; Academy</h1>
      <p className={styles.intro}>Book a salon appointment or enquire about beauty courses in Kamothe, Navi Mumbai. Call or WhatsApp our team for visits to our Sector 34 and Sector 07 locations.</p>
    </div></section>
    <section className={styles.connect} aria-labelledby="connect-heading"><div className="wrap">
      <div className={styles.contactStrip}>
        <a href={telLink()}><span className={styles.stripLabel}>01 / CALL US</span><strong>{contactInfo.displayPhone}</strong><span>Let’s talk about your visit ↗</span></a>
        <a href={waLink("")} target="_blank" rel="noopener noreferrer"><span className={styles.stripLabel}>02 / WHATSAPP</span><strong>A message away</strong><span>Chat with our team ↗</span></a>
        <div><span className={styles.stripLabel}>03 / OPENING HOURS</span><strong>{openingHours}</strong><span>Every day of the week</span></div>
      </div>
      <div className={styles.enquiryGrid} id="contact-enquiry"><div className={styles.enquiryIntro}><p className={styles.eyebrow}>WE’D LOVE TO HEAR FROM YOU</p><h2 id="connect-heading">Let’s make it<br/><em>your kind of beautiful.</em></h2><p>Whether you know exactly what you want or need a little guidance, tell us what’s on your mind. We’ll help you find the right service and a time that works.</p><div className={styles.consultation}><Photo k="consultation" label="A personal beauty consultation"/></div><p className={styles.smallNote}>Hair & skin care · Bridal beauty · Beauty academy</p></div><ContactForm/></div>
    </div></section>
    <SalonLocations/>
  </div>;
}
