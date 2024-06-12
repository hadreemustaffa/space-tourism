(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const L=document.querySelector("main"),g=document.getElementById("navToggle"),b=document.getElementById("navigation-list"),x=document.querySelectorAll(".list__item-link");async function q(){const t="dataCache",r=localStorage.getItem(t);if(r)return JSON.parse(r);try{const s=await fetch("/space-tourism/data.json");if(!s.ok)throw new Error("Network response was not ok");const a=await s.json();return localStorage.setItem(t,JSON.stringify(a)),console.log("Fetched and cached new data"),a}catch(s){return console.error("Failed to fetch data:",s),null}}let m;const _=t=>{const r=document.getElementById(`${t}`);L.classList.contains(`container--${t}`)&&(r.classList.add("active"),m=t)};x.forEach(t=>{_(t.id)});g.addEventListener("click",()=>{g.getAttribute("aria-expanded")==="true"?(g.setAttribute("aria-expanded","false"),b.removeAttribute("opened")):(g.setAttribute("aria-expanded","true"),b.setAttribute("opened",""))});x.forEach(t=>{t.addEventListener("click",()=>{t.classList.add("active")})});const A=t=>{const r=document.querySelector("[aria-selected='true']");r==null||r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1"),t.setAttribute("aria-selected","true"),t.setAttribute("tabindex","0")},S=await q();if(S&&m!="home"){const t=document.querySelector(".container__description"),r=document.querySelector(".container__item"),s=r.querySelector("picture source"),a=r.querySelector("img"),n=document.querySelector("[role='tablist']"),o=n.querySelectorAll("[role='tab']"),l=document.querySelector("[role='tabpanel']"),y=document.querySelector(".container__text-name"),{destination:d,crew:u,technology:f}=S,p=()=>{A(o[e]);function c(i){return new URL(`${i}`,import.meta.url).href}if(m==="destination"){const i=document.querySelector(".container__destination"),w=document.querySelector(".container__distance p"),v=document.querySelector(".container__travel-time p");s.srcset=c(d[e].images.webp),a.src=c(d[e].images.png),i.textContent=d[e].name,t.textContent=d[e].description,w.textContent=d[e].distance,v.textContent=d[e].travel}if(m==="crew"){const i=document.querySelector(".container__text-title");s.srcset=c(u[e].images.webp),a.src=c(u[e].images.png),i.textContent=u[e].role,y.textContent=u[e].name,t.textContent=u[e].bio}m==="technology"&&(s.srcset=c(f[e].images.portrait),a.src=c(f[e].images.landscape),y.textContent=f[e].name,t.textContent=f[e].description)};let e=0;const h=c=>{c.key==="ArrowRight"&&(e===o.length-1?e=0:e++,p()),c.key==="ArrowLeft"&&(e===0?e=o.length-1:e--,p())};o.forEach((c,i)=>{c.addEventListener("click",()=>{e=i,p()})}),n.addEventListener("keydown",c=>{h(c),o[e].focus()}),l.addEventListener("keydown",c=>{h(c)})}
