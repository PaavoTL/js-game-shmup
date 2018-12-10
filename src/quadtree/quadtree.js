import Rectangle from "./rectangle";

export default class QuadTree {
    constructor(boundary, capacity){
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.divs = [];
        this.divided = false;
    }

    insert(point){
        if (this.boundary.contains(point)){return false;}

        if (this.points.length < this.capacity && !this.divided){
            this.points.push(point);
            return true;
        } else {
            if (!this.divided){
                subdivide();
            }
            
            for (let div of this.divs){
                if(div.insert(point)){return true;}
            }
        }
    }

    subdivide(){
        let x = this.boundary.xPos;
        let y = this.boundary.yPos;
        let w = this.boundary.width;
        let h = this.boundary.height;

        let nw = new Rectangle(x,y,w/2,h/2);
        let ne = new Rectangle(x+w/2,y,w/2,h/2);
        let sw = new Rectangle(x,y+h/2,w/2,h/2);
        let se = new Rectangle(x+w/2,y+h/2,w/2,h/2);
        const cap = this.capacity+1;

        this.divs = [
            new QuadTree(nw, cap),
            new QuadTree(ne, cap),
            new QuadTree(sw, cap),
            new QuadTree(se, cap)];
        this.divided = true;

        for (let point of this.points){

        }
    }

    draw(ctx){
        
    }
} 