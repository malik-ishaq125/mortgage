const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const term = document.getElementById("term");
const btn = document.getElementById("btn");
const rpt = document.getElementById("rpt");
const int = document.getElementById("int");

function calculate() {
  const principal = parseFloat(amount.value);
  const interestRate = parseFloat(rate.value) / 100 / 12;
  console.log(interestRate);
  const numberOfPayments = parseFloat(term.value) * 12;
  const monthlyPayment =
    (principal * interestRate) /
    (1 - Math.pow(1 + interestRate, -numberOfPayments));
  if (rpt.checked) {
    const totalPayment = monthlyPayment * numberOfPayments;
    alert(`Total Payment: $${totalPayment.toFixed(2)}`);
  }
  if (int.checked) {
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    alert(`Total Interest: $${totalInterest.toFixed(2)}`);
  }
}

btn.addEventListener("click", calculate);


// 3 > 2 ? console.log('true') : console.log("false");

// let age = 17;

// let text = (age < 18) ? "minor" : "adult";

// text == "minor" ? console.log("you can't use the site because you're a " + text) : console.log("you're free to continue");

