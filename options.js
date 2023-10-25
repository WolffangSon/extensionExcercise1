const hcInput = document.getElementById("hc-input");
const shrinkInput = document.getElementById("shrinkage");
const btnCalculate = document.getElementById("btnCalculate");
const resultText = document.getElementById("result");
function resetValues (){
  shrinkInput.value= ""
  hcInput.value = ""
}
btnCalculate.addEventListener("click", () => {
  const hcValue = parseFloat(hcInput.value);
  const shrinkValue = parseFloat(shrinkInput.value);

  if (!isNaN(hcValue) && !isNaN(shrinkValue)) {
    const result = hcValue - (hcValue * shrinkValue / 100);
   alert("There are: " + result + " FTEs")
   resetValues()

  } else {
   alert("Please insert valid numbers")
  }

});




