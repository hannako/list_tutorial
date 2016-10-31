// $(function(){
//   $("form").submit(function(){
//     event.preventDefault();
//     var action = $(this).attr('action');
//     var method = $(this).attr('method');
//     var description = $(this).find('#todo_description').val();
//     var priority = $(this).find('#todo_priority').val();
//     var data = $(this).serializeArray();
//     //the .serializeArray method formats the params for Rails. SO if you get error
//     //message ActionController::ParameterMissing (param is missing or the value is empty: todo):
//     //this is the solution!
//
//     $.ajax({
//       method: method,
//       url: action,
//       data: data,
//       dataType: 'script'
//     });
//   });
// });
