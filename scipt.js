$(document).ready(function () {
  $(".pehla").click(function () {
    $(".mobile").show(350);
    $(".dusra").show(200);
    $(".pehla").hide(1);
  });
  $(".dusra").click(function () {
    $(".mobile").hide(200);
    $(".pehla").show(0);
    $(".dusra").hide(0);
  });
});
