import "./styles/globals.css";
import * as React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <div className="App">
    <h1 className="Greeting">
      <span className="message">헬로</span>{" "}
      <span className="libraryName">리액트</span>
    </h1>
    <button type="button" className="Button">
      시작하기
    </button>
    <button type="button" className="Button">
      <abbr title="Application programming Interface">API</abbr> 참고하기
    </button>
  </div>
);
