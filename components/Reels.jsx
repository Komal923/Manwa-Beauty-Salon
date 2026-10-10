"use client";

import {useEffect, useRef, useState} from "react";

const REELS = ["Protein Treatment", "Tattoo Removal", "Hair Care", "Skin Care", "Brow Artistry", "Nail Art"];

function Reel({number, title}) {
  const video = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const play = () => video.current.play().catch(() => {});

  return <div className="reel-card">
    <video ref={video} muted={muted} loop playsInline preload="metadata" poster={`/videos/reels/reel-${number}.jpg`} onVolumeChange={event => setMuted(event.currentTarget.muted)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label={`Manwa ${title} reel`}>
      <source src={`/videos/reels/reel-${number}.mp4`} type="video/mp4"/>
    </video>
    <button className="reel-play" type="button" aria-label={`${playing ? "Pause" : "Play"} ${title} reel`} onClick={() => playing ? video.current.pause() : play()}>
      <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
    </button>
    <div className="reel-caption"><span>{title}</span><button type="button" className="reel-sound" aria-label={`${muted ? "Unmute" : "Mute"} ${title} reel`} onClick={() => {
      const next = !muted;
      if (!next) document.querySelectorAll(".reel-card video").forEach(other => { if (other !== video.current) { other.muted = true; other.dispatchEvent(new Event("volumechange")); } });
      video.current.muted = next;
      setMuted(next);
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/>{muted ? <path d="m16 9 5 6m0-6-5 6"/> : <><path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/></>}</svg>
    </button></div>
  </div>;
}

export default function Reels() {
  const track = useRef(null);
  const activeRef = useRef(0);
  const interacting = useRef(false);
  const [active, setActive] = useState(0);
  const [cycling, setCycling] = useState(true);

  function goTo(index, smooth = true) {
    const container = track.current;
    const card = container.children[index + REELS.length];
    container.scrollTo({left: card.offsetLeft, behavior: smooth && !window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "smooth" : "instant"});
  }

  useEffect(() => {
    const container = track.current;
    const videos = container.querySelectorAll("video");
    goTo(0, false);
    const visible = new Set();
    const observer = new IntersectionObserver(entries => entries.forEach(({target, isIntersecting, intersectionRatio}) => {
      if (isIntersecting && intersectionRatio >= .75) {
        visible.add(target);
        if (!document.hidden) target.play().catch(() => {});
      } else { visible.delete(target); target.pause(); }
    }), {threshold: [0, .75]});
    videos.forEach(video => observer.observe(video));
    const onVisibility = () => videos.forEach(video => {
      if (document.hidden) video.pause();
      else if (visible.has(video)) video.play().catch(() => {});
    });
    const onResize = () => goTo(activeRef.current, false);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      videos.forEach(video => video.pause());
    };
  }, []);

  useEffect(() => {
    if (!cycling) return;
    const timer = setInterval(() => {
      const bounds = track.current.getBoundingClientRect();
      if (document.hidden || interacting.current || bounds.bottom < 0 || bounds.top > innerHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      goTo(activeRef.current + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [cycling]);

  return <div className="reels-carousel" onMouseEnter={() => {interacting.current = true;}} onMouseLeave={() => {interacting.current = false;}}>
    <div className="reels-window">
      <div className="reels-track" id="beauty-reels" ref={track} role="region" aria-label="Beauty journey reels" aria-roledescription="carousel" tabIndex={0}
        onFocusCapture={() => setCycling(false)} onTouchStart={() => setCycling(false)}
        onKeyDown={event => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(event.key === "ArrowRight" ? activeRef.current + 1 : activeRef.current - 1);
          }
        }}
        onScroll={() => {
          const container = track.current;
          const cycleWidth = container.children[REELS.length].offsetLeft;
          if (!cycleWidth) return;
          let shift = 0;
          if (container.scrollLeft >= cycleWidth * 2 - 1) shift = -REELS.length;
          else if (container.scrollLeft < cycleWidth - 1) shift = REELS.length;
          if (shift) {
            // Duplicate a full row so the visible cards match on both sides of the jump.
            const cards = Array.from(container.children);
            const start = shift < 0 ? REELS.length * 2 : 0;
            for (let index = start; index < start + REELS.length; index++) {
              const source = cards[index].querySelector("video");
              const target = cards[index + shift].querySelector("video");
              if (source.readyState >= 1 && target.readyState >= 1) target.currentTime = source.currentTime;
              target.muted = source.muted;
              source.pause();
            }
            // Reset instantly, preserving the horizontal position within the repeated row.
            container.scrollLeft += shift < 0 ? -cycleWidth : cycleWidth;
          }
          const step = container.children[1].offsetLeft - container.children[0].offsetLeft;
          const nearest = Math.round(container.scrollLeft / step) % REELS.length;
          activeRef.current = nearest;
          setActive(nearest);
        }}>
        {[...REELS, ...REELS, ...REELS].map((title, index) => <Reel key={index} title={title} number={index % REELS.length + 1}/>)}
      </div>
    </div>
    <div className="reels-navigation">
      <div className="reels-dots" aria-label="Choose a reel">{REELS.map((title, index) => <button key={title} type="button" aria-label={`Show ${title}`} aria-current={index === active ? "true" : undefined} className={index === active ? "active" : ""} onClick={() => goTo(index)}><span/></button>)}</div>
      <button className="reels-cycle" type="button" aria-label={cycling ? "Pause carousel" : "Start carousel"} onClick={() => setCycling(!cycling)}>{cycling ? "Ⅱ" : "▶"}</button>
    </div>
  </div>;
}
