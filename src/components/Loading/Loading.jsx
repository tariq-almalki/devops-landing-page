import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useEffect, useRef } from 'react';
import './Loading.css';

gsap.registerPlugin(MotionPathPlugin);

export const Loading = props => {
    const comp = useRef('#root');

    useEffect(() => {
        // var textWrapper = document.querySelector(".ml6");
        // textWrapper.innerHTML = textWrapper.textContent.replace(
        //   /\S/g,
        //   "<span class='letter'>$&</span>"
        // );

        const ctx = gsap.context(() => {
            // anime
            //   .timeline()
            //   .add({
            //     targets: ".ml6 .letter",
            //     translateY: [100, 0],
            //     translateZ: 0,
            //     easing: "easeOutExpo",
            //     duration: 2000,
            //     delay: (el, i) => 1800 + 40 * i,
            //   })
            //   .add({
            //     targets: ".ml6 .letter",
            //     y: "-100%",
            //     easing: "easeOutExpo",
            //     duration: 2000,
            //     delay: (el, i) => 1800 + 40 * i,
            //   });

            gsap.to('.block-1', {
                duration: 1.5,
                delay: 1.6,
                ease: 'Expo.easeOut',
                // y: "-100%",
                top: '-100%',
                overflow: 'hidden',
            });

            gsap.from('#inf', {
                duration: 1,
                y: '100%',
                opacity: 0,
                ease: 'power1.out',
            });
            document.addEventListener('DOMContentLoaded', (e, ev) => {
                console.log(ev);
            });
            let bo = document.querySelector('body');
            gsap.from(bo, {
                duration: 1.6,
                overflowY: 'hidden',
            });

            //   gsap.to(".cc", {
            //     duration: 1.2,
            //     delay: 3,
            //     y: "-100%",
            //     ease: "Expo.easeOut",
            //   });
        }, comp);

        return () => {
            ctx.revert();
        };
    }, [comp]);

    return (
        <div className='cc1' ref={comp}>
            {/* <div className='cc'> */}
            {/* <h1 class='ml6'>DevOps</h1> */}
            <div className='block-1'>
                <svg
                    id='inf'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    style={{
                        margin: '0',
                        background: '#0f0f0f',
                        display: 'block',
                    }}
                    width='400px'
                    height='400px'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMidYMid'
                >
                    <path
                        id='path'
                        fill='none'
                        stroke='white'
                        stroke-width='8'
                        stroke-dasharray='42.76482137044271 42.76482137044271'
                        d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z'
                        stroke-linecap='round'
                        style={{
                            transform: 'scale(0.9)',
                            'transform-origin': '50px 50px',
                        }}
                    >
                        <animate
                            attributeName='stroke-dashoffset'
                            repeatCount='indefinite'
                            dur='2.5s'
                            keyTimes='0;1'
                            values='0;256.58892822265625'
                        >
                            devops
                        </animate>
                    </path>
                </svg>
            </div>
        </div>
        // </div>
    );
};
