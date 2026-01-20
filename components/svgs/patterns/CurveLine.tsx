import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const CustomIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 76 76"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      className={className}
    >
      <path
        d="M 58,18C 58,18 33,24 33,33C 33,42 46,41 46,45C 46,49 22,55 18,56L 19,59C 19,59 49,53 49,45C 49,37 36,40 36,33C 36,26 59,21 59,21L 58,18 Z"
        fill="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CustomIcon;
