import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

interface AnimatedTitleProps {
  title: string;
  containerClassName?: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({
  title,
  containerClassName,
}: AnimatedTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx("animated-title", containerClassName)}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className={`flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3`}
        >
          {line.split(" ").map((word, index) => (
            <span
              key={index}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
}
