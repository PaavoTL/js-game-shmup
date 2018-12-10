import QuadTree from "./quadtree/quadtree";
import Rectangle from "./quadtree/rectangle";
import Point from "./quadtree/point";
import GameObject from "./objects/gameobject";

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

    addObject(object){
        let point = new Point(object.xPos,object.yPos,object);
        this.qTree.insert(point);
        object.engine = this;
        object.qTree = this.qTree;

        this.objects.push(object);
    }

    makeObject(xPos,yPos,zIndex = 0,boundary){
        let obj = new GameObject(xPos,yPos,zIndex,boundary,this);
        let point = new Point(xPos,yPos,obj);
        this.qTree.insert(point);
        this.objects.push(obj);
    }

    draw(){
        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

        for(let obj of this.objects){
            obj.draw();
        }

        if (this.debug){
            for(let obj of this.objects){
                obj.show(this.ctx);
            }
            this.qTree.show(this.ctx);

            this.ctx.fillStyle = "green";
            this.font = "50px";
            this.ctx.fillText(1/this.dt,10, 10);
            this.ctx.fillText(this.objects.length, 10, 20);
        }
    }

    loop(){
        this.time = performance.now();
        this.dt = (this.time - this.lastTime) / 1000;
        this.lastTime = this.time;
        
        //collisions
        for(let obj of this.objects){
            obj.collisions()
        }

        //Updates
        for(let obj of this.objects){
            obj.update(this.dt);
        }
        //Draw
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    }
}