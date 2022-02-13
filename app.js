function updateCaseNum(product, price, isIncreasing){
    const productNum = document.getElementById(product + "-value");
    const productValue = productNum.value;
    let productNumValue = parseInt(productValue);
    if(isIncreasing == true){
        productNumValue = productNumValue + 1;
    }
    else if(productNumValue > 0){
        productNumValue = productNumValue - 1;
    }
    productNum.value = productNumValue;
    const caseTotal = document.getElementById(product + "-total");
    caseTotal.innerText = productNumValue * price;
    // calculate total
    calculatorTotal();

}
function getInputValue(product){
    const productInput = document.getElementById(product + "-value");
    const productInputValue = parseInt(productInput.value);
    return productInputValue;
}
function calculatorTotal(){
    const phoneValueTotal = getInputValue("phone") * 1219;
    const caseValueTotal = getInputValue("case") * 59;
    const subTotal = phoneValueTotal + caseValueTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}
// phone js action
document.getElementById("phone-plus").addEventListener("click", function(){
    updateCaseNum("phone", 1219, true);
})
document.getElementById("phone-minus").addEventListener("click", function(){
    updateCaseNum("phone", 1219, false);
})
// case js action
document.getElementById("case-plus").addEventListener("click", function(){
    // debugger;
    updateCaseNum("case", 59, true);
    
})
document.getElementById("case-minus").addEventListener("click", function(){
    updateCaseNum("case", 59, false);
    
})
