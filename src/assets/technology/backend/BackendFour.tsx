import { FC, ImgHTMLAttributes } from "react";

const BackendFour: FC<ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="20" fill="#ffca28" />
      <polygon
        fill="#fff"
        points="30.4,32.7 28.6,30.3 32,27.75 32,20.25 28.6,17.7 30.4,15.3 35,18.75 35,29.25"
      />
      <polygon
        fill="#fff"
        points="17.6,32.7 13,29.25 13,18.75 17.6,15.3 19.4,17.7 16,20.25 16,27.75 19.4,30.3"
      />
      <circle cx="19.5" cy="23.5" r="1.5" fill="#fff" />
      <circle cx="24" cy="23.5" r="1.5" fill="#fff" />
      <circle cx="28.5" cy="23.5" r="1.5" fill="#fff" />
    </svg>
  );
};

export default BackendFour;
