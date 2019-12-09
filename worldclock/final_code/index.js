function checkTime(i) {
    if (i < 10) {
        i = "0 " + i;
    }
    return i;
}

function localTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var ampm = h >= 12 ? 'p' : 'a';
    var d = today.getDate();
    var d1 = (today.getDate() + 1);
    var month = today.toLocaleString('en', {
        month: 'long'
    });
    var year = today.getFullYear();
    var mon = today.toLocaleString('en', {
        month: 'short'
    });
    var day = today.toLocaleString('en', {
        weekday: 'short'
    });
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    var currentDay = document.getElementById('days').getElementsByTagName('li');
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;

    // if (currentDay == d) {
    //     currentDay.classList.add('active');
    // }
    document.getElementById('time').innerHTML = h + " : " + m + " " + ampm;
    document.getElementById('date').innerHTML = day + " , " + mon + " " + d;
}
localTime();

function foreignTime() {
    var today = new Date();
    var UH = today.getUTCHours();
    var UM = today.getUTCMinutes();
    var ampm = UH >= 12 ? 'p' : 'a';
    var d = today.getUTCDate();
    var mon = today.toLocaleString('en', {
        month: 'short'
    });
    var day = today.toLocaleString('en', {
        weekday: 'short'
    });
    UH = UH % 12;
    UH = UH ? UH : 12;
    // add a zero in front of numbers<10
    UM = checkTime(UM);
    document.getElementById('fTime').innerHTML = UH + " : " + UM + " " + ampm;
    t = setTimeout(function() {
        foreignTime()
    }, 500);
    document.getElementById('fDate').innerHTML = day + " , " + mon + " " + d;
    // document.getElementById('monthF').innerHTML = mon + " <br> " + d;
}
foreignTime();

function hourLineTodayLocal() {
    var h = new Date();
    var mon = h.toLocaleString('en', {
        month: 'short'
    });
    var d = h.getDate();
    var gethour = h.getHours();
    var tempHourArr = [];
    var hourOption = 24;

    var textLocal, x;
    for (var i = 0; i < hourOption; i++) {
        var hour = h.setHours(i),
            minutes = h.setMinutes(0),
            stringHour = h.getHours();
        // stringHour = stringHour % 12;
        // stringHour = stringHour ? stringHour : 12;
        tempHourArr.push(stringHour);

    }


    var hourLength = tempHourArr.length;
    textLocal = "<ul>";

    for (x = 0; x < hourLength; x++) {
        // tempHourArr.forEach((item, i) => {
        //     item.id = i + 10;
        // });
        tempHourArr[0] = mon;

        if (tempHourArr[x] == mon) {
            ampm = d;
        } else if (tempHourArr[x] < 12) {
            ampm = "am";
        } else {
            ampm = "pm";
        }

        t = "<b>" + tempHourArr[x] + "</b>";
        ampm = "<u>" + ampm + "</u>";
        // textLocal += "<li>" + t + ampm + "</li>";

        if (tempHourArr[x] == gethour) {
            textLocal += "<li class = 'bandLocal cband'>" + t + ampm + "</li>";
        } else {
            textLocal += "<li>" + t + ampm + "</li>";
        }
    }
    textLocal += "</ul>";
    console.log(tempHourArr);
    document.getElementById('toDayLocal').innerHTML = textLocal;
}
hourLineTodayLocal();
var element = document.querySelectorAll('#toDayLocal li');
// convert NodeList into an array

Array.from(element)
    // iterate over the element
    .forEach(function(ele, i) {
        // generate and set id
        ele.setAttribute("id", 'l' + (i + 1));
    })

