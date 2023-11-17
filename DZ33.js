const Stand = [
    {
        Pair: 'AIR JORDAN 5',   //название пары кроссовок
        ReliseDate: 2013,   //дата релиза пары кроссовок
        Edition: 100000,    //количество произведённых пар кроссовок
        RetailPrise: 180,   //цена производителя
        ResailPrise: 350,   //цена перепродажи
        img:`<img src="https://restocks.net/_next/image/?url=https%3A%2F%2Fcdn.restocks.net%2Fcdn-cgi%2Fimage%2Fwidth%3D1000%2Fstorage%2Fimages%2Fproducts%2F845035-003%2F1.png&w=3840&q=75" alt=""></img>`,
        Condition:`new`
    },
    {
        Pair: 'AIR JORDAN 1',
        ReliseDate: 1985,
        Edition: 2500000,
        RetailPrise: 120,
        ResailPrise:1900,
        img:`<img src="https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1669025825" alt=""></img>`,
        Condition:`new`
    },
    {
        Pair: 'AIR JORDAN 4',
        ReliseDate: 2022,
        Edition: 30000,
        RetailPrise: 220,
        ResailPrise: 450,
        img:`<img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F05%2Fair-jordan-4-frozen-times-aq9129-001-release-date-0-1.jpg?fit=max&cbr=1&q=90&w=750&h=500" alt=""></img>`,
        Condition:`new`
    },
    {
        Pair: 'AIR JORDAN 3',
        ReliseDate: 2017,
        Edition: 150000,
        RetailPrise: 180,
        ResailPrise: 220,
        img:`<img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F11%2Fair-jordan-3-wizards-pe-ct8532-148-release-info-tw0.jpg?w=960&cbr=1&q=90&fit=max" alt=""></img>`,
        Condition:`new`
    },
    {
        Pair: 'AIR JORDAN 6',
        ReliseDate: 2021,
        Edition: 15000,
        RetailPrise: 180,
        ResailPrise: 650,
        img:`<img src="https://flowerkickz.gr/cdn/shop/products/flowerkickzAir_Jordan_6_Retro_Carmine_2021_--0.png?v=1646149319" alt=""></img>`,
        Condition:`new`
    },
    {
        Pair: 'AIR JORDAN 11',
        ReliseDate: 1996,
        Edition: 60000,
        RetailPrise: 180,
        ResailPrise: 930,
        img:`<img src="https://izicop.com/cdn/shop/products/air-jordan-11-bred-83685-1-1000.png?v=1645033800" alt=""></img>`,
        Condition:`new`
    },

]

//Сортировка
const SelectSort = document.querySelector(`#sort`)
SelectSort.addEventListener(`change`,PairOptionsSort)

