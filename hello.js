// // let email = "dipeshmahatto@gmail.com"
// // let password ="12345678"

// // if(email === "dipeshmahatto@gmail.com" && password ==="12345678"){
// //     console.log("Login Successfully !");
// // }else {
// //     console.log("Invalid credentials !")
// // }

// // SEE Grade check
// // let grade = 85;
// // if (grade >= 90) {
// //   console.log("Grade: A+");7
// // } else if (grade >= 80) {
// //   console.log("Grade: A");
// // } else if (grade >= 70) {
// //   console.log("Grade: B+");
// // } else if (grade >= 60) {
// //   console.log("Grade: B");
// // } else if (grade >= 50) {
// //   console.log("Grade: C+");
// // } else if (grade >= 40) {
// //   console.log("Grade: C");
// // }else {
// //  console.log("Failed");
// // }

// // if-else !!!

// // let weather = "rainy";
// // if (weather === "sunny") {
// //   console.log("sunny");
// // } else if (weather === "winter") {
// //   console.log("winter");
// // } else if (weather === "rainy") {
// //   console.log("rainy");
// // } else if (weather === "cloudy") {
// //   console.log("cloudy");
// // } else {
// //   console.log("Invalid weather");
// // }

// // switch statement  !!!

// // let day = 3;
// // switch (day) {
// //   case 1:
// //     console.log("Sun");
// //     break;
// //   case 2:
// //     console.log("Mon");
// //     break;
// //   case 3:
// //     console.log("Thu");
// //     break;
// //   case 4:
// //     console.log("Wen");
// //     break;
// //   case 5:
// //     console.log("Thur");
// //     break;
// //   case 6:
// //     console.log("Fri");
// //     break;
// //   case 7:
// //     console.log("Staurday");
// //     break;
// //   default:
// //     console.log("Invalid day");
// // }

// // let date = new Date().getDay();
// // // console.log(date);

// // switch (date) {
// //   case 0:
// //     console.log("Sun");
// //     break;
// //   case 1:
// //     console.log("Mon");
// //     break;
// //   case 2:
// //     console.log("Thu");
// //     break;
// //   case 3:
// //     console.log("Wen");
// //     break;
// //   case 4:
// //     console.log("Thur");
// //     break;
// //   case 5:
// //     console.log("Fri");
// //     break;
// //   case 6:
// //     console.log("Staurday");
// //     break;
// //   default:
// //     console.log("Invalid");
// // }

// // Status !!!
// // let status = 200;
// // switch (status) {
// //   case 201:
// //     console.log("Created");
// //     break;

// //   case 400:
// //     console.log("Bad request");
// //     break;

// //   case 401:
// //     console.log("UnAuthorized");
// //     break;

// //   case 403:
// //     console.log("ForBidden");
// //     break;

// //   case 500:
// //     console.log("..");
// //     break;

// //   case 200:
// //     console.log("Ok");
// //     break;

// //   default:
// //     console.log("Invalid");
// // }

// // for loop !!!

// // for(let i = 0 ; i <=10;i++){
// //     console.log("I Love JavaScript " + i);
// // }
// // for (let i = 1; i <= 10; i++) {
// //   console.log("2 * " + i + " = " + i * 2);
// //   console.log();
// // }
// // for (let i = 0; i <= 20; i++) {
// //   if (i % 2 == 0) {
// //     console.log(`The even Number are:${i}`);
// //   }
// // }
// // for (let i = 0; i <= 20; i++) {
// //   if (i % 2 !== 0) {
// //     console.log(`The odd Number are:${i}`);
// //   }
// // }

// // const arr =[3,4,5,6,7];
// // let sum =0;
// // for(let i = 0 ;i<arr.length;i++){
// //     sum +=arr[i];
// // }

// // console.log(`The Sum of Array is :${sum}`);
// // console.log(arr);
// // console.log(arr[2]);
// // console.log(typeof arr);

