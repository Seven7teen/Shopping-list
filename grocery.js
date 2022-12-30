// add elements


$(".need-button").click(function() {
  var value = $("input").val();
  var html = `<div class='list-group-item list-item'><h3>${value}</h3><a href='#' onclick = "myFunc('need', event)"> ❌</a></li></div>`;
  $(".need-content").append(html);
  $(".input-field").val("");
});


$(".have-button").click(function() {
  var value = $("input").val();
  var html = `<div class='list-group-item list-item'><h3>${value}</h3><a href='#' onclick = "myFunc('have', event)"> ❌</a></li></div>`;
  $(".have-content").append(html);
  $(".input-field").val("");
});


//remove elements

// document.querySelector("a").addEventListener('click', myFunction);

function myFunc(condition, event) {
    console.log(event.target);
    if(condition === 'need') {
      $(event.target).parent()[0].remove();
    }
    else {
      var value = $(event.target).prev().html();
      var html = `<div class='list-group-item list-item'><h3>${value}</h3><a href='#' onclick = "myFunc('need', event)"> ❌</a></li></div>`;
      $(".need-content").append(html);
      $(event.target).parent()[0].remove();
    }
}
