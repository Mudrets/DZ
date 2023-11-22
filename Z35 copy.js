const e_b = document.querySelector(`.error_bar`)
const score = document.querySelector(`.score`)
let scoreD = 0
const task1 = document.querySelector(`.task_1`)
const task2 = document.querySelector(`.task_2`)
const task3 = document.querySelector(`.task_3`)
const task4 = document.querySelector(`.task_4`)
const task5 = document.querySelector(`.task_5`)
const task6 = document.querySelector(`.task_6`)
const task7 = document.querySelector(`.task_7`)
const task8 = document.querySelector(`.task_8`)
const task9 = document.querySelector(`.task_9`)
const task10 = document.querySelector(`.task_10`)

task1.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_1`).value
    if (e.which === 13){
        if (task.toLowerCase() === `лелека`){
            e_b.textContent = ``
            task1.style.background = `rgb(151, 238, 138)`;
            task1.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 1 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task1.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри)))`
            task1.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task1.disabled = true
            task1.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 1 невірна =(`
        }
    }
})
task2.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_2`).value
    if (e.which === 13){
        if (task.toLowerCase() === `криниця`){
            e_b.textContent = ``
            task2.style.background = `rgb(151, 238, 138)`;
            task2.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 2 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task2.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task2.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task2.disabled = true
            task2.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 2 невірна =(`
        }
    }
})
task3.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_3`).value
    if (e.which === 13){
        if (task.toLowerCase() === `чайник`){
            e_b.textContent = ``
            task3.style.background = `rgb(151, 238, 138)`;
            task3.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 3 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task3.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task3.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task3.disabled = true
            task3.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 3 невірна =(`
        }
    }
})
task4.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_4`).value
    if (e.which === 13){
        if (task.toLowerCase() === `дід мороз`){
            e_b.textContent = ``
            task4.style.background = `rgb(151, 238, 138)`;
            task4.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 4 вірна =)`
            score.textContent = scoreD
            return score
        }
        if (task.toLowerCase() === `дідмороз`){
            e_b.textContent = ``
            task4.style.background = `rgb(151, 238, 138)`;
            task4.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 4 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task4.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task4.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task4.disabled = true
            task4.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 4 невірна =(`
        }
    }
})
task5.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_5`).value
    if (e.which === 13){
        if (task.toLowerCase() === `вогонь`){
            e_b.textContent = ``
            task5.style.background = `rgb(151, 238, 138)`;
            task5.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 5 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task5.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task5.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task5.disabled = true
            task5.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 5 невірна =(`
        }
    }
})
task6.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_6`).value
    if (e.which === 13){
        if (task.toLowerCase() === `морозиво`){
            e_b.textContent = ``
            task6.style.background = `rgb(151, 238, 138)`;
            task6.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 6 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task6.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task6.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task6.disabled = true
            task6.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 6 невірна =(`
        }
    }
})
task7.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_7`).value
    if (e.which === 13){
        if (task.toLowerCase() === `зошит`){
            e_b.textContent = ``
            task7.style.background = `rgb(151, 238, 138)`;
            task7.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 7 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task7.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task7.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task7.disabled = true
            task7.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 7 невірна =(`
        }
    }
})
task8.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_8`).value
    if (e.which === 13){
        if (task.toLowerCase() === `вікно`){
            e_b.textContent = ``
            task8.style.background = `rgb(151, 238, 138)`;
            task8.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 8 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task8.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task8.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task8.disabled = true
            task8.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 8 невірна =(`
        }
    }
})
task9.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_9`).value
    if (e.which === 13){
        if (task.toLowerCase() === `часник`){
            e_b.textContent = ``
            task9.style.background = `rgb(151, 238, 138)`;
            task9.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 9 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task9.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task9.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task9.disabled = true
            task9.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 9 невірна =(`
        }
    }
})
task10.addEventListener (`keypress`,(e) => {
    let task = document.querySelector(`.task_10`).value
    if (e.which === 13){
        if (task.toLowerCase() === `свічка`){
            e_b.textContent = ``
            task10.style.background = `rgb(151, 238, 138)`;
            task10.disabled = true
            scoreD++
            console.log(scoreD);
            e_b.textContent = `Відповідь на загадку під номером 10 вірна =)`
            score.textContent = scoreD
            return score
        }
        else if(isFinite(task) === true){
            task10.value = ``
            e_b.textContent = `Попрошу вас не використовувати цифри =)`
            task10.style.background = `white`;
        }
        else{
            e_b.textContent = ``
            task10.disabled = true
            task10.style.background = `rgb(238, 138, 138)`;
            console.log(213);
            score.textContent = scoreD
            e_b.textContent = `Відповідь на загадку під номером 10 невірна =(`
        }
    }
})
