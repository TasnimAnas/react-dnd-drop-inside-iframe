import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { updateOuterLink } from "../features/IFrameLink/linkSlice";

const DropZone = () => {
  const dispatch = useDispatch();
  const { outerLink } = useSelector((state) => state.link);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "INSIDE_BTN",
    drop: ({ outerLink }) => {
      dispatch(updateOuterLink(outerLink));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: "120px",
        backgroundColor: isOver ? "green" : "skyblue",
        borderRadius: "10px",
        display: "grid",
        placeItems: "center",
      }}
    >
      {outerLink || "Drop Here"}
    </div>
  );
};

export default DropZone;
