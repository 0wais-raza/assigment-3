// begin here

function one() {
     var city = prompt("Enter city name:")
     if (city == "karachi") {
          document.getElementById('one').innerHTML = "Welcome to the city of lights"
     }
     else {
          document.getElementById('one').innerHTML = "Please enter fine city (near sea!)"
     }
}

function two() {
     var inp = prompt("Enter gender (male/female)");
     if (inp == "male") {
          document.getElementById('two').innerHTML = "Welcome sir!";
     }
     else if (inp == "female") {
          document.getElementById('two').innerHTML = "Welcome mam!";
     }
     else {
          document.getElementById('two').innerHTML = "Please enter fine gender!";
     }
}

function three() {
     var colorInput = prompt("Enter traffic current color (🔴/🟡/🟢) ")
     if (colorInput == "red") {
          document.getElementById('three').innerHTML = "Must stop!!";
     }
     else if (colorInput == "yellow") {
          document.getElementById('three').innerHTML = "Ready to move!!";
     }
     else if (colorInput == "green") {
          document.getElementById('three').innerHTML = "Move on!!";
     }
}

function four() {
     var fuel = +prompt("Enter your current fuel ⛽ (tell me less than 0.25)")
     if (fuel < 0.25) {
          document.getElementById('four').innerHTML = "Please refill your car ⛽ = 🔴";
     }
     else {
          document.getElementById('four').innerHTML = "You have enough fuel ⛽ = 🟢";
     }
}
function five() {
     var a = 4;
     if (++a === 5) {
          alert("given condition for variable a is true");
     }
     var b = 82;
     if (b++ === 83) {
          alert("given condition for variable b is true");
     }
     var c = 12;
     if (c++ === 13) {
          alert("condition 1 is true");
     }
     if (c === 13) {
          alert("condition 2 is true");
     }
     if (++c < 14) {
          alert("condition 3 is true");
     }
     if (c === 14) {
          alert("condition 4 is true");
     }
     var materialCost = 20000;
     var laborCost = 2000;
     var totalCost = materialCost + laborCost;
     if (totalCost === laborCost + materialCost) {
          alert("The cost equals");
     }
     if (true) {
          alert("True");
     }
     if (false) {
          alert("False");
     }
     if ("car" < "cat") {
          alert("car is smaller than cat");
     }
}

function six() {
     function getGrade(percentage) {
          if (percentage >= 90) return "A+";
          else if (percentage >= 80) return "A";
          else if (percentage >= 70) return "B";
          else if (percentage >= 60) return "C";
          else if (percentage >= 50) return "D";
          else return "F";
     }

     var sub1 = prompt("Enter subject name (1)📑");
     var mark1 = +prompt("(Total 85) Enter marks of " + sub1);
     var pec1 = (mark1 / 85) * 100;
     var grade1 = getGrade(pec1);

     var sub2 = prompt("Enter subject name (2)📑");
     var mark2 = +prompt("Enter marks of " + sub2);
     var pec2 = (mark2 / 85) * 100;
     var grade2 = getGrade(pec2);

     var sub3 = prompt("Enter subject name (3)📑");
     var mark3 = +prompt("Enter marks of " + sub3);
     var pec3 = (mark3 / 85) * 100;
     var grade3 = getGrade(pec3);

     document.getElementById('six').innerHTML = `
<table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th>Subject</th>
    <th>Marks</th>
    <th>Percentage</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>${sub1}</td>
    <td>${mark1}/85</td>
    <td>${pec1.toFixed(2)}%</td>
    <td>${grade1}</td>
  </tr>
  <tr>
    <td>${sub2}</td>
    <td>${mark2}/85</td>
    <td>${pec2.toFixed(2)}%</td>
    <td>${grade2}</td>
  </tr>
  <tr>
    <td>${sub3}</td>
    <td>${mark3}/85</td>
    <td>${pec3.toFixed(2)}%</td>
    <td>${grade3}</td>
  </tr>
</table>
`;
}

function seven() {
     var num = 12;
     var gues = +prompt("Guess the number (2 x 6) 🔢")
     if (gues === num) {
          document.getElementById('seven').innerHTML = "Bingo! 🙌🏻 You guessed right! 🎉"
     }
     else {
          document.getElementById('seven').innerHTML = "Oops! 😟 Try 🅰gain!"
     }
}

function eight() {
     var num = +prompt("Input a number")
     if (num % 3 === 0) {
          document.getElementById('eight').innerHTML = "The number is divisible by 3"
     }
     else {
          document.getElementById('eight').innerHTML = "Not divisible by 3"
     }
}

function nine() {
     var num = +prompt("Enter a number:");

     if (num % 2 === 0) {
          document.getElementById('nine').innerHTML = "The number is even! 🔢✨"
     } else {
          document.getElementById('nine').innerHTML = "The number is odd! 🔢🎁"
     }
}

