import QuadTree from "./quadtree/quadtree";
import Rectangle from "./quadtree/rectangle";

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

        // setup QuadTree
        this.boundary = new Rectangle(0,0,this.canvas.width,this.canvas.height);
        this.qTree = new QuadTree(this.boundary, 1);

        // Important variables
        this.objects = []; 

        // debug setup
        this.debug = true;

        // Start the loop
        window.requestAnimationFrame(this.loop.bind(this));
    }

    draw(){
        if (debug){
            this.qTree.draw(this.ctx)
        }
    }

    loop(){
        window.requestAnimationFrame(this.loop.bind(this));
    }
}