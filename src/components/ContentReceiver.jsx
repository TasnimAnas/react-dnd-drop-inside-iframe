import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateLink } from "../features/IFrameLink/linkSlice";

const ContentReceiver = ({ children }) => {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BTN",
    drop: ({ link }) => {
      dispatch(updateLink(link));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{}, drag] = useDrag(
    () => ({
      type: "INSIDE_BTN",
      item: { outerLink: children },
    }),
    [children]
  );

  return (
    <div
      ref={drop}
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "yellow",
        color: "black",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
      {isOver && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            zIndex: "1",
            backgroundColor: "green",
            display: "grid",
            placeItems: "center",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Drop Here
        </div>
      )}

      <div
        ref={drag}
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          display: "grid",
          placeItems: "center",
        }}
      >
        Drag this
      </div>
    </div>
  );
};
export default ContentReceiver;
