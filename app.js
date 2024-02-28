"use strict";
//1
console.log('1');
let user = ["Johan", 25];
console.log(`Name: ${user[0]}, Age: ${user[1]}`);
//2
console.log('');
console.log('2');
const genders = [
    { id: 1, gender: 'men' },
    { id: 2, gender: 'women' },
    { id: 3, gender: 'men' },
    { id: 4, gender: 'men' },
];
function searchAll(mass, gender) {
    const filteredMass = mass.filter(obj => obj.gender === gender);
    console.log(filteredMass);
}
searchAll(genders, 'men');
searchAll(genders, 'women');
//3
console.log('');
console.log('3');
const vegetables = [
    { id: 1, vegetable: 'tomato' },
    { id: 2, vegetable: 'potato' },
    { id: 3, vegetable: 'paper' },
    { id: 4, vegetable: 'cucumber' },
    { id: 5, vegetable: 'paper' },
];
function searchFirst(mass, gender) {
    const filteredMass = mass.find(obj => obj.vegetable === gender);
    if (filteredMass) {
        console.log(filteredMass);
    }
    else {
        console.log('Gender not found');
    }
}
searchFirst(vegetables, 'paper');
searchFirst(vegetables, 'banana');
//4
console.log('');
console.log('4');
const digits = [
    { id: 1, digit: 21 },
    { id: 2, digit: 43 },
    { id: 3, digit: 2 },
    { id: 4, digit: 11 },
    { id: 5, digit: 96 },
];
function average(mass, digit) {
    const sum = mass.reduce((accumulator, currentValue) => {
        return accumulator + currentValue[digit];
    }, 0);
    const average = sum / mass.length;
    return average;
}
console.log(average(digits, 'digit'));
