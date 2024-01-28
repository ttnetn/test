// 網頁的主程式寫在這裡
//陣列 Array []

// 初始化 WOW套件
new WOW().init();


new Typed('#element', {
    strings: [
        'Hello World!.',
        '我是采蓉',
        'Welcome to my Website'

    ],
    typeSpeed: 50,
});


//$()=>jQuery()
// 綁定 .ad-toggle-btn 的點擊事件
$(".ad-toggle-btn").click(function () {
    console.log("[.ad-toggle-btn被點擊了]");
    //選.side-box 並切換 .active
    $(".side-box").toggleClass("active");

});

// 綁定 #removeSideBoxBtn 的點擊事件
$("#removeSideBoxBtn").click(function () {
    console.log("[#removeSideBoxBtn被點擊了]")
    //選.side-box 並移除.active
    // $(".side-box").toggleClass("active");
    // $(".side-box").removeClass("active")
    //移除.side-box
    $(".side-box").hide();

});

// 取得現在的年份
const year = new Date().getFullYear();
// 將年份顯示在 id="yearShow" 的元素內
$("#yearShow").text(year);