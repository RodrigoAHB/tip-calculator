const bill = document.getElementById('bill');
const form = document.getElementById('tipInput');
const span = document.getElementById('tipOutput');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBillWithTip');

form.onchange = function () {
    span.textContent = `${form.value}%`;
    //calculate percentage of bill
    let tip = bill.value * (Number(form.value)/100);
    //calculate total bill
    let total = tip + Number(bill.value);
    tipAmount.value = tip.toFixed(2);
    totalBill.value = total.toFixed(2);


    document.querySelector('.results').style.display = 'block'
}