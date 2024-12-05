import{S as u,i as p}from"./assets/vendor-Dg3uDB0e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const f="47437429-8394b140d2acf6ca490e5d99d",m="https://pixabay.com/api/";async function h(n){const e=`${m}?key=${f}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`,s=await fetch(e);if(!s.ok)throw new Error("Failed to fetch images");return s.json()}const l=document.getElementById("gallery"),d=document.getElementById("loading");let a;function y(){d.classList.remove("hidden")}function g(){d.classList.add("hidden")}function L(n){l.innerHTML=n.map(e=>`
    <li>
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        <div class="info">
          <p><span>Likes:</span> <span class="value">${e.likes}</span></p>
          <p><span>Views:</span> <span class="value">${e.views}</span></p>
          <p><span>Comments:</span> <span class="value">${e.comments}</span></p>
          <p><span>Downloads:</span> <span class="value">${e.downloads}</span></p>
        </div>
      </a>
    </li>
  `).join(""),a?a.refresh():a=new u("#gallery a")}function i(n){p.error({title:"Error",message:n})}function w(){l.innerHTML=""}const v=document.getElementById("search-form"),E=document.getElementById("search-input");v.addEventListener("submit",async n=>{n.preventDefault();const e=E.value.trim();if(!e){i("Please enter a search term.");return}w(),y();try{const s=await h(e);s.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!"):L(s.hits)}catch{i("An error occurred while fetching images.")}finally{g()}});
//# sourceMappingURL=index.js.map
