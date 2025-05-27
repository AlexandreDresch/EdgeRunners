import { useEffect, useRef, useState } from "react";
import Button from "../button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LoadingScreen from "../loading-screen";
import VideoPreview from "../video-preview";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalVideos = 3;

  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const previewVideo = document.getElementById(
      "preview-video"
    ) as HTMLVideoElement;

    if (!previewVideo) return;

    const transitionVideo = previewVideo.cloneNode(true) as HTMLVideoElement;
    transitionVideo.id = "transition-video";
    transitionVideo.className =
      "absolute-center absolute z-30 size-64 object-cover object-center";
    transitionVideo.play();

    const videoFrame = document.getElementById("video-frame");
    if (videoFrame) {
      videoFrame.appendChild(transitionVideo);
    }

    gsap.to(transitionVideo, {
      width: "100%",
      height: "100%",
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        if (mainVideoRef.current) {
          mainVideoRef.current.src = getVideoSrc(upcomingVideoIndex);
          mainVideoRef.current.load();
          mainVideoRef.current.play();
        }

        if (videoFrame && transitionVideo) {
          videoFrame.removeChild(transitionVideo);
        }

        setCurrentIndex(upcomingVideoIndex);

        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      },
    });

    gsap.to(".preview-container", {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    if (loadedVideos >= 2) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useEffect(() => {
    const preloadVideos = async () => {
      const videoPromises = [];

      for (let i = 1; i <= totalVideos; i++) {
        const videoSrc = getVideoSrc(i);
        const promise = new Promise<void>((resolve) => {
          const video = document.createElement("video");
          video.src = videoSrc;
          video.muted = true;
          video.preload = "auto";

          video.onloadeddata = () => {
            setLoadedVideos((prev) => prev + 1);
            resolve();
          };

          video.onerror = () => {
            resolve();
          };

          video.load();
        });

        videoPromises.push(promise);
      }

      try {
        await Promise.all(videoPromises);
      } catch (error) {
        console.error("Error preloading videos:", error);
      }
    };

    preloadVideos();
  }, []);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index: number) => {
    return `videos/hero-${index}.mp4`;
  };

  useEffect(() => {
    if (!isTransitioning) {
      gsap.to(".preview-container", {
        opacity: 1,
        scale: 0.75,
        duration: 0.5,
        ease: "power2.inOut",
      });

      if (previewVideoRef.current) {
        const nextPreviewIndex = (currentIndex % totalVideos) + 1;
        previewVideoRef.current.src = getVideoSrc(nextPreviewIndex);
        previewVideoRef.current.load();
        previewVideoRef.current.play();
      }
    }
  }, [isTransitioning, currentIndex]);

  const handleNavigate = () => {
    window.open("https://www.netflix.com/br-en/title/81054853", "_blank");
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <LoadingScreen />
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-bright-aqua"
      >
        <video
          ref={mainVideoRef}
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          playsInline
          id="main-video"
          className="absolute left-0 top-0 z-10 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <div className="mask-clip-path absolute-center absolute z-50 size-72 cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 opacity-0 hover:opacity-100">
          <VideoPreview>
            <div
              onClick={handleMiniVideoClick}
              className="preview-container origin-center transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: `scale(${isTransitioning ? 0.5 : 0.75})`,
              }}
            >
              <video
                ref={previewVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                autoPlay
                playsInline
                id="preview-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </VideoPreview>
        </div>

        <h1 className="hero-heading special-font absolute bottom-5 right-5 z-40 text-alabaster">
          <b>E</b>dge<b>R</b>unners
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-alabaster">
              <b>C</b>yberpunk
            </h1>

            <p className="mb-5 max-w-64 font-barlow text-alabaster tracking-widest">
              Neon Dreams <br /> Night City
            </p>

            <Button
              id="watch-now"
              title="Watch Now"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
              onClick={() => {
                handleNavigate();
              }}
            />
          </div>
        </div>
      </div>
      <h1 className="hero-heading special-font absolute bottom-5 right-5 text-black">
        <b>E</b>dge<b>R</b>unners
      </h1>
    </div>
  );
}
