import QuadTree from "./quadtree/quadtree";
import Rectangle from "./quadtree/rectangle";
import Point from "./quadtree/point";

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
        console.log(this.qTree);

        // Start the loop
        window.requestAnimationFrame(this.loop.bind(this));
    }

    draw(){
        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

        for(let obj of this.objects){
            obj.draw();
        }

        if (this.debug){
            this.qTree.show(this.ctx);
        }
    }

    loop(){
        //Updates
        for(let obj of this.objects){
            obj.update();
        }
        //Draw
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    }
}