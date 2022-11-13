import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useTransition = () => {
  useEffect(() => {
    let container = document.getElementById("wrapper");

    gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "SlowMo.ease.config(0.7,0.7,0.7m0.7, false)",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth,
      },
    });

    gsap.from("#team", {
      x: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: "#team",
        pin: true,
        scrub: 1,
        end: "+=300",
      },
    });
    // let sections = gsap.utils.toArray(".panel");
    // sections.forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     // pin: true,
    //     // scrub: 50,
    //     // snap: 1 / (sections.length - 1), // snap whole page to the closest section!
    //     pinSpacing: false,
    //   });
    // });
  });
};
