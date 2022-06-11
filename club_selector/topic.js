var topic = [
    "停課_尚未開學",
    "停課_國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];
var startDate = new Date();

function setMonthAndDay(startMonth,startDay){
//一次設定好月份跟日期
startDate.setMonth(startMonth-1, startDay);
startDate.setHours(0); //時間歸零
startDate.setMinutes(0); //時間歸零
startDate.setSeconds(0); //時間歸零
}

setMonthAndDay(5,3);