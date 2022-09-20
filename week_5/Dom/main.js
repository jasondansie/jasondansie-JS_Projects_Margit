
const header = document.querySelector("header");
const scrollUpButton = document.querySelector("#scrollUpButton");
const modalButton = document.querySelector("#modalButton");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#btnClose");
const mobileButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    header.classList.add("bg");
    scrollUpButton.style.display = "block";
  } else {
    header.classList.remove("bg");
    scrollUpButton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function openModal() {
    overlay.style.display = "block";
    modal.style.display = "block";
    closeButton.style.display = "block";
}

function closeModal() {
    overlay.style.display = "none";
    modal.style.display = "none";
    closeButton.style.display = "none";
}



const openMobileMenu = () =>{
    console.log("button pressed");
    if(nav.classList.contains("responsive")){
        nav.classList.remove("responsive");
        document.body.style.overflow = '';
    }
    else{
        nav.classList.add("responsive");
    }
}

  scrollUpButton.addEventListener("click", topFunction);
  mobileButton.addEventListener("click", openMobileMenu);
  modalButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
