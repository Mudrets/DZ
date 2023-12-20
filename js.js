var rounded = function(number){
  return Math.round(parseFloat(number) * 100) / 100;
}

const url = `https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014`
async function privatbank(){
  const fileCors = await fetch(url)
  const data = await fileCors.json()
  return data.exchangeRate
}
addEventListener(`DOMContentLoaded`,()=>{
  const baseCurrency1 = document.querySelector(`#baseCurrency1`)
  const baseCurrency2 = document.querySelector(`#baseCurrency2`)
  privatbank().then(result => {  
    for (let i = 0; i < result.length; i++) {
      baseCurrency2.insertAdjacentHTML(`beforeend`,`
            <option value="${i}">${result[i].currency}</option>
            `)
      baseCurrency1.insertAdjacentHTML(`beforeend`,`
            <option value="${i}">${result[i].currency}</option>
            `)
    }
    document.querySelector(`#n1`).innerHTML=`${result[14].currency}`
    document.querySelector(`#usd1`).innerHTML=`${rounded(result[14].purchaseRateNB)}`
    document.querySelector(`#usd2`).innerHTML=`${rounded(result[14].saleRateNB)}`
    document.querySelector(`#n2`).innerHTML=`${result[16].currency}`
    document.querySelector(`#eur1`).innerHTML=`${rounded(result[16].purchaseRateNB)}`
    document.querySelector(`#eur2`).innerHTML=`${rounded(result[16].saleRateNB)}`
    document.querySelector(`#n3`).innerHTML=`${result[18].currency}`
    document.querySelector(`#plz1`).innerHTML=`${rounded(result[18].purchaseRateNB)}`
    document.querySelector(`#plz2`).innerHTML=`${rounded(result[18].saleRateNB)}`
    showOut()
  })
})
function showOut(){
  privatbank().then(result => {
    const baseCurrency = document.querySelector(`#baseCurrency1`).value
    document.querySelector(`#n4`).innerHTML=`${result[baseCurrency].currency}`
    document.querySelector(`#cur1`).innerHTML=`${rounded(result[baseCurrency].purchaseRateNB)}`
    document.querySelector(`#cur2`).innerHTML=`${rounded(result[baseCurrency].saleRateNB)}`
  })
}
function calculate(){
  const input1 = document.querySelector(`#input1`).value
  const input2 = document.querySelector(`#input2`)
  const baseCurrency1 = document.querySelector(`#baseCurrency1`).value
  const input3 = document.querySelector(`#input3`).value
  const input4 = document.querySelector(`#input4`)
  const baseCurrency2 = document.querySelector(`#baseCurrency2`).value
  privatbank().then(result => {
    input2.value=`${(rounded(input1*result[baseCurrency1].saleRateNB))} грн.`  
    input4.value=`${(rounded(input3/result[baseCurrency2].saleRateNB))}`  
  })
}

function switc(){
  document.querySelector(`.switch1`).classList.toggle(`hide`)
  document.querySelector(`.switch2`).classList.toggle(`hide`)
}

document.querySelector(`#butt1`).addEventListener(`click`,calculate)
document.querySelector(`#swButt`).addEventListener(`click`,switc)
document.querySelector(`#baseCurrency1`).addEventListener(`change`,showOut)
document.querySelector(`#baseCurrency2`).addEventListener(`change`,showOut)

