export default class Point {
    constructor(xPos,yPos,userData){
        this.xPos = xPos;
        this.yPos = yPos;
        this.userData = userData;
    }

    update(){
        this.xPos = this.userdata.xPos;
        this.yPos = this.userdata.yPos;
    }
}