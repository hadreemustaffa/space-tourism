import"./index-653c9a5f.js";document.querySelector(".container--destination");const o=document.querySelector(".container__list"),c=t=>{const e=document.createElement("li");e.classList.add("container__list-item");const n=document.createElement("button");n.type="button",n.classList.add("btn","btn-nav","underline-effect"),n.textContent=t,e.appendChild(n),o.appendChild(e)};fetch("/space-tourism/data.json").then(t=>t.json()).then(t=>{const{destination:e}=t;console.log(e),e.forEach(n=>{c(n.name)})}).catch(t=>console.log("Error:",t));
