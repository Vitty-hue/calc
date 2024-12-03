const main = () => {
  let inputState;
  let formulaState = [];
  let resultState;
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const mltp = document.getElementById("mltp");
  const dvd = document.getElementById("dvd");
  const input = document.getElementById("input");
  const resultContainer = document.getElementById("result");
  const sum = document.getElementById("sum");
  const regex = /[^\d]/;
  console.log(input.value);
  input.addEventListener("input", (event) => {
    const value = event.target.value;
    inputState = value;
  });
  [plus, minus, mltp, dvd].forEach((el) => {
    el.addEventListener("click", (event) => {
      if (inputState) {
        formulaState.push(inputState);
        if (!resultState) {
          resultState = Number(inputState);
          inputState = "";
          formulaState.push(event.target.innerText);
          input.value = "";
          resultContainer.innerText = resultState;
        } else {
          let newResult;
          switch (formulaState[1]) {
            case "+":
              newResult = Number(formulaState[0]) + Number(formulaState[2]);
              break;
            case "-":
              newResult = Number(formulaState[0]) - Number(formulaState[2]);
              break;
            case "*":
              newResult = Number(formulaState[0]) * Number(formulaState[2]);
              break;
            case "/":
              newResult = Number(formulaState[0]) / Number(formulaState[2]);
              break;
          }
          resultState = newResult;
          resultContainer.innerText = newResult;
          input.value = "";
          formulaState = [newResult, event.target.innerText];
        }
        console.log({ inputState, formulaState, resultState });
      }
    });
  });
  sum.addEventListener("click", (event) => {
    let newResult;
    formulaState.push(inputState);
    console.log(formulaState);
    switch (formulaState[1]) {
      case "+":
        newResult = Number(formulaState[0]) + Number(formulaState[2]);
        break;
      case "-":
        newResult = Number(formulaState[0]) - Number(formulaState[2]);
        break;
      case "*":
        newResult = Number(formulaState[0]) * Number(formulaState[2]);
        break;
      case "/":
        newResult = Number(formulaState[0]) / Number(formulaState[2]);
        break;
    }
    resultState = "";
    resultContainer.innerText = newResult;
    input.value = "";
    formulaState = [];
  });
};
main();
