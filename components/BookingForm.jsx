"use client";
import {useState} from "react";import {SERVICES,LIST,waLink} from "../lib/data";
export default function BookingForm({full}){const[done,setDone]=useState(false);const names=[...new Set([...SERVICES.map(s=>s.title),...Object.values(LIST).flat()])].sort();
function sub(e){e.preventDefault();const d=Object.fromEntries(new FormData(e.target));setDone(true);const t=`Hi Manwa Beauty Salon & Academy, I'm ${d.name}. Service: ${d.service}. Date: ${d.date||"flexible"} ${d.time||""}. ${d.message||""}`;window.open(waLink(t),"_blank","noopener,noreferrer")}
if(done)return<div className="box ok"><h3>Thank you! 🌸</h3><p>Your request has been received. Our team will contact you shortly to confirm your appointment.</p></div>;
return<form className="box form" onSubmit={sub}><h3>{full?"Send us a message":"Book your appointment"}</h3><input name="name" required placeholder="Your name" aria-label="Name"/><input name="phone" required type="tel" placeholder="Mobile number" aria-label="Mobile"/><input name="email" type="email" placeholder="Email (optional)" aria-label="Email"/>
<select name="service" required aria-label="Service" defaultValue=""><option value="" disabled>Select service</option>{names.map(n=><option key={n}>{n}</option>)}</select>
<div className="two"><input name="date" type="date" aria-label="Date"/><select name="time" aria-label="Time"><option value="">Preferred time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
<textarea name="message" rows="3" placeholder="Message" aria-label="Message"/><button className="btn gold" type="submit">Request Appointment</button></form>}
