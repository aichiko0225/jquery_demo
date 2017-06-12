
$(function(){
  $(document).ready(function () {
    $('#button01').click(function (e) { 
      $("#test").load("demo_text.text", function (response, status, request) {
        this; // dom element
        console.log(response)
      });
    });
  });
})