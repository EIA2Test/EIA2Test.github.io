window.addEventListener("load", initHeroku);
var xhr: XMLHttpRequest;

function initHeroku(_event: Event): void {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://eia2test.herokuapp.com");
    //xhr.open("GET", "http://localhost:8080");
    xhr.addEventListener("readystatechange", onChange);
    xhr.send();
}

function onChange(_event: Event): void {
    console.log(xhr.response);
}