window.addEventListener("load", initHeroku);
var xhr: XMLHttpRequest;

function initHeroku(_event: Event): void {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dashboard.heroku.com/apps/eia2test");
//    xhr.setRequestHeader(
    xhr.addEventListener("readystatechange", onChange);
    xhr.send();
}

function onChange(_event: Event): void {
    console.log(xhr.response);
}