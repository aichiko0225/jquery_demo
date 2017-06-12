

$(function(){
  //alert($('#box').html());

  // alert($('input').val());

  let div = $('<div>加入新的div<div/>');
  $('body').append(div);
  let submit = $('<input type="submit">')
  $('.form_class').append(submit);

  let input = $('<input type="text" value="my before"/>')
  $('.form_class').prepend(input);

  $('form').before("在被选元素之前插入内容")
  $('form').after("在被选元素之后插入内容")
  
  let window_width = $(window).width();
  let document_width = $(document).width();

  var text = ""

  text += "width:" + $('#box_01').width() +"<br/>";
  text += "height:" + $('#box_01').height() + "<br/>";
  //$('#box_01').html(text);
})
/*
append() - 在被选元素的结尾插入内容
prepend() - 在被选元素的开头插入内容
after() - 在被选元素之后插入内容
before() - 在被选元素之前插入内容
*/

/**
 * jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：
  addClass() - 向被选元素添加一个或多个类
  removeClass() - 从被选元素删除一个或多个类
  toggleClass() - 对被选元素进行添加/删除类的切换操作
  css() - 设置或返回样式属性
 */

/**
 * jQuery 提供多个处理尺寸的重要方法：
  width()  元素的宽度（不包括内边距、边框或外边距）
  height() 元素的高度（不包括内边距、边框或外边距）
  innerWidth()  元素的宽度（包括内边距）
  innerHeight() 元素的高度（包括内边距
  outerWidth()  元素的宽度（包括内边距和边框）
  outerHeight() 元素的高度（包括内边距和边框）
 */

/**
 * 什么是遍历？
  jQuery 遍历，意为“移动”，用于根据其相对于其他元素的关系来“查找”（或选取）HTML 元素。
  以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。
  下图展示了一个家族树。通过 jQuery 遍历，您能够从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），
  向下移动（子孙），水平移动（同胞）。
  这种移动被称为对 DOM 进行遍历。
 */

$(function(){
  $(document).ready(function () {
    // parent() 方法返回被选元素的直接父元素。
    let parent = $('span').parent()
    //alert(parent.html())
    // parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。
    let parents = $('span').parents()
    //parents.css({"color":"red", "border":"2px solid red"})
    // parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素。
    let until = $('span').parentsUntil('div')
    //alert(until.html())
  });
})

/**
 * 向下遍历 DOM 树
  下面是两个用于向下遍历 DOM 树的 jQuery 方法：
  children()
  find()
 */

$(function(){
  $(document).ready(function () {
    
    let children = $('#box_01').children()
    // alert(children.html())

    // 您也可以使用可选参数来过滤对子元素的搜索。
    let children_b = $('#box_01').children('ul')
    // alert(children_b.html())
    // children() 方法返回被选元素的所有直接子元素。

    // find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。
    let spans = $('#box_01').find('span');
    // alert(spans.html())

    let childrens = $('#box_01').find('*');
    // alert(childrens.html())
  });
})