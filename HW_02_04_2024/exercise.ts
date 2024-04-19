//============ex1===========
// let Name: string="Carlson";
// let Age: number=34;

// console.log(`Name: ${Name}`);
// console.log(`Age: ${Age}`);

//============ex2===========

// let loc=12; //loc yaratildi

// function locFunc(){
//     let loc = 13 //Bu yerda loc yana shun nom bilan yaratilsa bo'ladi tashqarida error beradi
//     console.log(loc); 
// }

// var glo=12; //var yaratildi

// function varFunc(){
//     var glo=13;
//     console.log(glo); //var scope tashqarisidaham ishlaydi lekin ichkarida 13 tashqarida 12 qaytaradi
// }
// varFunc();
// console.log(glo)
// const P=3.14; // CONST ni o'zgarmas hisoblanadi
// P=3.12;=ERROR

//=============ex3===============

// let a: number = 2;
// let qales: string = "Qales";
// let istrue: boolean = true;
// let und: undefined = undefined;
// const b: number = 12;
// const c: number = a - b;
// console.log(c);


// const salomlash: string = qales + " O'ta go'zal";
// console.log(salomlash);


// const check: boolean = istrue || true;
// console.log(check);


// if (und === undefined) {
//     console.log("und=undefined.");
// } else {
//     console.log("und is defined.");
// }

//================ex4=============
// let num=13;
// num="13";//Bu yerda error beradi chunki TS da typelash bor
// console.log(num);
//==============ex5===============
// let num=13;
// console.log(typeof num);
// num = "13";//Bu yerda error beradi chunki TS da typelash bor
// console.log(num);

//==============ex6===============
// let num: string = "13";
// let toNum: number = parseInt(num);
// console.log(toNum);
// let num2: number = 200;
// let tostr: string = num2.toString();
// console.log(tostr);

//==============ex7===============
// type User = {
//     id: number;
//     Fullname: string;
//     Age: number;
//   };
  

//   type Perimetr = {
//     a: number;
//     b: number;
//   };

//   const User1: User = {
//     id: 1,
//     Fullname: "Carl Jonson",
//     Age: 33,
//   };
  
//   const User2: User = {
//     id: 2,
//     Fullname: "Lucy Jonson",
//     Age: 22,
//   };
  
//   const aria1: Perimetr={
//     a: 2,
//     b: 2,
//   }
  
//   // Functions that use the type aliases
//   function printUser(user: User) {
//     console.log(`User ID: ${user.id}`);
//     console.log(`Fullname: ${user.Fullname}`);
//     console.log(`Age: ${user.Age}`);
//   }
  
//   function FindPerimetr(a: Perimetr): number {
//        return 2*(a.a+a.b);
//   }
  
//   console.log("User 1:");
//   printUser(User1);
  
//   console.log("User 2:");
//   printUser(User2);
  

//   console.log(FindPerimetr(aria1));

//==============ex8===============
// let users: string[] = ["Carl", "Tony", "Joe", "Franklin"];
// console.log(users);
// users.push("Vito");
// console.log(users);
// users.pop();
// console.log(users);
// users.forEach(user => {
//     console.log(`User name: ${user} \n`);
// });
//==============ex9===============
// Define an enumeration (enum) for colors
// enum Color {
//     Red,
//     Green,
//     White,
//     Blue,
//   }
  
//   console.log("Colors:", Color);
//   let red: Color = Color.Red;
  
//   console.log(red);

//==============ex10===============
// let isNull: null = null;
// let isUndefined: undefined = undefined;

// console.log("Null:", isNull);
// console.log("Undefined:", isUndefined);