import Photo from './Photo';
export default function PageHero({ title, description, image = 'salon', children }) {
  return <section className="page-hd image-page-hd"><div className="wrap page-hero-grid">
    <div><p className="eb l">Manwa Beauty Salon &amp; Academy</p><h1>{title}</h1><p>{description}</p>{children}</div>
    <div className="page-hero-photo"><Photo k={image} label="" priority /></div>
  </div></section>;
}
