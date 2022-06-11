let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];

function mouseIn() {
    thisH1.innerHTML = "我又跳出來啦！";
}
function mouseOut() {
    thisH1.innerHTML = "又站回去啦！";
    thisP.innerHTML = "";
}
function mouseMove(e) {
    thisP.innerHTML = "怎麼樣怎麼樣怎麼樣?打我啊笨蛋！。位置:" + e.clientX + "," + e.clientY;
}
thisDiv.addEventListener("mouseover", mouseIn);
thisDiv.addEventListener("mouseout", mouseOut);
thisDiv.addEventListener("mousemove", mouseMove);