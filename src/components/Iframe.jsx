import { useEffect, useRef, useState } from "react";
import { DndProvider, useDragDropManager } from "react-dnd";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import store from "../app/store";
import ContentReceiver from "./ContentReceiver";

const Iframe = () => {
  const { link } = useSelector((state) => state.link);
  const [reactRoot, setReactRoot] = useState(null);
  const manager = useDragDropManager();
  const iframeRef = useRef();

  const oniFrameLoad = () => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      const win = doc.defaultView || doc.parentView;
      const divInIframe = doc.getElementById("drop-zone");
      let root = reactRoot;
      if (divInIframe && !root) {
        root = ReactDOM.createRoot(divInIframe);
        setReactRoot(root);
      }
      const backend = manager.getBackend();
      backend.addEventListeners(win);
      root?.render(
        <Provider store={store}>
          <DndProvider backend={backend}>
            <ContentReceiver>{link}</ContentReceiver>
          </DndProvider>
        </Provider>
      );
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", oniFrameLoad);
    }
    return () => {
      if (iframe) {
        iframe.removeEventListener("load", oniFrameLoad);
      }
    };
  }, []);

  useEffect(() => {
    oniFrameLoad();
  }, [link]);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "darkgrey",
        borderRadius: "15px",
        padding: "40px",
      }}
    >
      <iframe
        ref={iframeRef}
        src={"iframe-page.html"}
        frameBorder="0"
        style={{
          overflow: "hidden",
          height: "50%",
          width: "50%",
        }}
      ></iframe>
    </div>
  );
};
export default Iframe;