// // let ans =[3,4,5,6,7,8,"apple","carrot"] // data structure
// // console.log(ans);
// // console.log(ans[3]);

// // const arr = [3, 6, 8, 9, 2, 3, 1];

// //splice
// // arr.splice(1,2);
// // console.log(arr);

// // let rsult=arr.slice(1,3);
// // console.log(rsult);

// //indeXof
// // let res = arr.lastIndexOf(3);
// // console.log(res);
// // let arr = [];
// // let sum = 0;

// // for (let i = 1; i <= 10; i++) {
// //   arr.push(i);
// // }
// // console.log(arr);

// // for (let i = 1; i < arr.length; i++) {
// //   sum += arr[i];
// // }
// // console.log(`the sum of arr is :${sum}`);

// //length
// // console.log(arr.length);
// //push
// // arr.push(4)
// // console.log(arr);

// //pop
// // arr.pop();
// // console.log(arr)

// //shift
// // arr.shift()
// // console.log(arr)

// //unishift
// // arr.unshift(14)
// // console.log(arr)

// //icludes
// // let res = arr.includes(4)
// // console.log(res);

// // const output=["a","b","c"];
// // console.log(output.join("")); // - , space

// //object
// // const person = {
// //   name: "Dipesh Mahato",
// //   age: "21",
// //   occupation: "student",
// //   eduction: "bca",
// //   ismarried: false,
// //   address: {
// //     street: "bafal",
// //     city: "kathmandu",
// //     country: "nepal",
// //     province:{
// //         name:"Bagmati"
// //     }
// //   },

// //   greet: function () {
// //     console.log(
// //       `Hello my name is: ${this.name}. And i am ${this.age} years old.`
// //     );
// //   },
// // };

// // console.log(person);
// // console.log(person.address.street);
// // person.greet();

// // function

// // function myfunction(){
// //     console.log("Hey You");
// // }
// // myfunction();

// // Parameteries funtion
// // function Sum(a,b){
// //     console.log("The sum of the number :" + (a+b));
// // }
// // Sum(5,8);

// // function areaCircle(r) {
// //   console.log(`The area of circle of radius ${r} is : ${r * r * Math.PI}`);
// // }

// // areaCircle(5);

// // function CalculateTotal(cartItems,taxRate){
// //     let total = 0;
// //     for (let i = 0;i<cartItems.lenth;i++){
// //         total+= cartItems[i].price*cartItems[i].quantity;
// //     }
// //     total += total*taxRate;
// //     return total;
// // }

// // let cart = [
// //     {name:"Dr Martin",Price:8000,quantity:1},
// //     {name :"Sb Dunk",Price:4000,quantity:2}
// // ]

// // const result = CalculateTotal(cart,0.02);
// // console.log(`you full and final payment is :${result}`);

// // function myFun(){
// //     let a = prompt("Enter first Number ?");
// //     let b = prompt("Enter Second Number ?");
// // }

// // myfunction()

// //scoping

// // function myFunc() {
// //   if (true) {
// //     var x = 90;
// //     let y = 70;
// //     const z = 30;
// //     console.log(y);
// //     console.log(z);
// //   }
// //   console.log(x);
// // }
// // myFunc();

// // Dom
// // console.log(document.body);
// // let result= document.getElementById("hello");
// // // console.log(result);
// // result.innerText = "I have many Proof";
// // result.style.backgroundColor = "red";
// // result.style.color = "white";
// // result.style.textAlign = "center";

// // let output= document.getElementsByClassName("myClass")[0];
// // // console.log(output);
// // output.innerText = "Dipesh";
// // output.style.backgroundColor = "blue";
// // output.style.color = "white";
// // output.style.textAlign = "center";

// // let ans= document.getElementsByClassName("myClass");

// // ans[1].innerText = "Fine";
// // ans[1].style.backgroundColor = "yellow";
// // ans[1].style.color = "black";
// // ans[1].style.textAlign = "center";

