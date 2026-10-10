"use client";
import {useEffect} from "react";import {usePathname} from "next/navigation";
export default function Reveal(){const p=usePathname();useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach(e=>io.observe(e));return()=>io.disconnect()},[p]);return null}
