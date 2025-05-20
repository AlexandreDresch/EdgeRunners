import type React from "react";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import clsx from "clsx";

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description: string;
  className?: string;
  invert?: boolean;
}

export default function BentoCard({
  src,
  title,
  description,
  className = "",
  invert = false,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    gsap.set(cardRef.current, {
      transformPerspective: 1000,
      transformStyle: "preserve-3d",
    });

    gsap.set(imageRef.current, {
      transformStyle: "preserve-3d",
      z: 0,
    });

    gsap.set(contentRef.current, {
      transformStyle: "preserve-3d",
      z: 0,
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);

    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      z: 30,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(cardRef.current, {
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      z: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(contentRef.current, {
      z: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering || !cardRef.current) return;

    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;

    gsap.to(cardRef.current, {
      rotationY: rotateY,
      rotationX: rotateX,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(contentRef.current, {
      x: -rotateY * 2,
      y: -rotateX * 2,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="relative h-full w-full overflow-hidden rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      {invert ? (
        <>
          <div
            ref={contentRef}
            className="absolute top-0 left-0 z-10 p-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="mb-2 font-tomorrow text-2xl text-white md:text-3xl">
              {title}
            </h2>
            <p className="max-w-md font-barlow text-sm text-white/70 md:text-base">
              {description}
            </p>
          </div>
          <div
            ref={imageRef}
            className={clsx("absolute h-full left-1/2 top-1/2", className)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={src}
              alt={typeof title === "string" ? title : "Character"}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </>
      ) : (
        <>
          <div
            ref={imageRef}
            className={clsx("absolute h-full left-1/2 top-0", className)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={src}
              alt={typeof title === "string" ? title : "Character"}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div
            ref={contentRef}
            className="absolute bottom-0 left-0 z-10 p-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="mb-2 font-tomorrow text-2xl text-white md:text-3xl">
              {title}
            </h2>
            <p className="max-w-md font-barlow text-sm text-white/70 md:text-base">
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
