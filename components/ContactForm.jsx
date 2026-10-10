"use client";
import { useState } from "react";
import { SERVICES, waLink } from "../lib/data";
import { salonLocations } from "../lib/locations";
import styles from "../app/contact/contact.module.css";
export default function ContactForm() {
  const [link, setLink] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const message = `Hi Manwa Beauty Salon & Academy!\nName: ${data.name.trim()}\nPhone: ${data.phone.trim()}\nBranch: ${data.branch}\nInterested in: ${data.service}\nMessage: ${data.message.trim() || "Please help me plan my visit."}`;
    const url = waLink(message);
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return <form className={styles.form} onSubmit={submit}>
    <p className={styles.eyebrow}>LET’S CONNECT</p><h3>Tell us about your visit</h3><p className={styles.formIntro}>Share a few details to start a conversation with our team.</p>
    <div className={styles.fields}>
      <label htmlFor="contact-name">Your name <span>*</span><input id="contact-name" name="name" autoComplete="name" placeholder="Full name" required maxLength={100} pattern={".*\\S.*"}/></label>
      <label htmlFor="contact-phone">Mobile number <span>*</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your mobile number" required pattern={"\\+?[0-9\\s\\(\\)\\-]{7,20}"} title="Enter a valid mobile number."/></label>
    </div>
    <label htmlFor="contact-branch">Preferred salon <span>*</span><select id="contact-branch" name="branch" defaultValue="" required><option value="" disabled>Choose your location</option>{salonLocations.map(location => <option key={location.id} value={location.sector}>{location.sector} — {location.name}</option>)}<option>Help me choose a branch</option></select></label>
    <label htmlFor="contact-service">What can we help you with? <span>*</span><select id="contact-service" name="service" defaultValue="" required><option value="" disabled>Select a service or enquiry</option>{SERVICES.map(service => <option key={service.slug}>{service.title}</option>)}<option>Beauty academy courses</option><option>General enquiry / help me choose</option></select></label>
    <label htmlFor="contact-message">Your message <small>(optional)</small><textarea id="contact-message" name="message" rows={4} maxLength={2000} placeholder="Tell us what you have in mind, or share your preferred date and time…"/></label>
    <button className={styles.primary} type="submit">Continue on WhatsApp <span aria-hidden="true">↗</span></button>
    <p className={styles.formNote}>Opens WhatsApp with your details. Send the message there to submit your enquiry. Your appointment is confirmed only after our team replies.</p>
    {link && <p className={styles.status} role="status">Your message is ready. If WhatsApp didn’t open, <a href={link} target="_blank" rel="noopener noreferrer">open it here</a> and press send.</p>}
  </form>;
}
