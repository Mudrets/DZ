function Func( start, end ) {
    const text = [];
    for(let i = start; i <= end; i++) {
      let sum = 0;
      b = [];
      for(let j = 0; j <= i; j++) {
        if(i % j === 0) {
            b.push (j)
        }
    }
    text.push (`${i} Ділиться без залишку на ${b}`)
}
    document.getElementById('Summ').innerHTML = text.join('<br>');
}
  function Digits(){
    const digit = +document.querySelector('.digits').value
    const digit2 = +document.querySelector('.digits_2').value
    const separatedArray = [digit,digit2]
    console.log(...separatedArray);
    Func(...separatedArray)
}


function Func_2() {
  let i = +document.querySelector('.digits_3').value
  let n = +document.querySelector('.digits_4').value
  const text_2 = [];
  obschet:
  for (i; i <= n; i++) {
    b_2 = [];
    for (let d = 2; d < i; d++) {
      if (i % d == 0) continue obschet;
    }
    text_2.push (i)
    console.log( i );
  }
  document.getElementById('vid').innerHTML = text_2.join(', ');
}

