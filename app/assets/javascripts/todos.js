$(function(){
  $("form").submit(function(){
    event.preventDefault();
    var action = $(this).attr('action');
    var method = $(this).attr('method');
    var description = $(this).find('#todo_description').val();
    var priority = $(this).find('#todo_priority').val();

    $ajax({
      method: method,
      url: action,
      data: { description: description, priority: priority }
    });
  });
});
