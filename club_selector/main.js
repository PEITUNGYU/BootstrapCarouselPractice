$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;


    //一 sec = 1000 ms
    //計算一天的秒數量
    //每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24 * 60 * 60 * 1000;
    //YYYY/MM/DD
    //MM/DD/YYYY
    //DD/MM/YYYY
    //YYYY-MM-DD

    //var topicCount = topic.length;
    for (var x = 0; x < topicCount; x++) {

        /*    $("#courseTable").append(
                `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`);*/
        //slice(5)隱藏前面5個字元不顯示
        var thisDateObject = new Date(startDate.getTime() + 7 * x * millisecsPerDay);
        $("#courseTable").append(
            `<tr><td>${x + 1}</td><td>${thisDateObject.getMonth() + 1}/${thisDateObject.getDate()}</td><td>${topic[x]}</td></tr>`

        );
        /* $("#courseTable").append(
                `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td><td>${topic[x]}</td></tr>`); */
    }
    /* for (var x = 0; x < topicCount; x++) {
            $("#courseTable").append(
                `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td><td>${topic[x]}</td></tr>);
            
            }
    
            //for (var x = 0; x < topicCount; x++) {$("#courseTable").append("<tr>"+
            //    `<td>${x+1}</td>`+
                `<td>${startDate+7*x}</td>`+
                `<td>${topic[x]}</td>`+
                "</tr>");
            }
                */

});
$(function(){
    $('#box').css('color','grey').css('fontSize','50px');
});