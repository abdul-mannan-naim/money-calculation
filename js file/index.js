//  income input er value---
function incomeNumber() {
    const incomeInput = document.getElementById('income-total');
    const incomeQuantity = parseFloat(incomeInput.value);
    // incomeInput.value = '';
    return incomeQuantity
}
// ration input er value---
function rationNumber() {
    const rationInput = document.getElementById("ration-total");
    const rationQuantity = parseFloat(rationInput.value);
    // rationInput.value = '';
    return rationQuantity
}
// medicine input er value---
function medicineNumber() {
    const medicineInput = document.getElementById("medicine-total");
    const medicineQuantity = parseFloat(medicineInput.value);
    // medicineInput.value = '';
    return medicineQuantity
}
// raggery input er value---
function raggeryNumber() {
    const raggeryInput = document.getElementById("raggery-total");
    const raggeryQuantity = parseFloat(raggeryInput.value);
    // raggeryInput.value = '';
    return raggeryQuantity
}
// Calculate button e click korle ja gotbe---
function expensesTotal() {
    const rationQuantity = rationNumber();
    const medicineQuantity = medicineNumber();
    const raggeryQuantity = raggeryNumber();
    // Total expenses
    const expensesQuantity = rationQuantity + medicineQuantity + raggeryQuantity;
    const incomeQuantity = incomeNumber()
    // balance e ja thakbe---
    const balance = incomeQuantity - expensesQuantity;
    const hiddenMessage1 = document.getElementById('hidden-message1');
    const hiddenMessage2 = document.getElementById('hidden-message2');
    const hiddenMessage3 = document.getElementById('hidden-message3');
    if (((rationQuantity > 0 && medicineQuantity > 0) && raggeryQuantity > 0) && (incomeQuantity > expensesQuantity)) {
        document.getElementById('expenses-total').innerText = expensesQuantity;
        document.getElementById('balance-total').innerText = balance;
        hiddenMessage1.style.display = 'none';
        hiddenMessage2.style.display = 'none';
        hiddenMessage3.style.display = 'none';
    }
    // kono input e negative value dile ja dekhabe---
    if (((rationQuantity < 0 ||
        medicineQuantity < 0) || raggeryQuantity < 0) || (incomeQuantity < 0)) {
        hiddenMessage1.style.display = 'block';
        hiddenMessage2.style.display = 'none';
        hiddenMessage3.style.display = 'none';
    }
    // kono input e number chara onno value dile ja dekhabe---
    if (((isNaN(rationQuantity) ||
        isNaN(medicineQuantity)) || isNaN(raggeryQuantity)) || (isNaN(incomeQuantity))) {
        hiddenMessage1.style.display = 'none';
        hiddenMessage2.style.display = 'block';
        hiddenMessage3.style.display = 'none';
    }
    // income theke khoroc besi hole ja dekhabe---
    if (incomeQuantity < expensesQuantity) {
        hiddenMessage1.style.display = 'none';
        hiddenMessage2.style.display = 'none';
        hiddenMessage3.style.display = 'block';
    }
}
// percentage input er value---
function savingPercentage() {
    const PercentageInput = document.getElementById('percentage-input');
    const percentage = parseFloat(PercentageInput.value);
    // PercentageInput.value = '';
    return percentage;
}
// save button e click korle ja gotbe---
function savingTotal() {
    const incomeQuantity = incomeNumber()
    const percentage = savingPercentage()
    // percentage likhle koto taka save hobe---
    const savingAmount = (incomeQuantity * percentage) / 100;
    const rationQuantity = rationNumber();
    const medicineQuantity = medicineNumber();
    const raggeryQuantity = raggeryNumber();
    const expensesQuantity = rationQuantity + medicineQuantity + raggeryQuantity;
    const balance = incomeQuantity - expensesQuantity;
    // extra aro j taka thakbe---
    const extraMoney = balance - savingAmount;
    const hiddenMessage4 = document.getElementById('hidden-message4');
    const hiddenMessage5 = document.getElementById('hidden-message5');
    if (percentage > 0 && balance >= savingAmount) {
        document.getElementById("savingPercentage-FromIncome").innerText = savingAmount;
        document.getElementById("extraMoney-InHand").innerText = extraMoney;
        hiddenMessage4.style.display = 'none';
        hiddenMessage5.style.display = 'none';
    }
    // becejaowa taka theke save er poriman best hole ja dekhabe---
    if (balance < savingAmount) {
        hiddenMessage4.style.display = 'block';
        hiddenMessage5.style.display = 'none';
    }
    // number chara onno kichu likhle ja dekhabe---
    if (percentage < 0 || isNaN(percentage)) {
        hiddenMessage4.style.display = 'none';
        hiddenMessage5.style.display = 'block';
    }
}