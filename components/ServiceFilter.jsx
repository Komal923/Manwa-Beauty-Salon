"use client";
import { useState } from 'react';
import Link from 'next/link';
import { LIST, SERVICES } from '../lib/data';
import { SERVICE_IMAGES } from '../lib/service-images';
export default function ServiceFilter() {
  const [filter, setFilter] = useState('All');
  return <div>
    <div className="chips">{['All', ...Object.keys(LIST)].map(category => <button key={category} aria-pressed={filter === category} className={'chip' + (filter === category ? ' on' : '')} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <div className="g3" key={filter}>{Object.entries(LIST).filter(([category]) => filter === 'All' || filter === category).flatMap(([category, names]) => names.map(name => {
      const service = SERVICES.find(item => name.toLowerCase() === item.title.toLowerCase() || name.toLowerCase().startsWith(item.title.toLowerCase() + ' '));
      return <Link key={name} href={service ? `/services/${service.slug}` : '/book'} className="li service-list-card">
        <img src={SERVICE_IMAGES[name].src} alt={SERVICE_IMAGES[name].alt} width={1536} height={1024} loading="lazy" decoding="async" className="service-list-image" />
        <div className="service-list-copy"><small>{category}</small><b>{name}</b><span>{service ? 'View details' : 'Enquire'} &rarr;</span></div>
      </Link>;
    }))}</div>
  </div>;
}
