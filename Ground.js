class Ground {
    constructor(x,y,width,height, static1, bcolor,image1) {
      var options = {
          isStatic: static1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = bcolor
      if(image1)
      this.image = image1;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.image)
      {
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
      }
      else{
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
      }
    }
  };