"use strict";var intervalId,menuOpen=document.querySelector(".select-header__main"),menuDropdown=document.querySelectorAll(".header__menu-dropdown"),btnLink=document.querySelectorAll(".js-select");btnLink.forEach((function(e){e.addEventListener("click",(function(e){e.currentTarget.closest(".header__menu-dropdown").classList.add("select-header__visible"),document.querySelectorAll(".header__menu-dropdown").forEach((function(e){e.classList.remove("select-header__visible")}))}))})),document.querySelectorAll(".js-select").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;document.querySelectorAll(".select-header__main").forEach((function(e){document.querySelector("[data-target=".concat(t,"]")).classList.contains("open")||(e.classList.remove("select-header__visible"),e.classList.remove("open"),document.querySelector("[data-target=".concat(t,"]")).classList.add("select-header__visible"),intervalId=setTimeout((function(){document.querySelector("[data-target=".concat(t,"]")).classList.add("open")}),0)),document.querySelector("[data-target=".concat(t,"]")).classList.contains("open")&&(clearTimeout(intervalId),document.querySelector("[data-target=".concat(t,"]")).classList.remove("select-header__visible"),intervalId=setTimeout((function(){document.querySelector("[data-target=".concat(t,"]")).classList.remove("open")}),0)),window.onclick=function(e){e.target!=document.querySelector("[data-target=".concat(t,"]"))&&e.target!=document.querySelector("[data-path=".concat(t,"]")||e.target==document.querySelector("select-header__main"))&&(document.querySelector("[data-target=".concat(t,"]")).classList.remove("select-header__visible"),document.querySelector("[data-target=".concat(t,"]")).classList.remove("open"))}}))}))}));
//# sourceMappingURL=main.js.map
