export default class GameObject {
    constructor(xPos,yPos,zIndex,boundary){
        this.xPos = xPos;
        this.yPos = yPos;
        this.zIndex = zIndex;
        this.boundary = boundary;

        this.engine
        this.qTree

        this.children = [];
        this.colisions = [];
    }

    addChild(object){
        this.children.push(object);
    }

    collisions(){
        if (this.boundary){
            let others = this.qTree.query(this.boundary).userdata;
        }

        for (let child of this.children){
            child.collisions();
        }
    }

    update(dt){
        
    }

    draw(){

    }

    show(ctx){
        ctx.fillStyle = "green"
        if(this.boundary){
            ctx.fillRect(this.boundary.xPos,this.boundary.yPos,this.boundary.width,this.boundary.height);
        }
        
        for(let child of this.children){
            child.show(ctx);
        }
    }
}