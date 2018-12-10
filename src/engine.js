export default class Engine {
    constructor(){
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";

        // Canvas setup
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        // Start the loop
        window.requestAnimationFrame(this.loop.bind(this));
    }

    loop(){
        window.requestAnimationFrame(this.loop.bind(this));
    }
}