function hourLineTodayForeign() {
    var h = new Date();
    var mon = h.toLocaleString('en', {
        month: 'short'
    });
    tempHourArr = [];
    x = [];
    hourOption = 24;
    var gethour = h.getUTCHours();
    var textLocal, tmr, x;
    for (i = 0; i < hourOption; i++) {
        var hour = h.setUTCHours(i),
            minutes = h.setUTCMinutes(0),
            stringHour = h.getUTCHours();
        tempHourArr.push(stringHour);

    }

    console.log(tempHourArr);
    hourLength = tempHourArr.length;
    textLocal = "<ul>";
    for (x = 5; x < hourLength; x++) {
        // tempHourArr.forEach((item, i) => {
        //     item.id = i + 10;
        // });
        tempHourArr[24] = mon;
        var dUTC = h.getDate() + 1;

        if (tempHourArr[x] == mon) {
            ampm = dUTC;

        } else if (tempHourArr[x] < 12) {
            ampm = "am";
        } else {
            ampm = "pm";
        }
        t = "<b>" + tempHourArr[x] + "</b>";
        ampm = "<u>" + ampm + "</u>";
        //textLocal += "<li>" + t + ampm + "</li>";
        if (tempHourArr[x] == gethour) {
            textLocal += "<li class = 'bandFor cband'>" + t + ampm + "</li>";
        } else {
            textLocal += "<li>" + t + ampm + "</li>";
        }
    }
    textLocal += "</ul>";
    tmr = "<ul>";
    for (x = 0; x < 5; x++) {
        // tempHourArr.forEach((item, i) => {
        //     item.id = i + 10;
        // });
        var dUTC = h.getDate() + 1;

        tempHourArr[0] = mon;
        if (tempHourArr[x] == mon) {
            ampm = dUTC;
        } else if (tempHourArr[x] < 12) {
            ampm = "am";
        } else {
            ampm = "pm";
        }
        t = "<b>" + tempHourArr[x] + "</b>";
        ampm = "<u>" + ampm + "</u>";
        //tmr += "<li>" + t + ampm + "</li>";
        if (tempHourArr[x] == gethour) {
            tmr += "<li class = 'bandFor cband'>" + t + ampm + "</li>";
        } else {
            tmr += "<li>" + t + ampm + "</li>";
        }
    }
    tmr += "</ul>";
    document.getElementById('toDayForeign').innerHTML = textLocal + tmr;
    //tempHourArr[i].style.border = '1px solid red';
}
hourLineTodayForeign();
var element = document.querySelectorAll('#toDayForeign li');
// convert NodeList into an array
// for older browser use [].slice.call(element)
Array.from(element)
    // iterate over the element
    .forEach(function(ele, i) {
        // generate and set id
        ele.setAttribute("id", 'f' + (i + 5));
    })

function changeDate() {
    var date = new Date();
    var ad = (date.getDate() - 1);
    var d = date.getDate();
    var cd = (date.getDate() + 1);
    var mon = date.toLocaleString('en', {
        month: 'short'
    });
    document.getElementById('beforeDate').innerHTML = ad;
    document.getElementById('currentMonth').innerHTML = mon;
    document.getElementById('currentDate').innerHTML = d;
    document.getElementById('dateOneDate').innerHTML = cd;
    // document.getElementById('dateTwo').innerHTML = dd;
    // document.getElementById('dateThree').innerHTML = ed;
}
changeDate();

function border() {
    var h = new Date();
    var mon = h.toLocaleString('en', {
        month: 'short'
    });
    var d = h.getDate();
    var utcd = h.getDate() + 1;
    //document.getElementById("wrap").classList.add('animate2');
    document.getElementById("beforeMonth").innerHTML = "";
    document.getElementById("currentMonth").innerHTML = mon;
    document.getElementById("dateOneMonth").innerHTML = "";
    document.getElementById("current").style.borderBottom = "4px solid white";
    document.getElementById("current").style.backgroundColor = "white";
    document.getElementById('before').style.border = '0';
    document.getElementById("before").style.backgroundColor = "rgb(236, 233, 233)";
    document.getElementById("dateOne").style.backgroundColor = "rgb(236, 233, 233)";
    document.getElementById("dateOne").style.border = "0";
    document.getElementById("l1").getElementsByTagName("U")[0].innerHTML = d;
    document.getElementById("f24").getElementsByTagName("U")[0].innerHTML = utcd;
}
document.getElementById('current').addEventListener('click', border);
//document.getElementById("wrap").classList.remove('animate');

function beforeDayBorder() {
    var h = new Date();
    var mon = h.toLocaleString('en', {
        month: 'short'
    });
    var d = h.getDate() - 1;
    var utcd = h.getDate();
    //document.getElementById("wrap").classList.add('animate1');
    document.getElementById("beforeMonth").innerHTML = mon;
    document.getElementById("currentMonth").innerHTML = "";
    document.getElementById("dateOneMonth").innerHTML = "";
    document.getElementById("before").style.borderBottom = "4px solid white";
    document.getElementById("before").style.backgroundColor = "white";
    document.getElementById("current").style.backgroundColor = "rgb(236, 233, 233)";
    document.getElementById('current').style.border = '0';
    document.getElementById("dateOne").style.backgroundColor = "rgb(236, 233, 233)";
    document.getElementById("dateOne").style.border = "0";
    document.getElementById("l1").getElementsByTagName("U")[0].innerHTML = d;
    document.getElementById("f24").getElementsByTagName("U")[0].innerHTML = utcd;
    //document.getElementById("wrap").classList.remove('animate1');
}
document.getElementById('before').addEventListener('click', beforeDayBorder);

