// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
 
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

const App = () => {
  return <div>
    <h1>Hi there!</h1>
  </div>
};

root.render(<App />);