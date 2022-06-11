// Method 1
/* 
let personObj = new Object();
personObj.firstName ="Peyton";
personObj.lastName ="Yu";
personObj.age =100;
personObj.eyeColor ="Blue";
personObj.smile = function(){
    console.log("(*´∀`)~♥");
}; 
personObj.smile();
*/

// Method 2
/*
let personObj = {
    firstName :"Peyton",
    lastName :"Yu",
    age :100,
    eyeColor :"Blue",
    smile : function(){
    console.log("Σ( ° △ °)");
}};  
personObj.smile();
*/

// Method 3
//function 這行宣告定義
function Person(firstName,lastName,age,eyeColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.smile = function(){
        console.log("╰(✿´⌣`✿)╯♡");
    };
}

//var 這行使用
var newBorn = new Person("Peyton","Yu",100,"Blue");
newBorn.smile();
