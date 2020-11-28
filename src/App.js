import React, { useState } from "react";
import "./styles.css";

const urlToDownload = "https://speed.hetzner.de/100MB.bin";

export default function App() {
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1> Download from React</h1>
      <small>Arquivo Binário</small>
      <p>
        <button
          onClick={() => {
            setDownload(urlToDownload);
            setCount((old) => old + 1);
          }}
        >
          Download
        </button>
      </p>
      <p>{download}</p>
      {download && (
        <iframe
          src={download + "?c=" + count}
          style={{ display: "none" }}
        ></iframe>
      )}
    </div>
  );
}
