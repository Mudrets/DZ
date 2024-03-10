//1
interface name {
  name: string
}

function checker(param: any): void {
  if(typeof param === 'object' && 'name' in param && Object.keys(param).length > 1) {
      console.log(`В объекте был найден параметр 'Name' его значение: ${param.name}, так же в объекте указаны другие параметры такие как:`)
      for(const key in param){
        if(key !== 'name'){
          console.log(`Параметр: ${key} со значением: ${param[key]}`)
        }
      }
  }
  else if (typeof param === 'object' && 'name' in param) {
      console.log(`В объекте был найден параметр 'Name' его значение: ${param.name}`)
  } 
  else if(typeof param !== 'object') {
      console.log('Заданое значение не являеться объектом')
  }
  else {
    console.log(`Объект не имеет параметра 'Name', но в объекте указаны другие параметры такие как:`);
    for(const key in param){
      console.log(`Параметр: ${key} со значением: ${param[key]}`)
    }
  }
}

const obj1: name = { name: 'Exp Name' }
const obj2: object = { age: 25 }
const obj3: object = { name: 'Exp Name', age: 25 }
const obj4: number = 23

checker(obj1)
checker(obj2)
checker(obj3)
checker(obj4)

//2
console.log('');
function checkArr(param: any): void {
  if (Array.isArray(param) && param.every((num) => typeof num === 'number')) {
      const sum = param.reduce((acc, num) => acc + num, 0);
      console.log(`Сумма чисел масива: ${sum}`)
  } 
  else if (Array.isArray(param) && param.every((num) => typeof num !== 'number')){
      console.log("Заданое значение не являеться числовым масивом")
  }
  else if (Array.isArray(param) && param.some((num) => typeof num !== 'number')){
      console.log("Заданое значение не являеться чистым числовым масиво, и имеет разные типы значений");
  }
  else {
      console.log("Заданое значение не являеться масивом")
  }
}

const array1:number[] = [1, 2, 3, 4, 5]
const array2: any[] = ['a', 'b', 'c']
const array3: any[] = [1, 2, 'a']
const array4: string = '123'
checkArr(array1)
checkArr(array2)
checkArr(array3)
checkArr(array4)
