function PofL(){
    const age = +document.querySelector('.age').value
    if(age < 13){
       console.log('Ви дитина');
       document.getElementById('Live').innerHTML = 'Ви дитина';
    }
    else if(age > 12 && age < 19){
        console.log('Ви підліток');
        document.getElementById('Live').innerHTML = 'Ви підліток';
    }
    else if(age > 18 && age < 61){
        console.log('Ви дорослий');
        document.getElementById('Live').innerHTML = 'Ви дорослий';
    }
    else if(age > 60 && age < 121){
        console.log('Ви пенсіонер');
        document.getElementById('Live').innerHTML = 'Ви пенсіонер';
    }
    else{
        console.log('Перевірте пульс');
        document.getElementById('Live').innerHTML = 'Перевірте пульс';
    }
}
function SL(){
    const digit = +document.querySelector('.digit').value
    if(digit === 1){
       console.log('!');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "!"';
    }
    else if(digit === 2){
       console.log('@');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "@"';
    }
    else if(digit === 3){
       console.log('#');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "#"';
    }
    else if(digit === 4){
       console.log('$');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "$"';
    }
    else if(digit === 5){
       console.log('%');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "%"';
    }
    else if(digit === 6){
       console.log('^');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "^"';
    }
    else if(digit === 7){
       console.log('&');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "&"';
    }
    else if(digit === 8){
       console.log('*');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "*"';
    }
    else if(digit === 9){
       console.log('(');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ "("';
    }
    else if(digit === 0){
       console.log(')');
       document.getElementById('Simvol').innerHTML = 'Ця цифра відповідає за символ ")"';
    }
}
function Sale(){
    const summ = +document.querySelector('.summ').value
    if(summ > 199 && summ <300){
        let per = (summ * 0.97).toFixed(2);
        document.getElementById('persent').innerHTML = 'Ваша знижка 3%. Фінальна сума:' + per + 'грн';
        console.log(per);
    }
    else if(summ <200){
        let per = (summ * 1).toFixed(2);
        document.getElementById('persent').innerHTML = 'Ваша знижка 0%. Фінальна сума:' + per + 'грн';
        console.log(per);
    }
    else if(summ > 299 && summ <500){
        let per = (summ * 0.95).toFixed(2);
        document.getElementById('persent').innerHTML = 'Ваша знижка 5%. Фінальна сума:' + per + 'грн';
        console.log(per);
    }
    else{
        let per = (summ * 0.93).toFixed(2);
        document.getElementById('persent').innerHTML = 'Ваша знижка 7%. Фінальна сума:' + per + 'грн';
        console.log(per);
    }
}
function Year(){
    const date = +document.querySelector('.date').value
    if(date < 1){
        document.getElementById('Vis').innerHTML = 'Іісус ще тоді не народився)))';
        console.log('Іісус ще тоді не народився)))');
    }
    else if(date % 4 === 0){
        document.getElementById('Vis').innerHTML = 'Рік є високосним';
        console.log('Рік є високосним');
    }
    else{
        document.getElementById('Vis').innerHTML = 'Рік не є високосним';
        console.log('Рік не є високосним');
    }
}
function Data(){
    let day = document.querySelector('.day').value;
    day = Date.parse(day);
    day2 = (day + 24 * 60 * 60 * 1000)
    document.getElementById('Vidpodid').innerHTML = new Date(day2).toLocaleDateString("en-UK").replace(/\//g, '.');
    console.log(new Date(day2).toLocaleDateString("en-UK").replace(/\//g, '.'))
}

