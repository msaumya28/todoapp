const TODOKEY = 'todo';

var card =
    `<div class="card mt-3">
    <div class="card-body">
        <h5 class="card-title">card_title</h5>
        <p class="card-text">card_text</p>
        <a href="#" class="btn btn-primary">Mark Done!!</a>
    </div>
</div>`;

$(document).ready(function() {
    var todoArray = JSON.parse(localStorage.getItem(TODOKEY));
    console.log(todoArray);
    for (const i in todoArray) {
        var row = card.replace("card_title", todoArray[i].title).replace("card_text", todoArray[i].note)
        $("#todoList").append(row)
    }
});

$("form#todoForm").submit(function(e) {
    e.preventDefault();

    var title = $("#title").val();
    var note = $("#note").val();


    var todoObject = {
        "title": title,
        "note": note,
        "status": 0,
        "timeStamp": Date.now()
    };

    var todoArray = JSON.parse(localStorage.getItem(TODOKEY));
    if (todoArray && todoArray.length > 0) {
        todoArray.push(todoObject);
    } else {
        todoArray = [todoObject];
    }

    localStorage.setItem(TODOKEY, JSON.stringify(todoArray));

    $("#title").val("");
    $("#note").val("");
    $("#successMsg").text("To do added successfully");
});