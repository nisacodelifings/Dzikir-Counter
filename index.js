import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sw.js";
import "./manifest.json"

 // ServiceWorker Registration
 if('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
          
      }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
      });
  });
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>,
  rootElement
);
