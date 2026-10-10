"use client";
import { useState } from 'react';
import Link from 'next/link';
import { CONCERNS, SERVICES } from '../lib/data';
import Photo from './Photo';
export default function ServiceExplorer() {
  const [concern, setConcern] = useState('Skin Glow');
  const services = CONCERNS[concern].map(slug => SERVICES.find(service => service.slug === slug));
  return <div className="exp">
    <div className="chips" aria-label="Choose your concern">{Object.keys(CONCERNS).map(name => <button key={name} aria-pressed={name === concern} className={'chip' + (name === concern ? ' on' : '')} onClick={() => setConcern(name)}>{name}</button>)}</div>
    <div className="res" key={concern}>{services.length ? services.map(service => <Link key={service.slug} href={`/services/${service.slug}`} className="rc visual-result">
      <Photo k={service.slug} label={`${service.title} beauty care`} /><div><b>{service.title}</b><span>{service.short}</span><span className="more">Explore treatment &rarr;</span></div>
    </Link>) : <Link href="/#bridal" className="rc visual-result"><Photo k="bridal" label="Indian bridal makeup inspiration" /><div><b>Bridal Makeup &amp; Pre-Bridal</b><span>Discover makeup and care for your special day.</span></div></Link>}</div>
  </div>;
}
