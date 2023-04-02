// Rumble effect
// var rumble = document.querySelector(".rumble");
// setInterval(function(){ 
//     rumble.style.top=50*Math.random()-100+"px";
//     rumble.style.left=50*Math.random()-100+"px";
// }, 75);

// let e = 0, s = () => { requestAnimationFrame(s), e++, e % 5 != 0 && (document.querySelector(".rumble").style.top = 50 * Math.random() - 100 + "px", document.querySelector(".rumble").style.left = 50 * Math.random() - 100 + "px") };

let e = 0,
        s = () => {
          requestAnimationFrame(s),
            e++,
            e % 5 != 0 &&
              ((document.querySelector(".rumble").style.top =
                50 * Math.random() - 100 + "px"),
              (document.querySelector(".rumble").style.left =
                50 * Math.random() - 100 + "px"));
        };
      s();