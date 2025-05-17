import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Button from "./button";
import { TiLocationArrow } from "react-icons/ti";
import { navbarLinks } from "../utils/constants";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

export default function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    if (scrollY === 0) {
      setIsNavbarVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (scrollY > lastScrollY) {
      setIsNavbarVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (scrollY < lastScrollY) {
      setIsNavbarVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(scrollY);
  }, [scrollY, lastScrollY]);
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavbarVisible ? 0 : -100,
      opacity: isNavbarVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavbarVisible]);

  const toggleAudio = () => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.pause();
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      } else {
        audioElementRef.current.play();
        setIsAudioPlaying(true);
        setIsIndicatorActive(true);
      }
    }
  };

  function handleSmoothScroll(path: string) {
    const id = path.startsWith("#") ? path.slice(1) : path;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <div className="flex items-center justify-center w-10 h-10 bg-transparent rounded-md">
              <img
                src="/images/logo.gif"
                alt="EdgeRunners Logo"
                className="w-full h-full object-cover rounded-md invert"
              />
            </div>

            <Button
              id="characters-button"
              title="Characters"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-white md:flex hidden items-center justify-center gap-1"
              onClick={() => {
                const element = document.getElementById("characters");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navbarLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="nav-hover-btn"
                  onClick={e => {
                  e.preventDefault();
                  handleSmoothScroll(link.path);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-0.5 cursor-pointer"
              onClick={toggleAudio}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/whos-ready-for-tomorrow-extended.mp3"
                loop
              ></audio>
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
