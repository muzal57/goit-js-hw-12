import{a as $,S,i}from"./assets/vendor-CNqCr-V-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const v="49874649-8c00636039374d469a712b585",q="https://pixabay.com/api/";async function f(e,s=1){const o={params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}};return(await $.get(q,o)).data}const h=document.querySelector(".gallery"),p=document.querySelector(".loader");let g=new S(".gallery a",{captionsData:"alt",captionDelay:250});function M(e){const s=e.map(({webformatURL:o,largeImageURL:a,tags:t,likes:r,views:n,comments:d,downloads:u})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img class="gallery-image" src="${o}" alt="${t}" />
    <div class="info">
      <p class="info-item"><b>Likes</b> <span>${r}</span></p>
      <p class="info-item"><b>Views</b> <span>${n}</span></p>
      <p class="info-item"><b>Comments</b> <span>${d}</span></p>
      <p class="info-item"><b>Downloads</b> <span>${u}</span></p>
    </div>
  </a>
</li>`).join("");h.innerHTML=s,g.refresh()}function P(e){const s=e.map(({webformatURL:o,largeImageURL:a,tags:t,likes:r,views:n,comments:d,downloads:u})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img class="gallery-image" src="${o}" alt="${t}" />
    <div class="info">
      <p class="info-item"><b>Likes</b> <span>${r}</span></p>
      <p class="info-item"><b>Views</b> <span>${n}</span></p>
      <p class="info-item"><b>Comments</b> <span>${d}</span></p>
      <p class="info-item"><b>Downloads</b> <span>${u}</span></p>
    </div>
  </a>
</li>`).join("");h.insertAdjacentHTML("beforeend",s),g.refresh()}function y(){p&&p.classList.remove("is-hidden")}function b(){p&&p.classList.add("is-hidden")}function R(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function B(){const e=document.querySelector(".gallery-item");if(e){const{height:s}=e.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}const O=document.querySelector(".form"),m=document.querySelector(".load-more-btn");let c="",l=1,L=0;O.addEventListener("submit",T);m.addEventListener("click",x);async function T(e){e.preventDefault();const s=e.currentTarget;if(c=s.elements["search-text"].value.trim(),c===""){i.error({message:"Please enter a search query!",position:"topRight"});return}l=1,R(),w(),y();try{const o=await f(c,l);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L=o.totalHits,M(o.hits),C()}catch(o){i.error({message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{b(),s.reset()}}async function x(){l+=1,y();try{const e=await f(c,l);P(e.hits),l*15<L||(w(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),B()}catch(e){i.error({message:`Something went wrong: ${e.message}`,position:"topRight"})}finally{b()}}function C(){m.classList.remove("is-hidden")}function w(){m.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
