import { FC, ImgHTMLAttributes } from "react";

const SvgImg: FC<ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <svg
      width="88"
      height="100"
      viewBox="0 0 88 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_232_56)">
        <path
          d="M7.31164 89.5242L0 0.167725L87.32 0.347294L79.5887 89.5242L43.9896 99.8322L7.31164 89.5242Z"
          fill="#1B73BA"
        />
        <path
          d="M43.9896 91.2024V8.67798L79.9485 8.79769L73.5361 82.6324L43.9896 91.2024Z"
          fill="#1C88C7"
        />
        <path
          d="M71.0186 19.2261H15.7021L17.2006 30.0129H43.4501L17.6203 41.1004L19.1181 51.5281H57.1749L55.7961 66.0909L42.9107 68.6084L31.2246 65.612L30.3254 57.3413H19.5977L21.0356 74.5419L44.0494 80.9543L66.1047 73.9426L68.9215 40.3209H45.6071L71.0179 29.7735L71.0186 19.2261Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_232_56">
          <rect width="87.32" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgImg;
