// alert('Вводьте числа в інпут через кому, дозволяеться десятичний запис, через крапку')
//! Pluses
function Pluses(){
  const digit = document.querySelector('.pl').value
  const separatedArray = digit.split(',').map(Number);
  console.log(...separatedArray.filter((item)=>{return item >= 0}));
  document.getElementById('pluses').innerHTML = separatedArray.filter((item)=>{return item >= 0});
}
document.getElementById("clearButton").onclick = function(e) {
  document.getElementById("digits").value = "";
  document.getElementById('pluses').innerHTML = `Місце відповіді`;
}

//! MINMAX
function MaxMin(){
  const digit = document.querySelector('.mm').value
  const separatedArray = digit.split(',').map(Number);
  const a = Math.min.apply(null, [...separatedArray]);
  const b = Math.max.apply(null, [...separatedArray]);
  console.log(a);
  console.log(b);
  document.getElementById('maxmin').innerHTML = `Мінімальне число = ${a}${'<br>'} Максимальне число = ${b}` ;
  // const a = [...separatedArray.sort((a, b) => a - b)];
  // const b = [...separatedArray.sort((a, b) => b - a)];
  // const f_a = a.find((el, idx) => typeof el === "number" && idx === 0)
  // const f_b = b.find((el, idx) => typeof el === "number" && idx === 0)
  // document.getElementById('maxmin').innerHTML = `Мінімальне число = ${f_a}${'<br>'} Максимальне число = ${f_b}` ;
}
document.getElementById("clearButton_2").onclick = function(e) {
  document.getElementById("digits_2").value = "";
  document.getElementById('maxmin').innerHTML = `Місце відповіді`;
}
//! Duo
function Duo(){
  const digit_1 = document.querySelector('.f_i').value
  const digit_2 = document.querySelector('.s_i').value
  const separatedArray = digit_1.split(',').map(Number);
  const separatedArray_2 = digit_2.split(',').map(Number);
  console.log(...separatedArray);
  console.log(...separatedArray_2);
  const allArrays = separatedArray.concat(separatedArray_2).sort((a, b) => a - b)
  console.log(...allArrays);
  document.getElementById('Duo').innerHTML = allArrays;
}
document.getElementById("clearButton_3").onclick = function(e) {
  document.getElementById("digits_3").value = "";
  document.getElementById("digits_4").value = "";
  document.getElementById('Duo').innerHTML = `Місце відповіді`;
}

//! Dublicate
function Dublicate(){
  const digit = document.querySelector('.dbl').value
  const separatedArray = digit.split(',').map(Number);
  const w_d = [...new Set(separatedArray)].sort((a, b) => a - b)
  console.log(...w_d);
  document.getElementById('Dublicate').innerHTML = w_d;
}
document.getElementById("clearButton_4").onclick = function(e) {
  document.getElementById("digits_5").value = "";
  document.getElementById('Dublicate').innerHTML = `Місце відповіді`;
}

//! Otricat
function Otricat(){
  const digit = document.querySelector('.soch').value
  const separatedArray = digit.split(',').map(Number);
  console.log(minus(...separatedArray))
  console.log(ot_do_mnoj(separatedArray));
  if(minus(...separatedArray) === 0){
    document.getElementById('Otricat').innerHTML = `Від'ємних чисел не знайдено ${'<br>'} Добуток усіх чисел від найбільшого до найменьшого = ${ot_do_mnoj(separatedArray)}`;
  }
  else{
    document.getElementById('Otricat').innerHTML = `Сума усіх  від'ємних чисел = ${minus(...separatedArray)}  ${'<br>'} Добуток усіх чисел від найбільшого до найменьшого = ${ot_do_mnoj(separatedArray)}`;
  }
}
document.getElementById("clearButton_6").onclick = function(e) {
  document.getElementById("digits_7").value = "";
  document.getElementById('Otricat').innerHTML = `Місце відповіді`;
}

//! ParniPlus
function ParniPlus(){
  const digit = document.querySelector('.spch').value
  const separatedArray = digit.split(',').map(Number);
  console.log(parne(...separatedArray))
  console.log(ot_do_plus(separatedArray));
  if(parne(...separatedArray) === 0){
    document.getElementById('ParniPlus').innerHTML = `Парних чисел не знайдено ${'<br>'} Сума усіх чисел від найбільшого до найменьшого = ${ot_do_plus(separatedArray)}`;
  }
  else{
    document.getElementById('ParniPlus').innerHTML = `Сума усіх  парних чисел = ${parne(...separatedArray)}${'<br>'} Сума усіх чисел від найбільшого до найменьшого = ${ot_do_plus(separatedArray)}`;
  }
}
document.getElementById("clearButton_5").onclick = function(e) {
  document.getElementById("digits_6").value = "";
  document.getElementById('ParniPlus').innerHTML = `Місце відповіді`;
}

//! MaxEl
function MaxEl(){
  const digit = document.querySelector('.ml').value
  const separatedArray = digit.split(',').map(Number);
  const max = Math.max.apply(null, [...separatedArray]);
  const index = separatedArray.indexOf(max);
  console.log(`Number ${max}`);
  console.log(`Index ${index}`);
  let arg = 0;
  for(let a = 0; a < fora(...separatedArray); a++){
    arg += separatedArray[a]
  }
  console.log(`summ ${arg}`);
  if(arg === 0){
  document.getElementById('MaxEl').innerHTML = `Найбільше число ${max} під індексом ${index}${'<br>'} Від'ємних чисел незнайдено`;
}
  else{
  document.getElementById('MaxEl').innerHTML = `Найбільше число ${max} під індексом ${index}${'<br>'} Сума усіх чисел до від'ємного = ${arg}`;
  }
document.getElementById("clearButton_7").onclick = function(e) {
  document.getElementById("digits_8").value = "";
  document.getElementById('MaxEl').innerHTML = `Місце відповіді`;
}
}
//! Доп функции
function fora(){
  for(let a = 0; a < arguments.length; a++){
    if(arguments[a]<0){
      return a
    }
  }
}

function minus(){
  let arg = 0;
  for(let a = 0; a < arguments.length; a++){
    if(arguments[a] < 0){
      arg += arguments[a]
    }
  }
  return arg;
}

function parne(){
  let arg = 0;
  for(let a = 0; a < arguments.length; a++){
    if(arguments[a] % 2 === 0){
      arg += arguments[a]
    }
  }
  return arg;
}

function plus(){
  let arg = 0;
  for(let a = 0; a < arguments.length; a++){
    arg += arguments[a]
  }
  return arg;
}

function mnoj(){
  let arg = 1;
  for(let a = 0; a < arguments.length; a++){
    arg *= arguments[a]
  }
  return arg;
}

function ot_do_plus(arr){
  const a = Math.min.apply(null, [...arr]);
  const b = Math.max.apply(null, [...arr]);
  const i_a = arr.lastIndexOf(a)
  const i_b = arr.indexOf(b)
  const test = arr.slice(i_b+1,i_a)
  return(plus(...test));
}
function ot_do_mnoj(arr){
  const a = Math.min.apply(null, [...arr]);
  const b = Math.max.apply(null, [...arr]);
  const i_a = arr.lastIndexOf(a)
  console.log(i_a);
  const i_b = arr.indexOf(b)
  const test = arr.slice(i_b+1,i_a)
  return(mnoj(...test));
}


