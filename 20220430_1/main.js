let imageURLs = [
    "https://www.popdaily.com.tw/shaper/u/202105/d404ea8b-4b0b-4499-b090-d7e26149ff99.jpg?resize-w=800",
    "https://www.litenews.hk/images/litenews/2015/10/1015-%E5%B0%8F%E7%8E%8B%E5%AD%90-1.png",
    "https://www.litenews.hk/images/litenews/2015/10/1015-%E5%B0%8F%E7%8E%8B%E5%AD%90-5.png"
];



document.body.style.color = "blue";


// background-image: url("paper.gif");
//文件-身體-設計-背景圖片
//let thisURL ="https://www.w3schools.com/cssref/paper.gif";
//document.body.style.backgroundImage ='url()'
//document.body.style.backgroundImage = 'url('+'"https://www.w3schools.com/cssref/paper.gif"'+')';
//document.body.style.backgroundImage = 'url("https://www.w3schools.com/cssref/paper.gif")';
//document.body.style.backgroundImage = 'url('+thisURL+')';
//let thisH1 = document.getElementsByTagName("h1")[0]; 


let thisH1 = document.getElementsByName("abc")[0];
let thisButton = document.getElementsByTagName("button")[0];
thisButton.addEventListener("click",showAlert);
let d = new Date();
function showAlert(){
    document.body.style.backgroundImage='url('+imageURLs[Math.floor(Math.random()*imageURLs.length)]+')';

//第1種方法
//   let myFriends = new Array();
//    myFriends[0] = "John";
//    myFriends[1] = "Marry";
//    myFriends[2] = "David";
//    myFriends[3] = 123;
//第2種方法
//   let myFriends = new Array("John","Marry","David",123);
//第3種方法
//   let myFriends = ["John","Marry","David",123];
//   let myFriends = ["John",d,ture,123];
    let myFriends_string ="John,Marry,David";
    let myFriends_array = myFriends_string.split(",");
//  let myFriends = ["John","Marry","David"];
    thisH1.innerHTML = myFriends_array.join(" | ");
// Lab時間:按鈕按下去隨機印出1到9的數字。
    thisH1.innerHTML = Math.floor(Math.random()*10)+1;
//  thisH1.innerHTML ="["+myFriends[0]+"|"+myFriends[1]+"|"+myFriends[2]+"|"+myFriends[3]+"]";
//  console.log(typeof(myFriends[0]));
//  console.log(typeof(myFriends));

//  var d = new Date();
//  thisH1.innerHTML = d.toLocaleDateString();
//  thisH1.innerHTML = d.toLocaleTimeString();
//  thisH1.innerHTML = d.toLocaleString();
//  thisH1.innerHTML =new Date();
//    alert("h1");
//    alert("字串長度:"+thisH1.innerHTML.length+"\n"+
//        "World在第"+thisH1.innerHTML.indexOf("World")+"位置"+"\n"+
//        "第一個字"+thisH1.innerHTML.split(" ")[0]+"\n"+
//       "第二個字"+thisH1.innerHTML.split(" ")[1]);
}
