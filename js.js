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

const add = (id) => {
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

const generelInfo = (data,id,n) => {
  document.querySelector('#deg').innerHTML = Math.floor(data.list[id].main.temp) 
  document.querySelector('#wImg').innerHTML = `<img src="./res/svg/${icons[data.list[id].weather[0].icon]}.svg" alt="${icons[data.list[id].weather[0].icon]}">`
  document.querySelector('#wTeg').innerHTML = ` ${data.city.country} ${data.city.name}`
  document.querySelector('#sInfo').innerHTML = `Відчуваеться як: ${Math.floor(data.list[id].main.feels_like)}°C<br>Вологість: ${Math.floor(data.list[id].main.humidity)}% <br>Вітер: ${Math.floor(data.list[id].wind.speed)} км/ч`
  document.querySelector(`#date2`).innerHTML =`<span>${data.city.name}</span><span>${data.list[id].weather[0].description}</span>`
  document.querySelector(`#date3`).innerHTML =`${data.list[id].weather[0].description}`
  document.querySelector(`style`).innerHTML=bg()
  if(n){
    document.querySelector('#date').innerHTML = `${secondsToDate(data.list[id].dt+data.city.timezone-14400)[1]}<br>${data.list[id].weather[0].description}`
  }
  else{
    document.querySelector('#date').innerHTML = `${secondsToDate(data.list[id].dt+data.city.timezone-14400)[1]} ${secondsToDate(data.list[id].dt+data.city.timezone-21600)[0]} <br>${data.list[id].weather[0].description}`
  }
}
const fix = (data) => {
  return newDay=Math.floor((secondsToDate(data.list[0].dt+data.city.timezone-21600)[5])/3)
}
const miniTemp = (data,id) => {
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
    <img src="./res/svg/${icons[data.list[i].weather[0].icon]}.svg" alt="">
    </div>
    </span>`)
    document.querySelector(`#tempHigh`).insertAdjacentHTML(`beforeend`,`
    <div class="high"><div class="h" style="  height: ${((70+(Math.min(...temp)-m1)*m2))-(Math.floor(data.list[i].main.temp)-m1)*m2}%;"></div></div>`)
  }
  scroll(0)
}

const miniTime = (data,id) => {
  document.querySelector(`#digitalTime`).innerHTML=``
  document.querySelector(`#digitalTime`).insertAdjacentHTML(`beforeend`,`
    <span id='${0}' class="miniTime activeSpan">${secondsToDate(data.list[0].dt+data.city.timezone-21600)[0]}</span>`)
  for(let i = id+1;i<data.list.length;i++){
    document.querySelector(`#digitalTime`).insertAdjacentHTML(`beforeend`,`
    <span id='${i}' class="miniTime">${secondsToDate(data.list[i].dt+data.city.timezone-21600)[0]}</span>`)
  }
  scroll(0)
}

const miniWind = (data,id) => {
  let wind=[]
  document.querySelector(`#degArr`).innerHTML=``
  document.querySelector(`#speedText`).innerHTML=``
  for(let i = id;i<data.list.length;i++){
    wind.push(Math.floor(data.list[i].wind.speed))
  }
  for(let i = id;i<data.list.length;i++){
    document.querySelector(`#degArr`).insertAdjacentHTML(`beforeend`,`
    <div class="arr">
    <div style="transform: rotate(${data.list[i].wind.deg-180}deg); ${windSize(data.list[i].wind.speed)};" class="miniWind"></div>
    </div>`)
    document.querySelector(`#speedText`).insertAdjacentHTML(`beforeend`,`
    <span class="speedTxt">${Math.floor(data.list[i].wind.speed)} км/ч</span>`)
  }
  scroll(0)
}

const scroll = (id) => {
  document.querySelector(`#scroll`).scrollTo({
    left: document.querySelector(`#digitalTime`).offsetWidth*0.125*id,
    behavior: "smooth",
  });
}

const outzero = (data)  => {
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
  <img src="./res/svg/${icons[data.list[0].weather[0].icon]}.svg" alt="">
  </div>
  <span class="min-max">${Math.max(...temp[0])}° <span style="color: var(--gray);">${Math.min(...temp[0])}°</span></span>
  `
  )
  for(let i = 8;i<data.list.length;i=i+8)
  document.querySelector(`#hoursWeather`).insertAdjacentHTML(`beforeend`,`
<div id="${i}" class="block">
<div class="pelena"></div>
<span class="day">${secondsToDate(data.list[i].dt+data.city.timezone-21600)[2]}</span>
<span class="dayF">${secondsToDate(data.list[i].dt+data.city.timezone-21600)[1]}</span>
<div class="wImgs">
<img src="./res/svg/${icons[data.list[i].weather[0].icon]}.svg" alt="">
</div>
<span class="min-max">${Math.max(...temp[i/8])}° <span style="color: var(--gray);">${Math.min(...temp[i/8])}°</span></span>
</div>`)
}
  const icons={
    "01d": "clear-day",
		"01n": "falling-stars",
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
		"13d": "snow",
		"13n": "snow",
		"50d": "mist",
		"50n": "mist"
  }
  const windSize = (n)  => {
    if(n < 5){
      return "background-size:3ch"
    }
    if(n < 10){
      return "background-size:4vh"
    }
    if(n < 15){
      return "background-size:5vh"
    }
    if(n < 30){
      return "background-size:6vh"
    }
    if(n < 50){
      return "background-size:7vh"
    }
    if(n > 50){
      return "background-size:9vh"
    }
  }

const secondsToDate = (seconds)  => {
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
const click = () => {
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
document.querySelector(`#theme`).addEventListener(`click`,()=>{
  if(document.querySelector(`#theme`).className===`act`){
    document.querySelector(`#theme`).src="./free-icon-brightness-2130739.png"
    document.querySelector(`#theme`).className=``
    document.querySelector(`style`).innerHTML=`
    :root {
      --deg: #ffffff;
      --white: #d9dbdd;
      --bg: #202124;
      --bg2: #303134;
      --yellow: #b28e2a;
      --bg_yellow:#b28e2a66;
      --gray:#9aa0a6;
      --bg3:#202124;
    }`
  }
  else{
    document.querySelector(`#theme`).src="./free-icon-brightness-2280442.png"
    document.querySelector(`#theme`).className=`act`
    document.querySelector(`style`).innerHTML=bg()
  }
})
const bg = () => {
  if(document.querySelector(`#theme`).className===`act`){
  if(document.querySelector(`#wImg img`).alt==="clear-day"){
    return `
    :root {
      --deg: #edc34d;
      --white: #ffffff;
      --bg: #ddc78d;
      --bg2: #8d8363;
      --yellow: #ffcc00;
      --bg_yellow:#beaa6e;
      --gray:#ffffff;
      --bg3:#8d8363;
    }`
  }
  // else if(document.querySelector(`#wImg img`).alt==="partly-cloudy-day-snow"){
  //   return `
  //   :root {
  //     --deg: #edc34d;
  //     --white: #7a7a7a;
  //     --bg: #e2e2e2;
  //     --bg2: #d2d2d2;
  //     --yellow: #edc34d;
  //     --bg_yellow:#a0a0a0;
  //     --gray:#545454;
  //     --bg3:#d2d2d2;
  //   }`
  // }
  else{
    return`
    :root {
      --deg: #edc34d;
      --white: #ffffff;
      --bg: #b8bdcc;
      --bg2: #757c92;
      --yellow: #edc34d;
      --bg_yellow:#9a9eab;
      --gray:#e6e6e6;
      --bg3:#757c92;
    }`
  }
}
else{
  return`
    :root {
      --deg: #ffffff;
      --white: #d9dbdd;
      --bg: #202124;
      --bg2: #303134;
      --yellow: #b28e2a;
      --bg_yellow:#b28e2a66;
      --gray:#9aa0a6;
      --bg3:#202124;
    }`
}
}