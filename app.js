const calculateBillTip = () => {
  let billamt = document.querySelector(".billAmt").value;
  let serviceQual = document.querySelector(" .service").value;
  let splitamt = document.querySelector(".splitAmt").value;

  // make sure the inputs are entered
  if (billamt === "" || billamt === 0 || serviceQual == 0) {
    alert("Please enter the values");
    return;
  }
  // make sure the umber of people splitting the amt should be 1 or more
  if (splitamt === "" || splitamt <= 1) {
    // alert("please enter atleast the appropriate number of people splitting the bill")
    // return;
    splitamt = 1;
    document.querySelector(".total").style.display = "none";
  } else {
    document.querySelector(".total").style.display = "block";
  }

  let calcTotal = (billamt * serviceQual) / splitamt;
  calcTotal = Math.round(calcTotal * 100) / 100; //  rounding off to 2 decimal places
  calcTotal = calcTotal.toFixed(2); // displayes two digits after the decimal places

  document.querySelector(".tip").innerHTML = calcTotal;
};

// display the tip amount only on display
document.querySelector(".total").style.display = "block";

document.querySelector(".calc").onclick = function(e) {
  e.preventDefault();
  calculateBillTip();
};
// or

// const button = document.querySelector(".calc");
// button.addEventListener("click", function(e) {
//   e.preventDefault();
//  calculateBillTip();
// });
