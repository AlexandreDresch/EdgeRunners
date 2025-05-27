import { useEffect, useState, useRef } from "react";

const loadingMessages = [
  "Initializing neural interface . . .",
  "Calibrating optic implants . . .",
  "Connecting to Arasaka mainframe . . .",
  "Bypassing corporate ICE protocols . . .",
  "Scanning for NetWatch activity . . .",
  "Establishing secure darknet connection . . .",
  "Loading combat subsystems . . .",
  "Syncing with cyberware enhancements . . .",
  "Booting Kiroshi optical firmware . . .",
  "Accessing Night City database . . .",
];

export default function LoadingScreen() {
  const [percentage, setPercentage] = useState(0);
  const [loadingWidth, setLoadingWidth] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const animationDuration = 6000;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const messageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      let newPercentage = 0;
      if (progress <= 0.6) {
        newPercentage = Math.floor((progress / 0.6) * 66);
      } else {
        newPercentage = Math.floor(66 + ((progress - 0.6) / 0.4) * 34);
      }

      setPercentage(newPercentage);
      setLoadingWidth(newPercentage);

      if (progress >= 1) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 30);

    let messageIndex = 0;
    messageIntervalRef.current = setInterval(() => {
      if (messageIndex < loadingMessages.length) {
        setVisibleMessages((prev) => [...prev, loadingMessages[messageIndex]]);
        messageIndex++;
      } else {
        if (messageIntervalRef.current)
          clearInterval(messageIntervalRef.current);
      }
    }, animationDuration * 0.1);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (messageIntervalRef.current) clearInterval(messageIntervalRef.current);
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-4/5 flex-col animate-fadeIn">
        <div id="title" className="flex text-white">
          <p className="font-orbitron tracking-wider">LOADING</p>
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="ml-2 mt-1 animate-spin"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
          </svg>

          <p className="font-orbitron ml-auto">{percentage}%</p>
        </div>

        <div className="mt-1 flex items-center rounded border-b border-t border-white/50 p-0.5">
          <div
            className="h-2.5 bg-white transition-all duration-300 ease-in-out"
            style={{ width: `${loadingWidth}%` }}
          />
        </div>

        <div className="mt-2 flex h-5">
          <p className="font-orbitron text-white flex items-center">
            <span className="flex h-5 w-4 items-center justify-center rounded bg-white text-black">
              !
            </span>
            &nbsp; CAUTION, Do not turn off.
          </p>

          <div className="ml-auto md:mt-36 flex items-end">
            <div className="text-end hidden md:block text-xs text-neutral-400">
              {visibleMessages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
