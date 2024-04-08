import{S as h,i as a}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="43274193-b0157717e654dc920b3fc7520",y="https://pixabay.com/api/";async function g(o){const e=`${y}?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return(await(await fetch(e)).json()).hits}const c=document.querySelector(".gallery"),d=new h(".gallery a",{captionsData:"alt",captionDelay:250});d.refresh();function L(o){c.innerHTML="",o.forEach(e=>{const s=`
      <li class="card">
        <a href="${e.largeImageURL}" class="link">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${e.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${e.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${e.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${e.downloads}</p></li>
        </ul>
        </a>
        
      </li>
    `;c.insertAdjacentHTML("beforeend",s)}),d.refresh()}const b=document.querySelector(".form"),l=document.querySelector(".search-input"),u=document.querySelector(".loader"),f=document.querySelector(".end-message");m();b.addEventListener("submit",w);async function w(o){o.preventDefault();const e=l.value.trim();if(e===""){a.error({title:"Error",message:"Please enter a search term.",position:"topCenter"});return}E();try{const s=await g(e);s.length===0?(c.innerHTML="",a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),$()):(L(s),l.value="",v())}catch(s){console.error("Error fetching images:",s),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{m()}}function E(){u.classList.remove("hidden")}function m(){u.classList.add("hidden")}function $(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
