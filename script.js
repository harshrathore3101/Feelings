///////////////////////////////////////////////////////////////
var count = 0;
var con = 0;
setInterval(function () {
  if (count < 200) {
    document.querySelector("#cir1").style.width = 200 + "%";
    document.querySelector("#cir1").style.height = 400 + "%";
    document.querySelector("#h1").style.transform = "rotate(1440deg)";
    document.querySelector("#h2").style.transform = "rotate(1440deg)";
    document.querySelector("#h3").style.transform = "rotate(1440deg)";
    document.querySelector("#h4").style.transform = "rotate(1440deg)";
    document.querySelector("#h5").style.transform = "rotate(1440deg)";
    count++;
  }
  if (count === 200) {
    document.querySelector("#h1").style.top = 45 + "%";
    document.querySelector("#h2").style.top = 45 + "%";
    document.querySelector("#h3").style.top = 45 + "%";
    document.querySelector("#h4").style.top = 45 + "%";
    document.querySelector("#h5").style.top = 45 + "%";
    ///////////////////////////////////////////////////////////////
    document.querySelector("#h1").style.left = 40 + "%";
    document.querySelector("#h4").style.left = 45 + "%";
    document.querySelector("#h3").style.left = 60 + "%";
    document.querySelector("#h5").style.left = 55 + "%";
    // count++;
  }
  //   if (count === 300) {

  setInterval(function () {
    if (con < 300) {
      document.querySelector("#cir2").style.width = 200 + "%";
      document.querySelector("#cir2").style.height = 400 + "%";
      con++;
    }
    if (con === 200) {
      document.querySelector("#animation").style.display = "none";
      //   document.querySelector("#main").style.display = "";
    }
  }, 5500);
  //   }
}, 10);

////////////////////////////////////////////////////////////////////
var cursor = document.getElementById("cursor");
document.querySelector("body").addEventListener("mousemove", function (e) {
  (cursor.style.left = e.clientX + "px"), (cursor.style.top = e.clientY + "px");
});
////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.to("#pic", {
  height: "350px",
  opacity: 1,
  // duration: 1,
  // stagger: 2,

  // delay: 1,
  delay: 7,
});

tl.to("#pic1", {
  height: "350px",
  opacity: 1,
});

tl.to("#cirtext", {
  width: "550px",
  opacity: 1,
});

tl.to("#circ", {
  width: "500px",
  height: "500px",
  opacity: 1,
  duration: 2,
});
tl.to("#one,#two,#three", {
  opacity: 1,
});

var tl2 = gsap.timeline({});

tl2.to(".navani", {
  opacity: 1,
  // stagger: 0.9,
  duration: 2,
  // delay: 1,
  delay: 8,

  onStart: function () {
    $(".navani").textillate({ in: { effect: "fadeInUp" } });
  },
});

tl2.to("i,p", {
  opacity: 1,
});

tl2.to("#box", {
  // width: "250px",
  opacity: 1,
});

tl2.to("#rgt", {
  width: "250px",
  opacity: 1,
});

tl2.to("#icon", {
  // width: "250px",
  opacity: 1,
});
// tl2.to(".no", {
//   opacity: 1,
//   duration: 2,
//   onStart: function () {
//     $(".no").textillate({ in: { effect: "fadeInUp" } });
//   },
// });

// setTimeout(function () {});
