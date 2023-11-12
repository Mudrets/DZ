const Stand = [
    {
        Pair: 'Air Jordan 5',   //название пары кроссовок
        ReliseDate: 2013,   //дата релиза пары кроссовок
        Edition: 100000,    //количество произведённых пар кроссовок
        RetailPrise: 180,   //цена производителя
        ResailPrise: 350    //цена перепродажи
    },
    {
        Pair: 'Air Jordan 1',
        ReliseDate: 1985,
        Edition: 2500000,
        RetailPrise: 120,
        ResailPrise: 1900
    },
    {
        Pair: 'Air Jordan 4',
        ReliseDate: 2022,
        Edition: 30000,
        RetailPrise: 220,
        ResailPrise: 450
    },
    {
        Pair: 'Air Jordan 3',
        ReliseDate: 2017,
        Edition: 150000,
        RetailPrise: 180,
        ResailPrise: 220
    },
    {
        Pair: 'Air Jordan 6',
        ReliseDate: 2021,
        Edition: 15000,
        RetailPrise: 180,
        ResailPrise: 650
    },
    {
        Pair: 'Air Jordan 11',
        ReliseDate: 1996,
        Edition: 60000,
        RetailPrise: 180,
        ResailPrise: 930
    },

]
const login = document.querySelector(`.ins`);
const deleter = document.querySelector(`.delete`)
function log(){
    document.querySelector(`.ins`).innerHTML = `<div class = "col-2 commit golova">Номер</div>
    <div class = "col-2 commit golova">Пара</div>
    <div class = "col-2 commit golova">Дата релиза</div>
    <div class = "col-2 commit golova">Сток</div>
    <div class = "col-2 commit golova">Ретеил</div>
    <div class = "col-2 commit golova">Рессеил</div>`
    for(i=0;i < Stand.length; i++){
        login.insertAdjacentHTML(
            "beforeend",
            `
                <div class = "col-2 commit">${i+1}</div>
                <div class = "col-2 commit">${Stand[i].Pair}</div>
                <div class = "col-2 commit">${Stand[i].ReliseDate}</div>
                <div class = "col-2 commit">${Stand[i].Edition}</div>
                <div class = "col-2 commit">${Stand[i].RetailPrise}</div>
                <div class = "col-2 commit">${Stand[i].ResailPrise}</div>
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
    const Pairs = document.querySelector(`.Pairs`).value
    const RD = document.querySelector(`.RD`).value
    const Edition = document.querySelector(`.Edition`).value
    const RetPrise = document.querySelector(`.RetPrise`).value
    const ResPrise = document.querySelector(`.ResPrise`).value
    if (Pairs === ``){
        document.querySelector(`.zam`).innerHTML = `<div class = "commit red zam">Укажите название пары</div>`
        return
    } 
    else
    document.querySelector(`.zam`).innerHTML = ``
    Adder(Pairs,RD,Edition,RetPrise,ResPrise)

}




