import{S as d,N as u,P as a,A as m,f}from"./assets/vendor-3ed9961f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.getElementById("btnUp");window.onscroll=function(){p()};function p(){document.body.scrollTop>60||document.documentElement.scrollTop>60?i.style.display="block":i.style.display="none"}i.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".js-header-link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),c.forEach(l=>l.addEventListener("click",e)),s.classList.toggle("is-open");const r=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};o.addEventListener("click",e),n.addEventListener("click",e),window.matchMedia("(min-width: 1280px)").addEventListener("change",t=>{t.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const y=document.getElementById("your-order"),h=document.querySelector(".hero-btn");function b(){y.scrollIntoView({block:"center",behavior:"smooth"})}h.addEventListener("click",b);new d(".swiper",{modules:[u,a,m,f],direction:"horizontal",loop:!0,autoHeight:!0,autoplay:{delay:5e3},watchSlidesProgress:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:26},768:{slidesPerView:2,spaceBetween:32},1280:{slidesPerGroup:1,centerSlidesBounds:!0,centerInsufficientSlides:!0,centerSlides:!0,slidesPerView:3,spaceBetween:36}},freeMode:{enabled:!0,sticky:!0,minimumVelocity:.02,momentumBounceRatio:1,momentumVelocityRatio:1}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".hero-title .title-word").forEach((o,n)=>{o.style.animationDelay=`${n*.5}s`})});
//# sourceMappingURL=commonHelpers.js.map
