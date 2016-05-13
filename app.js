//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
//cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
    //create an option
  var $option = $("<option></option>");
  // deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //option's text is the text of link
  //append option to select
  $select.append($option);
  
});

//bind click to button 
$select.change(function(){
  //go to select's location
  window.location = $select.val();
});
// modify css to hide links on small resolution and show button and select
  //also hodes select and button larger width and show links
//deal with selected options depending on current page
