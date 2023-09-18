/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditorState, convertToRaw } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  background: #eee;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular",
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default function Index() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const content = convertToRaw(editorState.getCurrentContent());

  const handleLog = () => {
    console.log("content", content);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(content));
  };

  return (
    <>
      <div style={{ background: "#fff", marginBottom: 24 }}>
        <GlobalStyles />
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: [
              { text: "APPLE", value: "apple" },
              { text: "BANANA", value: "banana", url: "banana" },
              { text: "CHERRY", value: "cherry", url: "cherry" },
              { text: "DURIAN", value: "durian", url: "durian" },
              { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
              { text: "FIG", value: "fig", url: "fig" },
              { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
              { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
            ],
          }}
        />
      </div>
      <div>
        <button type="button" onClick={handleCopy} style={{ marginRight: 16 }}>
          Copy Object
        </button>
        <button type="button" onClick={handleLog}>
          Log
        </button>
      </div>
    </>
  );
}
