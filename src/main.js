import Engine from "./engine.js"
import Rectangle from "./quadtree/rectangle.js";
import GameObject from "./objects/gameobject.js";

let engine = new Engine();
let qTree = engine.qTree;

let testObject = new GameObject(100,100,0);
engine.addObject(testObject);
testObject.boundary = new Rectangle(testObject.xPos,testObject.yPos,100,100);