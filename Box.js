class Box{

    constructor(x, y, width, height){
        var options ={
            restitution: 0.8,
          //  density : 1.0
        };
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.box);

    }

    display(){
        var pos = this.box.position;
        push();
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}