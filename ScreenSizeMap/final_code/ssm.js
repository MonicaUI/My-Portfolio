$(document).ready(function() {
    $("#touch-tip").hover(function() {
        $(this).fadeOut();
    })
})

function popularity(pop) {
    allPopularity = document.querySelectorAll('[data-popularity]')
    allPopularity.forEach(function(element) {
        console.log(element.getAttribute('data-popularity'));
        if (pop != 'pop-all-caller' && element.getAttribute('data-popularity') != pop) {
            element.style.visibility = "hidden";
        } else {
            element.style.visibility = "";
        }
    });
    document.getElementById('pop-less-2').classList.remove('active');
    document.getElementById('pop-2-5').classList.remove('active');
    document.getElementById('pop-more-5').classList.remove('active');
    document.getElementById('pop-all-caller').classList.remove('active');
}
document.getElementById('pop-all-caller').addEventListener('click', function() {
    popularity('pop-all-caller');
    this.classList.add('active');
});
document.getElementById('pop-less-2').addEventListener('click', function() {
    popularity('pop-less-2');
    this.classList.add('active');
});
document.getElementById('pop-2-5').addEventListener('click', function() {
    popularity('pop-2-5');
    this.classList.add('active');
});
document.getElementById('pop-more-5').addEventListener('click', function() {
    popularity('pop-more-5');
    this.classList.add('active');
});

var x = document.getElementById('FS');

function openfullscreen() {
    x.requestFullscreen();
}
document.getElementById('fullscreenOpen').addEventListener('click', openfullscreen);

function dropDown() {
    document.getElementById('buttonDrop').classList.toggle("show");
}
document.getElementById('button-control').addEventListener('click', dropDown);

function buttonControl(plate) {
    allButton = document.querySelectorAll('[data-group]')
    allButton.forEach(function(element) {
        console.log(element.getAttribute('data-group'));
        if (plate != 'button-all' && element.getAttribute('data-group') != plate) {
            element.style.visibility = "hidden";
        } else {
            element.style.visibility = "";
        }
    });
    document.getElementById('extra-extra-large').classList.remove('active');
    document.getElementById('extra-large').classList.remove('active');
    document.getElementById('large').classList.remove('active');
    document.getElementById('medium').classList.remove('active');
    document.getElementById('small').classList.remove('active');
    document.getElementById('extra-small').classList.remove('active');
}
document.getElementById('extra-extra-large').addEventListener('click', function() {
    buttonControl('XXL');
    this.classList.add('active');
});
document.getElementById('extra-large').addEventListener('click', function() {
    buttonControl('XL');
    this.classList.add('active');
});
document.getElementById('large').addEventListener('click', function() {
    buttonControl('L');
    this.classList.add('active');
});
document.getElementById('medium').addEventListener('click', function() {
    buttonControl('M');
    this.classList.add('active');
});
document.getElementById('small').addEventListener('click', function() {
    buttonControl('S');
    this.classList.add('active');
});
document.getElementById('extra-small').addEventListener('click', function() {
    buttonControl('XS');
});


document.getElementById('reset-control').addEventListener('click', function() {
    buttonControl('button-all');
});
$(document).ready(function() {
    $("#svgRect1000").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect1000").width(), $("#svgRect1000").height());
    });
    $("#svgRect800").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect800").width(), $("#svgRect800").height());
    });
    $("#svgRect720").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect720").width(), $("#svgRect720").height());
    });
    $("#svgRect700").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect700").width(), $("#svgRect700").height());
    });
    $("#svgRect680").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect680").width(), $("#svgRect680").height());
    });
    $("#svgRect660").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect660").width(), $("#svgRect660").height());
    });
    $("#svgRect640").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect640").width(), $("#svgRect640").height());
    });
    $("#svgRect610").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect610").width(), $("#svgRect610").height());
    });
    $("#svgRect500").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect500").width(), $("#svgRect500").height());
    });
    $("#svgRect501").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect501").width(), $("#svgRect501").height());
    });
    $("#svgRect480").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect480").width(), $("#svgRect480").height());
    });
    $("#svgRect430").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect430").width(), $("#svgRect430").height());
    });
    $("#svgRect425").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect425").width(), $("#svgRect425").height());
    });
    $("#svgRect435").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect435").width(), $("#svgRect435").height());
    });
    $("#svgRect405").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect405").width(), $("#svgRect405").height());
    });
    $("#svgRect426").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect426").width(), $("#svgRect426").height());
    });
    $("#svgRect360").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect360").width(), $("#svgRect360").height());
    });
    $("#svgRect361").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect361").width(), $("#svgRect361").height());
    });
    $("#svgRect320").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect320").width(), $("#svgRect320").height());
    });
    $("#svgRect280").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect280").width(), $("#svgRect280").height());
    });
    $("#svgRect260").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect260").width(), $("#svgRect260").height());
    });
    $("#svgRect220").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect220").width(), $("#svgRect220").height());
    });
    $("#svgRect230").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect230").width(), $("#svgRect230").height());
    });
    $("#svgRect200").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect200").width(), $("#svgRect200").height());
    });
    $("#svgRect170").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect170").width(), $("#svgRect170").height());
    });
    $("#svgRect140").hover(function() {
        $("#screenTooltip").show();
        showWH($("#svgRect140").width(), $("#svgRect140").height());
    });
    $("body").hover(function() {
        $("#screenTooltip").hide();
    });

    function showWH(w, h) {
        $("#screenSize").text(" " + w + "x" + h + "dp");
    }

});
var box = document.getElementById('screenTooltip');
var screenToolTip = document.getElementById('svg-screensize');
screenToolTip.addEventListener("mouseover", function() {
    var e = window.event;
    var x = e.clientX;
    box.style.left = x + "px";
    box.style.right = x + "px";
});