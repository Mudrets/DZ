let fixUrl = 0
addEventListener(`DOMContentLoaded`,()=>{
  add(0)
})

window.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter'){
    add(0)
  }
})

document.querySelector(`#searchBtn`).addEventListener(`click`,()=>{
  add(0)
})

function add(id){
  weather()
  .then((data)=>{
    console.log(data);
    generelInfo(data,id)
    outzero(data)
    miniTime(data,0)
    miniWind(data,0)
    miniTemp(data,0)
  })
}

document.querySelector(`#clearBtn`).addEventListener(`click`,()=>{document.querySelector(`#input`).value=``})


const weather = async() => {
  try {
    let sys 
    if(document.querySelector(`#cel`).className===`degActive`){
      sys=`metric`
    }
    else{
      sys=`imperial`
    }
    const input = document.querySelector(`#input`).value
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&lang=ua&units=${sys}&appid=03d1873b0ceab4b861bad6d91d2cd409`
    const response = await fetch(url)
    const data = await response.json()
    if(response.status === 404){
      document.querySelector('#loc').innerHTML = `${input}`
      document.querySelector('#lTeg').style.display=`block`
      document.querySelector('.weather').style.display=`none`
      document.querySelector('#scroll').style.display=`none`
      document.querySelector('#hoursWeather').style.display=`none`
    }
    else{
      document.querySelector('#lTeg').style.display=`none`
      document.querySelector('.weather').style.display=`block`
      document.querySelector('#scroll').style.display=`block`
      document.querySelector('#hoursWeather').style.display=`flex`
      fixUrl=data
      return data
    }
    
  } catch (error) {
    console.error(`Error`,error);
  }
}

function generelInfo(data,id,n) {
  document.querySelector('#deg').innerHTML = Math.floor(data.list[id].main.temp) 
  document.querySelector('#wImg').innerHTML = `<img src="./animation-ready/${icons[data.list[id].weather[0].icon]}.svg" alt="">`
  document.querySelector('#wTeg').innerHTML = ` ${data.city.country} ${data.city.name}`
  document.querySelector('#sInfo').innerHTML = `Відчуваеться як: ${Math.floor(data.list[id].main.feels_like)}°C<br>Вологість: ${Math.floor(data.list[id].main.humidity)}% <br>Вітер: ${Math.floor(data.list[id].wind.speed)} км/ч`
  if(n){
    document.querySelector('#date').innerHTML = `${secondsToDate(data.list[id].dt+data.city.timezone-14400)[1]}<br>${data.list[id].weather[0].description}`
  }
  else{
    document.querySelector('#date').innerHTML = `${secondsToDate(data.list[id].dt+data.city.timezone-14400)[1]} ${secondsToDate(data.list[id].dt+data.city.timezone-21600)[0]} <br>${data.list[id].weather[0].description}`
  }
}
function fix(data){
  return newDay=Math.floor((secondsToDate(data.list[0].dt+data.city.timezone-21600)[5])/3)
}
function miniTemp(data,id){
  let temp=[]
  document.querySelector(`#tempText`).innerHTML=``
  document.querySelector(`#tempHigh`).innerHTML=``
  for(let i = id;i<data.list.length;i++){
    temp.push(Math.floor(data.list[i].main.temp))
  }
  let m1=0
  let m2=1
  if(document.querySelector(`#cel`).className!==`degActive`){
    m1=32
    m2=5/9
  }
  for(let i = id;i<data.list.length;i++){
    document.querySelector(`#tempText`).insertAdjacentHTML(`beforeend`,`
    <span class="miniTemp">${Math.floor(data.list[i].main.temp)}°
    <div class="wImgs2">
    <img src="./animation-ready/${icons[data.list[i].weather[0].icon]}.svg" alt="">
    </div>
    </span>`)
    document.querySelector(`#tempHigh`).insertAdjacentHTML(`beforeend`,`
    <div class="high"><div class="h" style="  height: ${((20+(Math.min(...temp)-m1)*m2))-(Math.floor(data.list[i].main.temp)-m1)*m2}vh;"></div></div>`)
  }
  scroll(0)
}

function miniTime(data,id){
  document.querySelector(`#digitalTime`).innerHTML=``
  document.querySelector(`#digitalTime`).insertAdjacentHTML(`beforeend`,`
    <span id='${0}' class="miniTime activeSpan">${secondsToDate(data.list[0].dt+data.city.timezone-21600)[0]}</span>`)
  for(let i = id+1;i<data.list.length;i++){
    document.querySelector(`#digitalTime`).insertAdjacentHTML(`beforeend`,`
    <span id='${i}' class="miniTime">${secondsToDate(data.list[i].dt+data.city.timezone-21600)[0]}</span>`)
  }
  scroll(0)
}

function miniWind(data,id){
  let wind=[]
  document.querySelector(`#degArr`).innerHTML=``
  document.querySelector(`#speedText`).innerHTML=``
  for(let i = id;i<data.list.length;i++){
    wind.push(Math.floor(data.list[i].wind.speed))
  }
  for(let i = id;i<data.list.length;i++){
    document.querySelector(`#degArr`).insertAdjacentHTML(`beforeend`,`
    <div class="arr">
    <div style="transform: rotate(${data.list[i].wind.deg-180}deg); background-size: ${data.list[i].wind.speed*(100/Math.max(...wind))/10}vh;" class="miniWind"></div>
    </div>`)
    document.querySelector(`#speedText`).insertAdjacentHTML(`beforeend`,`
    <span class="speedTxt">${Math.floor(data.list[i].wind.speed)} км/ч</span>`)
  }
  scroll(0)
}

function scroll(id){
  document.querySelector(`#scroll`).scrollTo({
    left: document.querySelector(`#digitalTime`).offsetWidth*0.125*id,
    behavior: "smooth",
  });
}

function outzero(data){
  const newDay=Math.floor((secondsToDate(data.list[0].dt+data.city.timezone-21600)[5])/3)
  let temp=[]
  for(let j = 0;j<data.list.length;j=j+8){
    let day=[]
    for(let i = j;i<j+8;i++){
        day.push(Math.floor(data.list[i].main.temp))
    }
    temp.push(day)
  }
  document.querySelector(`#hoursWeather`).innerHTML=``
  document.querySelector(`#hoursWeather`).insertAdjacentHTML(`beforeend`,`
  <div id="0" class="block active" value="0">
  <div class="pelena"></div>
  <span class="day">${secondsToDate(data.list[0].dt+data.city.timezone-21600)[2]}</span>
  <span class="dayF">${secondsToDate(data.list[0].dt+data.city.timezone-21600)[1]}</span>
  <div class="wImgs">
  <img src="./animation-ready/${icons[data.list[0].weather[0].icon]}.svg" alt="">
  </div>
  <span class="min-max">${Math.max(...temp[0])}° <span style="color: #9aa0a6;">${Math.min(...temp[0])}°</span></span>
  `
  )
  for(let i = 8;i<data.list.length;i=i+8)
  document.querySelector(`#hoursWeather`).insertAdjacentHTML(`beforeend`,`
<div id="${i}" class="block">
<div class="pelena"></div>
<span class="day">${secondsToDate(data.list[i].dt+data.city.timezone-21600)[2]}</span>
<span class="dayF">${secondsToDate(data.list[i].dt+data.city.timezone-21600)[1]}</span>
<div class="wImgs">
<img src="./animation-ready/${icons[data.list[i].weather[0].icon]}.svg" alt="">
</div>
<span class="min-max">${Math.max(...temp[i/8])}° <span style="color: #9aa0a6;">${Math.min(...temp[i/8])}°</span></span>
</div>`)
}
  const icons={
    "01d": "clear-day",
		"01n": "clear-night",
		"02d": "partly-cloudy-day",
		"02n": "partly-cloudy-night",
		"03d": "cloudy",
		"03n": "cloudy",
		"04d": "cloudy",
		"04n": "cloudy",
		"09d": "rain",
		"09n": "rain",
		"10d": "partly-cloudy-day-rain",
		"10n": "partly-cloudy-night-rain",
		"11d": "thunderstorms",
		"11n": "thunderstorms",
		"13d": "partly-cloudy-day-snow",
		"13n": "partly-cloudy-day-snow",
		"50d": "mist",
		"50n": "mist"
  }

function secondsToDate(seconds) {
  const date = new Date(0);
  date.setSeconds(seconds);
  const hours = date.getHours();
  const daysOfWeekf = [`Неділя`, `Понеділок`, `Вівторок`, `Середа`, `Четвер`, `П'ятниця`, `Субота`];
  const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const dayOfWeekf = daysOfWeekf[date.getUTCDay()];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень','Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
  const month = months[date.getUTCMonth()];
  const formattedTime = [
    `${String(hours).padStart(2, '0')}:00`,
    `${dayOfWeekf}`,
    `${dayOfWeek}`,
    `${month}`,
    `${dayOfMonth}`,
    `${hours}`
  ]
  return formattedTime;
}
addEventListener(`click`,(e)=>{
  if(e.target.className===`pelena`){
    const mass = e.target.parentElement.parentElement.children
    const unTime = document.querySelector(`#digitalTime`).children
    const id = e.target.parentElement.id
    for(i=0;i<mass.length;i++){
      mass[i].classList=`block`
    }
    for(i=0;i<40;i++){
      unTime[i].classList=`miniTime`
    }
    generelInfo(fixUrl,id,true)
    e.target.parentElement.classList.add(`active`)
    scroll(id-fix(fixUrl))
  }
})
addEventListener(`click`,(e)=>{
  if(e.target.className===`miniTime`){
    const id = e.target.id
    const mass = e.target.parentElement.children
    generelInfo(fixUrl,id)
    for(i=0;i<mass.length;i++){
      mass[i].classList=`miniTime`
    }
    e.target.classList.add(`activeSpan`)
  }
})
addEventListener(`click`,(e)=>{
  if(e.target.id===`tempBtn`){
    if(document.querySelector(`#tempBtn`).className===`activeBtn`){
      return
    }
    else{click()}
  }
  if(e.target.id===`windBtn`){
    if(document.querySelector(`#windBtn`).className===`activeBtn`){
      return
    }
    else{click()}
  }
})
function click(){
  document.querySelector(`#digitalWind`).classList.toggle(`topHide`)
  document.querySelector(`#digitalTemp`).classList.toggle(`topHide`)
  setTimeout(() => {
    document.querySelector(`#windBtn`).classList.toggle(`activeBtn`)
    document.querySelector(`#tempBtn`).classList.toggle(`activeBtn`)
    document.querySelector(`#digitalWind`).classList.toggle(`none`)
    document.querySelector(`#digitalTemp`).classList.toggle(`none`)
  }, 600);
}
addEventListener(`click`,(e)=>{
  if(e.target.id===`cel`){
    if(document.querySelector(`#cel`).className===`degActive`){
      return
    }
    else{
      document.querySelector(`#cel`).classList.toggle(`degActive`)
      document.querySelector(`#far`).classList.toggle(`degActive`)
      add(0)
    }
  }
  if(e.target.id===`far`){
    if(document.querySelector(`#far`).className===`degActive`){
      return
    }
    else{
      document.querySelector(`#cel`).classList.toggle(`degActive`)
      document.querySelector(`#far`).classList.toggle(`degActive`)
      add(0)
    }
  }
})