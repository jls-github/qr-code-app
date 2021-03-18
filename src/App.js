import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";
import {Button} from 'react-bootstrap';

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
        <input className="form-control" id="qr-value" placeholder="enter your website"></input>
        <Button className="btn btn-primary" type="submit" onClick={(e) => handleClick(e)}>
          QRCode-ify
        </Button>
      </form>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
