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

      // var root = document.querySelector(':root');
      // root.style.setProperty('--rotation', 0); 
      // var width = document.body.clientWidth;
      // document.addEventListener("mousemove", function(event) {
      //   let calc = ((event.clientX/width) * 15 - 7.5)
      //   root.style.setProperty('--rotation', calc); 
      // });

      let e2 = 0,
          s2 = 0;
        document.addEventListener(
          "mousemove",
          (s2) => {
            e2 = -15 * (s2.clientX / window.innerWidth - 0.5);
          },
          !1
        );
        let t2 = () => {
          requestAnimationFrame(t2),
            (s2 += 0.1 * (e2 - s2)),
            (document.querySelector(
              ".section-panel"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg)`),
            (document.querySelector(
              ".section-starring"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg)`),
            (document.querySelector(
              ".section-edvin"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg)`),
            (document.querySelector(
              ".section-ryding"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg)`),
            (document.querySelector(
              ".section-artist"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg)`);
        };
        t2();