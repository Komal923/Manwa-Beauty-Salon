"use client";
import Link from "next/link";import {useEffect,useState,useRef} from "react";import {SITE,waLink,telLink,contactInfo} from "../lib/data";
import {usePathname} from "next/navigation";
const NAV=[["Home","/"],["About","/#about"],["Services","/services"],["Bridal","/#bridal"],["Academy","/#academy"],["Gallery","/#gallery"],["Contact","/contact"]];
export default function Header(){const[o,setO]=useState(false),[sc,setSc]=useState(false);
const pathname=usePathname();
const menuButton=useRef(null);
const menu=useRef(null);
useEffect(()=>{
  const desktop=window.matchMedia("(min-width: 1121px)");
  const closeOnDesktop=()=>{if(desktop.matches)setO(false)};
  desktop.addEventListener("change",closeOnDesktop);
  return()=>desktop.removeEventListener("change",closeOnDesktop);
},[]);
useEffect(()=>{
  if(!o)return;
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow="hidden";
  const onKeyDown=event=>{
    if(event.key==="Escape"){setO(false);menuButton.current?.focus();}
    if(event.key==="Tab"){
      const items=[...menu.current.querySelectorAll("a"),menuButton.current];
      const first=items[0],last=items[items.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  };
  document.addEventListener("keydown",onKeyDown);
  return()=>{document.body.style.overflow=previousOverflow;document.removeEventListener("keydown",onKeyDown)};
},[o]);
useEffect(()=>{const f=()=>setSc(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
return<><div className="ann"><span>Premium Beauty, Skin & Hair Services in Kamothe, Navi Mumbai</span><span><a href={telLink()} aria-label={`Call ${contactInfo.displayPhone}`}>{contactInfo.displayPhone}</a> · <a href={waLink("")} target="_blank" rel="noopener noreferrer">WhatsApp</a> · <a href={SITE.ig} target="_blank" rel="noopener noreferrer">Instagram</a></span></div>
<header className={"hd"+(sc?" sc":"")+(pathname==="/"?" on-hero":"")+(o?" menu-open":"")}><div className="wrap nav"><Link href="/" className="logo brand-logo" aria-label="Manwa Beauty Salon & Academy home"><img src="/images/brand/manwa-logo.png" alt="" width={891} height={772} fetchPriority="high"/><span>MANWA<small>BEAUTY SALON &amp; ACADEMY</small></span></Link>
<button className="nav-backdrop" tabIndex={-1} aria-hidden="true" onClick={()=>setO(false)}/><nav id="main-navigation" ref={menu} className={"lk"+(o?" open":"")} aria-label="Main">{NAV.map(n=><Link key={n[0]} href={n[1]} onClick={()=>setO(false)}>{n[0]}</Link>)}<Link className="btn gold m" href="/book" onClick={()=>setO(false)}>Book Appointment</Link></nav>
<Link className="btn gold dk" href="/book">Book Appointment</Link>
<button ref={menuButton} type="button" className="burger" aria-label={o?"Close menu":"Open menu"} aria-controls="main-navigation" aria-expanded={o} onClick={()=>setO(!o)}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">{o?<path d="m6 6 12 12M6 18 18 6"/>:<path d="M4 6h16M4 12h16M4 18h16"/>}</svg></button></div></header></>}
