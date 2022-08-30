//Assignment 1 Start
//Get html elements to add and events and data binding

//Create Question Array
var questions = [
  {
    question:
      "<h4 style = 'font-weight: bold;'> Get two inputs from the user and do arithmetic operations (Addition, Subtraction, Multiplication, Division)</h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <p class = "m-0">
            <h5 class = "lead">Variables</h5>
            <h6 class = "fw-bold">Num 1 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">45</span></h6>

            <h6 class = "fw-bold">Num 2 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge">25</span></h6>
        </p>
        <p class = "m-0">
            <h5 class = "lead">Output</h5>
            <h6 class = "fw-bold">Addition <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">70</span></h6>
            <h6 class = "fw-bold">Substraction <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">20</span></h6>
            <h6 class = "fw-bold">Multiplication <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">1125</span></h6>
            <h6 class = "fw-bold">Division <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">1.8</span></h6>
            <h6 class = "fw-bold">Modulus <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">20</span></h6>
        </p>
    </div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Get two inputs from the user and get the average of the No's.</h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
            <h5 class = "lead">Variables</h5>
            <h6 class = "fw-bold">Num 3 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">78</span></h6>
            <h6 class = "fw-bold">Num 4 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">24</span></h6>
        
        <p>
            <h5 class = "lead">Output</h5>
            <h6 class = "fw-bold">Average <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">51</span></h6>
        </p>
    </div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Get input from the user and find is it even or odd with a function call.</h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
            <h5 class = "lead">Variables</h5>
            <h6 class = "fw-bold">Num 5 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">67</span></h6>
            <h6 class = "fw-bold">Num 6 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">34</span></h6>
    
            <p>
                <h5 class = "lead">Output</h5>
                <h6 class = "fw-bold">Even No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">34</span></h6>
                <h6 class = "fw-bold">Odd No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">67</span></h6>
            </p>
        </div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Find the largest no from two no’s which are getting from the user</h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
                <h5 class = "lead">Variables</h5>
                <h6 class = "fw-bold">arrayItems <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">["67", "34", "56", "87"]</span></h6>
    
            <p>
                <h5 class = "lead">Output</h5>
                <h6 class = "fw-bold">Largest No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">87</span></h6>
            </p>
        </div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Get two float No's from the user and print multiplication of these no. (print with only 2 decimal points)</h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
                <h5 class = "lead">Variables</h5>
                <h6 class = "fw-bold">Num 7 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">12.48</span></h6>
                <h6 class = "fw-bold">Num 8 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">54.98</span></h6>

            <p>
                <h5 class = "lead">Output</h5>
                <h6 class = "fw-bold">Product of two float No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">686.1504</span></h6>
            </p>
        </div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Get no from the user and find the factorial of the number </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Num 9 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">24</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Factor of the No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">3628800</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Get no from the user and find is it prime no or not </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">array <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">["8", "5", "11", "4", "15"]</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Prime Number <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">5, 11</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Find the square and cube of a number</h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Num 19 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">45</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Square <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">2025</span></h6>
        <h6 class = "fw-bold">Cube <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">91125</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Get no from the user and find is it positive or negative </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Numbers <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">["7", "14", "-3", "25", "-65", "57", "-11"]</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Positive No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">7, 14, 25, 57</span></h6>
        <h6 class = "fw-bold">Negative No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">-3, -65, -11</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Print the multiplication table of 2-10. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Num 11 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">2</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Multiplication Table <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">2 <br> 4 <br> 6 <br> 8 <br> 10 <br> 12 <br> 14 <br> 16 <br> 18 <br> 20 </span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input the base and height of a triangle and find the area of the given triangle. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Base <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">25.63</span></h6>
        <h6 class = "fw-bold">Height <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">10.89</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Area of Triangle <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">139.555</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input temperature in Centigrade and convert to Fahrenheit. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Temperature <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">27</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">°C to °F <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">80.6</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input length in centimeters and convert it to meter, millimeter, and kilometer.</h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">CM <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">42</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">CM to M <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">0.42</span></h6>
        <h6 class = "fw-bold">CM to MM <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">4.2</span></h6>
        <h6 class = "fw-bold">CM to KM <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">0.00042</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input the number of days from the user and convert it to years, weeks, and days. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Total Days <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">373</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Years <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">1</span></h6>
        <h6 class = "fw-bold">Weeks <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">1</span></h6>
        <h6 class = "fw-bold">Days <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">1</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input two numbers and find maximum between two numbers using conditional/ternary operator. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Num 12 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">302</span></h6>
        <h6 class = "fw-bold">Num 13 <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">569</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Maximum No. <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">569</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input a year and check whether a year is a leap year or not using conditional/ternary operator. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Given Year <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">2003</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Year type <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">Common Year</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input a character from the user and check whether the given character is the alphabet, digit, or special character using if-else. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">NGiven Character <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">7</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Character Type <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">This is a Number</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input cost price and selling price of a product and check profit or loss. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Selling Price <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">999</span></h6>
        <h6 class = "fw-bold">Cost Price <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">599</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Check Profit or Loss <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">Profit</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer. Calculate percentage and grade according to the following: Percentage >= 90%: Grade A, Percentage >= 80%: Grade B, Percentage >= 70%: Grade C, Percentage >= 60%: Grade D, Percentage >= 40%: Grade E, Percentage < 40%: Grade F. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Physics <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">80</span></h6>
        <h6 class = "fw-bold">Chemistry <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">97</span></h6>
        <h6 class = "fw-bold">Biology <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">90</span></h6>
        <h6 class = "fw-bold">Mathematics <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">89</span></h6>
        <h6 class = "fw-bold">Computer <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">85</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Grade <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">B</span></h6>
    </p>
</div>`,
  },
  {
    question:
      "<h4 style = 'font-weight: bold;'>Write a C program to input basic salary of an employee and calculate its Gross salary according to following: Basic Salary <= 10000: HRA = 20%, DA = 80%, Basic Salary <= 20000: HRA = 25%, DA = 90%, Basic Salary > 20000: HRA = 30%, DA = 95%. </h4>",
    functionName: `assignmentOne ${i + 1}`,
    answer: `<div>
        <h5 class = "lead">Variables</h5>
        <h6 class = "fw-bold">Basic Salary <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">15000</span></h6>
    
    <p>
        <h5 class = "lead">Output</h5>
        <h6 class = "fw-bold">Gross Salary <span class = "fw-bold float-end bg-danger bg-opacity-50 text-black badge ">32250</span></h6>
    </p>
</div>`,
  },
];

var preBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");

preBtn.addEventListener("click", preItem);
nextBtn.addEventListener("click", nextItem);

var html = "";
var counter = 0;
var temparr = [];

// Number of Questions buttons created dynamically
for (var i = 0; i < questions.length; i++) {
  document.getElementById(
    "btns"
  ).innerHTML += `<button class="btn dbtn btn-outline-dark btn-sm fw-bold ms-2" id="assignmentBtnIndex${
    i + 1
  }" onclick="getQuestionByIndex(${i}), setColor('assignmentBtnIndex${
    i + 1
  }') ">${i + 1}</button>`;

  var buttons = document.getElementById("assignmentBtnIndex${ i + 1 }");

  // Number of Questions created dynamically
  var divElement = `<div class = "p-3 pb-5 card d-flex shadow p-3 mb-4 bg-body rounded">
        <div class = "bg-secondary fw-bold p-2 text-black bg-opacity-75 card-title">Question ${
          i + 1
        }</div>
        <div class ="card-body" style = "font-family: Zilla Slab; font-weight: bold;">${
          questions[i].question
        } </div>
        <div>
            <button class="btn btn-outline-success btn-sm fw-bold float-end mb-3" id ="assignmentBtn${
              i + 1
            }" onclick="${questions[i].functionName}">Show Answer</button>
        </div>
        <div class = "card-footer bg-light p-3" id = 'assignmentAns ${
          i + 1
        }' </div>
    </div>`;
  temparr.push(divElement); 
  counter++;

  // console.log(html);
}

