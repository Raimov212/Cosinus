import { FC, ImgHTMLAttributes } from "react";

const Brain: FC<ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_410_18748"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="33"
        height="33"
      >
        <rect
          x="0.945457"
          y="0.585938"
          width="32"
          height="32"
          fill="url(#pattern0)"
        />
      </mask>
      <g mask="url(#mask0_410_18748)">
        <rect x="0.945457" y="0.585938" width="32" height="32" fill="white" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_410_18748" transform="scale(0.00195312)" />
        </pattern>
        <image id="image0_410_18748" width="512" height="512" />
      </defs>
    </svg>
  );
};

export default Brain;
