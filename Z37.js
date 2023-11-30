class User {
    constructor(firstName, lastName, date, email, password, confirm_password){
      this.firstName = firstName;
      this.lastName = lastName;
      this.date = date;
      this.email = email;
      this.password = password;
      this.confirm_password = confirm_password;
    }
  
    register(){
      if (this.firstName.length < 1) {
        alert(`Поле 'Ім'я користувача' повинно містити хоча б один символ`)
        return
      }
      if (this.lastName.length < 1) {
        alert(`Поле 'Прізвище користувача' повинно містити хоча б один символ`)
        return
      }
      if (this.date.length < 1) {
        alert(`Поле 'Дата народження' є обов'язковим`)
        return
      }
      if (this.email.length < 1) {
        alert(`Поле 'Email' є обов'язковим`)
        return
      }
      if (this.password.length < 6) {
        alert(`Пароль повинен бути довжиною від 6 символів`)
        return
      }
      if (this.confirm_password !== this.password) {
        alert(`Підтвердження пароля не співпадає з паролем`)
        return
      }
  
      console.log(this);
      localStorage.setItem(this.email, JSON.stringify(this))
      alert(`Успішна реєстрація`)
  
    }
  }
  
  const registrationForm = document.getElementById('registrationForm')
  const loginForm = document.getElementById('loginForm')
  const infoForm = document.getElementById('infoForm')
  const infoBlock = document.querySelector(`.infoBlock`)
  
  registrationForm.addEventListener('submit', (event)=> {
    event.preventDefault()
  
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const date = document.getElementById('date').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirm_password = document.getElementById('confirm_password').value
  
    const user = new User(firstName, lastName, date, email, password, confirm_password)
    user.register()
  
    // registrationForm.style.display = 'none'
    // loginForm.style.display = 'block'
  })
  
  // ///////////////////////////////////////////////////////////
  
  const registerBtn = document.getElementById('registerBtn')
  
  registerBtn.addEventListener('click', ()=>{
    loginForm.style.display = 'none'
    registrationForm.style.display = 'block'
  })
  
  ///////////////////////////////////////////////////////////
  loginForm.addEventListener('submit', (event)=> {
    event.preventDefault()
  
    const logInEmail = document.getElementById('logInEmail').value
    const logInPassword = document.getElementById('logInPassword').value
  
    const userData = localStorage.getItem(logInEmail)
    
    if(userData){
      const user = JSON.parse(userData)
      if (user.password === logInPassword) {
        alert(`Вхід успішний. Користувач ${user.firstName} ${user.lastName}` ) 
        loginForm.style.display = 'none'
        infoForm.style.display = 'block'
        infoBlock.innerHTML = `<div class="form-group">
        <label>Ім'я користувача:${user.firstName}</label>  
      </div>
      <div class="form-group">
        <label>Прізвище користувача:${user.lastName}</label>
      </div>
      <div class="form-group">
        <label>Дата народження:${user.date}</label>
      </div>
      <div class="form-group">
        <label>Email:${user.email}</label>
      </div>
      <input type="text" id = "emailD" style="display: none;" value="${user.email}">`
      } 
      else {
        alert('Не вірний пароль')
      }
    }
    else{
      alert(`Користувача з таким email: ${logInEmail} не існує` )
    }
  })
  
  ///////////////////////////////////////////////////////////////////////////
  
  const goToLogInBtn = document.getElementById('goToLogInBtn')
  
  goToLogInBtn.addEventListener('click', ()=>{
    loginForm.style.display = 'block'
    registrationForm.style.display = 'none'
  })

  const logOutBtn = document.getElementById('logOutBtn')

  logOutBtn.addEventListener('click', ()=>{
    event.preventDefault()
    var isAdmin = confirm("Ви дійсно бажаете вийти?");
    if(isAdmin === true){
      loginForm.style.display = 'block'
      infoForm.style.display = 'none'
    }
    else{
      return
    }
    console.log(isAdmin);
  })

  const deleteBtn = document.getElementById(`deleteBtn`)

  deleteBtn.addEventListener(`click`, ()=>{
    event.preventDefault()
    const user = document.getElementById(`emailD`).value
    console.log(user);
    var isAdmin = confirm("Ви дійсно бажаете видалити цей акаунт?");
    if(isAdmin === true){
      loginForm.style.display = 'block'
      infoForm.style.display = 'none'
      localStorage.removeItem(`${user}`)
    }
  })