import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useTransition = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    sections.forEach((panel, i) => {
      console.log(panel);
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        // scrub: 50,
        snap: 1 / (sections.length - 1), // snap whole page to the closest section!
        pinSpacing: false,
      });
    });
  });
};
