window.addEventListener("load", init);
function init(_event) {
    var canvas = document.getElementsByTagName("canvas")[0];
    var crc = canvas.getContext("2d");
    console.log(crc);
    crc.fillStyle = "red";
    crc.fillRect(0, 0, canvas.width, canvas.height);
}
//# sourceMappingURL=test.js.map