function popular(){
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function highres(){
    for(const key of Stand.sort((a, b) => b.ResailPrise - a.ResailPrise)){
    }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function highret(){
    for(const key of Stand.sort((a, b) => b.RetailPrise - a.RetailPrise)){
    }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function lowres(){
    for(const key of Stand.sort((a, b) => a.ResailPrise - b.ResailPrise)){
    }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function lowret(){
    for(const key of Stand.sort((a, b) => a.RetailPrise - b.RetailPrise)){
    }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function dateold(){
    for(const key of Stand.sort((a, b) => a.ReliseDate - b.ReliseDate)){
    }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function datenew(){
    for(const key of Stand.sort((a, b) => b.ReliseDate - a.ReliseDate)){
    }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function stokhigh(){
    for(const key of Stand.sort((a, b) => b.Edition - a.Edition)){
    }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}
function stoklow(){
    for(const key of Stand.sort((a, b) => a.Edition - b.Edition)){
      }
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}


function PairOptionsSort(){
let optionSort = document.querySelector(`#sort`).value
if(optionSort === `popular`){
    popular()
}
else if(optionSort === `highres`){
    highres()
}
else if(optionSort === `highret`){
    highret()
}
else if(optionSort === `lowres`){
    lowres()
}
else if(optionSort === `lowret`){
    lowret()
}
else if(optionSort === `dateold`){
    dateold()
}
else if(optionSort === `datenew`){
    datenew()
}
else if(optionSort === `stokhigh`){
    stokhigh()
}
else if(optionSort === `stoklow`){
    stoklow()
}
}




//Лог
const login = document.querySelector(`.ins`);
const deleter = document.querySelector(`.delete`)

function logAll() {
    if(document.querySelector(`#reserve`).checked){
    log(Stand.filter((item)=>{return item.Condition === `inuse`}))
    console.log(2);
}
    if(document.querySelector(`#reserve`).checked){
    log(Stand.filter((item)=>{return item.Condition === `inuse`}))
    console.log(2);
}
    else if(document.querySelector(`#nonreserve`).checked){
    log(Stand.filter((item)=>{return item.Condition === `new`}))
    console.log(3);
}
    else{
        log(Stand)
        console.log(1);
    }
}

function log(arr){
    document.querySelector(`.ins`).innerHTML = ``
    for(i=0;i < arr.length; i++){
        if(arr[i].Condition === `inuse`){
            login.insertAdjacentHTML(
                "beforeend",
                `   <div class = "col-4"><div class = "block">
                    <div class = "number">${i+1}</div>
                    <span class = "para">${arr[i].Pair}</span>
                    <div class = "img">${`<img src="https://static.vecteezy.com/system/resources/previews/023/652/091/non_2x/reserved-red-stamp-on-a-transparent-background-free-png.png" alt="">`}</div>
                    <div class = "relise">Дата релиза: <span class = "prise">${arr[i].ReliseDate}</span></div>
                    <div class = "stok">Сток: <span class = "prise">${arr[i].Edition}</span></div>
                    <div class = "reteil">Ретеил: <span class = "prise">${arr[i].RetailPrise}</div>
                    <div class = "reseil">Ресеил: <span class = "prise">${arr[i].ResailPrise}</span></div>
                    </div>
                    </div>
                    `
            )
        }
        else if(arr[i].Condition === `new`){
            login.insertAdjacentHTML(
                "beforeend",
                `   <div class = "col-4"><div class = "block">
                    <div class = "number">${i+1}</div>
                    <span class = "para">${arr[i].Pair}</span>
                    <div class = "img">${arr[i].img}</div>
                    <div class = "relise">Дата релиза: <span class = "prise">${arr[i].ReliseDate}</span></div>
                    <div class = "stok">Сток: <span class = "prise">${arr[i].Edition}</span></div>
                    <div class = "reteil">Ретеил: <span class = "prise">${arr[i].RetailPrise}</div>
                    <div class = "reseil">Ресеил: <span class = "prise">${arr[i].ResailPrise}</span></div>
                    </div>
                    </div>
                    `
            )
        }
    }
    }
log(Stand)

//Резервация пары
const SelectReserved = document.querySelector(`#inuse`)
SelectReserved.addEventListener(`change`,PairReserve)

let optionReserve = document.querySelector(`#inuse`)

function PairOptionsReserve(){
    document.querySelector(`#inuse`).innerHTML = `<option value="0">Выбери пару</option>`
    for(i=0;i<Stand.length;i++)
    optionReserve.insertAdjacentHTML(
        'beforeend',
        `<option class="style" value="${Stand[i].Pair}">${Stand[i].Pair}</option>`
    )
}
PairOptionsReserve()

function Reserve(Pair){
    for(const key of Stand){
    if(key.Pair === Pair){
        let index = Stand.findIndex((item)=>{return item.Pair === Pair})
        if(key.Condition === `inuse`){
            Stand[index].Condition = `new`
        }
        else if(key.Condition === `new`){
            Stand[index].Condition = `inuse`
        }
        }
    }
}

function PairReserve(){
    let option = document.querySelector(`#inuse`).value
    Reserve(option)
    PairOptionsReserve()
    logAll()
}

//резервация по названи кликом
login.addEventListener(`click`,(e) =>{
    if(e.target.tagName === `SPAN`){
        for(const key of Stand){
        if(key.Pair === e.srcElement.innerText){
            if(key.Condition === `inuse`){
                key.Condition = `new`
            }
            else if(key.Condition === `new`){
                key.Condition = `inuse`
            }
        PairOptionsReserve()
        logAll()
    }
}
}
})

//Удаление пары
const SelectRemove = document.querySelector(`#delete`)
SelectRemove.addEventListener(`change`,PairRemove)

let optionRemove = document.querySelector(`#delete`)

function PairOptionsRemove(){
    document.querySelector(`#delete`).innerHTML = `<option value="0">Выбери пару</option>`
    for(i=0;i<Stand.length;i++)
    optionRemove.insertAdjacentHTML(
        'beforeend',
        `<option class="style" value="${Stand[i].Pair}">${Stand[i].Pair}</option>`
    )
}
PairOptionsRemove()

function PairRemove(){
    let option = document.querySelector(`#delete`).value
    Remover(option)
    PairOptionsReserve()
    PairOptionsRemove()
    logAll()
}


function Remover(Pair){
    for(const key of Stand){
    if(key.Pair === Pair){
        Stand.splice(Stand.findIndex((item)=>{return item.Pair === Pair}),1)
        return
        }
    }
}


//Добавление пары
const okAdd = document.querySelector(`.okAdd`)
okAdd.addEventListener(`click`,AddPair)

function Adder(Pair,RD,Edition,RetPr,ResPr){
    Stand.push({
        Pair: Pair,
        ReliseDate: RD,
        Edition: Edition,
        RetailPrise: RetPr,
        ResailPrise: ResPr,
        Condition:`new`
    })
}


function AddPair(){
    const Pairs = document.querySelector(`.k1`).value
    const RD = document.querySelector(`.k2`).value
    const Edition = document.querySelector(`.k3`).value
    const RetPrise = document.querySelector(`.k4`).value
    const ResPrise = document.querySelector(`.k5`).value
    if (Pairs === ``){
        document.querySelector(`.zam`).innerHTML = `<div class = "commit red zam">Укажите название пары</div>`
        return
    } 
    else
    document.querySelector(`.zam`).innerHTML = ``
    Adder(Pairs,RD,Edition,RetPrise,ResPrise)
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}


//Редектор пары
const okChange = document.querySelector(`.okChange`)
okChange.addEventListener(`click`,pairChange)

function PairRepair(Pair,newResPr){
    for(const key of Stand){
    if(key.Pair === Pair){
        let index = Stand.findIndex((item)=>{return item.Pair === Pair})
        Stand[index].ResailPrise = newResPr
        return
        }
    }
    document.querySelector(`.zam`).innerHTML = `<div class = "commit red zam">Пара не найдена</div>`
        
}


function pairChange(){
    const Pairs = document.querySelector(`.k1c`).value
    const ResPrise = document.querySelector(`.k5c`).value
    if (ResPrise === ``){
        document.querySelector(`.zam`).innerHTML = `<div class = "commit red zam">Укажите пару и её новую цену</div>`
        return
    } 
    else
    document.querySelector(`.zam`).innerHTML = ``
    PairRepair(Pairs,ResPrise)
    logAll()
    PairOptionsRemove()
    PairOptionsReserve()
}


//поиск
const SearchStart = document.querySelector(`.search`)
SearchStart.addEventListener(`keypress`,function(e){
    if (e.key === 'Enter') {
    let Search = document.querySelector(`.search`).value
    if(Search === ``){
        log(Stand)
    }
    else{
    log(Stand.filter((item)=>{return item.Pair === Search}))
    console.log(2);
    }
    
    }
    
})
const searchButton = document.querySelector(`.sButt`)
searchButton.addEventListener(`click`,function(e){
    let Search = document.querySelector(`.search`).value
    if(Search === ``){
        log(Stand)
    }
    else{
    log(Stand.filter((item)=>{return item.Pair === Search}))
    console.log(2);
    }
})