// function for change button colour onclick
var count = 1;
function setColor(btn, color) {
  // buttons.style.backgroundColor = 'yellow';
  // buttons.style.color = 'white';
  var property = document.getElementById(btn);
  if (count == 0) {
    property.style.backgroundColor = "#008000";
    count = 1;
  } else {
    property.style.backgroundColor = "#FF0000";
    count = 0;
  }
}

//**********************GET SINGLE QUESTION WITH INDEX NO   *******************/
function getQuestionByIndex(index) {
  i = index;
  if (index != 0) {
    preBtn.disabled = false;
  }
  document.getElementById("questionList").innerHTML = temparr[i];
}

//************ DEFAULT FIRST QUESTION TO BE DISPLAYED AND DISABLED PREV BUTTON********** */
var i = 0;
getQuestionByIndex(0);
if (i == 0) {
  preBtn.disabled = true;
}

// Functions for Previous and Next Button
function preItem() {
  // btnActiveClass();
  if (i <= questions.length) {
    nextBtn.disabled = false;
    i -= 1;
    //   console.log(questions[i]);
    if (questions[i] != undefined) {
      document.getElementById("questionList").innerHTML = temparr[i];
    }
    if (i == 0) {
      preBtn.disabled = true;
    }
  }
}

function nextItem() {
  // btnActiveClass();
  if (i != questions.length) {
    preBtn.disabled = false;
    i += 1;
    // console.log(users[i]);
    if (questions[i] != undefined) {
      document.getElementById("questionList").innerHTML = temparr[i];
    }
    if (i == questions.length - 1) {
      nextBtn.disabled = true;
    }
  }
}
// Functions for Show Answer Button
function assignmentOne(index) {
  for (var i = 0; i < questions.length; i++) {
    var assignmentAnsDiv = document.getElementById(`assignmentAns ${i + 1}`);
    var assignmentBtn = document.getElementById(`assignmentBtn ${i + 1}`);

    assignmentBtn.addEventListener("click", function () {
      if (
        assignmentAnsDiv.style.display == "" ||
        assignmentAnsDiv.style.display == "block"
      ) {
        assignmentAnsDiv.style.display = "none";
        assignmentBtn.innerHTML = "Show Answer";
      } else {
        assignmentAnsDiv.innerHTML = questions[index].answer;
        assignmentAnsDiv.style.display = "block";
        assignmentBtn.innerHTML = "Hide Answer";
      }
    });
  }
}

