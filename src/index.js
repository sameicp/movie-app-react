import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

/*
function Test() {
  const [rate, setLocalRating] = useState(0)
  return (
    <>
      <StarRating onSetRating={setLocalRating} maxRating={10} />
      <p>The movie is rated {rate} star </p>
    </>
  )
}
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
