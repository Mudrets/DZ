const Stand = [
    {
        Pair: 'Air Jordan 5',   //название пары кроссовок
        ReliseDate: 2013,   //дата релиза пары кроссовок
        Edition: 100000,    //количество произведённых пар кроссовок
        RetailPrise: 180,   //цена производителя
        ResailPrise: 350,   //цена перепродажи
        img:`<img src="https://restocks.net/_next/image/?url=https%3A%2F%2Fcdn.restocks.net%2Fcdn-cgi%2Fimage%2Fwidth%3D1000%2Fstorage%2Fimages%2Fproducts%2F845035-003%2F1.png&w=3840&q=75" alt=""></img>`
    },
    {
        Pair: 'Air Jordan 1',
        ReliseDate: 1985,
        Edition: 2500000,
        RetailPrise: 120,
        ResailPrise: 1900,
        img:`<img src="https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-high-chicago-lost-and-found-1.png?v=1669025825" alt=""></img>`
    },
    {
        Pair: 'Air Jordan 4',
        ReliseDate: 2022,
        Edition: 30000,
        RetailPrise: 220,
        ResailPrise: 450,
        img:`<img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F05%2Fair-jordan-4-frozen-times-aq9129-001-release-date-0-1.jpg?fit=max&cbr=1&q=90&w=750&h=500" alt=""></img>`
    },
    {
        Pair: 'Air Jordan 3',
        ReliseDate: 2017,
        Edition: 150000,
        RetailPrise: 180,
        ResailPrise: 220,
        img:`<img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F11%2Fair-jordan-3-wizards-pe-ct8532-148-release-info-tw0.jpg?w=960&cbr=1&q=90&fit=max" alt=""></img>`
    },
    {
        Pair: 'Air Jordan 6',
        ReliseDate: 2021,
        Edition: 15000,
        RetailPrise: 180,
        ResailPrise: 650,
        img:`<img src="https://flowerkickz.gr/cdn/shop/products/flowerkickzAir_Jordan_6_Retro_Carmine_2021_--0.png?v=1646149319" alt=""></img>`
    },
    {
        Pair: 'Air Jordan 11',
        ReliseDate: 1996,
        Edition: 60000,
        RetailPrise: 180,
        ResailPrise: 930,
        img:`<img src="https://izicop.com/cdn/shop/products/air-jordan-11-bred-83685-1-1000.png?v=1645033800" alt=""></img>`
    },

]
const login = document.querySelector(`.ins`);
const deleter = document.querySelector(`.delete`)
function log(){
    document.querySelector(`.ins`).innerHTML = ``
    for(i=0;i < Stand.length; i++){
        login.insertAdjacentHTML(
            "beforeend",
            `   <div class = "col-4"><div class = "block ">
                <div class = "number">${i+1}</div>
                <div class = "para">${Stand[i].Pair}</div>
                <div class = "img">${Stand[i].img}</div>
                <div class = "relise">Дата релиза: <span class = "prise">${Stand[i].ReliseDate} год</span></div>
                <div class = "stok">Сток: <span class = "prise">${Stand[i].Edition} пар</span></div>
                <div class = "reteil">Ретеил: <span class = "prise">${Stand[i].RetailPrise}$</div>
                <div class = "reseil">Ресеил: <span class = "prise">${Stand[i].ResailPrise}$</span></div>
                </div>
                </div>
                `
        )
    }
}

log()

const select = document.querySelector(`#se`)
select.addEventListener(`change`,PairRemove)

let option = document.querySelector(`#se`)

function PairOptions(){
    document.querySelector(`#se`).innerHTML = `<option value="0">Выбери пару</option>`
    for(i=0;i<Stand.length;i++)
    option.insertAdjacentHTML(
        'beforeend',
        `<option class="style" value="${Stand[i].Pair}">${Stand[i].Pair}</option>`
    )
}
PairOptions()

function PairRemove(){
    let option2 = document.querySelector(`#se`).value
    Remover(option2)
    PairOptions()
    log()
}


function Remover(Pair){
    for(const key of Stand){
    if(key.Pair === Pair){
        Stand.splice(Stand.findIndex((item)=>{return item.Pair === Pair}),1)
        return
        }
    }
        console.log(`Sneakers not found`);
}



const ok = document.querySelector(`.ok`)

ok.addEventListener(`click`,AddPair)



function Adder(Pair,RD,Edition,RetPr,ResPr){
    Stand.push({
        Pair: Pair,
        ReliseDate: RD,
        Edition: Edition,
        RetailPrise: RetPr,
        ResailPrise: ResPr
    })
    log()
    PairOptions()
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

}




