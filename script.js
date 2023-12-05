/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// JAVASCRIPT //

  //document.getElementById("demo").innerHTML = "Hello World";

  function printAlphabets() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = 0;
  
    function displayAlphabet() {
      const alphabet = alphabets[index];
      document.getElementById("demo").innerHTML = alphabet;
      console.log(alphabet);
      index = (index + 1) % alphabets.length; // เพิ่ม index และทำการ modulo กับ 26 (จำนวนตัวอักษรในอัลฟาเบ็ต)
      setTimeout(displayAlphabet, 1000); // 1000 milliseconds = 1 วินาที
    }
  
    displayAlphabet();
  }
  
  printAlphabets();
  
  
  const messages = [
    "Hello World",
    "Hello There",
    "Hello, What's up",
    "Greetings!",
    "Hi!",
    "Hey!"
  ];

  let currentIndex = 0;

  function myFunction() {
    if (currentIndex < messages.length) {
      let currentMessage = messages[currentIndex];
      document.getElementById("demo2").innerHTML = currentMessage;
      currentIndex++;
    }
  }
  
    function myFunction2() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo3").innerHTML = text;
  }
   
  function fahrenheitToCelsius() {
                  let inputFahrenheit = prompt("Enter temperature in Fahrenheit:");
                  let celsiusValue = (parseFloat(inputFahrenheit) - 32) * (5 / 9);
                  document.getElementById(
                      "show1"
                  ).innerText = `Fahrenheit: ${inputFahrenheit}°F, Celsius: ${celsiusValue.toFixed(
                2
              )}°C`;
              }
  
              function calculateCircleCircumference(radius) {
                  return 2 * Math.PI * radius;
              }
  
              function calculateAndDisplayCircumference() {
                  let inputElement = document.getElementById("input");
                  let resultElement = document.getElementById("result");
  
                  let radius = parseFloat(inputElement.value);
  
                  if (!isNaN(radius)) {
                      let circumference = calculateCircleCircumference(radius);
                      resultElement.textContent = circumference.toFixed(2);
                  } else {
                      resultElement.textContent = "กรุณากรอกค่าที่ถูกต้อง";
                  }
              }       
              function dayToSeconds() {
      let inputDays = document.getElementById("daysInput").value;
      if (!isNaN(inputDays)) {
          let seconds = inputDays * 86400;
          document.getElementById("show2").innerText = `จำนวนวัน: ${inputDays} วัน, ${seconds} นาที`;
      } else {
          alert("Please enter a valid number of days.");
      }
  }
  