import { MouseEventHandler, useRef } from "react";

const useCursor = () => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const changePosition: MouseEventHandler<HTMLDivElement> = e => {
    if (cursor.current) {
      cursor.current.style.top = `${e.clientY}px`;
      cursor.current.style.left = `${e.clientX}px`;
    }
  };
  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    if (cursor.current) {
      const currentWidth = cursor.current.style.width.split("rem")[0];
      const currentHeight = cursor.current.style.height.split("rem")[0];
      if (currentHeight) console.log("mouse down: ", currentHeight);

      cursor.current.style.width = `${+currentWidth * 0.7}rem`;
      cursor.current.style.height = `${+currentHeight * 0.7}rem`;
    }
  };
  const handleRelease: MouseEventHandler<HTMLDivElement> = e => {
    if (cursor.current) {
      const currentWidth = Number(
        cursor.current.style.width.split("rem")[0]
      );
      const currentHeight = Number(
        cursor.current.style.height.split("rem")[0]
      );

      console.log("mouse up");
      cursor.current.style.width = `${currentWidth * 1.4}rem`;
      cursor.current.style.height = `${currentHeight * 1.4}rem`;
    }
  };
  return { cursor, changePosition, handleClick, handleRelease };
};

export default useCursor;
