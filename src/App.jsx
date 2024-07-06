import "./App.css";
import Iframe from "./components/Iframe";
import Links from "./components/Links";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Links />
      <Iframe />
    </div>
  );
}

export default App;

