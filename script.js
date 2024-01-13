const btnEl = document.getElementById("calculate")
const total = document.getElementById("total")
const billAmount = document.getElementById("bill")
const tipPercentage = document.getElementById("tip")

function calculateTotal() {
  const billValue = billAmount.value
  const tipValue = tipPercentage.value
  const totalValue = billValue * (1 + tipValue / 100)
  total.innerText = totalValue.toFixed(2)
}

btnEl.addEventListener("click", calculateTotal)
