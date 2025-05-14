import { useRef } from "react";
import Button from "./button";
import { TiLocationArrow } from "react-icons/ti";
import { navbarLinks } from "../utils/constants";

export default function Navbar() {
  const navContainerRef = useRef<HTMLDivElement>(null);
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
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navbarLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="nav-hover-btn"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
