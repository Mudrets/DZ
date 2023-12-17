const button = document.querySelector(`#butt`)
const outputElement = document.getElementById('output');
function perevirka(){
  button.disabled=true;
  outputElement.innerHTML=``
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve(`Початок процесу обробки докуметів`);
    },1000)
})
}

button.addEventListener(`click`,()=>{
perevirka()
.then((result)=>{
  displayText(result)
  setTimeout(()=>{
  displayText(`Закордонний паспорт`)
  },1000)
      const doc = document.querySelector(`#pasport1`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc!=="nonPas"){
        resolve("Йде процес перевірки документу")
      }
      else{
        reject(`Відсутній закордонний паспорту`)
      }
    },2000)
})
})
.then((result)=>{
  displayText(result)
  const doc = document.querySelector(`#pasport1`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc==="valPas"){
        resolve("Закордонний паспорт дійсний")
      }
      else if(doc==="invPas"){
        reject("Паспорт недійсний")
      }
    },1000)
})
})
.then((result)=>{
  displayText(result)
  setTimeout(()=>{
    displayText(`Робиться копія документу`);
},1000)
  setTimeout(()=>{
    displayText(`Копія зроблена`);
},2000)
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Копію перевірено")
    },3000)
})
})
.then((result)=>{
  displayText(result)
  setTimeout(()=>{
  displayText(`Пасорт України`)
  },1000)
    const doc = document.querySelector(`#pasport2`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc!=="nonPas"){
        resolve("Йде процес перевірки документу")
      }
      else{
        reject(`Відсутній паспорт України`)
      }
    },2000)
})
})
.then((result)=>{
  displayText(result)
    const doc = document.querySelector(`#pasport2`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc==="valPas"){
        resolve("Паспорт України дійсний")
      }
      else if(doc==="invPas"){
        reject("Паспорт недійсний")
      }
    },1000)
})
})
.then((result)=>{
  displayText(result)
  setTimeout(()=>{
    displayText(`Свідоцтво про шлюб`)
    },1000)
    const doc = document.querySelector(`#brak`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
    if(doc!=="non"){
      resolve("Йде процес перевірки документу")
    }
    else{
      reject(`Свідоцтва відсутні`)
    }
  },2000)
})
})
.then((result)=>{
  displayText(result)
    const doc = document.querySelector(`#brak`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
    if(doc==="is"){
      resolve("Свідоцтво про шлюб дійсне")
    }
    else if(doc==="been"){
      resolve("Свідоцтво про розлучення дійсне")
    }
    else if(doc==="never"){
      resolve("Громадянин не був у шлюбі")
    }
  },1000)
})
})
.then((result)=>{
  displayText(result)
    setTimeout(()=>{
      displayText(`Свідоцтво про народження дітей`)
      },1000)
      const doc = document.querySelector(`#children`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc==='1'){
        resolve("Йде процес перевірки документу")
      }
      else if(doc>1){
        resolve("Йде процес перевірки документів")
      }
      else if(doc===`non`){
        reject(`Свідоцтва відсутні`)
      }
      else if(doc===`never`){
        resolve(`Дітей немає`)
      }
      },2000)
})
})
.then((result)=>{
  displayText(result)
  const doc = document.querySelector(`#children`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc==='1'){
        resolve("Документ про народження дитини дійсний")
      }
      if(doc>1){
        resolve(`Документи про народження ${doc} дітей дійсні`)
      }
      else{
        resolve(`Перевірка по базі підтвердила відсутность дітей`)
      }
      },1000)
})
})
.then((result)=>{
  displayText(result)
  setTimeout(()=>{
          displayText(`Виписка з банку`)
          },1000)
  const doc = document.querySelector(`#bill`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc!=="non"){
              resolve("Йде процес перевірки документу")
            }
      else{
        reject(`Нема виписки з банку`)
      }
    },2000)
})
})
.then((result)=>{
  displayText(result)
  const doc = document.querySelector(`#bill`).value
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      if(doc==="valBill"){
        resolve("Згідно вашої виписки ваші обороти є достатніми для відкриття візи")
      }
      else if(doc===`invBill`){
        reject(`Виписка неправильно формату`)
      }
      else if(doc===`oldBill`){
        reject(`Виписка прострочена і є недійсною`)
      }
      else if(doc===`smallBill`){
        reject(`Згідно вашої виписки ваші обороти є замалими для відкриття візи`)
      }
    },1000)
})
})
.then((result)=>{
  displayText(result)
  setTimeout(()=>{
    displayText(`Запит подання на візу в Канаду погоджено!`)
  },2000)
})
.catch((error)=>{
  displayText(error)
  setTimeout(()=>{
    displayText(`Запит подання на візу в Канаду відмовлено!`)
  },2000)
})
.finally(()=>{setTimeout(()=>{
  displayText(`Кінець процесу обробки докуметів`);
  setTimeout(()=>{
    button.disabled=false;
  },2000)
},3000)})
})

function displayText(text) {
    const letters = text.split('');
    const br = `<br>`
    let index = 0;
    const intervalId = setInterval(function() {
        if (index < letters.length) {
            outputElement.innerHTML += letters[index];
            index++;
        } else {
          outputElement.innerHTML += br;
            clearInterval(intervalId);
        }
    }, 20);
}
