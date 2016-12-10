window.addEventListener("load", initHeroku);
var xhr;
function initHeroku(_event) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dashboard.heroku.com/apps/eia2test");
    //    xhr.setRequestHeader(
    xhr.addEventListener("readystatechange", onChange);
    xhr.send();
}
function onChange(_event) {
    console.log(xhr.response);
}
//# sourceMappingURL=callheroku.js.map