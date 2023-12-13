document.addEventListener('DOMContentLoaded', function () {
  let tdsize=`e`
  let size = 10
  let mines = 15
  let masiv = []
  let records=[]
  let fl = 0
  let clickedcells = 0
  document.querySelector(`#mode`).addEventListener(`change`,()=>{
    const mode = document.querySelector(`#mode`).value
    if(mode===`easy`){
      size=10
      mines=15
      tdsize=`e`
      initializeMasiv()
    addMines()
    addNumbers()
    renderMasiv()
    console.log(!isGameWon())
    }
    else if(mode===`medium`){
      size=15
      mines=30
      tdsize=`m`
      initializeMasiv()
    addMines()
    addNumbers()
    renderMasiv()
    console.log(!isGameWon())
    }
    else if(mode===`hard`){
      size=20
      mines=60
      tdsize=`h`
      initializeMasiv()
    addMines()
    addNumbers()
    renderMasiv()
    console.log(!isGameWon())
    }
  })
  function initializeMasiv() {
    masiv = [];
    clickedcells = 0;

    for (let i = 0; i < size; i++) {
      masiv[i] = [];
      for (let j = 0; j < size; j++) {
        masiv[i][j] = {
          isMine: false,
          count: 0,
          revealed: false,
          flagged: false
        };
      }
    }
  }

  function addMines() {
    let minesPlaced = 0;
    while (minesPlaced < mines) {
      const str = Math.floor(Math.random() * size)
      const kol = Math.floor(Math.random() * size)
      if (!masiv[str][kol].isMine) {
        console.log(!masiv[str][kol].isMine)
        masiv[str][kol].isMine = true
        minesPlaced++
      }
    }
  }

  function addNumbers() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (!masiv[i][j].isMine) {
          masiv[i][j].count = countAdjacentmines(i, j)
        }
      }
    }
  }

  function countAdjacentmines(str, kol) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newstr = str + i
        const newkol = kol + j

        if (newstr >= 0 && newstr < size && newkol >= 0 && newkol < size && masiv[newstr][newkol].isMine) {
          count++
        }
      }
    }

    return count
  }

  function clickedCell(str, kol) {
    if (!masiv[str][kol].revealed && !masiv[str][kol].flagged) {
      masiv[str][kol].revealed = true
      clickedcells++
      if (masiv[str][kol].count === 0) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newstr = str + i
            const newkol = kol + j

            if (newstr >= 0 && newstr < size && newkol >= 0 && newkol < size) {
              clickedCell(newstr, newkol)
            }
          }
        }
      }
    }
  }
  function isGameWon() {
    return clickedcells === size * size - mines
  }


  function addFlag(str, kol) {
    if (!masiv[str][kol].revealed) {
      masiv[str][kol].flagged = !masiv[str][kol].flagged
      if(event.target.id===`flagged`){
        fl--
        document.querySelector(`#flags`).innerHTML=`🚩: ${fl}`
      }
      else{
        fl++
        document.querySelector(`#flags`).innerHTML=`🚩: ${fl}`
      }
    }
  }

  function renderMasiv() {
    const table = document.getElementById('tablo')
    
    while (table.firstChild) {
      table.removeChild(table.firstChild)
    }
    

    for (let i = 0; i < size; i++) {
      const str = document.createElement('tr')

      for (let j = 0; j < size; j++) {
        const cell = document.createElement('td')
        cell.classList.add(`${tdsize}`)
        cell.setAttribute("id", `${i+j}`)
        if( cell.id%2===0){
          cell.classList.toggle(`g1`)
        }
        else{
          cell.classList.toggle(`g2`)
        }
        cell.addEventListener('click', () => cellClick(i, j))
        cell.addEventListener('contextmenu', (event) => {
          event.preventDefault();
          addFlag(i, j)
          renderMasiv()
        });

        if (masiv[i][j].revealed) {
          cell.textContent = masiv[i][j].isMine ?``: (masiv[i][j].count || '')
          if( masiv[i][j].isMine ? '' : (masiv[i][j].count || '')===1){
            cell.style.color=`rgb(25, 118, 210)`
          }
          if( masiv[i][j].isMine ? '' : (masiv[i][j].count || '')===2){
            cell.style.color=`rgb(56, 142, 60)`
          }
          if( masiv[i][j].isMine ? '' : (masiv[i][j].count || '')===3){
            cell.style.color=`rgb(211, 47, 47)`
          }
          if( cell.id%2===0){
            cell.classList.toggle(`t1`)
          }
          else{
            cell.classList.toggle(`t2`)
          }
          cell.classList.add('revealed')

          if (masiv[i][j].isMine) {
            cell.classList.add('mine')
          }
        } else if (masiv[i][j].flagged) {
          cell.textContent = '🚩'
          cell.setAttribute("id", "flagged")
        } else {
          cell.textContent = ''
        }

        str.appendChild(cell)
      }
      table.appendChild(str)
    }
    timer()
    document.querySelector(`#rem`).innerHTML=`❎: ${(size*size)-clickedcells}`
  }
  function timer(){
    let i = 1
    if (clickedcells===0) {
      squareInterval = setInterval(() => {
        if (clickedcells===0) {
          document.querySelector(`#time`).innerHTML=`⏲ 0:0`
          return i=1
        }
        document.querySelector(`#time`).innerHTML=`⏲ ${Math.floor(i / 60)}:${i % 60}`
        return i++
      }, 1000)
      }
  }
  function cellClick(str, kol) {

    if (masiv[str][kol].isMine) {
      document.querySelector(`#lose`).style.display=`flex`
      setTimeout(()=>document.querySelector(`#lose`).style.display=`none`,1000)
      fl=0
      document.querySelector(`#flags`).innerHTML=`🚩: ${fl}`
      initializeMasiv()
      addMines()
      addNumbers()
    } else {
      clickedCell(str, kol)

      if (isGameWon()) {
        alert('Congratulations! You won!')
        initializeMasiv()
        addMines()
        addNumbers()
      }
    }
    renderMasiv()
  }
  initializeMasiv()
  addMines()
  addNumbers()
  renderMasiv()
  console.log(!isGameWon())
})