import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Here's sum WASM!</h1>
    <input id="number1" type="number" />
    <input id="number2" type="number" />
    <p id="sum">Type numbers in the inputs to sum them</p>
  </div>
`;

setupCounter(
  document.querySelector("#number1"),
  document.querySelector("#number2"),
  document.querySelector("#sum"),
);
