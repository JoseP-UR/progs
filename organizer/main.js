$(document).ready(function() {
    tasks.forEach(function(t) {
        $('.task-list-list').append(`<li class="task-list-list-item">${t.taskName}</li>`);
    });
    $('.task-form > form').submit(function(event) {
        console.log(event);
        event.preventDefault();
        var newTask = {
            "taskname": $('input[name="taskText"]').val()
        };
        tasks.push(newTask);
        console.log(newTask);

    });




});


var tasks = [{
    "taskName": "teste"
}];