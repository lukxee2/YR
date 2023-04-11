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
            ).style.transform = `perspective(5000px) rotateY(${s2}deg) translate3d(${s2}px, 0, 0)`),
            (document.querySelector(
              ".section-starring"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg) translate3d(${s2*3.5}px, 0, 0)`),
            (document.querySelector(
              ".section-edvin"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg) translate3d(${s2*3.5}px, 0, 0)`),
            (document.querySelector(
              ".section-ryding"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg) translate3d(${s2*3.5}px, 0, 0)`),
            (document.querySelector(
              ".section-artist"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg) translate3d(${s2*5.5}px, 0, 0)`),
            (document.querySelector(
              ".section-button"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg) translate3d(${s2*5.5}px, 0, 0)`),
            (document.querySelector(
              ".section-havent"
            ).style.transform = `perspective(5000px) rotateY(${s2}deg) translate3d(${s2*5.5}px, 0, 0)`);
        };
        t2();

        const trailer = document.getElementById("trailer");
        let circle = document.getElementById("netflix");
        const animateTrailer = (e, interacting, interactable_icon, interactable) => {
          const x = e.clientX - trailer.offsetWidth / 2;
          const y = e.clientY - trailer.offsetHeight / 2;

          let keyframes = {};
          let keyframes2 = {};

          if (interactable_icon && interactable.dataset.type == "netflix") {
            keyframes = {
              transform : `translate(${x}px, ${y}px) scale(${interacting ? 0 : 1})`
            }
            keyframes2 = {
              height: `50px`,
              width: `50px`
            }
            dur = 100;
            circle = document.getElementById("netflix");
          } else if (interactable_icon && interactable.dataset.type == "twitter") {
            keyframes = {
              transform : `translate(${x}px, ${y}px) scale(${interacting ? 0 : 1})`
            }
            keyframes2 = {
              height: `50px`,
              width: `50px`,
              transform: `translate(-23.5%, -75%)`,
            }
            dur = 100;
            circle = document.getElementById("twitter");
          } else if (interactable_icon && interactable.dataset.type == "youtube") {
            keyframes = {
              transform : `translate(${x}px, ${y}px) scale(${interacting ? 0 : 1})`
            }
            keyframes2 = {
              height: `50px`,
              width: `50px`,
              transform: `translate(-22%, -78%)`,
            }
            dur = 100;
            circle = document.getElementById("youtube"); 
          } else if (interactable_icon && interactable.dataset.type == "instagram") {
            keyframes = {
              transform : `translate(${x}px, ${y}px) scale(${interacting ? 0 : 1})`
            }
            keyframes2 = {
              height: `50px`,
              width: `50px`,
              transform: `translate(-20%, -80%)`,
            }
            dur = 100;
            circle = document.getElementById("instagram"); 
          } else {
            keyframes = {
              transform : `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
            }
            keyframes2 = {
              height: `0`,
              width: `0`
            }
            dur = 800;
          }
          
          circle.animate(keyframes2, {
            duration: (interacting ? 800 : 400),
            fill: "forwards"
          });
          trailer.animate(keyframes, { 
            duration: dur,
            fill: "forwards"
          });
        }

        const getTrailerClass = type => {
          switch(type) {
            case "button":
              return "ti ti-arrow-up-right";
            case "video":
              return "ti ti-player-play-filled";
            case "backbutton":
              return "ti ti-arrow-left";
            case "svg":
              return "";
              case "svg":
                return "";
            default:
              return "ti ti-arrow-up-right"; 
          }
        }

        window.onmousemove = e => {
          const interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;
          const interactable_icon = (interacting && interactable.dataset.type != "svg");
          animateTrailer(e, interacting, interactable_icon, interactable);

          const icon = document.getElementById("trailer-icon");

          trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
          if(interacting) {
            icon.className = getTrailerClass(interactable.dataset.type);
          }
        }
        // for (
        //   let e = 0;
        //   e < document.querySelectorAll("[data-parallax]").length;
        //   e++
        // ) {
        // let s3 = document
        //               .querySelectorAll("[data-parallax]")
        //               [e3].getAttribute("data-parallax"),
        //             t3 =
        //               (document
        //                 .querySelectorAll("[data-parallax]")
        //                 [e3].parentNode.getBoundingClientRect().top +
        //                 document
        //                   .querySelectorAll("[data-parallax]")
        //                   [e3].parentNode.getBoundingClientRect().height /
        //                   2) /
        //                 window.innerHeight -
        //               0.5,
        //             o3 = window.innerHeight * s3 * t3;
        //           document.querySelectorAll("[data-parallax]")[
        //             e3
        //           ].style.transform = `translate3d(0, ${o3}px, 0)`;
        // }