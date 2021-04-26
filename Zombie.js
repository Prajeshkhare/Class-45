class Zombie{
    constructor(x,y){
        var option = {
        restiution: 0.5,
        denstiy: 1,
        friction: 0.5
        }
        this.body = Bodies.rectangle(x,y,50,100,option);
        this.width = 50;
        this.height = 100;
        this.image = loadImage("Js/zombies.png");
        World.add(world,this.body);


    }


    display () {
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}