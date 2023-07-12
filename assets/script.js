"use strict";
const sliderContainer = document.querySelector(".slider_container");
const sliderItems = document.querySelectorAll(".slider_items");
const headerBG = document.querySelector(".header");
const cardContainer = document.querySelector(".card_container");
const allCards = document.querySelectorAll(".card_space_btw");
const accordionContainer = document.querySelector(".accordion_container");
const allAccordions = document.querySelectorAll(".accordion_item");
const accordionCloseLine = document.querySelectorAll(
	".accordion_line_horizontal"
);
const hamburgerMenu = document.querySelector(".hamburger_menu")
const hamburgerLines = document.querySelectorAll('.fa-solid')
//Header container slider
sliderContainer.addEventListener("click", function (e) {
	e.preventDefault();
	const clicked = e.target.getAttribute("data-set");
	if (!clicked) return;
	headerBG.style.background = `url("assets/images/slider_${clicked}.jpg")`;
	headerBG.style.backgroundSize = "cover";
	headerBG.style.backgroundPositionX = '-220px'
	sliderItems.forEach(el => {
		el.style.backgroundColor = "#fadcd9";
	});
	sliderItems[clicked - 1].style.background = "#f79489";
});

//Cards hover highlights
cardContainer.addEventListener("mouseover", function (e) {
	const mouseOver = e.target.closest(".card_item");
	if (!mouseOver) return;
	mouseOver.classList.add("active_card");
});
cardContainer.addEventListener("mouseout", function (e) {
	const mouseOver = e.target.closest(".card_item");
	if (!mouseOver) return;
	mouseOver.classList.remove("active_card");
});

//Accordions

const accoriondFunction = function (arr, currentAcc, cssClass) {
	arr.forEach(el => {
		if (el !== arr[currentAcc - 1]) {
			el.classList.remove(`${cssClass}`);
		}
	});
};

accordionContainer.addEventListener("click", function (e) {
	e.preventDefault();
	let clicked = e.target.closest(".accordion_parent");
	if (!clicked) return;
	const currentAccordion = clicked.childNodes[1].getAttribute("data-set");
	//Non-Active Accordions Close
	accoriondFunction(allAccordions, currentAccordion, "accordion_active");
	//Non-Active Accordions BTN Close
	accoriondFunction(
		accordionCloseLine,
		currentAccordion,
		"accordion_visibility"
	);
	//Open-Close current Accordion
	allAccordions[currentAccordion - 1].classList.toggle("accordion_active");
	//Open-Close current Accordion BTN
	accordionCloseLine[currentAccordion - 1].classList.toggle(
		"accordion_visibility"
	);
});

// testimonial our services
const testimonialContainer = document.querySelector(".slider_testimonial");
const allTestimonialItems = document.querySelectorAll(
	".testimonial_item_space"
);
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
hamburgerMenu.addEventListener("click", function(e){
	e.preventDefault();
	const currentEl = e.target;
	if(currentEl.getAttribute('data-set') >= 3) return;
	if(Number(currentEl.getAttribute('data-set')) === 1){
		e.target.classList.toggle("menu_disabled")
		hamburgerLines[1].classList.toggle('menu_disabled')
		document.querySelector(".nav_list").style.display = "block";
		document.querySelector("html").style.overflowY = "hidden";
		document.querySelector("body").style.overflowY = "hidden";
	}else {
		e.target.classList.add("menu_disabled")
		hamburgerLines[0].classList.toggle('menu_disabled')
		document.querySelector(".nav_list").style.display = "none";
		document.querySelector("html").style.overflowY = "scroll";
		document.querySelector("body").style.overflowY = "hidden";
	}
})
