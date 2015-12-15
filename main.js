/*jQuery Mobile PageInit click Event */
$(document).on("pageinit","#process",function(){
  $("p").on("click",function(){
    $(this).hide();
  });                       
});
/*jQuery Mobile Tap Event */
$(document).on("pageinit","#home",function(){
  $("p").on("tap",function(){
    $(this).hide();
  });                       
});
/*jQuery Mobile Vmouseover Event */
$( document ).on( "vmouseover", "span", function() {
  $( this ).append( "<span style='color:#108040;'> Dgenius...</span>" );
});

/*jQuery Mobile Swipe Event */
$(document).on("pageinit","#process",function(){
  $("p").on("swipe",function(){
    $("span").text("Swipe detected!");
  });                       
});

$( "#draggable" ).draggable();
$( "#resizable" ).resizable();