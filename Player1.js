function Player1(x,y,mode){
    this.x=x;
    this.y=y;
    this.w=20;
    this.h=20;
    this.yvel=0;
    this.gravity=0.8;
    this.speed=0;
    this.falling=true;
    this.accel=5;
    this.Sz=20;
    this.jumpHeight=-9.7;
    this.hitPortal=false;
    this.respawn={
        x:this.x,
        y:this.y
    };
    this.maxFallSpeed=8;
    this.update=function(blocks){
        this.yvel+=this.gravity;
        if(keys[LEFT_ARROW]){
            this.speed=-this.accel;
        }
        if(keys[RIGHT_ARROW]){
            this.speed=this.accel;
        }
        if(!keys[LEFT_ARROW]&&!keys[RIGHT_ARROW]){
            this.speed=0;
        }
        if(keys[UP_ARROW]&&!this.falling){
          if(this.gravity>0){
            this.yvel=this.jumpHeight;
          }
          if(this.gravity<0){
            this.yvel=-this.jumpHeight;
          }
        }
        if(keys[82]){
            this.x=this.respawn.x;
            this.y=this.respawn.y;
            this.yvel=0;
            this.gravity=0.8;
            this.accel=5;
        }
        if(this.y>levelHeight*50+height){
          this.x=this.respawn.x;
                        this.y=this.respawn.y;
                        this.yvel=0;
                        this.gravity=0.8;
                        this.accel=5;
        }
        if(this.y+this.Sz<-levelHeight*50-width){
          this.x=this.respawn.x;
                        this.y=this.respawn.y;
                        this.yvel=0;
                        this.gravity=0.8;
                        this.accel=5;
        }
        if(this.gravity>0){
          if(this.yvel>this.maxFallSpeed){
            this.yvel=this.maxFallSpeed;
          }
        }
        if(this.gravity<0){
          if(this.yvel<-this.maxFallSpeed){
            this.yvel=-this.maxFallSpeed;
          }
        }
        this.x+=this.speed;
        this.collideWith(this.speed,0,blocks);
        this.falling=true;
        // if(this.y+this.Sz>height){
        //     this.y=height-this.Sz;
        //     this.yvel=0;
        //     this.falling=false;
        // }
        this.y+=this.yvel;
        this.hitPortal=false;
        this.collideWith(0,this.yvel,blocks);
    };
    this.collideWith=function(xv,yv,blocks){
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            if(this.y+this.Sz > b.y &&
                this.y        < b.y+b.Sz &&
                this.x+this.Sz > b.x &&
                this.x        < b.x+b.Sz){
                //console.log("ouch");
                switch(b.type1){
                    case 1:
                      if(this.gravity>0){
                        if(yv>0) {
                          this.yvel = 0;
                          this.falling = false;
                          this.y = b.y-this.Sz;
                        }
                        // TOP
                        if(yv<0) {
                          this.yvel = 0;
                          this.falling = true;
                          this.y = b.y+b.Sz;
                        }
                        // RIGHT
                        if(xv>0) {
                          this.speed = 0;
                          this.x = b.x-this.Sz;
                        }
                          // LEFT
                        if(xv<0) {
                          this.speed = 0;
                          this.x = b.x+b.Sz;
                        }
                      }
                      if(this.gravity<0){
                        if(yv>0) {
                          this.yvel = 0;
                          this.falling = true;
                          this.y = b.y-this.Sz;
                        }
                        // TOP
                        if(yv<0) {
                          this.yvel = 0;
                          this.falling = false;
                          this.y = b.y+b.Sz;
                        }
                        // RIGHT
                        if(xv>0) {
                          this.speed = 0;
                          this.x = b.x-this.Sz;
                        }
                          // LEFT
                        if(xv<0) {
                          this.speed = 0;
                          this.x = b.x+b.Sz;
                        }
                      }
                    break;
                    case 2:
                      this.hitPortal=true;
                    break;
                    case 3:
                        this.x=this.respawn.x;
                        this.y=this.respawn.y;
                        this.yvel=0;
                        this.gravity=0.8;
                        this.accel=5;
                    break;
                    case 4:
                        if(yv>0) {
                            this.yvel = -14;
                            this.falling = true;
                            this.y = b.y-this.Sz;
                          }
                          // TOP
                          if(yv<0) {
                            this.yvel = 14;
                            this.falling = true;
                            this.y = b.y+b.Sz;
                          }
                          // RIGHT
                          if(xv>0) {
                            this.speed = 0;
                            this.x = b.x-this.Sz;
                          }
                            // LEFT
                          if(xv<0) {
                            this.speed = 0;
                            this.x = b.x+b.Sz;
                          }
                    break;
                    case 5:
                      if(this.gravity>0){
                        if(yv>0) {
                          this.yvel = 0;
                          this.falling = false;
                          this.y = b.y-this.Sz;
                        }
                        // TOP
                        if(yv<0) {
                          this.yvel = 0;
                          this.falling = true;
                          this.y = b.y+b.Sz;
                        }
                        // RIGHT
                        if(xv>0) {
                          this.speed = 0;
                          this.x = b.x-this.Sz;
                        }
                          // LEFT
                        if(xv<0) {
                          this.speed = 0;
                          this.x = b.x+b.Sz;
                        }
                      }
                      if(this.gravity<0){
                        if(yv>0) {
                          this.yvel = 0;
                          this.falling = true;
                          this.y = b.y-this.Sz;
                        }
                        // TOP
                        if(yv<0) {
                          this.yvel = 0;
                          this.falling = false;
                          this.y = b.y+b.Sz;
                        }
                        // RIGHT
                        if(xv>0) {
                          this.speed = 0;
                          this.x = b.x-this.Sz;
                        }
                          // LEFT
                        if(xv<0) {
                          this.speed = 0;
                          this.x = b.x+b.Sz;
                        }
                      }
                    break;
                    case 7:
                      this.gravity=-0.8;
                    break;
                    case 8:
                      this.gravity=0.8;
                    break;
                    case 9:
                      this.accel=2;
                    break;
                    case 10:
                      this.accel=5;
                    break;
                    case 11:
                      this.accel=10;
                    break;
                }
            }
        }
    };
    this.show=function(){
        noStroke();
        fill(235, 64, 52);
        rect(this.x,this.y,this.Sz,this.Sz);
    };
}