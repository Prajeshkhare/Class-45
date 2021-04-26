const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var graveyardimg;
var zombie;
var ground;

function preload(){
	graveyardimg=loadImage("JS/Graveyard.jpg")


}

function setup() {
	createCanvas(displayWidth-20, displayHeight-100);
	

	engine = Engine.create();
	world = engine.world;

	zombie = new Zombie(displayWidth/2,displayHeight/2);
	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(graveyardimg);
  zombie.display();

 

}



