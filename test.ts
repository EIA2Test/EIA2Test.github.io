window.addEventListener("load", init);

function init(_event: Event): void {
    var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    var crc: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc);

    crc.fillStyle = "red";
    crc.fillRect(0, 0, canvas.width, canvas.height);
}