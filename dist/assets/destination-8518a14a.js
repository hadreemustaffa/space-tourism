import{f as s}from"./index-f7fba10f.js";document.querySelector(".container--destination");const c=document.querySelector(".container__list"),i=document.querySelector(".container__item"),a=i.querySelector("picture source"),r=i.querySelector("img"),d=document.querySelector(".container__destination"),l=document.querySelector(".container__description"),m=document.querySelector(".container__distance p"),u=document.querySelector(".container__travel-time p");document.addEventListener("DOMContentLoaded",async()=>{const o=await s();if(o){const{destination:t}=o;t.forEach(e=>{_(e.name)});const n=document.querySelectorAll(".container__list-item");n[0].firstElementChild.classList.add("active");for(let e=0;e<n.length;e++)n[e].addEventListener("click",()=>{p(n[e]),a.srcset=t[e].images.webp,r.src=t[e].images.png,d.textContent=t[e].name,l.textContent=t[e].description,m.textContent=t[e].distance,u.textContent=t[e].travel})}else console.log("No data available")});const _=o=>{const t=document.createElement("li");t.classList.add("container__list-item");const n=document.createElement("button");n.type="button",n.classList.add("btn","btn-nav","underline-effect"),n.textContent=o,t.appendChild(n),c.appendChild(t)},p=o=>{const t=c.querySelector(".active"),n=o.querySelector(".btn-nav");t==null||t.classList.remove("active"),n.classList.add("active")};