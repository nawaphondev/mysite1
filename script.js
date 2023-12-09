/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

// -------------------------------------------------------------------------------------------------------------------------------------------

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

// JAVASCRIPT //

// Fruit Input App //

// let fruits = [];

// function addFruit() {
//     const fruitNameInput = document.getElementById('fruitName');
//     const fruitQuantityInput = document.getElementById('fruitQuantity');

//     const fruitName = fruitNameInput.value;
//     const fruitQuantity = fruitQuantityInput.value;

//     // Input validation
//     if (fruitName && !isNaN(fruitQuantity)) {
//         const fruit = {
//             name: fruitName,
//             quantity: parseFloat(fruitQuantity) // Convert quantity to a floating-point number
//         };

//         fruits.push(fruit);
//         updateResult();

//         // Reset input fields
//         fruitNameInput.value = '';
//         fruitQuantityInput.value = '';
//     }
// }

// function stopInput() {
//     console.log('Input stopped');
// }

// function updateResult() {
//     const resultElement = document.getElementById('show4');
//     resultElement.textContent = JSON.stringify(fruits, null, 2);
// }

// หาความยาวเส้นรอบวง //

function calculateCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
function calculateAndDisplayCircumference() {
  let inputElement = document.getElementById('input');
  let resultElement = document.getElementById('show3');

  let radius = parseFloat(inputElement.value);

  if (!isNaN(radius)) {
      let circumference = calculateCircleCircumference(radius);
      resultElement.textContent = circumference.toFixed(2);
  } else {
      resultElement.textContent = 'กรุณากรอกค่าที่ถูกต้อง';
  }
}

// หาความยาวเส้นแทยงสี่เหลี่ยมผืนผ้า //

function calculateHypotenuse(base, height) {
  let result = Math.sqrt(base ** 2 + height ** 2);
  document.getElementById('show5').innerHTML = result.toFixed(3);
}




// แยกฟังก์ชันที่เกี่ยวข้องกับการแปลงอุณหภูมิ //
function fahrenheitToCelsius() {
  let inputFahrenheit = prompt("Enter temperature in Fahrenheit:");
  let celsiusValue = (parseFloat(inputFahrenheit) - 32) * (5 / 9);
  document.getElementById(
    "show1"
  ).innerText = `Fahrenheit: ${inputFahrenheit}°F, Celsius: ${celsiusValue.toFixed(
    2
  )}°C`;
}

// ฟังก์ชันคำนวณคะแนน //
function number() {
  let number = prompt('What is your number');
  let grade;

  if (number > 80) {
      grade = 'A';
  } else if (number < 80 && number >= 70) {
      grade = 'B';
  } else if (number < 70 && number >= 60) {
      grade = 'C';
  } else if (number < 60 && number >= 50) {
      grade = 'D';
  } else {
      grade = 'F';
  }
  document.getElementById('number').innerHTML = `คะแนนเกรดของคุณ : ${grade}`;
}



// แยกฟังก์ชันที่เกี่ยวข้องกับการแปลงวันเป็นวินาที //
function dayToSeconds() {
  let inputDays = document.getElementById("daysInput").value;
  if (!isNaN(inputDays)) {
    let seconds = inputDays * 86400;
    document.getElementById(
      "show2"
    ).innerText = `จำนวนวัน : ${inputDays} วัน, ${seconds} นาที`;
  } else {
    alert("Please enter a valid number of days.");
  }
}





// -------------------------------------------------------------------------------------------------------------------------------------------

// แยกฟังก์ชันที่เกี่ยวข้องกับ Chart.js //
// Chart.js //
function createPolarAreaChart() {
  var ctx = document.getElementById("polarAreaChart").getContext("2d");
  var data = {
    labels: ["Rabbit", "Fish", "Bird", "Cat", "Dog"],
    datasets: [
      {
        data: [10, 20, 15, 25, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
      },
    ],
  };
  var options = {};

  var myChart = new Chart(ctx, {
    type: "polarArea",
    data: data,
    options: options,
  });
}

createPolarAreaChart();

// Chart.js2 //
function createRadarChart() {
  var ctx = document.getElementById("radarChart").getContext("2d");
  var data = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    datasets: [
      {
        label: "Data 2",
        data: [20, 40, 60, 80, 100],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };
  var options = {
    scale: {
      angleLines: {
        display: true,
      },
      ticks: {
        beginAtZero: true,
        max: 40,
      },
    },
  };

  var radarChart = new Chart(ctx, {
    type: "radar",
    data: data,
    options: options,
  });
}

createRadarChart();

// Form //


// -------------------------------------------------------------------------------------------------------------------------------------------

// Nationalize API //
function fetchNationality() {
  var name = document.getElementById('name').value;
  if (name.trim() === "") {
      alert("Please enter a name");
      return;
  }

  fetch(`https://api.nationalize.io?name=${name}`)
      .then(response => response.json())
      .then(data => {
          displayResult(data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          alert('Error fetching data. Please try again.');
      });
}

// Your displayResult function
function displayResult(data) {
  var resultDiv = document.getElementById('result');
  var countryData = data.country[0];

  if (countryData) {
      var countryId = countryData.country_id;
      var probability = (countryData.probability * 100).toFixed(2);
      resultDiv.innerHTML = `<p>Your most likely country is ${countryId} with a probability of ${probability}%.</p>`;
  } else {
      resultDiv.innerHTML = "<p>No data available for the provided name.</p>";
  }
}


// แยกฟังก์ชันที่เกี่ยวข้องกับ API Crypto //
// API CRYPTO //
function fetchPrices() {
  var now = new Date();
  var currentTime = now.toLocaleTimeString();

  fetch('https://api.coinbase.com/v2/exchange-rates?currency=USDT')
      .then(response => response.json())
      .then(data => {
          displayPrices(data);
          displayLastUpdateTime(currentTime);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          alert('Error fetching data. Please try again.');
      });
}

function displayPrices(data) {
  var pricesDiv = document.getElementById('prices');
  var rates = data.data.rates;

  var currencies = ['1INCH', 'AAVE', 'ABT', 'ACH', 'ACS', 'ADA', 'AED', 'BTC', 'ETH'];
  var pricesHtml = '<p>1 USDT can buy : </p><ul>';

  currencies.forEach(currency => {
      if (rates[currency]) {
          pricesHtml += `<li>${currency} : ${rates[currency]}</li>`;
      } else {
          pricesHtml += `<li>${currency} : N/A</li>`;
      }
  });

  pricesHtml += '</ul>';
  pricesDiv.innerHTML = pricesHtml;
}

function displayLastUpdateTime(currentTime) {
  var updateTimeDiv = document.getElementById('lastUpdateTime');
  updateTimeDiv.innerHTML = `<p>Last Update Time : ${currentTime}</p>`;
}

fetchPrices();

setInterval(fetchPrices, 3000);
