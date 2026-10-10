import {contactInfo,telLink,waLink} from "../lib/data";

export default function MobileContactBar(){
return<nav className="mobile-contact" aria-label="Quick contact">
<a href={telLink()}><span aria-hidden="true">☎</span>Call Now</a>
<a href={waLink("")} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◉</span>WhatsApp <small>{contactInfo.displayPhone}</small></a>
</nav>;
}