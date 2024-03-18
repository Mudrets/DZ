function biggerEl(mass: (number | string)[]): number | string | undefined {
    if (mass.length === 0) return undefined

    let lastBigEl = mass[0]

    for (let elem of mass) {
        if (typeof elem === 'number' && (typeof lastBigEl === 'number' || typeof lastBigEl === 'undefined') && elem > lastBigEl) {
            lastBigEl = elem            
        }
        else if (typeof elem === 'string' && (typeof lastBigEl === 'string' || typeof lastBigEl === 'undefined') && elem.length > lastBigEl.length) {
            lastBigEl = elem
        }
        else if (typeof elem === 'string' && (typeof lastBigEl === 'number' || typeof lastBigEl === 'undefined') && elem.length > lastBigEl) {
            lastBigEl = elem
        }
        else if (typeof elem === 'number' && (typeof lastBigEl === 'string' || typeof lastBigEl === 'undefined') && elem > lastBigEl.length) {
            lastBigEl = elem
        }
    }

    return lastBigEl
}

const digits: number[] = [1, 52, 33, 9, 2]
const strings: string[] = ['apple', 'orange', 'banana']
const all: (string|number)[] = [1, 7, 3,'apple', 'orange', 'banana']

console.log(biggerEl(strings))
console.log(biggerEl(digits))
console.log(biggerEl(all))
