


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// circle animation
(function() {
    // math trick 2*pi*57 = 358, must be less than 360 degree 
    var circle = document.getElementById('green-halo');
    var myTimer = document.getElementById('myTimer');
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;
  
    window.timer = window.setInterval(function() {
      circle.setAttribute("stroke-dasharray", angle + ", 20000");
      myTimer.innerHTML = parseInt(angle / 360 * 100) + '%';
  
      if (angle >= 360) {
        window.clearInterval(window.timer);
      }
      angle += angle_increment;
    }.bind(this), interval);
  })()

//   footer

function ShowAndHide() {
    var x = document.getElementById('fdiv');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
