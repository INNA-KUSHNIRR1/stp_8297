/* empty css                      */import{S as i,P as l,N as d}from"./assets/vendor-abfa2f4e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".modal-cookies"),o=document.querySelector(".modal-cookies-wrapper"),s=document.querySelector("#acceptBtn"),c=document.querySelector(".button.decline"),e=localStorage.getItem("cookiesAccepted");e==="true"||e==="false"?n.style.display="none":(n.style.display="flex",o.classList.add("show"),document.body.style.overflow="hidden");const t=()=>{o.classList.remove("show"),document.body.style.overflow="",setTimeout(()=>{n.style.display="none"},300)};s.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","true"),t()}),c.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","false"),t()})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".btn-burger"),o=document.querySelector(".burger-menu"),s=document.querySelector(".menu-close-btn"),c=document.querySelectorAll(".menu-item");n.addEventListener("click",function(){o.classList.add("is-open")}),s.addEventListener("click",function(){o.classList.remove("is-open")}),c.forEach(t=>{t.addEventListener("click",e)});function e(){o.classList.remove("is-open")}o.addEventListener("click",function(){o.classList.remove("is-open")})});new i(".gallery-swiper",{modules:[l,d],direction:"horizontal",loop:!0,slidesPerView:2,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}});
//# sourceMappingURL=commonHelpers2.js.map
