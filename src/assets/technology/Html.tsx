import { FC, ImgHTMLAttributes } from "react";

const CssFC: FC<ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <svg
      width="88"
      height="100"
      viewBox="0 0 88 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_567_55)">
        <path
          d="M7.63165 89.5249L0.320007 0.166992L87.64 0.346562L79.9087 89.5249L44.3096 99.8329L7.63165 89.5249Z"
          fill="#E34F26"
        />
        <path
          d="M44.3096 91.2031V8.67725L80.2685 8.79696L73.8561 82.6324L44.3096 91.2031Z"
          fill="#EF652A"
        />
        <path
          d="M70.3802 29.2939L71.3985 18.386H16.082L19.1382 51.8281H57.3146L55.8175 66.0916L43.5913 69.3872L31.1855 65.7916L30.5264 57.2814H19.5579L21.0564 74.6616L43.5906 80.9543L66.3044 74.6616L69.3605 40.7406H29.2673L28.1286 29.2939H70.3802Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_567_55">
          <rect
            width="87.32"
            height="100"
            fill="white"
            transform="translate(0.320007)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CssFC;
