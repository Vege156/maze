class Wall{

    costructor(x, y, height, width){

      
      this.body = Bodies.rectangle(x,y,height,width);  
      this.width = height;
      this.height = width;


    }
    display(){

        rectMode(CENTER);
        fill("Black");
        rect(this.x, this.y, this.width, this.height);

    }


}