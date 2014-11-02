$(function() {

  Parse.initialize("fAU49qKhl2iNxqjwhEN7Afz7a1b4LaeDmtxL0PSs", "7E1HO3ExVNJVTAkXBesJXYD6sZCbaHWwBZMFV2Of");
  console.log("test");

  var myCodeMirror = CodeMirror(document.getElementById("modal"), {
    lineNumbers: true,
    theme: 'neo'
    //lineWrapping: true
  });


  $("button[name=run]").click(function() {
    var text = myCodeMirror.getValue();
    if (eval(text) == 55) {/* HERE GOES OUT EXPECTED OUTPUT FOR THE CODING CHALLENGE*/
      console.log("correct"); // HERE GOES WHAT WE DO IF THEY GET THE CHALLENGE RIGHT
    } else {
      console.log("fail"); // HERE GOES WHAT WE DO IF THEY GET THE CHALLENGE WRONG
    }
  });


});
