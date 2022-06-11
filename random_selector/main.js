let foodImages = [
    "https://cc.tvbs.com.tw/img/program/upload/2019/08/08/20190808114410-21c15b67.jpg",
    "https://img.ltn.com.tw/Upload/health/page/800/2021/06/25/phpwjVFEz.jpg",
    "https://pic.pimg.tw/fiona3313/1412832375-1332198334_n.jpg"
];

$(function(){
    // console.log("Yo");
    $("input").on("click",function(){
        // alert("こんばんは");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",foodImages[randomChildNumber]);    
    });
});      

/*$(function(){
    // console.log("Yo");
    $("input").on("click",function(){
        // alert("こんばんは");
        // 所有品項都會出現。
        // $("h1").text($("li").text()); 

        // 出現第1個品項拉麵。
        //$("h1").text($("li:first").text());

        // 看eq()內的數值，出現品項。
        //$("h1").text($("li").eq(1).text());

        //$("h1").text($("li").eq(Math.floor(Math.random()*3)).text());

        //$("h1").text($("li").eq(Math.floor(Math.random()*($("li").length))).text());

        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});*/

function xxx(){

}
/*
window.onload = function(){
//    document.write("Hello JavaScript!");
};
*/