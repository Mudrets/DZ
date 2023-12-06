const parking = []
class car{
    static = 0
    constructor(brand,model,year,run,price,rent){
        this.brand = brand
        this.model = model
        this.year = year
        this.run = run
        this.price = price
        this.rent = rent
    }
    push(){
        document.querySelector(`#alert`).innerHTML = ``
        const burger = document.querySelector(`#burger`)
        const car_slider = document.querySelector(`.car_slider`)
        const car_add = document.querySelector(`#car_add`)
        if (this.brand.length < 1) {
            document.querySelector(`#alert`).innerHTML = `Please fill "Brand" bar`
            return
          }
        if (this.model.length < 1) {
            document.querySelector(`#alert`).innerHTML = `Please fill "Model" bar`
            return
          }

        parking.unshift(this)      
        car_slider.classList.toggle(`hide`)
        car_add.style.display=`none`  
        burger.classList.toggle(`hide`) 
    }
    info(){
        console.log(this.brand,this.model,this.year,this.run,this.price,this.rent);
    }
    new_run(digit){
        return this.run = this.run + digit
    }
    new_price(digit){
        return this.price = digit
    }
    rent_change(){
        if(this.rent === `free`){
            return this.rent = `reserved`
        }
        else if(this.rent === `reserved`){
            return this.rent = `free`
        }
        console.log(this.brand,this.model,this.price,this.static);
    }
}
const truck = new car(`porshe`,`Cayenne S Coupe`,2023,2000,500,`free`)
const truck2 = new car(`porshe`,`Cayenne turbo gt`,2019,2000,300,`free`)
const truck3 = new car(`porshe`,`Cayenne s`,2021,1000,100,`free`)

truck.push()
truck2.push()
truck3.push()



function display(){
    const car_slider = document.querySelector(`.car_slider`)
    car_slider.innerHTML = ``
    car_slider.insertAdjacentHTML(`beforeend`,`
        <div id="${parking[0].model}" class="car carousel-item active">
        <span class="name">${parking[0].brand} ${parking[0].model}</span>
        <span class="name">${parking[0].year}</span>
        <img class="car_img" src="https://porsche.ua/storage/local/assetPreview/image/cayenne-coupe.webp" alt="">
        <div class="bar_bottom">
            <span id="run_btn" class="bar_pick">RUN: ${parking[0].run} km</span>
            <span id="rent_btn" class="bar_pick">RENT: ${parking[0].rent}</span>
            <span id="price_btn" class="bar_pick">RENT DAY PRICE: ${parking[0].price} $</span>
        </div>
    </div>`)
    for(i = 1;i<parking.length;i++){
        console.log();
        car_slider.insertAdjacentHTML(`beforeend`,`
        <div id="${parking[i].model}" class="car carousel-item">
        <span class="name">${parking[i].brand} ${parking[i].model}</span>
        <span class="name">${parking[i].year}</span>
        <img class="car_img" src="https://porsche.ua/storage/local/assetPreview/image/cayenne-coupe.webp" alt="">
        <div class="bar_bottom">
            <span id="run_btn" class="bar_pick run"> RUN: ${parking[i].run} km</span>
            <span id="rent_btn" class="bar_pick">RENT: ${parking[i].rent}</span>
            <span id="price_btn" class="bar_pick">RENT DAY PRICE: ${parking[i].price} $</span>
        </div>
    </div>`)
    }
}
display()

addEventListener(`click`,(e)=>{
        for(key of parking){
            if (e.target.id === `rent_btn`) {      
                if(key.model === e.target.parentElement.parentElement.id){
                    key.rent_change()
                    e.target.innerHTML = `RENT: ${key.rent}`
                    disAll()
                }
            }
        }
})

addEventListener(`click`,(e)=>{
        for(key of parking){
            if (e.target.id === `price_btn`) {      
                if(key.model === e.target.parentElement.parentElement.id){
                    let run = +prompt()
                    key.new_price(run)
                    if (isNaN(run)){
                        alert('Run not valid!')
                    } else if (run < 0){
                        alert(`Run not valid!`)
                    } else {
                        e.target.innerHTML = `RENT DAY PRICE: ${key.price} $`
                    }
                }
            }
        }
})

addEventListener(`click`,(e)=>{
        for(key of parking){
            if (e.target.id === `run_btn`) {      
                if(key.model === e.target.parentElement.parentElement.id){
                    let run = +prompt()
                    key.new_run(run)
                    if (isNaN(run)){
                        alert('Run not valid!')
                    } else if (run < 0){
                        alert(`Run not valid!`)
                    } else {
                        e.target.innerHTML = `RUN: ${key.run} Km`
                    }
                }
            }
        }
})
const okButt = document.querySelector(`#okButt`)
const clsButt = document.querySelector(`#clsButt`)

okButt.addEventListener(`click`, addcar)

clsButt.addEventListener(`click`, (e)=>{
    const car_slider = document.querySelector(`.car_slider`)
    const car_add = document.querySelector(`#car_add`)
    car_slider.classList.toggle(`hide`)
    car_add.style.display=`none`
    burger.classList.toggle(`hide`)
    document.querySelector(`#alert`).innerHTML = ``
})

function addcar(){
    const brand = document.querySelector(`#brand`).value
    const model = document.querySelector(`#model`).value
    const year = document.querySelector(`#year`).value
    const run = +document.querySelector(`#run`).value
    const price = +document.querySelector(`#price`).value
    const rent = document.querySelector(`#rent`).value
    const name = new car(brand,model,year,run,price,rent)
    name.push()
    display()
}

const burger = document.querySelector(`#burger`)

burger.addEventListener(`click`,()=>{
    const car_slider = document.querySelector(`.car_slider`)
    const car_add = document.querySelector(`#car_add`)
    car_slider.classList.toggle(`hide`)
    car_add.style.display=`flex`
    burger.classList.toggle(`hide`)
})
