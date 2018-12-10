export default class QuadTree {
    constructor(boundary, capacity){
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.divisions = [];
        this.divided = false;
    }

    insert(point){
        if (this.points.length > this.capacity){
            subdivide()
        }
    }

    subdivide(){
        let x = this.boundary.xPos;
        let y = this.boundary.yPos;
        let width = this.boundary.width;
    }
} 