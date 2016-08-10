$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Sup muthaf%$*a!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Aliright, I lead a lonely life, and have few friends, but I guess I dont need you to spend any time with me to help me feel loved!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!</li>")
    $("ul#webpage").prepend("<li>Hey, you are the fucking asshole who is writing this damn code!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });
  $("button#salad").click(function(){
    $("ul#user").prepend("<li>What should I Eat?!</li>")
    $("ul#webpage").prepend("<li>Eat salad, mutha$%#ka!</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });
});
