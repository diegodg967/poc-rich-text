import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "draft-js/dist/Draft.css";

import DraftJsRichTextEditor from "./components/draft-js-rich-text-editor/DraftJsRichTextEditor";
import LexicalRichTextEditor from "./components/lexical-rich-text-editor/LexicalRichTextEditor";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/draft-js" style={{ marginRight: 24 }}>
                Draft.js
              </Link>
              <Link to="/lexical">Lexical</Link>
            </div>
          }
        />
        <Route path="/draft-js" element={<DraftJsRichTextEditor />} />
        <Route path="/lexical" element={<LexicalRichTextEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
