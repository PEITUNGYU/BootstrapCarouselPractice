/*
window.onload = function(){
    // document.write("Hello JavaScript!");
    document.onclick =function(e){
        //debugger;
        alert(e.target.innerHTML +"有" +e.target.innerHTML.length + "個字元");
    };
    
};*/

/*let confirmAnswer = confirm("Are you really sure you want to cancel this service?");
// debugger;
let thisH1 = document.getElementsByTagName("h1")[0];
if (confirmAnswer) {
    thisH1.innerHTML = "Service has been cancelled.";
}else{
    thisH1.innerHTML = "continue to use the service.";
}*/

/*let promtAnswer = prompt("小明家裡有3個小孩，他哥哥叫張一、張二，請問第3個小孩名字是甚麼?"
,"張三");
let thisH1 = document.getElementsByID("Response");
switch (promtAnswer) {
    case "張三":
        thisH1.innerHTML = "那小明是誰呢?";
        break;
    case "小明":
            thisH1.innerHTML = "你答對了。真棒";
            break;
    default:
        thisH1.innerHTML="你想多了";
}*/

 function showAlert(){
     thisH1.innerHTML="妳很好 努力剛好就好!";
        /*for (let i=0;i<10;i++) {
            if(i==3){
            //break;找到值後離開迴圈
                continue;
             }
            console.log(i);
    }*/
    let person ={
        firstName:"Peyton",
        lastName:"Yu",
        height:168
    };
   /*for(x in person){
        console.log(x +":" + person[x]);
    }*/
    for(x in window){
        console.log(x +":" + window[x]);
    }
 }
let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];

// #1寫法
// thisButton.onclick = function(){
//     showAlert();
// };

// #2
// thisButton.onclick = function(){
//     thisH1.innerHTML="Hello!";
// }; 
// #3
//    thisButton.onclick = showAlert;
// #4
thisButton.addEventListener("click",showAlert);
