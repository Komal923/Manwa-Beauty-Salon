import { salonLocations, locationMapsUrl, locationEmbedUrl, locationWhatsAppUrl } from '../lib/locations';

function LocationIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}

const buttonClass = 'tw-inline-flex tw-min-h-[46px] tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-solid tw-px-3 tw-py-2 tw-text-center tw-text-xs tw-font-medium tw-tracking-wide tw-transition-colors tw-duration-300 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-4 focus-visible:tw-outline-plum motion-reduce:tw-transition-none';

export default function SalonLocations() {
  return (
    <section id="locations" aria-labelledby="locations-heading" className="salon-locations tw-bg-cream tw-py-10 tw-text-plum md:tw-py-12">
      <div className="wrap">
        <header className="rv tw-mx-auto tw-mb-6 tw-max-w-3xl tw-text-center">
          <p className="tw-mb-2 tw-mt-0 tw-text-[10px] tw-font-medium tw-uppercase tw-tracking-[0.28em] tw-text-[#80663e]">Our Locations</p>
          <h2 id="locations-heading" className="tw-mb-2 tw-text-[1.65rem] tw-font-medium tw-leading-tight md:tw-text-[2rem]">Visit Our Manwa Beauty Salon Locations</h2>
          <p className="tw-my-0 tw-text-xs tw-font-normal tw-leading-6 tw-text-muted">Two Convenient Locations in Kamothe, Navi Mumbai</p>

        </header>
        <div className="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2">
          {salonLocations.map(location => (
            <div key={location.id} className="rv tw-min-w-0">
              <article id={location.id} aria-labelledby={`${location.id}-heading`} className="location-card tw-flex tw-h-full tw-flex-col tw-rounded-2xl tw-border tw-border-solid tw-border-champagne/60 tw-bg-[#fffcf7] tw-p-4 tw-shadow-[0_8px_30px_rgba(66,34,56,0.04)] sm:tw-p-5">
                <div className="tw-mb-3 tw-flex tw-items-center tw-gap-2 tw-text-[#80663e]">
                  <span className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-full tw-bg-champagne/25"><LocationIcon/></span>
                  <span className="tw-text-[11px] tw-font-medium tw-uppercase tw-tracking-[0.18em]">{location.sector} &middot; Kamothe</span>
                </div>
                <h3 id={`${location.id}-heading`} className="tw-mb-2 tw-text-xl tw-font-medium tw-leading-snug">{location.name}</h3>
                <address className="tw-mb-2 tw-text-[13px] tw-not-italic tw-leading-6 tw-text-muted">{location.address}</address>
                <a href={`tel:${location.phone}`} className="tw-mb-4 tw-w-fit tw-text-xs tw-underline tw-decoration-champagne tw-underline-offset-4 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-plum" aria-label={`Call ${location.name}, ${location.sector}`}>{location.displayPhone}</a>
                <div className="tw-mt-auto">
                  <div className="tw-h-[220px] tw-overflow-hidden tw-rounded-2xl tw-bg-champagne/20">
                    <iframe title={`Google Map: ${location.name}, ${location.sector}`} src={locationEmbedUrl(location)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="tw-block tw-h-full tw-w-full tw-border-0"/>
                  </div>
                  <div className="tw-mt-4 tw-grid tw-grid-cols-1 tw-gap-2 min-[360px]:tw-grid-cols-2">
                    <a href={locationMapsUrl(location)} target="_blank" rel="noopener noreferrer" aria-label={`Get directions to ${location.name}, ${location.sector} (opens in a new tab)`} className={`${buttonClass} tw-border-champagne tw-bg-transparent tw-text-plum hover:tw-bg-champagne/30`}>Get Directions <span aria-hidden="true" className="tw-ml-2">&nearr;</span></a>
                    <a href={locationWhatsAppUrl(location)} target="_blank" rel="noopener noreferrer" aria-label={`Book via WhatsApp at ${location.sector} (opens in a new tab)`} className={`${buttonClass} tw-border-plum tw-bg-plum tw-text-white hover:tw-border-[#65364f] hover:tw-bg-[#65364f]`}>Book via WhatsApp</a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
