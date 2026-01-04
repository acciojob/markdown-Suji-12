// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app" style={{ display: "flex", height: "100vh" }}>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          width: "50%",
          padding: "20px",
          fontSize: "16px",
          border: "none",
          outline: "none",
          resize: "none",
        }}
      />

      <div
        className="preview"
        style={{
          width: "50%",
          padding: "20px",
          backgroundColor: "#f0f2f5",
          overflowY: "auto",
        }}
      >
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
