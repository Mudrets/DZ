addEventListener(`DOMContentLoaded`,()=>{
  add()
})
document.querySelector(`#searchBtn`).addEventListener(`click`,add)
window.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter'){
    add()
  }
})
function add(){
  const input = document.querySelector(`#input`)
  if(input.value.length === 0){
    input.style.borderColor = 'red'
  }else{
    const cityName = input.value
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ua&units=metric&appid=33a4edb2fe337fd387e632012d97d0de`
    weather(url)
  }
}
document.querySelector(`#clearBtn`).addEventListener(`click`,()=>{document.querySelector(`#input`).value=``})

const weather = async(url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    if(response.status === 404){
      input.style.borderColor = 'red'
    }
    generelInfo(data)
  } catch (error) {
    console.error('Error', error)
  }
}

function generelInfo(data) {
  document.querySelector('#deg').innerHTML = Math.floor(data.list[0].main.temp) 
  document.querySelector('#wImg').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">`
  document.querySelector('#loc').innerHTML = ` ${data.city.country} ${data.city.name}`
  document.querySelector('#sInfo').innerHTML = `Відчуваеться як: ${Math.floor(data.list[0].main.feels_like)}°C<br>Вологість: ${Math.floor(data.list[0].main.humidity)}% <br>Вітер: ${Math.floor(data.list[0].wind.speed)} км/ч`
  document.querySelector('#date').innerHTML = `${secondsToDate(data.list[0].dt+data.city.timezone-21600)[1]} ${secondsToDate(data.list[0].dt+data.city.timezone-21600)[0]} <br>${data.list[0].weather[0].description}`
  document.querySelector(`#hoursWeather`).innerHTML=``
  document.querySelector(`#hoursWeather`).insertAdjacentHTML(`beforeend`,`
  <div class="block active">
  <span class="day">${secondsToDate(data.list[0].dt+data.city.timezone-21600)[2]}</span>
  <div class="wImgs">
    <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">
  </div>
  <span class="min-max">${Math.floor(data.list[0].main.temp_max)}° <span style="color: #9aa0a6;">${Math.floor(data.list[0].main.temp_min)}°</span></span>
</div>`)
  for(let i = 4;i<39;i=i+8)
  document.querySelector(`#hoursWeather`).insertAdjacentHTML(`beforeend`,`
  <div class="block">
  <span class="day">${secondsToDate(data.list[i].dt+data.city.timezone-21600)[2]}</span>
  <div class="wImgs">
    <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="">
  </div>
  <span class="min-max">${Math.floor(data.list[i].main.temp_max)}° <span style="color: #9aa0a6;">${Math.floor(data.list[i].main.temp_min)}°</span></span>
</div>`)
}
function secondsToDate(seconds) {
  const date = new Date(0);
  date.setSeconds(seconds);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const daysOfWeekf = [`Неділя`, `Понеділок`, `Вівторок`, `Середа`, `Четвер`, `П'ятниця`, `Субота`];
  const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const dayOfWeekf = daysOfWeekf[date.getUTCDay()];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень','Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
  const month = months[date.getUTCMonth()];
  const formattedTime = [
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
    `${dayOfWeekf}`,
    `${dayOfWeek}`,
    `${month}`,
    `${dayOfMonth}`
  ]
  return formattedTime;
}
