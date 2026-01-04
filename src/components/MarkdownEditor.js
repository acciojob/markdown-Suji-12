import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </>
  );
}

export default MarkdownEditor;

