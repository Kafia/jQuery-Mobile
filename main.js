
/*jQuery Mobile Tap Event */
$(document).on("pageinit","#home",function(){
  $("p#para").on("tap",function(){
    $(this).hide();
  });                       
});
/*jQuery Mobile PageInit click Event */
$(document).on("pageinit","#process",function(){
  $("p#para2").on("click",function(){
    $(this).hide();
  });                       
});
/*jQuery Mobile Vmouseover Event */
$( document ).on( "vmouseover", "h4", function() {
  $( this ).append( "<span style='color:#108040;'> Dgenius...</span>" );
});

/*jQuery Mobile Swipe Event */
$(document).on("pageinit","#process",function(){
  $("p").on("swipe",function(){
    $("#swipe").text("Swipe detected!");
  });                       
});
/* Dragable */
$( "#draggable" ).draggable();
/* Resizable */
$( "#resizable" ).resizable();
/*Acordion*/
$( "#accordion" ).accordion();
/* AutoComplete */
var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});
/* Datepicker */
$( "#datepicker" ).datepicker({
	inline: true
});
/* Spinner */
$( "#spinner" ).spinner();
/*Select Menu */
$( "#selectmenu" ).selectmenu();

/* Explode Effect */
$( document ).click(function() {
  $( "#explode" ).toggle( "explode" );
});
/* Bounce Effect */
$( document ).click(function() {
  $( "#bounce" ).toggle( "bounce", { times: 5 }, "slow" );
});