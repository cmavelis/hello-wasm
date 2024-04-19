export function setupCounter(input1, input2, sumDisplayElement) {
  let number1 = 0;
  let number2 = 0;
  const setSum = () => {
    const sum = number1 + number2;
    sumDisplayElement.innerHTML = `sum is ${sum}`;
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
