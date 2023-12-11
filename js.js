class Person {
    constructor(firstName, lastName, birthDate, email, password, confirmPassword,profession) {
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      this.birthDate = birthDate
      this.password = password
      this.confirmPassword = confirmPassword
      this.profession = profession
    }
    Registration(){
      this.firstName = document.querySelector(`#firstName`).value
      this.lastName = document.querySelector(`#lastName`).value
      this.email = document.querySelector(`#email`).value
      this.birthDate = document.querySelector(`#birthDate`).value
      this.password = document.querySelector(`#password`).value
      this.confirmPassword = document.querySelector(`#passwordConfirm`).value
      this.profession = document.querySelector(`#profession`).value
      if (this.firstName.length < 1) {
        alert('First name is not valid! The first name should be at least one symbol long.')
        return false
      }
        
      if (this.lastName.length < 1) {
        alert('Last name is not valid! The last name should be at least one symbol long.')
        return false
      }

      if (this.birthDate.length < 1) {
        alert('Date is not valid!')
          return false
      }
      if (this.email.length < 1) {
        alert('Email is not valid!')
        return false
      }
        
      if (this.password.length < 6) {
        alert('Password is not valid! The password should be at least six symbol long.')
        return false
      }
        
      if (this.confirmPassword !== this.password) {
        alert('Passwords do not match!')
        return false
      }
    }

}
class Driver extends Person {
    constructor(firstName, lastName, birthDate, email, password, confirmPassword, licenseNumber, vehicleType, experienceYears) {
        super(firstName, lastName, birthDate, email, password, confirmPassword)
        this.licenseNumber = licenseNumber
        this.vehicleType = vehicleType
        this.experienceYears = experienceYears
    }
    Registration(){
        if(super.Registration() === false){
            return
        }
        else{

            this.licenseNumber = document.querySelector(`#licenseNumber`).value
            this.vehicleType = document.querySelector(`#vehicleType`).value
            this.experienceYears = document.querySelector(`#experienceYears_1`).value
            
            this.first = `License Number: ${this.licenseNumber}`
            this.second = `Vehicle Type: ${this.vehicleType}`
            this.third = `Experience Years: ${this.experienceYears} years`
        localStorage.setItem(this.email, JSON.stringify(this))
        }
        alert(`Registration success!!!`)
    }
  }
  class Doctor extends Person {
    constructor(firstName, lastName, birthDate, email, password, confirmPassword, specialization, hospital, experienceYears) {
      super(firstName, lastName, birthDate, email, password, confirmPassword)
      this.specialization = specialization
      this.hospital = hospital
      this.experienceYears = experienceYears
    }
    Registration(){
        if(super.Registration() === false){
            return
        }
        else{
            this.specialization = document.querySelector(`#specialization`).value
            this.hospital = document.querySelector(`#hospital`).value
            this.experienceYears = document.querySelector(`#experienceYears_2`).value

            this.first = `Specialization: ${this.specialization}`
            this.second = `Hospital: ${this.hospital}`
            this.third = `Experience Years: ${this.experienceYears} years`
        localStorage.setItem(this.email, JSON.stringify(this))
        }
        alert(`Registration success!!!`)
    }
  }
  class Teacher extends Person {
    constructor(firstName, lastName, birthDate, email, password, confirmPassword, subject, school, experienceYears) {
      super(firstName, lastName, birthDate, email, password, confirmPassword)
      this.subject = subject
      this.school = school
      this.experienceYears = experienceYears
    }
    Registration(){
        if(super.Registration() === false){
            return
        }
        else{
            this.subject = document.querySelector(`#subject`).value
            this.school = document.querySelector(`#school`).value
            this.experienceYears = document.querySelector(`#experienceYears_3`).value
            
            this.first = `Subject: ${this.subject}`
            this.second = `School: ${this.school}`
            this.third = `Experience Years: ${this.experienceYears} years`
        localStorage.setItem(this.email, JSON.stringify(this))
        }
        alert(`Registration success!!!`)
    }
  }
  class Salesperson extends Person {
    constructor(firstName, lastName, birthDate, email, password, confirmPassword, product, company, experienceYears) {
      super(firstName, lastName, birthDate, email, password, confirmPassword)
      this.product = product
      this.company = company
      this.experienceYears = experienceYears
    }
    Registration(){
        if(super.Registration() === false){
            return
        }
        else{
            this.product = document.querySelector(`#product`).value
            this.company = document.querySelector(`#company`).value
            this.experienceYears = document.querySelector(`#experienceYears_4`).value
        
            this.first = `Subject: ${this.product}`
            this.second = `School: ${this.company}`
            this.third = `Experience Years: ${this.experienceYears} years`
        localStorage.setItem(this.email, JSON.stringify(this))
        }
        alert(`Registration success!!!`)
    }
  }

  document.querySelector(`#registerButton`).addEventListener(`click`,()=>{
    if (document.querySelector(`#profession`).value === "driver") {
        let fullName = new Driver
        fullName.Registration()
    }
    if (document.querySelector(`#profession`).value === "doctor") {
        let fullName = new Doctor
        fullName.Registration()
    }
    if (document.querySelector(`#profession`).value === "teacher") {
        let fullName = new Teacher
        fullName.Registration()
    }
    if (document.querySelector(`#profession`).value === "salesperson") {
        let fullName = new Salesperson
        fullName.Registration()
    }
    if (document.querySelector(`#profession`).value === "nothing") {
        alert('Select proffesion!!!')
        return
    }
  })
  
  document.querySelector(`#profession`).addEventListener(`change`,()=>{
    const profession = document.querySelector(`#profession`).value
    if (profession === `driver`) {
        document.querySelector(`#driver`).style.display=`block`
        document.querySelector(`#doctor`).style.display=`none`
        document.querySelector(`#teacher`).style.display=`none`
        document.querySelector(`#salesperson`).style.display=`none`
    }
    if (profession === `doctor`) {
        document.querySelector(`#driver`).style.display=`none`
        document.querySelector(`#doctor`).style.display=`block`
        document.querySelector(`#teacher`).style.display=`none`
        document.querySelector(`#salesperson`).style.display=`none`
    }
    if (profession === `teacher`) {
        document.querySelector(`#driver`).style.display=`none`
        document.querySelector(`#doctor`).style.display=`none`
        document.querySelector(`#teacher`).style.display=`block`
        document.querySelector(`#salesperson`).style.display=`none`
    }
    if (profession === `salesperson`) {
        document.querySelector(`#driver`).style.display=`none`
        document.querySelector(`#doctor`).style.display=`none`
        document.querySelector(`#teacher`).style.display=`none`
        document.querySelector(`#salesperson`).style.display=`block`
    }
    if (profession === `nothing`){
        document.querySelector(`#driver`).style.display=`none`
        document.querySelector(`#doctor`).style.display=`none`
        document.querySelector(`#teacher`).style.display=`none`
        document.querySelector(`#salesperson`).style.display=`none`
    }
  })

  document.querySelector(`#choiseRegister`).addEventListener('click',()=>{
    document.querySelector(`#Register`).style.display=`block`
    document.querySelector(`#Login`).style.display=`none`
    document.querySelector(`#Info`).style.display=`none`
  })

  document.querySelector(`#choiseLogin`).addEventListener('click',()=>{
    document.querySelector(`#Register`).style.display=`none`
    document.querySelector(`#Login`).style.display=`block`
    document.querySelector(`#Info`).style.display=`none`
  })

  document.querySelector(`#loginButton`).addEventListener(`click`,()=>{
    const email = document.querySelector(`#email_log`).value
    const password = document.querySelector(`#password_log`).value
    const userData = localStorage.getItem(email)
    if(userData){
        const user = JSON.parse(userData)
        if(password === user.password){
            document.querySelector(`#Login`).style.display=`none`
            document.querySelector(`#Info`).style.display=`block`
            document.querySelector(`#infoDiv`).innerHTML=` 
              <label>Name: ${user.firstName} ${user.lastName}</label>
              <label>Birthday: ${user.birthDate}</label>
              <label>Email: ${user.email}</label>
              <label>Profession: ${user.profession}</label>
              <label>${user.first}</label>
              <label>${user.second}</label>
              <label>${user.third}</label>
              <input type="text" id = "emailD" style="display: none;" value="${user.email}">`
              
        }
        else{
            alert(`Password or Username is not valid!`)
        }
    }
    else{
        alert(`Password or Username is not valid!`)
    }
  })
  document.querySelector(`#deleteButton`).addEventListener(`click`, ()=>{
    event.preventDefault()
    const user = document.getElementById(`emailD`).value
    console.log(user);
    var isAdmin = confirm("Are you sure you want to delete this account?");
    if(isAdmin === true){
    document.querySelector(`#Login`).style.display = 'block'
      document.querySelector(`#Info`).style.display = 'none'
      localStorage.removeItem(`${user}`)
    }
  })
    document.querySelector(`#backButton`).addEventListener('click',()=>{
        document.querySelector(`#Register`).style.display=`none`
        document.querySelector(`#Login`).style.display=`block`
        document.querySelector(`#Info`).style.display=`none`
        document.querySelector(`#allDiv`).style.display=`none`
      })
    document.querySelector(`#backButton_2`).addEventListener('click',()=>{
        document.querySelector(`#Register`).style.display=`none`
        document.querySelector(`#Login`).style.display=`block`
        document.querySelector(`#Info`).style.display=`none`
        document.querySelector(`#allDiv`).style.display=`none`
      })
      
      document.querySelector(`#showAllButton`).addEventListener('click',()=>{
        document.querySelector(`#all`).innerHTML=``
        document.querySelector(`#Register`).style.display=`none`
        document.querySelector(`#Login`).style.display=`none` 
        document.querySelector(`#Info`).style.display=`none`   
        document.querySelector(`#allDiv`).style.display=`flex`   
        for (var i = 0; i < localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(localStorage.key(i)))
                document.querySelector(`#all`).insertAdjacentHTML(`beforeend`,`
                <div class="all">
                <span>${user.firstName} ${user.lastName}</span>
                  <label>Birthday: ${user.birthDate}</label>
                  <label>Email: ${user.email}</label>
                  <label>Profession: ${user.profession}</label>
                  <label>${user.first}</label>
                  <label>${user.second}</label>
                  <label>${user.third}</label>
                  <input type="text" id = "emailD" style="display: none;" value="${user.email}">
                </div>`)
        }
      })