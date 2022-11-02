import { gsap } from "gsap";
import { useEffect } from "react";
import classes from "../Loading/Loading.module.css"

export const useLoadingAnimation = ()=>{ useEffect(() => {
    //initiate timeline
    console.log("asAS");
    const tl = gsap.timeline({
      onComplete: () => {
        let element = document.querySelector(".cc1");
        element.parentNode.removeChild(element);
      },
      autoRemoveChildren: true,
    });

    //animations
    tl.to(`.${classes["block-1"]}`, {
      duration: 1.5,
      delay: 1.6,
      ease: "Expo.easeOut",
      top: "-100%",
      overflow: "hidden",
    })
      .from(
        "body",
        {
          duration: 1.6,
          overflowY: "hidden",
          scrub: true,
        },
        0
      )
      .from(
        "#inf",
        {
          duration: 1,
          y: "100%",
          opacity: 0,
          ease: "power1.out",
        },
        0
      );
  }, []);
  
}