/* empty css                      */import{S as i,P as l,N as d}from"./assets/vendor-abfa2f4e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".modal-cookies"),o=document.querySelector(".modal-cookies-wrapper"),n=document.querySelector("#acceptBtn"),r=document.querySelector(".button.decline"),e=localStorage.getItem("cookiesAccepted");e==="true"||e==="false"?c.style.display="none":(c.style.display="flex",o.classList.add("show"),document.body.style.overflow="hidden");const t=()=>{o.classList.remove("show"),document.body.style.overflow="",setTimeout(()=>{c.style.display="none"},300)};n.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","true"),t()}),r.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","false"),t()})});document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".btn-burger"),o=document.querySelector(".burger-backdrop"),n=document.querySelector(".burger-menu"),r=document.querySelector(".menu-close-btn"),e=document.querySelectorAll(".menu-item");c.addEventListener("click",function(){o.classList.add("is-open"),n.classList.add("is-open")}),r.addEventListener("click",function(){o.classList.remove("is-open"),n.classList.remove("is-open")}),e.forEach(s=>{s.addEventListener("click",t)});function t(){o.classList.remove("is-open"),n.classList.remove("is-open")}o.addEventListener("click",function(s){!n.contains(s.target)&&!c.contains(s.target)&&o.classList.remove("is-open")})});new i(".gallery-swiper",{modules:[l,d],direction:"horizontal",loop:!0,slidesPerView:2,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=commonHelpers2.js.map