// // let show= document.getElementsByTagName("span");

// // show[1].innerText = "spanning";
// // show[1].style.backgroundColor = "green";
// // show[1].style.color = "black";
// // show[1].style.textAlign = "center";

// // let btn = document.querySelectorAll("button");
// // btn[0].innerText="HeyBtn";

// // let output = document.querySelectorAll("button");
// // output[0].innerText="HeyBtn";

// // function myFunc(name, age) {
// //   console.log(`hello my name is :${name}. And i am ${age} years old`);
// // }

// // myFunc("Ram Thapa",23);

// // const merofun = (name,age) => {
// //     console.log(`hello my name is :${name}. And i am ${age} years old`);

// // };
// // merofun("sita",23);

// //Advanced Array method

// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // const myFun = (Value,index)=>{
// //     return Value>6
// // }
// // let output = newArr.find(myFun);
// // console.log(output);

// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // let output = newArr.find((Value, index) => {
// //   return Value > 6;
// // });
// // console.log(output);

// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // let output = newArr.find((Value, index) => Value > 6);
// // console.log(output);

// // const products = [
// //   { id: 1, name: "Dipesh", age: 21, instock: true },
// //   { id: 2, name: "ram", age: 23, instock: false },
// //   { id: 3, name: "hari", age: 25, instock: true },
// //   { id: 4, name: "sita", age: 18, instock: true },
// // ];

// // let ans = products.find((value,index)=>value.instock);
// // console.log(ans)

// // filter
// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // let output = newArr.filter((Value, index) => Value > 6);
// // console.log(output);

// // const products = [
// //   { id: 1, name: "Dipesh", age: 21, instock: true },
// //   { id: 2, name: "ram", age: 23, instock: false },
// //   { id: 3, name: "hari", age: 25, instock: true },
// //   { id: 4, name: "sita", age: 18, instock: true },
// // ];

// // let ans = products.filter((value,index)=>!value.instock);
// // console.log(ans);

// //some atleast one condition true it returs ture
// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // let output = newArr.some((Value, index) => Value > 6);
// // console.log(output);

// // const products = [
// //   { id: 1, name: "Dipesh", age: 21, instock: true },
// //   { id: 2, name: "ram", age: 23, instock: false },
// //   { id: 3, name: "hari", age: 25, instock: true },
// //   { id: 4, name: "sita", age: 18, instock: true },
// // ];

// // let ans = products.some((value,index)=>value.instock);
// // console.log(ans);

// // Every all the condition must be true then it retur ture else false
// // let ans = products.every((value,index)=>value.instock);
// // console.log(ans);

// // foreach
// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // let output = newArr.forEach((Value, index) => Value *2);
// // console.log(output);

// // const products = [
// //   { id: 1, name: "Dipesh", age: 21, instock: true },
// //   { id: 2, name: "ram", age: 23, instock: false },
// //   { id: 3, name: "hari", age: 25, instock: true },
// //   { id: 4, name: "sita", age: 18, instock: true },
// // ];

// // let ans = products.forEach((value,index)=>value.instock);
// // console.log(ans);

// //map dupicates the array to manupulate the array

// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // let output = newArr.map((Value, index) => Value *2);
// // console.log(output);

// // const products = [
// //   { id: 1, name: "Dipesh", age: 21, alive: true },
// //   { id: 2, name: "ram", age: 23, alive: false },
// //   { id: 3, name: "hari", age: 25, alive: true },
// //   { id: 4, name: "sita", age: 18, alive: true },
// // ];

// // let ans = products.map((value,index)=>value.alive);
// // console.log(ans);

// // let dis = document.createElement("h2");
// // dis.innerText = ans;
// // document.body.prepend(dis);

