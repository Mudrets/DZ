const e_b = document.querySelector(`.error_bar`)
const score = document.querySelector(`.score`)
const div = document.querySelector(`.row`)
let scoreD = 0
const answear =[
    {
    task:'лелека'
    },
    {
    task:'криниця'
    },
    {
    task:'чайник'
    },
    {
    task:'дід мороз'
    },
    {
    task:'вогонь'
    },
    {
    task:'морозиво'
    },
    {
    task:'зошит'
    },
    {
    task:'вікно'
    },
    {
    task:'часник'
    },
    {
    task:'свічка'
    }
]
div.addEventListener(`keypress`,(e) => {
    let key_number = e.target.id;
    if(e.target.tagName === `INPUT`){
        if (e.which === 13){
            let task = e.target.value
            for(const key of answear){
            if (task.toLowerCase() === answear[key_number].task){
                e_b.textContent = ``
                e.target.style.background = `rgb(151, 238, 138)`;
                e.target.disabled = true
                scoreD++
                console.log(scoreD);
                e_b.textContent = `Відповідь на загадку під номером ${+key_number + 1} вірна =)`
                score.textContent = scoreD
                return score
            }
            else if(isFinite(task) === true){
                e.target.value = ``
                e_b.textContent = `Попрошу вас не використовувати цифри)))`
                e.target.style.background = `white`;
            }
            else{
                e_b.textContent = ``
                e.target.disabled = true
                e.target.style.background = `rgb(238, 138, 138)`;
                score.textContent = scoreD
                e_b.textContent = `Відповідь на загадку під номером ${+key_number + 1} невірна =(`
            }
        }
    }
    }
})
