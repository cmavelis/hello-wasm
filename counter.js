import { wasmBrowserInstantiate } from "./wasm-loader.js";

const wasmModule = await wasmBrowserInstantiate("./hello-world.wasm");

export function setupCounter(input1, input2, sumDisplayElement) {
  let number1 = 0;
  let number2 = 0;
  const setSum = () => {
    const sum = wasmModule.instance.exports.add(number1, number2);
    sumDisplayElement.innerHTML = `wasm sum is ${sum}`;
  };

  input1.addEventListener("input", (e) => {
    number1 = Number(e.target.value);
    setSum();
  });
  input2.addEventListener("input", (e) => {
    number2 = Number(e.target.value);
    setSum();
  });
}
