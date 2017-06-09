

$(function(){
  //alert($('#box').html());

  alert($('input').val());
  $('input').val('333')
  $.post("url", data,
    function (data, textStatus, jqXHR) {
      
    },
    "dataType"
  );
})
/*
append() - 在被选元素的结尾插入内容
prepend() - 在被选元素的开头插入内容
after() - 在被选元素之后插入内容
before() - 在被选元素之前插入内容
*/