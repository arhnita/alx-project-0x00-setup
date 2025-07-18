import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  styles,
  size = "medium",
  shape = "rounded-md",
  className = '',
  onClick
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
     "rounded-full": "rounded-full",
     "rounded-lg": "rounded-lg"
  };

  const baseClasses =
    "border bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors cursor-pointer";

const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className} ${styles}`;

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button
