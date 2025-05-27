"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedTitle from "../animated-title";

gsap.registerPlugin(ScrollTrigger);

export default function NightCity() {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(imageRef.current, {
      transformOrigin: "center center",
      rotationY: -15,
      rotationX: 10,
      skewX: -5,
      skewY: -3,
      scale: 1.1,
    });

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top bottom",
        end: "center center",
        scrub: 0.5,
      },
    });

    mainTimeline.to(imageRef.current, {
      rotationY: 0,
      rotationX: 0,
      skewX: 0,
      skewY: 0,
      scale: 1,
      ease: "power1.inOut",
    });

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  }, []);

  return (
    <div id="night-city" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <h2 className="font-orbitron text-sm uppercase tracking-widest">
          Welcome to
        </h2>

        <AnimatedTitle
          title="<b>N</b>ight City"
          containerClassName="mt-5 text-center !text-black"
        />

        <div className="about-subtext">
          <p>
            Megacorp towers flash holo-ads over smoggy streets. Edgerunners and
            gangers hustle past synth-food stalls.
          </p>
          <p className="text-gray-500">
            Hovercars hum, sirens wail. Rain reflects the chrome-lit chaos of
            ambition and betrayal.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div
          className="mask-clip-path about-image overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div ref={imageRef} className="size-full">
            <img
              src="/images/night-city.jpg"
              alt="Night City"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
