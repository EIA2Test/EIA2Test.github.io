window.addEventListener("load", initHeroku);
var xhr;
function initHeroku(_event) {
    xhr = new XMLHttpRequest();
    //xhr.open("GET", "https://eia2test.herokuapp.com");
    xhr.open("GET", "http://localhost:8080");
    xhr.addEventListener("readystatechange", onChange);
    xhr.send();
}
function onChange(_event) {
    if (xhr.readyState == xhr.DONE) {
        var out = document.getElementById("output");
        console.log(xhr.readyState, xhr.responseType, xhr.status, xhr.statusText, xhr.response);
        out.innerHTML = xhr.responseText;
    }
}
//# sourceMappingURL=callheroku.js.map