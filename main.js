
function saveWithout401k(deposit, years) {
  const tax = 0.28 + 0.093; // 2017 federal + state rate married
  const rate = 1.04; // compound interest rate

  let total = 0.0;

  for (let i = 0; i < years; ++i) {
    total = total * rate + deposit * rate * (1 - tax); 
  }

  return total;
}

function depositBy401k(deposit, years) {
  const rate = 1.04; // compound interest rate

  let total = 0.0;
  for (let i = 0; i < years; ++i) {
    total = total * rate + deposit * rate; 
  }

  return total;
}

function calculate(){
  let deposit = parseFloat(document.getElementById("deposit").value);
  let years = parseFloat(document.getElementById("years").value);
  let salary = parseFloat(document.getElementById("salary").value);
  let employer = parseFloat(document.getElementById("employer").value) * 0.01;

  console.log("deposit: " + deposit);
  console.log("years: " + years);
  console.log("salary: " + salary);
  console.log("employer: " + employer);

  const penalty = 0.1; // 401k penalty if you withdraw before you are 59.

  let bySelf = depositBy401k(deposit, years);
  let byEmployer = depositBy401k(salary * employer, years);

  let output = document.getElementById("output");
  let t = bySelf + byEmployer;
  let selfResult = 0.0;
  let n = 0;
  const withdrawPerYear = 18650; // 2017 Tax Year Individual Income Tax Rate 10% federal rate for married
  const tax = 0.1;    // 2017 10% federal rate for married.
  const rate = 1.04;  // compound interest rate

  // Self deposit after penalty, tax and withdraw in n years.
  while (t > 0) {
    selfResult += withdrawPerYear * (1 - penalty) * (1 - tax);
    t -= withdrawPerYear;
    t = rate * t;
    ++n;
  }

  let t1 = byEmployer;
  let n1 = 0;
  let employerResult = 0.0;

  // Employer contribution after penalty, tax and withdraw in n1 years.
  while (t1 > 0) {
    employerResult += withdrawPerYear * (1 - penalty) * (1 - tax);
    t1 -= withdrawPerYear;
    t1 = rate * t1;
    ++n1;
  }
  let with401k = selfResult + employerResult;

  let without401k = saveWithout401k(deposit, years);
  without401k += employerResult;

  output.value = "Self Deposit: " + bySelf.toFixed(2).toString() + "\n" +
                 "Employer Deposit: " + byEmployer.toFixed(2).toString() + "\n" +
                 "Withdraw 401k after leaving US: " + n.toString() + " yrs, having " + with401k.toFixed(2).toString() + "\n" +
                 "Without 401k after leaving US: " + n1.toString() + " yrs, having " +  without401k.toFixed(2).toString() + "\n" +
                 "401K Earn: " + (with401k - without401k).toFixed(2).toString();
}

window.onload = function() {
  let okBtn = document.getElementById("okBtn");
  okBtn.addEventListener('click', calculate);
}