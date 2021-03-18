import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [showCode, setShowCode] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if (!showCode) {
      setShowCode(true);
    }
    QRCode.toCanvas(
      document.getElementById("canvas"),
      document.getElementById("qr-value").value,
      (error) => {
        if (error) console.error(error);
      }
    );
  };

  return (
    <div>
      <h1>Enter your qr code</h1>
      <form>
        <input id="qr-value" placeholder="enter your website"></input>
        <button type="submit" onClick={(e) => handleClick(e)}>
          QRCode-ify
        </button>
      </form>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
