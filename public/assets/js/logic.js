// $(".about").on("click",function(){
// console.log("about")
// })
// $(".portfolio").on("click",function(){
//   console.log("portfolio")
//   })
$(".home").on("click", function(){
  $.ajax({
    url: "/home",
    method: "GET"
  }).then(function(data){
    console.log(data)
  })
  
})

$(".about").on("click", function(){
  $.ajax({
    url: "/about",
    method: "GET"
  }).then(function(data){
    console.log(data)
  })
  
})
$(".portfolio").on("click", function(){
  $.ajax({
    url: "/portfolio",
    method: "GET"
  }).then(function(data){
    console.log(data)
  })
  
})

function copyText(){
    /* Get the text field */
    // var copytext = document.getElementById("env-tt");
    // console.log(copytext)
    /* Select the text field */
   var text = $("#env-tt").attr("value")
    console.log(text)
    // /* Copy the text inside the text field */
    document.execCommand("copy");
  
    // /* Alert the copied text */
}
;