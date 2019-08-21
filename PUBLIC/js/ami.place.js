/*
$(function(){
    //tab-line:初始化状态，获取上面span中宽度和相对有box的位置，让tab-line设置相同属性值
    //$(`${#id} .tab>li>span:first-child"`)
    var start = $(`.tab>li>span:first-child`).position().left
    var wide = $(`.tab>li>span:first-child`).css("width")
     $(`.tab-line`).css({ "margin-left": start, "width": wide });
    //使用冒泡为子元素设置鼠标进入函数
     $(".tab>li>span").on("mouseenter", function () {
    var $line = $(".tab-line");
    var $span = $(this);
    //1. 当鼠标移动时，设置tab-line的width和margin-left属性值与鼠标悬浮的span一致
    start = $span.position().left - $(".box").position().left;
    wide = $span.css("width");
    //css()函数可以用对象设置多个属性值
    $line.css({ "width": wide, "margin-left": start });
    //2. 鼠标移动时下面ul跟着变化，
    var id = $span.attr("data-id");
    $("#" + id).addClass("in").siblings(".content").removeClass("in");
  })
})
*/
$(function(){
function shows(parent){
    var start = $(`${parent} .tab>li>span:first-child`).position().left
    var wide = $(`${parent} .tab>li>span:first-child`).css("width")
     $(`${parent} .tab-line`).css({ "margin-left": start, "width": wide });
    //使用冒泡为子元素设置鼠标进入函数
     $(`${parent} .tab>li>span`).on("mouseenter", function () {
    var $line = $(`${parent} .tab-line`);
    var $span = $(this);
    //1. 当鼠标移动时，设置tab-line的width和margin-left属性值与鼠标悬浮的span一致
    start = $span.position().left - $(".box").position().left;
    wide = $span.css("width");
    //css()函数可以用对象设置多个属性值
    $line.css({ "width": wide, "margin-left": start })
    //2. 鼠标移动时下面ul跟着变化，
    $span.css("color","#000").on("mouseleave",function(){
      var $span=$(this);
      $span.css("color","#959595")
    })
    var id = $span.attr("data-id");
    $("#" + id).addClass("in").siblings(".content").removeClass("in");
  })
}
shows(".box");
shows(".box1");
shows(".box3");
})

$(function(){
  function ups(d1,prec){
    console.log(prec);
    $(`${d1}`).on("mouseenter", function () {
      $(this).children(":last-child").css({
        "margin-top": 0,
        "background": "rgba(0,0,0,.5)"
      })
    })
      .on("mouseleave", function(){
        $(this).children(":last-child").css({"margin-top": prec, "background": "rgba(0,0,0,0)"})
      })
  }
  ups(".card1>ul>li:first-child","148%");
  ups(".card1>ul>li:not(:first-child)","60%");
  ups(".card2>ul>li","130%")
})