// // reduce (accum-> pervious value, curValue-> current)
// // let newArr = [4, 5, 6, 7, 8, 5, 2];
// // let output = newArr.reduce((accum,curValue)=>accum+curValue);
// // console.log(output);

// // const products = [
// //   { id: 1, name: "Dipesh", age: 21, alive: true },
// //   { id: 2, name: "ram", age: 23, alive: false },
// //   { id: 3, name: "hari", age: 25, alive: true },
// //   { id: 4, name: "sita", age: 18, alive: true },
// // ];

// // let ans = products.reduce((total,curValue)=>total+curValue.age,0);
// // console.log(ans);

// // let heading = document.getElementById("heading");
// // let box = document.getElementById("box1");
// // let btnClick = document.getElementById("btnClick");
// // let input = document.querySelector("input");

// // btnClick.addEventListener("click", () => {
// //   console.log("Clicked");
// //   btnClick.style.background = "Green";
// // btnClick.style.border="none";
// // box1.style.background="red";
// //   box.classList.add("BoxClass");
// // });

// // btnClick.addEventListener("mouseover", () => {
// //   btnClick.style.background = "yellow";
// // });

// // btnClick.addEventListener("mouseout", () => {
// //   btnClick.style.background = "blue";
// // });

// // btnClick.addEventListener("contextmenu", (e) => {
// //   e.preventDefault();
// //   btnClick.style.background = "gray";
// // });

// // btnClick.addEventListener("dblclick", () => {
// //   document.body.style.background = "green";
// // });
// // btnClick.addEventListener("click", () => {
// //   document.body.style.background = "white";
// // });

// // window.addEventListener("click", (e) => {
// //   console.log(e.clientX);
// //   console.log(e.clientY);
// // });

// // input.addEventListener("change", (e) => {
// //   console.log(e);
// //   console.log(e.target.value);
// //   console.log("changing");
// // });

// // Math object

// // let num = 4.7
// // let num = 4;
// // let ans = Math.round(num)
// // console.log(ans);

// // let output  = Math.random();
// // console.log(output);

// // let res = Math.sqrt(num);
// // console.log(res);

// // let base = 2
// // let extonent = 4
// // let outtt = Math.pow(base,extonent);
// // console.log(outtt);

// // // Math.abs --> gives absoulte value
// // function GenerateOTP(){
// //   let otp = Math.floor(10000+Math.random()*900000)
// //   return otp;
// // }

// // let annns = GenerateOTP()
// // console.log(annns);

// // let now = new Date().getFullYear();
// // let now = new Date().getMonth();
// // let now = new Date();
// // console.log(now);

// // let input = document.getElementById("myinput");
// // let btnAdd = document.getElementById("btnadd");
// // let btnRemove = document.getElementById("btnremove");

// // const myFun = () => {
// // alert(input.value);
// // sessionStorage.setItem("Key1", input.value);
// // localStorage.setItem("Key1", input.value);
// // localStorage.setItem("Key1", JSON.stringify({name: "dipesh",age:22}));
// // console.log(JSON.parse(localStorage.getItem("Key1")));

// // };

// // btnRemove.addEventListener("click", () => {
// //   localStorage.removeItem("Key1");
// // });

// // btnAdd.addEventListener("click", myFun);

// // if (localStorage.getItem("Key1")) {
// // alert(sessionStorage.getItem("key1"));
// // alert(localStorage.getItem("Key1"));
// //   console.log(JSON.parse(localStorage.getItem("Key1")));
// // }

// // SetTimeout and SetTimeIntetrval
// // const myFuc = ()=>{
// //   console.log("HEllO")
// // }
// // setTimeout(myFuc,2000)
// // Alternative
// // setInterval(()=>{
// //   console.log("HEllO")
// // },2000)

// // const intervalId= setInterval(()=>{
// //   console.log("I am Dipesh");
// // },1000)

// // setTimeout(()=>{
// //   clearInterval(intervalId)
// // },5000)

