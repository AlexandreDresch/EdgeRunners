export default function Footer() {
  return (
    <footer className="w-screen py-10 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex justify-center gap-4 md:justify-start">
          <div className="flex items-center justify-center w-10 h-10 bg-transparent rounded-md">
            <img
              src="/images/logo.gif"
              alt="EdgeRunners Logo"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/alexandre-dresch"
          className="text-center text-sm font-normal flex flex-1 hover:underline cursor-pointer"
        >
          Developed by Alexandre Dresch
        </a>

        <p className="text-center text-sm font-normal md:text-left">
          Not affiliated with CD Projekt Red or Netflix. <br />
          All trademarks belong to their owners.
        </p>
      </div>
    </footer>
  );
}
