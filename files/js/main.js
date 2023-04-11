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

        function isMobileDevice() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
          return check;
      };

      if (isMobileDevice()) {
        const trail = document.getElementById('trailer');
        const rumble = document.getElementById('rumble');
        trail.style.display = 'none';
        rumble.style.display = 'none';
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