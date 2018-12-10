export default class Rectangle {
    constructor(xPos,yPos,width,height){
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
    }

    contains(point){
        return (point.xPos >= this.xPos &&
            point.xPos <= this.xPos + this.width &&
            point.yPos >= this.yPos &&
            point.yPos <= this.yPos + this.height);
    }

    intersects(range){
        return !(range.xPos > this.xPos + this.width ||
            range.xPos + range.width < this.xPos ||
            range.yPos > this.yPos + this.height ||
            range.yPos + range.height < this.yPos);
    }
}