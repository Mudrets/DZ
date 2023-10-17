function Digit(){
    const digit1 = +document.querySelector('.digit1').value
    const digit2 = +document.querySelector('.digit2').value
    if(digit1 > digit2){
       console.log(digit1 + ' білше ніж ' + digit2);
       document.getElementById('Bigger').innerHTML = digit1 + ' білше ніж ' + digit2;
    }
    else if(digit1 < digit2){
       console.log(digit2 + ' білше ніж ' + digit1);
       document.getElementById('Bigger').innerHTML = digit2 + ' білше ніж ' + digit1;
    }
    else {
       console.log(digit1 + ' рівне ' + digit2);
       document.getElementById('Bigger').innerHTML = digit1 + ' рівне ' + digit2;
    }

}
function Podatok (cash= +document.querySelector('.cash').value,percent= +document.querySelector('.percent').value){

    let result = (percent / 100) * cash
    console.log(result)
    document.getElementById('podatok').innerHTML = 'Ваш податок складає ' + result.toFixed(2) + ' грн';
}
function Para(){
    const digit3 = +document.querySelector('.digit3').value
    switch(digit3 % 2 === 0){
        case true:
        console.log(digit3 % 2 === 0);
        document.getElementById('Tipe').innerHTML = digit3 + ' парне';
        break
        case false:
        console.log(digit3 % 2 === 0);
        document.getElementById('Tipe').innerHTML = digit3 + ' непарне';
        break
    }
    // if(digit3 === 0){
    //     console.log('error');
    //    document.getElementById('Tipe').innerHTML = 'error';
    // }
    // else if(digit3 % 2 === 0){
    //    console.log(digit3 % 2 === 0);
    //    document.getElementById('Tipe').innerHTML = digit3 + ' парне';
    // }
    // else{
    //     console.log(digit3 % 2 === 0);
    //     document.getElementById('Tipe').innerHTML = digit3 + ' непарне';
    // }
}
document.getElementById('hider').hidden = true;
function autor(){
    const floor = document.querySelector('.floor').value
    if(floor === 'admin'){
        document.getElementById('user_type').innerHTML = 'Ваш рівень доступу: ' + floor;
        document.getElementById('user_type_2').innerHTML = 'Ваш рівень доступу: ' +  floor;
        document.getElementById('hider').hidden = false;
        console.log(floor);
        let floor_admin = document.querySelector('.floor_admin');
        floor_admin.disabled = false;
        let floor_user = document.querySelector('.floor_user');
        floor_user.disabled = false;
        let floor_guest = document.querySelector('.floor_guest');
        floor_guest.disabled = false;
    }
    else if(floor === 'user'){
        document.getElementById('user_type').innerHTML = 'Ваш рівень доступу: ' +  floor;
        document.getElementById('user_type_2').innerHTML = 'Ваш рівень доступу: ' +  floor;
        document.getElementById('hider').hidden = false;
        console.log(floor);
        let floor_admin = document.querySelector('.floor_admin');
        floor_admin.disabled = true;
        let floor_user = document.querySelector('.floor_user');
        floor_user.disabled = false;
        let floor_guest = document.querySelector('.floor_guest');
        floor_guest.disabled = false;
    }
    else if(floor === 'guest'){
        document.getElementById('user_type').innerHTML = 'Ваш рівень доступу: ' +  floor;
        document.getElementById('user_type_2').innerHTML = 'Ваш рівень доступу: ' +  floor;
        document.getElementById('hider').hidden = false;
        console.log(floor);
        let floor_admin = document.querySelector('.floor_admin');
        floor_admin.disabled = true;
        let floor_user = document.querySelector('.floor_user');
        floor_user.disabled = true;
        let floor_guest = document.querySelector('.floor_guest');
        floor_guest.disabled = false;
    }
    else{
        console.log('Некоректна назва користувача');
        document.getElementById('user_type_2').innerHTML = 'Некоректна назва користувача';
    }
}
