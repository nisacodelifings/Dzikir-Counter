import React from "react";
import "./styles.css";

import Main from "./Main.js";

export default function App() {
  return (
    <div className="App">
      <div class="mt-6 mb-16 m-20">
        <h1 class="text-4xl text-blue-500 font-black">Dzikir Counter</h1>
        <h2 class="text-blue-200">
         for Mobile user Only by{" "}
          <a
            class="no-underline link-awesome"
            href="https://nisacodelifings.netlify.com"
          >
            Nisa
          </a>{" "}
        </h2>
      </div>
      <Main />
    </div>
  );
}
