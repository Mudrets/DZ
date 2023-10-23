function Summ(){
    let argentum = 0;
    for (let a = 0; a < arguments.length; a++) {
        argentum += arguments[a];
    }
    document.getElementById('Summ').innerHTML =`Сумма = ${argentum}`;
}
function Digits(){
    const digit = document.querySelector('.digits').value
    const separatedArray = digit.split(' ').map(Number);
    console.log(...separatedArray);
    Summ(...separatedArray)
}
document.getElementById("clearButton").onclick = function(e) {
    document.getElementById("digits").value = "";
  }





