const input = document.querySelector(`.lists`)
const pencil = document.querySelector(`#pencil`)
const ul = document.querySelector(`.todos`)
// 
const all = document.querySelector(`.all`)
const active = document.querySelector(`.active`)
const perfomed = document.querySelector(`.perfomed`)
// 
const save = document.querySelector(`.save`)
const clear = document.querySelector(`.clear`)
const tips = document.querySelector(`.tipBtn`)
// 
const overlay = document.querySelector(`#overlay`)
const closebtn = document.querySelector(`.closebtn`)
overlay.classList.toggle(`overlayOff`)

pencil.addEventListener(`click`, ()=>{
    input.classList.toggle(`display`)
    input.classList.toggle(`undisplay`)
})

input.addEventListener(`keypress`,(e) => {
    if (e.which === 13){
        let text = input.value
        input.value = ``
        add(text)
    }
})

function add(text){
    const li = document.createElement(`li`)
    const span = document.createElement(`span`)
    const span2 = document.createElement(`span`)
    const i = document.createElement(`i`)
    const i2 = document.createElement(`i`)
    i.classList.add(`fas`,`fa-trash-alt`)
    li.textContent = text
    i2.classList.add(`fas`,`fa-pencil-alt`)
    li.insertAdjacentElement(`afterbegin`,span2)
    span2.insertAdjacentElement(`afterbegin`,i2)
    span.insertAdjacentElement(`afterbegin`,i)
    li.insertAdjacentElement(`afterbegin`,span)
    ul.insertAdjacentElement(`afterbegin`,li)
}

ul.addEventListener(`click`, (e) =>{
    if(e.target.tagName === `LI`){
        e.target.classList.toggle(`checked`)
    }
    else if (e.target.className === `fas fa-trash-alt`){
        e.target.parentElement.parentElement.remove()
    }
    else if (e.target.className === `fas fa-pencil-alt`){
        let text = input.value
        e.target.parentElement.parentElement.innerHTML = `<span><i class="fas fa-trash-alt"></i></span><span><i class="fas fa-pencil-alt"></i></span><span class="text">${text}</span>`
        input.value = ``
    }
})

active.addEventListener(`click`, () =>{
    const li = document.querySelectorAll(`.todos li`)
    for (let i = 0; i <li.length;i++){
        li[i].style.display = `list-item`
        if(li[i].className === `checked`){
            li[i].style.display = `none`
        }
    }
})

perfomed.addEventListener(`click`, () =>{
    const li = document.querySelectorAll(`.todos li`)
    for (let i = 0; i <li.length;i++){
        li[i].style.display = `list-item`
        if(li[i].className !== `checked`){
            li[i].style.display = `none`
        }
    }
})

all.addEventListener(`click`, () =>{
    const li = document.querySelectorAll(`.todos li`)
    for (let i = 0; i <li.length;i++){
        li[i].style.display = `list-item`
    }
})
clear.addEventListener(`click`, () => {
    ul.innerHTML = ``
})

tips.addEventListener(`click`, () =>{
    overlay.classList.toggle(`overlayOn`)
    overlay.classList.toggle(`overlayOff`)
    console.log(123);
})

closebtn.addEventListener(`click`, () =>{
    overlay.classList.toggle(`overlayOn`)
    overlay.classList.toggle(`overlayOff`)
    console.log(123);
})