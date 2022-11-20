import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useTransition = () => {
  useEffect(() => {
    // //==========================================================
    gsap.utils.toArray(".cardCont").forEach(function (card) {
      // const q = gsap.utils.selector(card);
      const front = card.querySelector(".cardFront");
      const back = card.querySelector(".cardBack");

      gsap.set(card, { perspective: 1000 });
      gsap.set(back, { rotationX: -180 });

      const tl = gsap
        .timeline({ paused: true })
        .to(front, { duration: 0.5, rotateX: 180 })
        .to(back, { duration: 0.5, rotationX: 0 }, 0);

      card.addEventListener("mouseenter", function () {
        tl.play();
      });
      card.addEventListener("mouseleave", function () {
        tl.reverse();
      });
    });
  });
};
