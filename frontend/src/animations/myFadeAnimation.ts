import React from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const fadeX = (
    element: any,
    delay: number,
    duration: number,
    stagger: number,
    start: number,
    end: number,
    triggerOffset: string,
    ease: string,
) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            x: start
        },
        {
            opacity: 1,
            x: end,
            duration: duration,
            delay: delay,
            ease: ease,
            stagger: stagger,
            scrollTrigger:
            {
                trigger: element,
                start: `${triggerOffset}vh center`,
                end: "bottom center",
            },
        }
    );
}

export const fadeY = (
    element: any,
    delay: number,
    duration: number,
    stagger: number,
    start: number,
    end: number,
    triggerOffset: string,
    ease: string,
) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            y: start
        },
        {
            opacity: 1,
            y: end,
            duration: duration,
            delay: delay,
            ease: ease,
            stagger: stagger,
            scrollTrigger:
            {
                trigger: element,
                start: `${triggerOffset}vh center`,
                end: "bottom center",
            },
        }
    );
}

export const simpleFade = (
    element: any,
    delay: number,
    duration: number,
    stagger: number,
    triggerOffset: string,
    ease: string,
) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: duration,
            delay: delay,
            ease: "none",
            stagger: stagger,
            scrollTrigger:
            {
                trigger: element,
                start: "-=250vh center",
                end: "bottom center",
            },
        }
    );
}

export const popElement = (element: any, delay: number, duration: number, stagger: number, triggerOffset: string) => {
    gsap.fromTo(
        element,
        {
            scale: 0,
            rotate: 90
        },
        {
            scale: 1,
            rotate: 0,
            duration: duration,
            delay: delay,
            ease: "elastic.out(0.1, 0.1)",
            scrollTrigger:
            {
                trigger: element,
                start: `${triggerOffset} center`,
                end: "bottom center",
            },
            stagger: stagger
        }
    );
}