import { useDrop } from "react-dnd";
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
    </div>
  );
};
export default ContentReceiver;
