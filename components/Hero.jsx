import Link from "next/link";import Photo from "./Photo";
import WhatsAppButton from "./WhatsAppButton";
export default function Hero(){return<section className="hero"><svg className="strands" viewBox="0 0 800 400" aria-hidden="true"><path d="M0 300 C150 180 250 380 400 250 S650 120 800 220"/><path d="M0 340 C160 230 270 400 420 290 S660 170 800 260"/></svg>
{[...Array(6)].map((_,i)=><i key={i} className="sp" style={{left:`${10+i*15}%`,animationDelay:`${i*.8}s`}}/>)}
<div className="wrap hero-g"><div><p className="eb l">Beauty Salon in Kamothe, Navi Mumbai</p><h1>Beauty That Makes You Feel Like Yourself — <em>Only Better.</em></h1>
<p className="lead">Discover professional hair, skin, beauty and bridal treatments at Manwa Beauty Salon & Academy in Kamothe, Navi Mumbai.</p>
<div className="row"><Link className="btn gold" href="/book">Book Appointment</Link><WhatsAppButton className="btn ghost">Book on WhatsApp</WhatsAppButton><Link className="btn ghost" href="/services">Explore Services</Link></div></div>
<div className="hero-img"><Photo k="hero" label="Elegant salon interior with gold mirrors and burgundy chairs" priority icon="💇‍♀️"/></div></div></section>}
