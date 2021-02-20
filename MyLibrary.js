function isTouching(sprite1,sprite2){
    if(sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2&&
      sprite2.x-sprite1.x<=sprite1.width/2+sprite2.width/2&&
      sprite2.y-sprite1.y<=sprite1.height/2+sprite2.height/2&&
      sprite1.y-sprite2.y<=sprite1.height/2+sprite2.height/2){
    
      //movingRect.shapeColor="green";
      //fixedRect.shapeColor="green";
      return true;
    }else{
      //movingRect.shapeColor="red";
      //fixedRect.shapeColor="red";
      return false;
    }
  
  }
  
  function bounceOff(sprite,target){
    if(Math.abs(sprite.x-target.x)<=sprite.width/2+target.width/2){
      sprite.velocityX=-1*sprite.velocityX;
    }
  
    if(Math.abs(sprite.y-target.y)<=sprite.height/2+target.height/2){
      sprite.velocityY=-1*sprite.velocityY;
    }
  }

  function average(num1,num2,num3){
    
    var avg=num1+num2+num3/3

    return avg
  }
