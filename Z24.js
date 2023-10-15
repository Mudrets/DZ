document.getElementById('hider').style.display='none';
function country(){
    document.getElementById('hider').style.display='block';

    const choise = document.querySelector('.choise').value
    switch(choise){
        case 'UA':
        document.getElementById('Name').innerHTML = "Україна";
        document.getElementById('Capital').innerHTML = "Київ";
        document.getElementById('Language').innerHTML = "Українська";
        document.getElementById('DU').innerHTML = "Парламентсько-президентська республіка";
        document.getElementById('Independence').innerHTML = "24 серпня 1991 р.";
        document.getElementById('S').innerHTML = "603 628 км²";
        break
        case 'DE':
        document.getElementById('Name').innerHTML = "Германія";
        document.getElementById('Capital').innerHTML = "Берлин";
        document.getElementById('Language').innerHTML = "Німецька";
        document.getElementById('DU').innerHTML = "Парламентська республіка";
        document.getElementById('Independence').innerHTML = " 3 жовтня 1990 р.";
        document.getElementById('S').innerHTML = "357 592 км²";
        break
        case 'FI':
        document.getElementById('Name').innerHTML = "Фінляндія";
        document.getElementById('Capital').innerHTML = "Гельсінкі";
        document.getElementById('Language').innerHTML = "Фінська";
        document.getElementById('DU').innerHTML = "Парламентська республіка";
        document.getElementById('Independence').innerHTML = "18 (31) грудня 1917 р.";
        document.getElementById('S').innerHTML = "338 462 км²";
        break
        case 'FR':
        document.getElementById('Name').innerHTML = "Франція";
        document.getElementById('Capital').innerHTML = "Париж";
        document.getElementById('Language').innerHTML = "Французька";
        document.getElementById('DU').innerHTML = "Змішана республіка";
        document.getElementById('Independence').innerHTML = "14 липня 1789 р.";
        document.getElementById('S').innerHTML = "551 695 км²";
        break
        case 'US':
        document.getElementById('Name').innerHTML = "США";
        document.getElementById('Capital').innerHTML = "Вашингтон";
        document.getElementById('Language').innerHTML = "Англійська";
        document.getElementById('DU').innerHTML = "Федеративна держава";
        document.getElementById('Independence').innerHTML = "4 липня 1776 р.";
        document.getElementById('S').innerHTML = "42 550 000 км²";
        break
    }

}

