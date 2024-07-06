import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateLink } from "../features/IFrameLink/linkSlice";

const LinkButton = ({ link }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BTN",
    item: { link },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const dispatch = useDispatch();
  return (
    <div
      ref={drag}
      style={{
        backgroundColor: isDragging ? "red" : "blue",
        padding: "10px",
        borderRadius: "5px",
        color: "white",
        cursor: "move",
      }}
      onClick={() => {
        dispatch(updateLink(link));
      }}
    >
      {link}
    </div>
  );
};
export default LinkButton;