function ten() {
     var temp = +prompt("Enter current temperature")
     if (temp > 40 || temp < 40) {
          document.getElementById('ten').innerHTML = "Too hoot outside! 🔥🔥"
     }
     else if (temp < 30) {
          document.getElementById('ten').innerHTML = "Normal weather! 💦"
     }

     else if (temp < 20) {
          document.getElementById('ten').innerHTML = "Today wather is cool! 😎❄"
     }
     else if (temp < 10) {
          document.getElementById('ten').innerHTML = "OMG! Today wather is so cool! 🥶❄💦"
     }
     else {
          document.getElementById('ten').innerHTML = "What did i say?"
     }
}

function eleven() {
     var num1 = +prompt("Enter number 1: ")
     var num2 = +prompt("Enter 2nd number: ")
     var op = prompt("Enter operation: ")

     if (op == "+") {
          document.getElementById('eleven').innerHTML = num1 + num2;
     }
     else if (op == "-") {
          document.getElementById('eleven').innerHTML = num1 - num2;
     }
     else if (op == "/") {
          document.getElementById('eleven').innerHTML = num1 / num2;
     }
     else if (op == "*") {
          document.getElementById('eleven').innerHTML = num1 * num2;
     }
     else if (op == "%") {
          document.getElementById('eleven').innerHTML = num1 % num2;
     }
     else {
          document.getElementById('eleven').innerHTML = "Unvalid operator"
     }
}

function twelve() {
     var ch = prompt("Enter a character:");
     var code = ch.charCodeAt(0);

     if (code >= 48 && code <= 57) {
          document.getElementById('twelve').innerHTML = "It is a Number 🔢"

     }
     else if (code >= 65 && code <= 90) {
          document.getElementById('twelve').innerHTML = "It is an Uppercase Letter 🔠"

     }
     else if (code >= 97 && code <= 122) {
          document.getElementById('twelve').innerHTML = "It is a Lowercase Letter 🔡"

     }
     else {
          document.getElementById('twelve').innerHTML = "Invalid input ❌"
     }
}

function thirteen() {
     var num1 = +prompt("Input integer 1: ")
     var num2 = +prompt("Input integer 2: ")
     if (num1 > num2) {
          document.getElementById('thirteen').innerHTML = num1 + " is larger than " + num2;
     }
     else if (num1 < num2) {
          document.getElementById('thirteen').innerHTML = num1 + " is smaller than " + num2;
     }
     else if (num1 == num2) {
          document.getElementById('thirteen').innerHTML = num1 + " is equal to" + num2;
     }
     else {
          document.getElementById('thirteen').innerHTML = "Input fine integer";
     }
}

function fourteen() {
     var inp = +prompt("Input a number")
     if (inp > 0) {
          document.getElementById('fourteen').innerHTML = "Positive number (+)";
     }

     else if (inp < 0) {
          document.getElementById('fourteen').innerHTML = "Negative number (-)";
     }
     else if (inp == 0) {
          document.getElementById('fourteen').innerHTML = "Zero number (00)";
     }
     else {
          document.getElementById('fourteen').innerHTML = "Input fine number!";
     }
}
function fifteen() {
     var ch = prompt("Enter a single character:");

     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
          document.getElementById('fifteen').innerHTML = "is a vowel";
     } else {
          document.getElementById('fifteen').innerHTML = "Not a vovel";
     }
}

function sixteen() {
     var pass = "password"
     var inp = prompt("Enter that is 'password'")
     if (inp == "") {
          document.getElementById('sixteen').innerHTML = "Enter password!!";
     }
     else {
          if (inp == pass) {
               document.getElementById('sixteen').innerHTML = "Correct password";
          }

          else {
               document.getElementById('sixteen').innerHTML = "InCorrect password";
          }
     }
}

function seven9() {
     var greeting;
     var hour = 13;
     if (hour < 18) {
          greeting = "Good day";
     }
     else {
          greeting = "Good evening";
     }
     alert(greeting)

}

function eteen() {
     var time = +prompt("Input the time (24-HR && 0000")
     if (time >= 0 && time < 1200) {
          document.getElementById('I8').innerHTML = "Good morning"
     }
     else if (time >= 1200 && time < 1700) {
          document.getElementById('I8').innerHTML = "Good afternoon"
     }
     else if (time >= 1700 && time < 2100) {
          document.getElementById('I8').innerHTML = "Good evening"
     }
     else if (time >= 1200 && time < 2359) {
          document.getElementById('I8').innerHTML = "Good night"
     }
     else {
          document.getElementById('I8').innerHTML = "Input valid time"
     }
}