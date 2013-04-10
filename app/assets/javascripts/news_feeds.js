$(document).ready(function(){
  $(".new").removeClass("new");
  if($("#moreNews a").length == 0)
    $("#moreNews").remove();
  $(window).scroll(function() {
    if($("#moreNews").length > 0) {
      var scrollCenter = $(window).height() - 25;
      var workOffsetTop = $("#moreNews").offset().top - $(document).scrollTop();
      var workOffsetBot = workOffsetTop + 16;
      if ((workOffsetBot > scrollCenter) || (workOffsetTop > scrollCenter))
        ;
      else {
        $("#moreNews").find("a").trigger("click");
        $("#moreNews").find("a").remove();
      }
    }
  });
});
