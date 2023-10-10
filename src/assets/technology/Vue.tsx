import { FC, ImgHTMLAttributes } from "react";

const Vue: FC<ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_567_67)">
        <path
          d="M20.5642 7.33838L38.5345 7.34541L50.2814 26.8438L61.9869 7.34697L79.9416 7.34229L50.3712 58.6353L20.5642 7.33838Z"
          fill="#35495E"
        />
        <path
          d="M0.964966 7.47568L20.5486 7.34131L50.3532 58.6374L79.9259 7.34443L99.5431 7.36475L50.3509 91.7866L0.964966 7.47568Z"
          fill="#41B883"
        />
      </g>
      <defs>
        <clipPath id="clip0_567_67">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0.254028)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Vue;
