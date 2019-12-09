var b = 1;

function taskList() {

    var y = document.getElementById('task');
    //var dyn = document.getElementById('task');
    var labels = document.getElementById('toggleAll');
    var li = document.createElement('li');
    var div = document.createElement('div');
    var input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "toggle");
    input.classList.add('toggle')
    div.classList.add('view');
    li.setAttribute("id", b);
    b++;
    var a = document.getElementById('lists');
    //var liList = document.getElementById('lists');
    var lab = document.createElement('label');
    lab.appendChild(document.createTextNode(y.value));
    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(lab);
    a.appendChild(li);
    document.getElementById('task').value = "";
    document.getElementById('main').style.display = "block";
    document.getElementById('foot').style.display = "block";
    labels.style.display = "block";
}
var input = document.getElementById("task");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        taskList();
        itemCount();
    }

});

function test() {
    $('div.view > input:checkbox').change(function() {

        var checkbox = document.getElementById('lists').getElementsByTagName('input');
        for (var i = 0; i <= checkbox.length; i++) {
            if ($(this).is(":checked")) {
                $(this).closest("li").addClass('completedLabel');

            } else {
                $(this).closest("li").removeClass('completedLabel');
            }
        }

    });
}

function itemCount() {
    var li = document.getElementById('lists').getElementsByTagName('li');
    var check = document.getElementById('lists').getElementsByTagName('input');
    var x = li.length;
    var counting;
    for (var i = 1; i <= x; ++i) {
        if (check.checked) {
            counting = 0;
        } else {
            counting = i;
        }

    }

    document.getElementById('counts').innerHTML = counting;
}


function clearCompleteButton() {
    $('input:checkbox').change(function() {

        var checkbox = document.getElementById('lists').getElementsByTagName('input');
        for (var i = 0; i <= checkbox.length; i++) {
            if ($(checkbox).is(":checked")) {
                $("#clearCompleted").css('display', 'inline');

            } else {
                $("#clearCompleted").css('display', 'none');
            }
        }
    });

}

document.getElementById('lists').addEventListener('click', function() {
    test();
    clearCompleteButton();
});

$(document).ready(function() {
    $("#clearCompleted").click(function() {
        $("li").remove(".completedLabel");
    });
});

// $(document).ready(function() {
//     if ($("li .view").is(":visible")) {
//         $('#foot').css("display - block");
//     } else {
//         $('#foot').css("display - none");
//     }
// });
$(document).ready(function() {
    $("#all").click(function() {
        $("li").show();
    });
    // $("#active").click(function() {
    //     if ($("#lists li").hasClass('completedLabel')) {
    //         $("#lists li").hide('completedLabel');
    //     }
    // });


});

function active() {
    //var li = document.getElementById("lists").getElementsByTagName('li');
    if ($("li").hasClass("completedLabel")) {
        $("li.completedLabel").css('display', 'none');
    }
}
document.getElementById('active').addEventListener('click', active);

function completed() {
    //var li = document.getElementById("lists").getElementsByTagName('li');
    //var $filter = $("#lists li.completedLabel");
    var $filter = $("#lists li:not(.completedLabel)");
    //var $input = $("#lists input");
    $("#lists li").not(".completedLabel") ? $filter.hide() : $filter.show();
}
document.getElementById('completed').addEventListener('click', completed);