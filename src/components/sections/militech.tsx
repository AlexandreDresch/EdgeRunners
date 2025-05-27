import { useRef } from "react";
import AnimatedTitle from "../animated-title";
import gsap from "gsap";

export default function Militech() {
  const frameRef = useRef(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const { clientX, clientY } = e;
    const element = frameRef.current as HTMLImageElement | null;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section id="militech" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center pb-24">
        <p className="font-orbitron text-sm uppercase md:text-base">
          Night City's merciless weapons juggernaut.
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="<b>M</b>ilitech"
            containerClassName="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="/images/militech.webp"
                  alt="Militech Tower"
                  className="object-contain"
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                />
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-96 flex w-full justify-center px-8">
          <div className="flex h-full w-fit flex-col items-center">
            <p className="w-full max-w-7xl text-justify font-tomorrow text-violet-50">
              Militech is a global leader in military technology and
              manufacturing, specializing in advanced weaponry, cybernetic
              enhancements, and tactical solutions. With a reputation for
              innovation and reliability, Militech provides cutting-edge
              equipment to military forces and private security firms worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