// // function UpdateClock(){
// //   const clock = document.querySelector(".clock")
// //   const now = new Date();
// //   const hours = now.getHours().toString().padStart(2,"0")
// //   const minutes = now.getHours().toString().padStart(2,"0")
// //   const seconds = now.getHours().toString().padStart(2,"0")
// //   clock.innerHTML= `${hours}:${minutes}:${seconds}`
// // }

// // setInterval(UpdateClock,1000)

// // OOP --> JavaScript

// // function Person(name, age, address) {
// //   this.name = name;
// //   this.age = age;
// //   this.address = address;
// //   this.greeting = function () {
// //     let greet = `Hello My name is ${this.name}.I am ${age} old and i live near ${this.address}`;
// //     return greet;
// //   };
// // }
// // const person1 = new Person("Dipesh", 21, "Bafal");
// // const person2 = new Person("Susmita", 22, "Balkhu");
// // console.log(person1, person2);
// // console.log(person1.greeting());

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.balance = balance;
//   this.accountNumber = Date.now();

//   this.deposite = function (amount) {
//     this.balance += amount;
//   };

//   this.withdraw = function (amount) {
//     this.balance -= amount;
//   };
// }
// // const ramAccount = new BankAccount("Dipesh", 10000);
// // const samAccount = new BankAccount("Sam", 10000);
// // ramAccount.deposite(5000);

// // console.log(ramAccount, samAccount);

// const addform = document.querySelector("#addform");
// const customerName = document.querySelector("#customerName");
// const balance = document.querySelector("#balance");

// const depositForm = document.querySelector("#depositForm");
// const accountNumber = document.querySelector("#accountNumber");
// const amount = document.querySelector("#amount");

// const withdrawForm = document.querySelector("#withdrawForm");
// const withdrawAccountNumber = document.querySelector("#withdrawAccountNumber");
// const withdrawAmount = document.querySelector("#withdrawAmount");


// let accounts = [];

// addform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let account = new BankAccount(customerName.value, +balance.value);
//   accounts.push(account);
//   console.log(accounts);
// });

// depositForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let account = accounts.find(
//     (account) => account.accountNumber === +accountNumber.value
//   );
//   account.deposit(+amount.value);

//   console.log(accounts);
// });


// withdrawForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let account = accounts.find(
//     (account) => account.accountNumber === +withdrawAccountNumber.value
//   );
//   account.deposit(+withdrawAmount.value);

//   console.log(accounts);
// });


// function BankAccount(customerName, balance = 0){
//   this.customerName = customerName;
//   this.balance = balance;
//   this.accountNumber = Date.now();

//   // this.deposit = function(amount){
//   //   this.balance += amount;
//   // };

//   this.withdraw = function(amount){
//     this.balance -= amount;
//   };
// }

// const sitaAccount = new BankAccount('Sita Devi', 8888);

// // // adding property to a prototype
// // BankAccount.prototype.add = "Kp oli sarkar";

// //adding methods to the prototype
// BankAccount.prototype.deposit =  function(amount){
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw =  function(amount){
//   this.balance -= amount;
// };

// sitaAccount.deposit(5000);
// sitaAccount.withdraw(10000);

// console.log(BankAccount.prototype, sitaAccount);

// const ramAccount = new BankAccount("Ram Thapa", 5000);
// const johnAccount = new BankAccount("John Doe", 1000);

// ramAccount.deposit(5000);
// johnAccount.deposit(1000);

// console.log(ramAccount, johnAccount);


class BankAccount{
  constructor(customerName, balance = 0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Math.floor(Math.random() * 10000000000);
  }

  deposit(amount){
    this.amount += amount;
  }

  withdraw(amount){
    this.amount -= amount; 
  }

}

const ramAccount = new BankAccount("Ram Thapa", 5000);
const johnAccount = new BankAccount("John Doe", 5000);



console.log(ramAccount, johnAccount);