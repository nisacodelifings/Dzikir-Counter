import React from "react";
import "./styles.css";

import Main from "./Main.js";

export default function App() {
  return (
    <div className="App">
      <div class="mt-5 mb-16">
        <h1 class="text-4xl text-blue-500">Dzikir Counter</h1>
        <h2 class="text-blue-200">
          Online Web Application by{" "}
          <a
            class="no-underline link-awesome"
            href="https://nisacodelifings.netlify.com"
          >
            nisa
          </a>{" "}
        </h2>
      </div>
      <Main />
    </div>
  );
}
