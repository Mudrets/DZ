const ClearButton = document.querySelector(`.c_b`)
ClearButton.addEventListener(`click`,ClearFunction)

const FunctionInput = document.querySelector(`.input`)
FunctionInput.addEventListener(`keyup`,ScriptFunction)

function ClearFunction(){
    document.querySelector(`.input`).value = ``;
    document.querySelector(`.answear`).textContent = ``;
    style.insertAdjacentHTML(
        'beforeend',
        '.answear{transition: all 0.1s ease; height:0px;}'
    )
}

function ScriptFunction(){
    const input = document.querySelector(`.input`).value
    const simbols = input.split(``).map(String)
    let realwords = 1
    for(i=0;i<simbols.length;i++){
        if(simbols[i-1] === ` ` && simbols[i] !== ` `){
            realwords++;
        }
    }
    if(simbols.length < 1){
        document.querySelector(`.answear`).textContent = ``;
        style.insertAdjacentHTML(
            'beforeend',
            '.answear{transition: all 0.1s ease; height:0px;}'
        )
    }
    else{
        document.querySelector(`.answear`).textContent = `${simbols.length} символів, ${realwords} слів`;
        style.insertAdjacentHTML(
            'beforeend',
            '.answear{transition: all 0.1s ease; height:20px;}'
        )
    }
}
const style = document.querySelector(`style`)
function randAnim(){
    let rand = Math.floor(Math.random() * 4)
    if(rand === 0){
        style.insertAdjacentHTML(
            'beforeend',
            '@keyframes start{0%{left: 1000px;}30%{left:-100px}40%{left: 10px;}50%{left: -10px;}60%{left: 0px;}}'
        )
    }
    else if(rand === 1){
        style.insertAdjacentHTML(
            'beforeend',
            '@keyframes start{0%{right: 1000px;}30%{right:-100px}40%{right: 10px;}50%{right: -10px;}60%{right: 0px;}}'
        )
    }
    else if(rand === 2){
        style.insertAdjacentHTML(
            'beforeend',
            '@keyframes start{0%{top: 1000px;}30%{top:-100px}40%{top: 10px;}50%{top: -10px;}60%{top: 0px;}}'
        )
    }
    else if(rand === 3){
        style.insertAdjacentHTML(
            'beforeend',
            '@keyframes start{0%{bottom: 1000px;}30%{bottom:-100px}40%{bottom: 10px;}50%{bottom: -10px;}60%{bottom: 0px;}}'
        )
    }
    
}
randAnim()



