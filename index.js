
//1) Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - fall
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else

const month = prompt("enter your month number");

switch (month) {
  case "1":
  case "2":
  case "12":
    console.log("winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("fall");
    break;
  default:
    console.log("404 try again");
    break;
}

const month = prompt("enter your month number");

if (month === "1" || month === "2" || month === "12") {
  console.log("winter");
} else if (month === "3" || month === "4" || month === "5") {
  console.log("spring");
} else if (month === "6" || month === "7" || month === "8") {
  console.log("summer");
} else if (month === "9" || month === "10" || month === "11") {
  console.log("fall");
} else {
  console.log("404 try again");
}

// 2) Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
// [0 - 2) baby
// [2 - 6) kinder
// [6 - 12) child
// [12 - 18) teenager
// [18 - 65) adult
// [65 - 100) oldmen
// [100 - 150) super!
// 404 try again
// оберіть самі потрібну конструкцію

const age = Number(prompt("Enter your age"));

if (age < 2 || age === 0) {
  console.log("baby");
} else if (age < 6 || age === 2) {
  console.log("kinder");
} else if (age < 12 || age === 6) {
  console.log("child");
} else if (age < 18 || age === 12) {
  console.log("child");
} else if (age < 65 || age === 18) {
  console.log("adult");
} else if (age < 100 || age === 65) {
  console.log("oldmen");
} else if (age < 150 || age === 100) {
  console.log("super!");
} else {
  console.log("404 try again");
}

// 3) Людина вводить годину([0-23]), ви виводите привітання
// [7 - 11) - good morning
// [11 - 18) - good day
// [18 - 23) - good evening
// усе інше - good night
// усе невірне - 404 try again
// виконати 2 варіантами: через switch та if...else if...else і скажете який краще!!!

const time = Number(prompt("Enter your time"));

if ((time < 11 && time > 7) || time === 7) {
  console.log("good morning");
} else if ((time < 18 && time > 11) || time === 11) {
  console.log("good day");
} else if ((time < 23 && time > 18) || time === 18) {
  console.log("good evening");
} else if (time < 7  || time === 23) {
  console.log("good night");
} else {
  console.log("404 try again");
}

const time = prompt("Enter your time");

switch (time) {
  case "23":
  case "0":
  case "1":
  case "2":
  case "3":
  case "4":
  case "5":
  case "6":
    console.log("good night");
    break;
  case "7":
  case "8":
  case "9":
  case "10":
    console.log("good morning");
    break;
  case "11":
  case "12":
  case "13":
  case "14":
  case "15":
  case "16":
  case "17":
    console.log("good day");
    break;
  case "18":
  case "19":
  case "20":
  case "21":
  case "22":
    console.log("good evening");
    break;
  default:
    console.log("404 try again");
    break;
}
