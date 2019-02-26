$(".filter-tab").click(function() {
    if (!$(this).hasClass("active")) {
      $(".filter-tab.active").removeClass("active");
      $(this).addClass("active");
    }
});