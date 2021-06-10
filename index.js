// var light = document.querySelectorAll('.light');
// var light_counter = light.length;
// const light_time = setInterval(count, 1000);

// function count() {
//     var b = light_counter--;
//     for (var i = 0; i < b; i++) {
//         b[i].classList.add('focus');
//     }

//     if (light_counter > 1) {
//         clearInterval(light_time);
//     }
// }

var start = setTimeout(show, 2000);

function show() {
    var message = document.getElementById('gfit_1');
    message.style.display = 'block';
    var button = document.getElementById('button_1');
    button.style.display = 'block';


}

document.getElementById('button_1').onclick = function() {
    var message = document.getElementById('gfit_1');
    message.style.display = 'none';
    var button = document.getElementById('button_1');
    button.style.display = 'none';
    var a = document.getElementById('one_1');
    var counter = 10;
    const countinter = setInterval(count, 1000);

    function count() {
        var lines = document.getElementById("lines_1");
        var b = counter--;


        a.innerHTML = b + "'s" + "<p>wait for it</p>";


        if (counter < 1) {
            clearInterval(countinter);

            var video = document.createElement('video');
            video.setAttribute('src', 'music/sai.mp4');
            var add = document.getElementById('video_1');
            var measru = add.appendChild(video);
            measru.style.width = "100%";
            measru.style.height = "100%";

            video.play();

            a.innerHTML = "SURPRISE !...."; // var audio = new Audio('music/hp.mp3');
            // audio.play();

        }

    }
}
var mymess = setTimeout(mess, 30000);

function mess() {
    var wish = document.getElementById('last');

    wish.innerHTML = "ONCE AGAIN HAPPY BIRTHDAY TO YOU  STAY HAPPY AND GOD BLESS YOU";


}



// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("date_1").innerHTML = d.toLocaleTimeString();
// }
// var myvar = setInterval(mytimer, 1000);

// function mytimer() {
//     var d = new Date();

//     var hours = d.getHours();
//     var mintues = d.getMinutes();
//     var seconds = d.getSeconds();
//     document.getElementById('date_1').innerHTML = hours + ":" + mintues + ":" + seconds;

// }




// var today = new Date();
// var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getHours(), today.getMinutes(), today.getSeconds(), today.getDate() + 7);
// nextweek.

// document.getElementById('date_2').innerHTML = nextweek;



// var date = new Date();
// var myvar = setInterval(function() {
//     document.getElementById('date_1').innerHTML = date.toLocaleTimeString();
// }, 1000)