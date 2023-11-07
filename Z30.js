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
function logs(){
    for(const key of Stand)
    console.log(`Pair ${key.Pair}, relised in ${key.ReliseDate}, have ${key.Edition} editions and retail prise ${key.RetailPrise}$, now cost ${key.ResailPrise}$`)
}
// console.log(`Таска 1`)
// for(const key of Stand){
//     console.log(`'${key.Pair}'`);
//   }



// console.log(`Таска 2`)
//     console.log(`${Stand.length} pairs of sneakers on stand`);



// console.log(`Таска 3`)
// for(const key of Stand.sort((a, b) => a.ResailPrise - b.ResailPrise)){
//     console.log(`'${key.Pair}' costs ${key.ResailPrise}$ on resail`);
//   }



// console.log(`Таска 4`)
// for(const key of Stand.sort((b, a) => a.ReliseDate - b.ReliseDate)){
//     console.log(`'${key.Pair}' relised in ${key.ReliseDate}`);
//   }



// console.log(`Таска 5`)
// for(const key of Stand.sort((a, b) => a.Edition - b.Edition)){
//     console.log(`'${key.Pair}' have released ${key.Edition} pairs`);
//   }



// console.log(`Таска 6`)
// function search(Pair){
// for(const key of Stand){
//     if(key.Pair === Pair){
//     console.log(`Pair ${key.Pair}, relised in ${key.ReliseDate}, have ${key.Edition} editions and retail prise ${key.RetailPrise}$, now cost ${key.ResailPrise}$`)
//     }
//   }
// }
// search('Air Jordan 11')



// console.log(`Таска 7`)
// function addpair(Pair,RD,Edition,RetPr,ResPr){
//     Stand.push({
//         Pair: Pair,
//         ReliseDate: RD,
//         Edition: Edition,
//         RetailPrise: RetPr,
//         ResailPrise: ResPr
//     })
// }
// addpair('Air Jordan 13',1998,68000,190,250)
// logs()



// console.log(`Таска 8`)
// const Pair2 = 'Air Jordan 3' //Введите пару кроссовок
// function PairRemove(Pair){
//     for(const key of Stand){
//     if(key.Pair === Pair){
//         Stand.splice(Stand.findIndex((item)=>{return item.Pair === Pair}),1)
//         logs()
//         return
//         }
//     }
//         console.log(`Sneakers not found`);
// }
// PairRemove(Pair2)



// console.log(`Таска 9`)
// function PairRepair(Pair,newResPr){
//     for(const key of Stand){
//     if(key.Pair === Pair){
//         let index = Stand.findIndex((item)=>{return item.Pair === Pair})
//         Stand[index].ResailPrise = newResPr
//         console.log(`Pair ${key.Pair}, relised in ${key.ReliseDate}, have ${key.Edition} editions and retail prise ${key.RetailPrise}$, now cost ${key.ResailPrise}$`)
//         return
//         }
//     }
//         console.log(`Sneakers not found`);
// }
// PairRepair('Air Jordan 1',900)



console.log(`Таска 11`)
function newProperty(NP){
    for(const key of Stand){
        key[NP] = `new`
    }
    console.log(Stand);
}
newProperty(`Condition`)



console.log(`Таска 10`)
function PairChange(Pair,NP,Value){
    for(const key of Stand){
    if(key.Pair === Pair){
        let index = Stand.findIndex((item)=>{return item.Pair === Pair})
        if(NP === `ReliseDate`){
                    Stand[index].ReliseDate = Value
                    console.log(`Pair ${key.Pair}, relised in ${key.ReliseDate}, have ${key.Edition} editions and retail prise ${key.RetailPrise}$, now cost ${key.ResailPrise}$`)
                    return
        }
        else if(NP === `Edition`){
                    Stand[index].Edition = Value
                    console.log(`Pair ${key.Pair}, relised in ${key.ReliseDate}, have ${key.Edition} editions and retail prise ${key.RetailPrise}$, now cost ${key.ResailPrise}$`)
                    return
        }
        else if(NP === `RetailPrise`){
                    Stand[index].RetailPrise = Value
                    console.log(`Pair ${key.Pair}, relised in ${key.ReliseDate}, have ${key.Edition} editions and retail prise ${key.RetailPrise}$, now cost ${key.ResailPrise}$`)
                    return
        }
        else if(NP === `ResailPrise`){
                    Stand[index].ResailPrise = Value
                    console.log(`Pair ${key.Pair}, relised in ${key.ReliseDate}, have ${key.Edition} editions and retail prise ${key.RetailPrise}$, now cost ${key.ResailPrise}$`)
                    return
        }
        else if(NP === `Condition`){
                    Stand[index].Condition = Value
                    console.log(`Pair ${key.Pair}, in used condition`)
                    return
        }
        }
    }
        console.log(`Parametr not found`);
}
PairChange('Air Jordan 11',`Condition`,`used`)



console.log(`Таска 12`) //Работает только с 10 и 11!!!
function Wear(Pair){
    for(const key of Stand){
        if(key.Pair === Pair){
            if(key.Condition === `used`){
                console.log(`Pair is used`);
                return
            }
            console.log(`Pair is new`);
            return
        }
    }
    console.log(`Pair not found`);
}
Wear('Air Jordan 11')

