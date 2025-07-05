import type {FC, ReactNode} from 'react'

interface ButtonProps {
  children: ReactNode;
  bgColor?: string; 
  hoverColor?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  bgColor = 'bg-blue-600',
  hoverColor = 'hover:bg-blue-700',
  onClick,
  className,
}) => {
  const base = 'text-white px-4 py-2 rounded transition';

  return (
    <button
      onClick={onClick}
      className={`${base} ${bgColor} ${hoverColor} ${className}`}
    >
      {children}
    </button>
  );
};






