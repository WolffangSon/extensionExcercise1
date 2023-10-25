const hcInput = document.getElementById("hc-input");
const shrinkInput = document.getElementById("shrinkage");
const btnCalculate = document.getElementById("btnCalculate");
const resultText = document.getElementById("result");

btnCalculate.addEventListener("click", () => {
  const hcValue = parseFloat(hcInput.value);
  const shrinkValue = parseFloat(shrinkInput.value);

  if (!isNaN(hcValue) && !isNaN(shrinkValue)) {
    const result = hcValue - (hcValue * shrinkValue / 100);
   alert("Son: " + result + " FTEs")

  } else {
   alert("Ingresa valores numéricos válidos")
  }
});




