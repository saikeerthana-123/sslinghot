class Pig extends BaseClass {
  finalScore = 0; 
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/blue.png");
    this.Visibility = 255;
  }
  score(){
    if(this.Visibility<0 && this.Visibility>-1005){
      finalScore++;
    }
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 1){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visibility - 5;
     tint(255,this.Visibility);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};