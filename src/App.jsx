import { createRoot } from "react-dom/client";
import Portfolio from "./Portfolio";

const App = () => {
  return <Portfolio />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
