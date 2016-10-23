window.onload = function () {
    var jiandao = document.getElementById("jiandao");
    var shitou = document.getElementById("shitou");
    var bu = document.getElementById("bu");
    var user = document.getElementById("user");
    var result = document.getElementById("result");
    var computer = document.getElementById("computer");
    var num;
    jiandao.onclick = function () {
        user.setAttribute("src", "img/jiandao.jpg");
        num = Math.random();
        if (num < 0.33) {
            computer.setAttribute("src", "img/jiandao.jpg");
            result.innerHTML = "平手";

        } else if (num < 0.67) {
            computer.setAttribute("src", "img/shitou.jpg");
            result.innerHTML = "你输了";
        } else {
            computer.setAttribute("src", "img/bu.jpg");
            result.innerHTML = "你赢了";
        }
    };
    shitou.onclick = function () {
        user.setAttribute("src", "img/shitou.jpg");
        num = Math.random();
        if (num < 0.33) {
            computer.setAttribute("src", "img/jiandao.jpg");
            result.innerHTML = "你赢了";
        } else if (num < 0.67) {
            computer.setAttribute("src", "img/shitou.jpg");
            result.innerHTML = "平手";
        } else {
            computer.setAttribute("src", "img/bu.jpg");
            result.innerHTML = "你输了";
        }
    };
    bu.onclick = function () {
        user.setAttribute("src", "img/bu.jpg");
        num = Math.random();
        if (num < 0.33) {
            computer.setAttribute("src", "img/jiandao.jpg");
            result.innerHTML = "你输了";
        } else if (num < 0.67) {
            computer.setAttribute("src", "img/shitou.jpg");
            result.innerHTML = "你赢了";
        } else {
            computer.setAttribute("src", "img/bu.jpg");
            result.innerHTML = "平手";
        }
    };
};