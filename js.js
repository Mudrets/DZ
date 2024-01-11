let offsetX, offsetY
const back = document.querySelector(`.back`)
// const drag = document.getElementById('drag')
const draggableElement = document.getElementById('draggableElement')
const backSize=500
const boxSize=100
draggableElement.style.height=`${boxSize}px`
draggableElement.style.width=`${boxSize}px`
back.style.height=`${backSize}px`
back.style.width=`${backSize}px`
const limits={
  top:getCoords(back).top,
  right:getCoords(back).left+backSize-boxSize,
  buttom:getCoords(back).top+backSize-boxSize,
  left:getCoords(back).left,
}
function limitsF(x,y){
  if(y<limits.top){
    y=limits.top
  }
  if(y>limits.buttom){
    y=limits.buttom
  }
  if(x<limits.left){
    x=limits.left
  }
  if(x>limits.right){
    x=limits.right
  }
  return{x,y}
}
draggableElement.onmousedown = function(e) {
  console.log(`Block grabbed`)
  draggableElement.innerHTML=`grabbing`
  draggableElement.style.transition = 'none'
  let coords = getCoords(draggableElement)
  let shiftX = e.pageX - coords.left
  let shiftY = e.pageY - coords.top
  document.body.appendChild(draggableElement)
  draggableElement.style.cursor=`grabbing`
  moveAt(e)
  function moveAt(e) {
    let y = e.pageY - shiftY
    let x = e.pageX - shiftX
    y = limitsF(x,y).y
    x = limitsF(x,y).x
    e.preventDefault()
    draggableElement.style.left = `${x}px`
    draggableElement.style.top = `${y}px`
  }
  document.onmousemove = function(e) {
    moveAt(e)
  }

  draggableElement.onmouseup = function() {
    draggableElement.innerHTML=``
    console.log(`Block dropped`)
    draggableElement.style.cursor=`grab`
    draggableElement.style.transition = 'all 0.1s'
    document.onmousemove = null
    draggableElement.onmouseup = null
  }

}

draggableElement.ondragstart = function() {
  return false
}
function getCoords(elem) {
  let box = elem.getBoundingClientRect()
  return {
    top: box.top + scrollY,
    left: box.left + scrollX
  }
}

window.addEventListener(`keypress`, function(e) {
  let x = getCoords(draggableElement).left
  let y = getCoords(draggableElement).top
  if(e.key===`s`){
    draggableElement.innerHTML=`↓`
      y=y+3
    }
  if(e.key===`S`){
    draggableElement.innerHTML=`↓`
      y=y+10
    }
  if(e.key===`w`){
    draggableElement.innerHTML=`↑`
      y=y-3
      if(y<0){y=0}
    }
  if(e.key===`W`){
    draggableElement.innerHTML=`↑`
      y=y-10
      if(y<0){y=0}
    }
  y = limitsF(x,y).y
  draggableElement.style.top=`${y}px`
  if(e.key===`d`){
    draggableElement.innerHTML=`→`
    x=x+3
  }
  if(e.key===`D`){
    draggableElement.innerHTML=`→`
    x=x+10
  }
  if(e.key===`a`){
    draggableElement.innerHTML=`←`
    x=x-3
    if(x<0){x=0}
  }
  if(e.key===`A`){
    draggableElement.innerHTML=`←`
    x=x-10
    if(x<0){x=0}
  }
  x = limitsF(x,y).x
  draggableElement.style.left=`${x}px`
  })

  draggableElement.addEventListener(`mouseenter`, (e)=>{
    draggableElement.innerHTML=`hover`
    console.log(`Mouse inBlock`)
  })
  draggableElement.addEventListener(`mouseleave`, (e)=>{
    draggableElement.innerHTML=``
    console.log(`Mouse outBlock`)
  })

