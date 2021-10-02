const initInput=document.querySelector("#initial-input")
const QuantityInput=document.querySelector("#quantity-input");
const currentInput=document.querySelector("#current-input");
const btnCheck=document.querySelector("#btn-check")
const outputDisplay=document.querySelector("#output");

btnCheck.addEventListener("click",CalculateStockStatus);


function CalculateStockStatus(){
    const sellingPrice=Number(initInput.value) ;
    const CostPriceNow=Number(currentInput.value);
    const Quantity=Number(QuantityInput.value);
    if(sellingPrice && CostPriceNow && Quantity > 0)
    {
    if(CostPriceNow>sellingPrice){
        let profit=(CostPriceNow-sellingPrice)*Quantity;
        let profitPercentage=(profit/sellingPrice)*100;
        outputDisplay.innerText="Hi your profit is "+profit+
        " and profit  percentage is "+profitPercentage+"%";
    }
    else if(sellingPrice>CostPriceNow){

        let loss=(sellingPrice-CostPriceNow)*Quantity;
        let lossPercentage=(loss/sellingPrice)*100;
        outputDisplay.innerText="Hi your loss is "+loss+
        " and loss percentage is "+lossPercentage+"%";
    }
    else{
        outputDisplay.innerText="No loss No profit your money is sleeping"
    }
}else
{
    outputDisplay.innerText="Please enter positive inputs"
}
}

