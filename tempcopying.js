//Assets
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