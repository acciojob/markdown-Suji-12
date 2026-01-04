import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [text, setText] = useState("# Hello world");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(text);
  }, [text]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="preview">
        <ReactMarkdown>{output}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
