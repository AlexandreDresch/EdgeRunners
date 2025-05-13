interface ButtonProps {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
}

export default function Button({
  id,
  title,
  containerClass,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-lg bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon && (
        <span className="absolute left-2 top-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:translate-x-0">
          {leftIcon}
        </span>
      )}

      <span className="relative inline-flex overflow-hidden font-barlow text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:translate-x-0">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
