import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";
import { Button, Container, Form, Card } from "react-bootstrap";

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
    <div className="background">
      <div className="background-picture"></div>
      <div className="background-overlay"></div>
      <Container className="my-5">
        <Card className="card h-75 p-4">

        <h1 className="text-center my-2" >QR Code-ify</h1>
        <h3 className="my-3">Enter your Website</h3>
        <Form className="d-flex justify-content-center flex-column">
          <input
            className="form-control"
            id="qr-value"
            placeholder="enter your website"
            ></input>
          <Button
            className="btn btn-primary my-2 float-center"
            type="submit"
            onClick={(e) => handleClick(e)}
            >
            QRCode-ify
          </Button>
        </Form>
        <canvas id="canvas" style={!showCode ? {display: "none"} : null}></canvas>
        </Card>
      </Container>
    </div>
  );
}

export default App;
