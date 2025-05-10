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
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon && (
        <span className="absolute left-2 top-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:translate-x-0">
          {leftIcon}
        </span>
      )}

      <span className="relative inline-flex overflow-hidden font-semibold text-xs uppercase">
        <div>{title}</div>
      </span>

      {rightIcon && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:translate-x-0">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
