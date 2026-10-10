import { PHOTOS } from '../lib/imagery';
export default function Photo({ k, label, priority = false, className = '' }) {
  return <img src={PHOTOS[k] || PHOTOS.products} alt={label || ''} className={className} style={{objectPosition: ({beautician:"center 22%",bridal:"center 30%",hair:"center 30%",academy:"center 30%",consultation:"40% 30%",brows:"center 40%",microblading:"center 40%",lice:"center 25%","lice-treatment":"center 25%"})[k] || "center"}}
    width={k === "beautician" ? 1079 : 1536} height={k === "beautician" ? 1458 : 1024} loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'} decoding="async" />;
}
