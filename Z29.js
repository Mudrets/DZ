console.log(`Таска 1 'Перевірка типу'`);
const Zero = null
const Nichego = undefined
const PerInfo = {
    name: `Віктор`,
    lastname: `Хінкали`,
    age: `26`
}


function TYPE(masive) {
    if (masive === null) {
        console.log(`Тип об'єкту: null`)
    } else if (masive === undefined) {
        console.log(`Тип об'єкту: ${typeof(masive)}`)
    } else {
        console.log(`Тип об'єкту: ${typeof(masive)}`)
    }
}
TYPE(Zero)
// TYPE(Nichego)
// TYPE(PerInfo)

console.log(`Таска 2 'Перевірка властивостей на null'`);
const Sneaker = {
    Pair: 'Air Jordan 5',
    Relise: 2013,
    Condition: null,
    Colorway: 'Oreo',
    Size: '44,5',
    Retail: `180$`,
    Resail: null
}

function Zerochekker(masive){
    for (const [key, value] of Object.entries(masive)) {
        if (value === null){
            console.log(`Значення ключа '${key}': null`)
        }
    }    
}
Zerochekker(Sneaker)

console.log(`Таска 3 Сортировка 'кросівок по ціні'`);
const Sneakers = [
    {
        Pair: 'Air Jordan 5',
        Colorway: 'Oreo',
        Size: '44,5',
        RetailPrise: 180,
    },
    {
        Pair: 'Air Jordan 1',
        Colorway: 'Chicago',
        Size: '43',
        RetailPrise: 250,
    },
    {
        Pair: 'Air Jordan 1',
        Colorway: 'University blue',
        Size: '39',
        RetailPrise: 200,
    },
    {
        Pair: 'Air Jordan 6',
        Colorway: 'Olive',
        Size: '46',
        RetailPrise: 220,
    },
]

console.log(Sneakers.sort((a, b) => a.RetailPrise - b.RetailPrise))





