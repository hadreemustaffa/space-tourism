(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.querySelector("main"),a=document.getElementById("navToggle"),i=document.getElementById("navigation-list"),d=document.querySelectorAll(".list__item-link");async function f(){const t="dataCache",r=localStorage.getItem(t);if(r)return console.log("Using cached data"),JSON.parse(r);try{const n=await fetch("/space-tourism/data.json");if(!n.ok)throw new Error("Network response was not ok");const s=await n.json();return localStorage.setItem(t,JSON.stringify(s)),console.log("Fetched and cached new data"),s}catch(n){return console.error("Failed to fetch data:",n),null}}const u=t=>{const r=document.getElementById(`${t}`);l.classList.contains(`container--${t}`)&&r.classList.add("active")};d.forEach(t=>{u(t.id)});a.addEventListener("click",()=>{a.getAttribute("aria-expanded")==="true"?(a.setAttribute("aria-expanded","false"),i.removeAttribute("opened")):(a.setAttribute("aria-expanded","true"),i.setAttribute("opened",""))});d.forEach(t=>{t.addEventListener("click",()=>{t.classList.add("active")})});export{f};
