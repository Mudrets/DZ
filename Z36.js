let score = 0
let timer = 10
let gameActive = false
let squareInterval
const difficult = document.querySelector(`#difficult`)
const startBtn = document.querySelector(`#startGameBtn`)
const gameContainer = document.querySelector(`#game-container`)
const alertmessage = document.querySelector(`#alertmessage`)
const last = document.querySelector(`#last`)
const best = document.querySelector(`#best`)
const mode = document.querySelector(`#mode`)
let allScore = []
let hardScore = []
let easyScore = []
let mediumScore = []

difficult.addEventListener(`change`,modechange)

function modechange(){
    const difficult = document.querySelector(`#difficult`).value
    if(difficult === `hard`){
        last.textContent = `Last: ${hardScore}`
        if(hardScore.length === 0){
            best.textContent = `Best:`
        }
        else{
            best.textContent = `Best: ${Math.max.apply(null, hardScore)}`
        }
    }
    if(difficult === `expert`){
        last.textContent = `Last: ${allScore}`
        if(allScore.length === 0){
            console.log(allScore.length);
            best.textContent = `Best:`
        }
        else{
            best.textContent = `Best: ${Math.max.apply(null, allScore)}`
        }
    }
    if(difficult === `medium`){
        last.textContent = `Last: ${mediumScore}`
        if(mediumScore.length === 0){
            console.log(mediumScore.length);
            best.textContent = `Best:`
        }
        else{
            best.textContent = `Best: ${Math.max.apply(null, mediumScore)}`
        }
    }
    if(difficult === `easy`){
        last.textContent = `Last: ${easyScore}`
        if(easyScore.length === 0){
            console.log(easyScore.length);
            best.textContent = `Best:`
        }
        else{
            best.textContent = `Best: ${Math.max.apply(null, easyScore)}`
        }
    }
}
modechange()
function color(){
    let color = `#${Math.floor(Math.random() * 1000000)}`
    return color
}

function size(){
    let s = `${Math.floor(Math.random() * 60)}px`
    return s
}

startBtn.addEventListener(`click`, startGame)

function updateScore(){
    document.querySelector(`#score`).textContent = `Score: ${score}`
}

function updateTimer(){
    document.querySelector(`#timer`).textContent = `Time: ${timer}`
}

function getRandomPosition(){
    const maxX = gameContainer.clientWidth -60
    const maxY = gameContainer.clientHeight -60
    const x = Math.floor(Math.random()* maxX)
    const y = Math.floor(Math.random()* maxY)
    console.log(x,y);
    return{x,y}
}

function clearGameContainer(){
    gameContainer.lastElementChild.remove()
}

function createSquare(){
    const difficult = document.querySelector(`#difficult`).value
    const square = document.createElement(`div`)
    square.classList.add(`square`)
    const{x,y} = getRandomPosition()
    square.style.left = `${x}px`
    square.style.top = `${y}px`
    square.style.background = color()
    if(difficult === `expert`){
        square.style.width = size()
        square.style.height = square.style.width
    }
    else if(difficult === `hard`){
        square.style.width = `10px`
        square.style.height = square.style.width
    }
    else if(difficult === `medium`){
        square.style.width = `40px`
        square.style.height = square.style.width
    }
    else if(difficult === `easy`){
        square.style.width = `50px`
        square.style.height = square.style.width
    }
    square.addEventListener(`click`,() => {
        if(gameActive){
            score++
            updateScore()
            square.remove()
            createSquare()
        }
    })

    gameContainer.appendChild(square)
}

function startGame(){
    document.querySelector(`#duration`).style.display = `none`
    document.querySelector(`#difficult`).style.display = `none`
    startBtn.style.display = `none`
    gameActive = true
    score = 0
    timer = parseInt(document.querySelector(`#duration`).value) || 10
    updateScore()
    updateTimer()

    squareInterval = setInterval(() => {
        if(timer > 0){
            timer--
            updateTimer()
        }
        else{
            endGame()
        }
    }, 1000)

    createSquare()
}

function endGame(){
    const difficult = document.querySelector(`#difficult`).value
    if(difficult === `hard`){
        hardScore.unshift(score)
        last.textContent = `Last: ${hardScore}`
        best.textContent = `Best: ${Math.max.apply(null, hardScore)}`
        if(score < Math.max.apply(null, hardScore)){
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Гра закінчилася! Рахунок ${score}`
        }
        else{
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Новий рекорд!!! Рахунок ${score}`
        }
        setTimeout(() => {alertmessage.style.display = `none`}, 1500)
    }
    if(difficult === `expert`){
        allScore.unshift(score)
        last.textContent = `Last: ${allScore}`
        best.textContent = `Best: ${Math.max.apply(null, allScore)}`
        if(score < Math.max.apply(null, allScore)){
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Гра закінчилася! Рахунок ${score}`
        }
        else{
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Новий рекорд!!! Рахунок ${score}`
        }
        setTimeout(() => {alertmessage.style.display = `none`}, 1500)
    }
    if(difficult === `medium`){
        mediumScore.unshift(score)
        last.textContent = `Last: ${mediumScore}`
        best.textContent = `Best: ${Math.max.apply(null, mediumScore)}`
        if(score < Math.max.apply(null, mediumScore)){
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Гра закінчилася! Рахунок ${score}`
        }
        else{
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Новий рекорд!!! Рахунок ${score}`
        }
        setTimeout(() => {alertmessage.style.display = `none`}, 1500)
    }
    if(difficult === `easy`){
        easyScore.unshift(score)
        last.textContent = `Last: ${easyScore}`
        best.textContent = `Best: ${Math.max.apply(null, easyScore)}`
        if(score < Math.max.apply(null, easyScore)){
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Гра закінчилася! Рахунок ${score}`
        }
        else{
            alertmessage.style.display = `flex`
            alertmessage.textContent = `Новий рекорд!!! Рахунок ${score}`
        }
        setTimeout(() => {alertmessage.style.display = `none`}, 1500)
    }
    
    clearInterval(squareInterval)
    gameActive = false
    clearGameContainer()
    startBtn.style.display = `block`
    
    document.querySelector(`#duration`).style.display = `block`
    document.querySelector(`#difficult`).style.display = `block`
}
