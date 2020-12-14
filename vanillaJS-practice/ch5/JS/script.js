const CTAELELEMENT = document.querySelector(".cta a");

if (CTAELELEMENT.hasAttribute("target")) {
  console.log(CTAELELEMENT.getAttribute("target"));
} else {
  CTAELELEMENT.setAttribute("target","_blank");
}

console.log(CTAELELEMENT.attributes);