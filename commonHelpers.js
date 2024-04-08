import{S as p,i as a}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m="43274193-b0157717e654dc920b3fc7520",h="https://pixabay.com/api/";async function y(s){const e=`${h}?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return(await(await fetch(e)).json()).hits}const c=document.querySelector(".gallery"),d=new p(".gallery a",{captionsData:"alt",captionDelay:250});d.refresh();function g(s){c.innerHTML="",s.forEach(e=>{const o=`
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
    `;c.insertAdjacentHTML("beforeend",o)}),d.refresh()}const L=document.querySelector(".form"),l=document.querySelector(".search-input"),u=document.querySelector(".loader");f();L.addEventListener("submit",b);async function b(s){s.preventDefault();const e=l.value.trim();if(e===""){a.error({title:"Error",message:"Please enter a search term.",position:"topCenter"});return}w();try{const o=await y(e);o.length===0?(c.innerHTML="",a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})):(g(o),l.value="")}catch(o){console.error("Error fetching images:",o),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{f()}}function w(){u.classList.remove("hidden")}function f(){u.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
