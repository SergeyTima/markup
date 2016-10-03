$(".main-nav").find("li").click(function(){

  // удаляем у старого элемента, класс   activeClass   

  $(".main-nav .activeClass").removeClass("activeClass");

  // добавляем к ссылки по которой щёлкнули класс activeClass

  $(this).addClass("activeClass");

});
