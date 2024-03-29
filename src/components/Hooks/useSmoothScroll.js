import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".parent"),
      smooth: true,
      initPosition: { x: 0, y: 0 },
      resetNativeScroll: false,
      getDirection: true,
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", (instance) => {
      ScrollTrigger.update();

      // Add direction to DOM
      document.documentElement.setAttribute(
        "data-scrolling",
        instance.direction
      );
    });

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".parent", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".parent").style.transform
        ? "transform"
        : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    ScrollTrigger.defaults({
      scroller: ".parent",
    });
    // --- SETUP END ---
    const anchorLinks = document.querySelectorAll(
      "a[href^=\\#]:not([href$=\\#])"
    );

    anchorLinks.forEach((anchorLink) => {
      let hashval = anchorLink.getAttribute("href");
      let target = document.querySelector(hashval);

      anchorLink.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        anchorLinks.forEach((anchorLink) => {
          anchorLink.classList.remove("active");
        });

        e.target.classList.add("active");

        locoScroll.scrollTo(target);
      });
    });
  }, []);
};
