window.addEventListener("load", initHeroku);
var xhr;
function initHeroku(_event) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://eia2test.herokuapp.com");
    //xhr.open("GET", "http://localhost:8080");
    xhr.addEventListener("readystatechange", onChange);
    xhr.send();
}
function onChange(_event) {
    console.log(xhr.response);
}
//# sourceMappingURL=callheroku.js.map