function dateOneBorder() {
    var h = new Date();
    var mon = h.toLocaleString('en', {
        month: 'short'
    });
    var d = h.getDate() + 1;
    var utcd = h.getDate() + 2;
    //document.getElementById("wrap").classList.add('animate3');
    document.getElementById("beforeMonth").innerHTML = "";
    document.getElementById("currentMonth").innerHTML = "";
    document.getElementById("dateOneMonth").innerHTML = mon;
    document.getElementById("dateOne").style.borderBottom = "4px solid white";
    document.getElementById("dateOne").style.backgroundColor = "white";
    document.getElementById("current").style.backgroundColor = "rgb(236, 233, 233)";
    document.getElementById('current').style.border = '0';
    document.getElementById("before").style.backgroundColor = "rgb(236, 233, 233)";
    document.getElementById("before").style.border = "0";
    document.getElementById("l1").getElementsByTagName("U")[0].innerHTML = d;
    document.getElementById("f24").getElementsByTagName("U")[0].innerHTML = utcd;

}
document.getElementById('dateOne').addEventListener('click', dateOneBorder);

$(function() {
    $("#l1").addClass("tod_c");
    $("#f24").addClass("tod_c");

    $("#l2").addClass("tod_n");
    $("#l3").addClass("tod_n");
    $("#l4").addClass("tod_n");
    $("#l5").addClass("tod_n");
    $("#l21").addClass("tod_n");
    $("#l22").addClass("tod_n");
    $("#l23").addClass("tod_n");
    $("#l24").addClass("tod_n");
    $("#f20").addClass("tod_n");
    $("#f21").addClass("tod_n");
    $("#f22").addClass("tod_n");
    $("#f23").addClass("tod_n");
    $("#f25").addClass("tod_n");
    $("#f26").addClass("tod_n");
    $("#f27").addClass("tod_n");
    $("#f28").addClass("tod_n");

    $("#l6").addClass("tod_m");
    $("#l7").addClass("tod_m");
    $("#l19").addClass("tod_m");
    $("#l20").addClass("tod_m");
    $("#f5").addClass("tod_m");
    $("#f6").addClass("tod_m");
    $("#f18").addClass("tod_m");
    $("#f19").addClass("tod_m");

    $("#l8").addClass("tod_d");
    $("#l9").addClass("tod_d");
    $("#l10").addClass("tod_d");
    $("#l11").addClass("tod_d");
    $("#l12").addClass("tod_d");
    $("#l13").addClass("tod_d");
    $("#l14").addClass("tod_d");
    $("#l15").addClass("tod_d");
    $("#l16").addClass("tod_d");
    $("#l17").addClass("tod_d");
    $("#l18").addClass("tod_d");
    $("#f7").addClass("tod_d");
    $("#f8").addClass("tod_d");
    $("#f9").addClass("tod_d");
    $("#f10").addClass("tod_d");
    $("#f11").addClass("tod_d");
    $("#f12").addClass("tod_d");
    $("#f13").addClass("tod_d");
    $("#f14").addClass("tod_d");
    $("#f15").addClass("tod_d");
    $("#f16").addClass("tod_d");
    $("#f17").addClass("tod_d");
    return false;

});

$(document).ready(function() {
    $("#before").click(function() {
        $("#wrap").animate({ opacity: ".4" });
        $("#wrap").animate({ opacity: "2" });
    });
    $("#current").click(function() {
        $("#wrap").animate({ opacity: ".4" });
        $("#wrap").animate({ opacity: "2" });
    });
    $("#dateOne").click(function() {
        $("#wrap").animate({ opacity: ".4" });
        $("#wrap").animate({ opacity: "2" });
    });

    $("#cal").click(function() {
        $("#calender").toggle();
    });

    document.getElementById('link').addEventListener('click', function() {
        window.location.reload(true);
    });
});

var l = document.getElementById('toronto');
var b = document.getElementById('band');
var today = new Date();
var h = today.getHours();
var hour = 'hours';
if (hour == 'hours') {
    document.getElementById('band').innerHTML = "hi";
}


var mousePosition;
var offset = [0, 0];
var div = document.getElementById('band');
var divi = document.getElementById('control');
var isDown = false;

div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
    ];
}, true);

div.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x: event.clientX

        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
    }
}, true)

var elem = document.getElementById('control');
var div = document.getElementById('band');
x = 0;
// div event mousedown 
div.addEventListener('mousemove', function(e) {
    // mouse state set to true 
    mousedown = true;
    // subtract offset 
    x = div.offsetLeft - e.clientX;
    y = div.offsetRight - e.clientX;
    //y = div.offsetTop - e.clientY;
}, true);

// div event mouseup 
// div.addEventListener('mouseup', function(e) {
//     // mouse state set to false 
//     mousedown = false;
// }, true);

// element mousemove to stop 
elem.addEventListener('mousemove', function(e) {
    // Is mouse pressed 
    if (mousedown) {
        // Now we calculate the difference upwards 
        div.style.left = e.clientX + x + 'px';
        div.style.right = e.clientX + y + 'px';
    }
}, true);

// document.getElementById('control').addEventListener('onmouseover', controlBand);