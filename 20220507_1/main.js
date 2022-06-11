let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 200;

//initial / start / beginning
$(function () {
    //0-可走/1-障礙/2-終點/3-敵人
    mapArray = [[0, 1, 1],
    [0, 0, 0],
    [3, 1, 2]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        "x": 0,
        "y": 0
    };

    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    }
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    imgMountain.onload = function () {
        imgEnemy.onload = function () {
            for (var x in mapArray) {
                for (var y in mapArray[x]) {
                    if (mapArray[x][y] == 1) {
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
                    } else if (mapArray[x][y] == 3) {
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
                    }
                }
            }
        }

    }

});

// uswe interaction / event trigger
$(document).on("keydown", function (event) {
    let targetImg, target
    targetImg = {
        "x": -1,
        "y": -1
    };
    targetBlock = {
        "x": -1,
        "y": -1
    }

    event.preventDefault();

    switch (event.code) {
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175; //臉朝左
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355; //臉朝上     
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540; //臉朝右        
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0; //臉朝下       
            break;
        default://其他按鍵不處理
            return;
    }
if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y>=0){

}else{
    targetBlock.x=-1;
    targetBlock.y=-1;
}
ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

if(targetBlock.x!=-1 && targetBlock.y!=-1){

    switch (mapArray[targetBlock.x][targetBlock.y]) {
        case 0:
            $"(#talkbox").text("");
            currentImgMain.x =targetImg.x;
            currentImgMain.y =targetImg.y;
            break;
        case 1:
            $"(#talkbox").text("");
            break;
        case 2:
            $"(#talkbox").text("");
            break;
        case 3:
            $"(#talkbox").text("");
            break;
    }
}
});