function assignmentTwo(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns2");
  var assignmentBtn = document.getElementById("assignmentBtn2");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      console.log("index: ", index);
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentThree(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns3");
  var assignmentBtn = document.getElementById("assignmentBtn3");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentFour(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns4");
  var assignmentBtn = document.getElementById("assignmentBtn4");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentFive(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns5");
  var assignmentBtn = document.getElementById("assignmentBtn5");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentSix(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns6");
  var assignmentBtn = document.getElementById("assignmentBtn6");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentSeven(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns7");
  var assignmentBtn = document.getElementById("assignmentBtn7");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentEight(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns8");
  var assignmentBtn = document.getElementById("assignmentBtn8");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentNine(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns9");
  var assignmentBtn = document.getElementById("assignmentBtn9");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentTen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns10");
  var assignmentBtn = document.getElementById("assignmentBtn10");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentEleven(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns11");
  var assignmentBtn = document.getElementById("assignmentBtn11");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentTwelve(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns12");
  var assignmentBtn = document.getElementById("assignmentBtn12");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      console.log("index: ", index);
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentThirteen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns13");
  var assignmentBtn = document.getElementById("assignmentBtn13");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentFourteen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns14");
  var assignmentBtn = document.getElementById("assignmentBtn14");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentFifteen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns15");
  var assignmentBtn = document.getElementById("assignmentBtn15");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentSixteen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns16");
  var assignmentBtn = document.getElementById("assignmentBtn16");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentSeventeen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns17");
  var assignmentBtn = document.getElementById("assignmentBtn17");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentEighteen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns18");
  var assignmentBtn = document.getElementById("assignmentBtn18");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentNineteen(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns19");
  var assignmentBtn = document.getElementById("assignmentBtn19");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}

function assignmentTwenty(index) {
  var assignmentAnsDiv = document.getElementById("assignmentAns20");
  var assignmentBtn = document.getElementById("assignmentBtn20");

  assignmentBtn.addEventListener("click", function () {
    if (
      assignmentAnsDiv.style.display == "" ||
      assignmentAnsDiv.style.display == "block"
    ) {
      assignmentAnsDiv.style.display = "none";
      assignmentBtn.innerHTML = "Show Answer";
    } else {
      assignmentAnsDiv.innerHTML = questions[index].answer;
      assignmentAnsDiv.style.display = "block";
      assignmentBtn.innerHTML = "Hide Answer";
    }
  });
}
