export default class Rectangle {
    constructor(xPos,yPos,width,height){
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
    }

    contains(point){
        return (point.x >= this.xPos &&
            point.x <= this.xPos + this.width &&
            point.y >= this.yPos &&
            point.y <= this.yPos + this.height);
    }

    intersects(range){
        return !(range.x > this.xPos + this.width ||
            range.x + range.w < this.xPos ||
            range.y > this.yPos + this.height ||
            range.y + range.h < this.yPos);
    }
}