
const header = document.querySelector("header");


window.addEventListener('scroll', function() {
    let scrollHeight = document.getElementById('showScroll').innerHTML = window.pageYOffset;

    if (scrollHeight > 200) {
        header.style.backgroundColor = "black";
    }
    else{
        header.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }
  });