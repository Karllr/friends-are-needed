function Block(x,y,type1,type2,type3){
  this.x=x;
  this.y=y;
  this.type1=type1;
  this.type2=type2;
  this.type3=type3;
  this.Sz=50;
  this.BlocktoLeft=false;
  this.BlocktoRight=false;
  this.BlockAbove=false;
  this.BlockBelow=false;
  this.type5and6trans=0;
  this.speedtrans1=255;
  this.speedtrans1s=-5;
  this.speedtrans2=255;
  this.speedtrans2s=-5;
  this.speedtrans3=255;
  this.speedtrans3s=-5;
  this.xspeed=random(5,5);
  this.backx=-this.xspeed;
  this.yspeed=random(5,5);
  this.backy=-this.yspeed;
  this.collideWithSignificantOther=function(xv,yv,blocks){
    for(var i=0;i<blocks.length;i++){
      var b=blocks[i];
      if(this.y+this.Sz > b.y &&
        this.y        < b.y+b.Sz &&
        this.x+this.Sz > b.x &&
        this.x        < b.x+b.Sz){
          if(yv>0) {
            this.yspeed=this.backy;
          }
          // TOP
          if(yv<0) {
            this.yspeed=-this.backy;
          }
          // RIGHT
          if(xv>0) {
            this.xspeed=this.backx;
          }
            // LEFT
          if(xv<0) {
            this.xspeed=-this.backx;
          }
        }
    }
  };
  this.updateTextures=function(blocks){   
        for(var i=0;i<blocks.length;i++){
          var b=blocks[i];
          if(this.type1===b.type1){
          if(dist(this.x,this.y,b.x,b.y)===50){
          if(this.x-b.x===-50){
            this.BlocktoRight=true;
          }
          if(this.x-b.x===50){
            this.BlocktoLeft=true;
          }
          if(this.y-b.y===50){
            this.BlockAbove=true;
          }
          if(this.y-b.y===-50){
            this.BlockBelow=true;
          }
        }
          if(this.BlocktoRight&&!this.BlocktoLeft&&!this.BlockAbove&&this.BlockBelow){
            this.type2=2;
            this.type3=1;
          }
          if(!this.BlocktoRight&&this.BlocktoLeft&&!this.BlockAbove&&this.BlockBelow){
            this.type2=2;
            this.type3=2;
          }
          if(this.BlocktoRight&&!this.BlocktoLeft&&this.BlockAbove&&!this.BlockBelow){
            this.type2=2;
            this.type3=4;
          }
          if(!this.BlocktoRight&&this.BlocktoLeft&&this.BlockAbove&&!this.BlockBelow){
            this.type2=2;
            this.type3=3;
          }
          if(!this.BlocktoRight&&!this.BlocktoLeft&&!this.BlockAbove&&this.BlockBelow){
            this.type2=3;
            this.type3=1;
          }
          if(!this.BlocktoRight&&this.BlocktoLeft&&!this.BlockAbove&&!this.BlockBelow){
            this.type2=3;
            this.type3=2;
          }
          if(!this.BlocktoRight&&!this.BlocktoLeft&&this.BlockAbove&&!this.BlockBelow){
            this.type2=3;
            this.type3=3;
          }
          if(this.BlocktoRight&&!this.BlocktoLeft&&!this.BlockAbove&&!this.BlockBelow){
            this.type2=3;
            this.type3=4;
          }
          if(!this.BlocktoRight&&!this.BlocktoLeft&&this.BlockAbove&&this.BlockBelow){
            this.type2=4;
            this.type3=1;
          }
          if(this.BlocktoRight&&this.BlocktoLeft&&!this.BlockAbove&&!this.BlockBelow){
            this.type2=4;
            this.type3=2;
          }
          if(this.BlocktoRight&&this.BlocktoLeft&&!this.BlockAbove&&this.BlockBelow){
            this.type2=5;
            this.type3=1;
          }
          if(!this.BlocktoRight&&this.BlocktoLeft&&this.BlockAbove&&this.BlockBelow){
            this.type2=5;
            this.type3=2;
          }
          if(this.BlocktoRight&&this.BlocktoLeft&&this.BlockAbove&&!this.BlockBelow){
            this.type2=5;
            this.type3=3;
          }
          if(this.BlocktoRight&&!this.BlocktoLeft&&this.BlockAbove&&this.BlockBelow){
            this.type2=5;
            this.type3=4;
          }
          if(this.BlocktoRight&&this.BlocktoLeft&&this.BlockAbove&&this.BlockBelow){
            this.type2=6;
          }
        }
      }
    
  
  };
  this.animate=function(){
    switch(this.type1){
      case 5:
      if(this.type5and6trans<0){
        this.type5and6trans=100;
      }
      this.type5and6trans-=5;
      break;
      case 6:
        if(this.type5and6trans<0){
        this.type5and6trans=100;
      }
      this.type5and6trans-=5;
      break;
      case 9:
        this.speedtrans1+=this.speedtrans1s;
        if(this.speedtrans1<0){
          this.speedtrans1s=5;
        }
        if(this.speedtrans1>255){
          this.speedtrans1s=-5;
        }
        this.speedtrans2+=this.speedtrans2s;
        if(this.speedtrans2<0){
          this.speedtrans2s=5;
        }
        if(this.speedtrans2>215){
          this.speedtrans2s=-5;
        }
        this.speedtrans3+=this.speedtrans3s;
        if(this.speedtrans3<0){
          this.speedtrans3s=5;
        }
        if(this.speedtrans3>185){
          this.speedtrans3s=-5;
        }
      break;
      case 10:
        this.speedtrans1+=this.speedtrans1s;
        if(this.speedtrans1<0){
          this.speedtrans1s=5;
        }
        if(this.speedtrans1>255){
          this.speedtrans1s=-5;
        }
        this.speedtrans2+=this.speedtrans2s;
        if(this.speedtrans2<0){
          this.speedtrans2s=5;
        }
        if(this.speedtrans2>215){
          this.speedtrans2s=-5;
        }
        this.speedtrans3+=this.speedtrans3s;
        if(this.speedtrans3<0){
          this.speedtrans3s=5;
        }
        if(this.speedtrans3>185){
          this.speedtrans3s=-5;
        }
      break;
      case 11:
        this.speedtrans1+=this.speedtrans1s;
        if(this.speedtrans1<0){
          this.speedtrans1s=5;
        }
        if(this.speedtrans1>255){
          this.speedtrans1s=-5;
        }
        this.speedtrans2+=this.speedtrans2s;
        if(this.speedtrans2<0){
          this.speedtrans2s=5;
        }
        if(this.speedtrans2>215){
          this.speedtrans2s=-5;
        }
        this.speedtrans3+=this.speedtrans3s;
        if(this.speedtrans3<0){
          this.speedtrans3s=5;
        }
        if(this.speedtrans3>185){
          this.speedtrans3s=-5;
        }
      break;
    }
  };
  this.show=function(){
    switch(this.type1){
       case 1:
        //Normal Block
         switch(this.type2){
           case 1:
             //Self Block
             noFill();
             stroke(255);
             strokeWeight(2);
             rect(this.x,this.y,this.Sz,this.Sz);
             rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
             rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
             fill(255);
             rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
           break;
           case 2:
             //Corner Block
             noFill();
             stroke(255);
             strokeWeight(2);
             switch(this.type3){
               case 1:
                 for(var i=0;i<15;i+=5){
                   line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
                   line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
                 }
                  fill(255);
                rect(this.x+15,this.y+15,35,35);
               break;
               case 2:
                 for(var i=0;i<15;i+=5){
                   line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
                   line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
                 }
                 fill(255);
                 rect(this.x,this.y+15,35,35);
               break;
               case 3:
                 for(var i=0;i<15;i+=5){
                   line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
                   line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
                 }
                 fill(255);
                 rect(this.x,this.y,35,35);
               break;
               case 4:
                 for(var i=0;i<15;i+=5){
                   line(this.x+i,this.y,this.x+i,this.y+this.Sz-i);
                   line(this.x+i,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
                 }
                 fill(255);
                 rect(this.x+15,this.y,35,35);
               break;
             }
           break;
           case 3:
             //Top of Pillar Block
             noFill();
             stroke(255);
             strokeWeight(2);
             switch(this.type3){
               case 1:
                 for(var i=0;i<15;i+=5){
                   line(this.x+i,this.y+i,this.x+this.Sz-i,this.y+i);
                   line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
                   line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
                 }
                 fill(255);
                 rect(this.x+15,this.y+this.Sz-35,20,35);
               break;
               case 2:
                   for(var i=0;i<15;i+=5){
                     line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
                     line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz-i);
                     line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
                  }
                  fill(255);
                  rect(this.x,this.y+15,35,20);
               break;
               case 3:
                 for(var i=0;i<15;i+=5){
                   line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
                   line(this.x+this.Sz-i,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
                   line(this.x+i,this.y+this.Sz-i,this.x+i,this.y);
                 }
                 fill(255);
                 rect(this.x+15,this.y,20,35);
               break;
               case 4:
                 for(var i=0;i<15;i+=5){
                   line(this.x+this.Sz,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
                   line(this.x+i,this.y+this.Sz-i,this.x+i,this.y+i);
                   line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
                 }
                 fill(255);
                 rect(this.x+15,this.y+15,35,20);
               break;
             }
           break;
           case 4:
             //Part of Pillar Block
             noFill();
             stroke(255);
             strokeWeight(2);
             switch(this.type3){
               case 1:
                 for(var i=0;i<15;i+=5){
                   line(this.x+i,this.y,this.x+i,this.y+this.Sz);
                   line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
                 }
               fill(255);
               rect(this.x+15,this.y,20,50);
               break;
               case 2:
                 for(var i=0;i<15;i+=5){
                   line(this.x,this.y+i,this.x+this.Sz,this.y+i);
                   line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
                 }
                 fill(255);
                 rect(this.x,this.y+15,50,20);
               break;
             }
           break;
           case 5:
             noFill();
             stroke(255);
             strokeWeight(2);
             switch(this.type3){
               case 1:
                 for(var i=0;i<15;i+=5){
                   line(this.x,this.y+i,this.x+this.Sz,this.y+i);
                 }
                 fill(255);
                 rect(this.x,this.y+15,this.Sz,35);
                 //noFill();
                 //rect(this.x,this.y,this.Sz,this.Sz);
               break;
               case 2:
                 for(var i=0;i<15;i+=5){
                   line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
                 }
                 fill(255);
                 rect(this.x,this.y,35,this.Sz);
               break;
               case 3:
                 for(var i=0;i<15;i+=5){
                   line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
                 }
                 fill(255);
                 rect(this.x,this.y,this.Sz,35);
               break;
               case 4:
                 for(var i=0;i<15;i+=5){
                   line(this.x+i,this.y,this.x+i,this.y+this.Sz);
                 }
                 fill(255);
                 rect(this.x+15,this.y,35,this.Sz);
                break;
             }
           break;
           case 6:
             fill(255);
             rect(this.x,this.y,this.Sz,this.Sz);
           break;
         }
       break;
      case 2:
        //Portal to next level
        noStroke();
        fill(250,224,223);
        rect(this.x,this.y,this.Sz,this.Sz);  
      break;
      case 3:
        //Death block
        switch(this.type2){
          case 1:
            //Self Block
            noFill();
            stroke(235,65,95);
            strokeWeight(2);
            rect(this.x,this.y,this.Sz,this.Sz);
            rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
            rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
            fill(235,65,95);
            rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
          break;
          case 2:
            //Corner Block
            noFill();
            stroke(235,65,95);
            strokeWeight(2);
            switch(this.type3){
              case 1:
                for(var i=0;i<15;i+=5){
                  line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
                  line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
                }
                for(var i=40;i<=50;i+=5){
                  line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
                  line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
                }
                fill(235,65,95);;
                beginShape();
                vertex(this.x+15,this.y+15);
                vertex(this.x+this.Sz,this.y+15);
                vertex(this.x+this.Sz,this.y+this.Sz-15);
                vertex(this.x+15+this.Sz-30,this.y+15+this.Sz-30);
                vertex(this.x+15+this.Sz-30,this.y+15+this.Sz-15);
                vertex(this.x+15,this.y+15+this.Sz-15);
                endShape(CLOSE);
              break;
              case 2:
                for(var i=0;i<15;i+=5){
                  line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
                  line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
                }
                for(var i=40;i<=50;i+=5){
                  line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
                  line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
                }
                fill(235,65,95);;
                beginShape();
                vertex(this.x+35,this.y+15);
                vertex(this.x+35,this.y+15+this.Sz-15);
                vertex(this.x+35-this.Sz+30,this.y+this.Sz);
                vertex(this.x+35-this.Sz+30,this.y+this.Sz-15);
                vertex(this.x+35-this.Sz+15,this.y+15+this.Sz-30);
                vertex(this.x+35-this.Sz+15,this.y+this.Sz-35);
                endShape(CLOSE);
              break;
              case 3:
                for(var i=0;i<15;i+=5){
                  line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
                  line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
                }
                for(var i=40;i<=50;i+=5){
                  line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
                  line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
                }
                fill(235,65,95);;
                beginShape();
                vertex(this.x+35,this.y);
                vertex(this.x+35,this.y+this.Sz-15);
                vertex(this.x,this.y+this.Sz-15);
                vertex(this.x,this.y+15);
                vertex(this.x+15,this.y+15);
                vertex(this.x+15,this.y);
                endShape(CLOSE);
              break;
              case 4:
                for(var i=0;i<15;i+=5){
                  line(this.x+i,this.y,this.x+i,this.y+this.Sz-i);
                  line(this.x+i,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
                }
                for(var i=40;i<=50;i+=5){
                  line(this.x+i,this.y,this.x+i,this.y+this.Sz-i);
                  line(this.x+i,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
                }
                fill(235,65,95);;
                beginShape();
                vertex(this.x+35,this.y);
                vertex(this.x+15,this.y);
                vertex(this.x+15,this.y+35);
                vertex(this.x+this.Sz,this.y+35);
                vertex(this.x+this.Sz,this.y+15);
                vertex(this.x+35,this.y+15);
                endShape(CLOSE);
              break;
            }
          break;
          case 3:
            //Top of Pillar Block
            noFill();
            stroke(235,65,95);
            strokeWeight(2);
            switch(this.type3){
              case 1:
                for(var i=0;i<15;i+=5){
                  line(this.x+i,this.y+i,this.x+this.Sz-i,this.y+i);
                  line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
                  line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
                }
                fill(235,65,95);;
                rect(this.x+15,this.y+this.Sz-35,20,35);
              break;
              case 2:
                  for(var i=0;i<15;i+=5){
                    line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
                    line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz-i);
                    line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
                 }
                 fill(235,65,95);;
                 rect(this.x,this.y+15,35,20);
              break;
              case 3:
                for(var i=0;i<15;i+=5){
                  line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
                  line(this.x+this.Sz-i,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
                  line(this.x+i,this.y+this.Sz-i,this.x+i,this.y);
                }
                fill(235,65,95);;
                rect(this.x+15,this.y,20,35);
              break;
              case 4:
                for(var i=0;i<15;i+=5){
                  line(this.x+this.Sz,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
                  line(this.x+i,this.y+this.Sz-i,this.x+i,this.y+i);
                  line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
                }
                fill(235,65,95);;
                rect(this.x+15,this.y+15,35,20);
              break;
            }
          break;
          case 4:
            //Part of Pillar Block
            noFill();
            stroke(235,65,95);
            strokeWeight(2);
            switch(this.type3){
              case 1:
                for(var i=0;i<15;i+=5){
                  line(this.x+i,this.y,this.x+i,this.y+this.Sz);
                  line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
                }
              fill(235,65,95);;
              rect(this.x+15,this.y,20,50);
              break;
              case 2:
                for(var i=0;i<15;i+=5){
                  line(this.x,this.y+i,this.x+this.Sz,this.y+i);
                  line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
                }
                fill(235,65,95);;
                rect(this.x,this.y+15,50,20);
              break;
            }
          break;
          case 5:
            noFill();
            stroke(235,65,95);
            strokeWeight(2);
            switch(this.type3){
              case 1:
                for(var i=0;i<15;i+=5){
                  line(this.x,this.y+i,this.x+this.Sz,this.y+i);
                }
                fill(235,65,95);;
                 rect(this.x,this.y+15,50,20);
                 rect(this.x+15,this.y+15,20,35);
                for(var i=40;i<=50;i+=5){
                  line(this.x+this.Sz,this.y+i,this.x+i,this.y+i);
                  line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
                }
                line(this.x,this.y+40,this.x+10,this.y+40);
                line(this.x+10,this.y+40,this.x+10,this.y+this.Sz);
                line(this.x,this.y+45,this.x+5,this.y+45);
                line(this.x+5,this.y+45,this.x+5,this.y+this.Sz);
                line(this.x,this.y+50,this.x,this.y+50);
                line(this.x,this.y+50,this.x,this.y+this.Sz);
                //noFill();
                //rect(this.x,this.y,this.Sz,this.Sz);
              break;
              case 2:
                for(var i=0;i<15;i+=5){
                  line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
                }
                line(this.x+10,this.y,this.x+10,this.y+10);
                line(this.x+10,this.y+10,this.x,this.y+10);
                line(this.x+5,this.y,this.x+5,this.y+5);
                line(this.x+5,this.y+5,this.x,this.y+5);
                line(this.x,this.y,this.x,this.y);
                line(this.x,this.y+this.Sz-10,this.x+10,this.y+this.Sz-10);
                line(this.x+10,this.y+this.Sz-10,this.x+10,this.y+this.Sz);
                line(this.x,this.y+this.Sz-5,this.x+5,this.y+this.Sz-5);
                line(this.x+5,this.y+this.Sz-5,this.x+5,this.y+this.Sz);
                line(this.x,this.y+this.Sz,this.x,this.y+this.Sz);
                line(this.x,this.y+this.Sz,this.x,this.y+this.Sz);
                fill(235,65,95);;
                rect(this.x+15,this.y,20,50);
                rect(this.x+35,this.y+15,-35,20);
              break;
              case 3:
                for(var i=0;i<15;i+=5){
                  line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
                }
                fill(235,65,95);;
                rect(this.x,this.y+15,50,20);
                rect(this.x+15,this.y,20,20);
                line(this.x,this.y+10,this.x+10,this.y+10);
                line(this.x+10,this.y+10,this.x+10,this.y);
                line(this.x,this.y+5,this.x+5,this.y+5);
                line(this.x+5,this.y+5,this.x+5,this.y);
                line(this.x,this.y,this.x,this.y);
                line(this.x,this.y,this.x,this.y);
                
                line(this.x+this.Sz,this.y+10,this.x+this.Sz-10,this.y+10);
                line(this.x+this.Sz-10,this.y+10,this.x+this.Sz-10,this.y);
                line(this.x+this.Sz,this.y+5,this.x+this.Sz-5,this.y+5);
                line(this.x+this.Sz-5,this.y+5,this.x+this.Sz-5,this.y);
                
              break;
              case 4:
                for(var i=0;i<15;i+=5){
                  line(this.x+i,this.y,this.x+i,this.y+this.Sz);
                }
                fill(235,65,95);;
                rect(this.x+15,this.y,20,50);
                rect(this.x+15,this.y+15,35,20);
                line(this.x+40,this.y,this.x+40,this.y+10);
                line(this.x+40,this.y+10,this.x+this.Sz,this.y+10);
                line(this.x+45,this.y,this.x+45,this.y+5);
                line(this.x+45,this.y+5,this.x+this.Sz,this.y+5);
                line(this.x+50,this.y,this.x+50,this.y);
                line(this.x+50,this.y,this.x+this.Sz,this.y);
                line(this.x+40,this.y+this.Sz,this.x+40,this.y+40);
                line(this.x+40,this.y+40,this.x+this.Sz,this.y+40);
                line(this.x+45,this.y+this.Sz,this.x+45,this.y+45);
                line(this.x+45,this.y+45,this.x+this.Sz,this.y+45);
                line(this.x+50,this.y+this.Sz,this.x+50,this.y+50);
                line(this.x+50,this.y+50,this.x+this.Sz,this.y+50);
              break;
            }
          break;
          case 6:
            line(this.x+40,this.y+this.Sz,this.x+40,this.y+40);
            line(this.x+40,this.y+40,this.x+this.Sz,this.y+40);
            line(this.x+45,this.y+this.Sz,this.x+45,this.y+45);
            line(this.x+45,this.y+45,this.x+this.Sz,this.y+45);
            line(this.x+50,this.y+this.Sz,this.x+50,this.y+50);
            line(this.x+50,this.y+50,this.x+this.Sz,this.y+50);

            line(this.x+40,this.y,this.x+40,this.y+10);
            line(this.x+40,this.y+10,this.x+this.Sz,this.y+10);
            line(this.x+45,this.y,this.x+45,this.y+5);
            line(this.x+45,this.y+5,this.x+this.Sz,this.y+5);
            line(this.x+50,this.y,this.x+50,this.y);
            line(this.x+50,this.y,this.x+this.Sz,this.y);

            line(this.x+10,this.y,this.x+10,this.y+10);
            line(this.x+10,this.y+10,this.x,this.y+10);
            line(this.x+5,this.y,this.x+5,this.y+5);
            line(this.x+5,this.y+5,this.x,this.y+5);
            line(this.x,this.y,this.x,this.y);

            line(this.x,this.y+this.Sz-10,this.x+10,this.y+this.Sz-10);
            line(this.x+10,this.y+this.Sz-10,this.x+10,this.y+this.Sz);
            line(this.x,this.y+this.Sz-5,this.x+5,this.y+this.Sz-5);
            line(this.x+5,this.y+this.Sz-5,this.x+5,this.y+this.Sz);
            line(this.x,this.y+this.Sz,this.x,this.y+this.Sz);
            line(this.x,this.y+this.Sz,this.x,this.y+this.Sz);
            
            fill(235,65,95);;
            rect(this.x+15,this.y,20,50);
            rect(this.x,this.y+15,50,20);
          break;
        }
      break;
      case 4:
        //Trampoline
        noFill();
        stroke(241, 247, 181);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz);
        rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
        rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
        line(this.x+15,this.y+this.Sz/2,this.x+this.Sz/2,this.y+15);
        line(this.x+this.Sz/2,this.y+15,this.x+35,this.y+this.Sz/2);
      break;
      case 5:
      switch(this.type2){
  case 1:
    //Self Block
    noFill();
    stroke(255,89,123);
    strokeWeight(2);
    rect(this.x,this.y,this.Sz,this.Sz);
    rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
    rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
    fill(255,89,123);
    rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
    fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
  break;
  case 2:
    //Corner Block
    noFill();
    stroke(255,89,123);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
          line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
        }
         fill(255,89,123);
       rect(this.x+15,this.y+15,35,35);
       fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 2:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
          line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
        }
        fill(255,89,123);
        rect(this.x,this.y+15,35,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 3:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
          line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
        }
        fill(255,89,123);
        rect(this.x,this.y,35,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 4:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y,this.x+i,this.y+this.Sz-i);
          line(this.x+i,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
        }
        fill(255,89,123);
        rect(this.x+15,this.y,35,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
    }
  break;
  case 3:
    //Top of Pillar Block
    noFill();
    stroke(255,89,123);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y+i,this.x+this.Sz-i,this.y+i);
          line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
          line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
        }
        fill(255,89,123);
        rect(this.x+15,this.y+this.Sz-35,20,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 2:
          for(var i=0;i<15;i+=5){
            line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
            line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz-i);
            line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
         }
         fill(255,89,123);
         rect(this.x,this.y+15,35,20);
         fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 3:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
          line(this.x+this.Sz-i,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
          line(this.x+i,this.y+this.Sz-i,this.x+i,this.y);
        }
        fill(255,89,123);
        rect(this.x+15,this.y,20,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 4:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
          line(this.x+i,this.y+this.Sz-i,this.x+i,this.y+i);
          line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
        }
        fill(255,89,123);
        rect(this.x+15,this.y+15,35,20);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
    }
  break;
  case 4:
    //Part of Pillar Block
    noFill();
    stroke(255,89,123);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y,this.x+i,this.y+this.Sz);
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
        }
      fill(255,89,123);
      rect(this.x+15,this.y,20,50);
      fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 2:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+i,this.x+this.Sz,this.y+i);
          line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
        }
        fill(255,89,123);
        rect(this.x,this.y+15,50,20);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
    }
  break;
  case 5:
    noFill();
    stroke(255,89,123);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+i,this.x+this.Sz,this.y+i);
        }
        fill(255,89,123);
        rect(this.x,this.y+15,this.Sz,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
        //noFill();
        //rect(this.x,this.y,this.Sz,this.Sz);
      break;
      case 2:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
        }
        fill(255,89,123);
        rect(this.x,this.y,35,this.Sz);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 3:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
        }
        fill(255,89,123);
        rect(this.x,this.y,this.Sz,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 4:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y,this.x+i,this.y+this.Sz);
        }
        fill(255,89,123);
        rect(this.x+15,this.y,35,this.Sz);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
       break;
    }
  break;
  case 6:
    fill(255,89,123);
    rect(this.x,this.y,this.Sz,this.Sz);
    fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
  break;
      }
      break;
      case 6:
      switch(this.type2){
  case 1:
    //Self Block
    noFill();
    stroke(100,92,187);
    strokeWeight(2);
    rect(this.x,this.y,this.Sz,this.Sz);
    rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
    rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
    fill(100,92,187);
    rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
    fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
  break;
  case 2:
    //Corner Block
    noFill();
    stroke(100,92,187);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
          line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
        }
         fill(100,92,187);
       rect(this.x+15,this.y+15,35,35);
       fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 2:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
          line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
        }
        fill(100,92,187);
        rect(this.x,this.y+15,35,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 3:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
          line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
        }
        fill(100,92,187);
        rect(this.x,this.y,35,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 4:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y,this.x+i,this.y+this.Sz-i);
          line(this.x+i,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
        }
        fill(100,92,187);
        rect(this.x+15,this.y,35,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
    }
  break;
  case 3:
    //Top of Pillar Block
    noFill();
    stroke(100,92,187);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y+i,this.x+this.Sz-i,this.y+i);
          line(this.x+i,this.y+i,this.x+i,this.y+this.Sz);
          line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz);
        }
        fill(100,92,187);
        rect(this.x+15,this.y+this.Sz-35,20,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 2:
          for(var i=0;i<15;i+=5){
            line(this.x,this.y+i,this.x+this.Sz-i,this.y+i);
            line(this.x+this.Sz-i,this.y+i,this.x+this.Sz-i,this.y+this.Sz-i);
            line(this.x+this.Sz-i,this.y+this.Sz-i,this.x,this.y+this.Sz-i);
         }
         fill(100,92,187);
         rect(this.x,this.y+15,35,20);
         fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 3:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz-i);
          line(this.x+this.Sz-i,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
          line(this.x+i,this.y+this.Sz-i,this.x+i,this.y);
        }
        fill(100,92,187);
        rect(this.x+15,this.y,20,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 4:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz,this.y+this.Sz-i,this.x+i,this.y+this.Sz-i);
          line(this.x+i,this.y+this.Sz-i,this.x+i,this.y+i);
          line(this.x+i,this.y+i,this.x+this.Sz,this.y+i);
        }
        fill(100,92,187);
        rect(this.x+15,this.y+15,35,20);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
    }
  break;
  case 4:
    //Part of Pillar Block
    noFill();
    stroke(100,92,187);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y,this.x+i,this.y+this.Sz);
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
        }
      fill(100,92,187);
      rect(this.x+15,this.y,20,50);
      fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 2:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+i,this.x+this.Sz,this.y+i);
          line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
        }
        fill(100,92,187);
        rect(this.x,this.y+15,50,20);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
    }
  break;
  case 5:
    noFill();
    stroke(100,92,187);
    strokeWeight(2);
    switch(this.type3){
      case 1:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+i,this.x+this.Sz,this.y+i);
        }
        fill(100,92,187);
        rect(this.x,this.y+15,this.Sz,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
        //noFill();
        //rect(this.x,this.y,this.Sz,this.Sz);
      break;
      case 2:
        for(var i=0;i<15;i+=5){
          line(this.x+this.Sz-i,this.y,this.x+this.Sz-i,this.y+this.Sz);
        }
        fill(100,92,187);
        rect(this.x,this.y,35,this.Sz);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 3:
        for(var i=0;i<15;i+=5){
          line(this.x,this.y+this.Sz-i,this.x+this.Sz,this.y+this.Sz-i);
        }
        fill(100,92,187);
        rect(this.x,this.y,this.Sz,35);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
      break;
      case 4:
        for(var i=0;i<15;i+=5){
          line(this.x+i,this.y,this.x+i,this.y+this.Sz);
        }
        fill(100,92,187);
        rect(this.x+15,this.y,35,this.Sz);
        fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
       break;
    }
  break;
  case 6:
    fill(100,92,187);
    rect(this.x,this.y,this.Sz,this.Sz);
    fill(255,255,255,this.type5and6trans);
   rect(this.x+15,this.y+15,this.Sz-30,this.Sz-30);
  break;
      }
      break;
      case 7:
        noFill();
        stroke(255,89,123);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz);
        rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
        rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
        stroke(0);
        line(this.x+15,this.y+this.Sz/2,this.x+this.Sz/2,this.y+15);
        line(this.x+this.Sz/2,this.y+15,this.x+35,this.y+this.Sz/2);
        
      break;
      case 8:
        noFill();
        strokeWeight(2);
        stroke(100,92,187);
        rect(this.x,this.y,this.Sz,this.Sz);
        rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
        rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
        stroke(0);
        line(this.x+15,this.y+this.Sz/2,this.x+this.Sz/2,this.y+35);
        line(this.x+this.Sz/2,this.y+35,this.x+35,this.y+this.Sz/2);
      break;
      case 9:
        noFill();
        strokeWeight(2);
        stroke(66,245,147,this.speedtrans1);
        rect(this.x,this.y,this.Sz,this.Sz);
        stroke(66,245,147,this.speedtrans2);
        rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
        stroke(66,245,147,this.speedtrans3);
        rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
        stroke(0);
        line(this.x+15,this.y+15,this.x+this.Sz/2,this.y+this.Sz/2);
        line(this.x+this.Sz/2,this.y+this.Sz/2,this.x+15,this.y+35);
      break;
      case 10:
        noFill();
        strokeWeight(2);
        stroke(66,245,147,this.speedtrans1);
        rect(this.x,this.y,this.Sz,this.Sz);
        stroke(66,245,147,this.speedtrans2);
        rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
        stroke(66,245,147,this.speedtrans3);
        rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
        stroke(0);
        line(this.x+15,this.y+15,this.x+this.Sz/2,this.y+this.Sz/2);
        line(this.x+this.Sz/2,this.y+this.Sz/2,this.x+15,this.y+35);

        line(this.x+20,this.y+15,this.x+30,this.y+this.Sz/2);
        line(this.x+30,this.y+this.Sz/2,this.x+20,this.y+35);
      break;
      case 11:
        noFill();
        strokeWeight(2);
        stroke(66,245,147,this.speedtrans1);
        rect(this.x,this.y,this.Sz,this.Sz);
        stroke(66,245,147,this.speedtrans2);
        rect(this.x+5,this.y+5,this.Sz-10,this.Sz-10);
        stroke(66,245,147,this.speedtrans3);
        rect(this.x+10,this.y+10,this.Sz-20,this.Sz-20);
        stroke(0);
        line(this.x+15,this.y+15,this.x+this.Sz/2,this.y+this.Sz/2);
        line(this.x+this.Sz/2,this.y+this.Sz/2,this.x+15,this.y+35);

        line(this.x+20,this.y+15,this.x+30,this.y+this.Sz/2);
        line(this.x+30,this.y+this.Sz/2,this.x+20,this.y+35);

        line(this.x+25,this.y+15,this.x+35,this.y+this.Sz/2)+10;
        line(this.x+35,this.y+this.Sz/2,this.x+25,this.y+35);
      break;
    }
  };
}
