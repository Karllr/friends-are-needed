function Load(set, map){
    for(var i=0;i<map[level].length;i++){
        for(var j=0;j<map[level][i].length;j++){
            switch(map[level][i][j]){
                case 'B':
                    set[level].push(new Block(j*50,i*50,1,1,0));
                break;
                case '1':
                    player1.x=j*50;
                    player1.y=i*50;
                    player1.respawn.x=j*50;
                    player1.respawn.y=i*50;
                break;
                case '2':
                    player2.x=j*50;
                    player2.y=i*50;
                    player2.respawn.x=j*50;
                    player2.respawn.y=i*50;

                break;
                case 'O':
                    set[level].push(new Block(j*50,i*50,2,0,0));
                break;
                case 'X':
                    set[level].push(new Block(j*50,i*50,3,1,0));
                break;
                case 'I':
                    set[level].push(new Block(j*50,i*50,4,1,0));
                break;
                case 'R':
                    set[level].push(new Block(j*50,i*50,5,1,0));
                break;
                case 'L':
                    set[level].push(new Block(j*50,i*50,6,1,0));
                break;
                case 'U':
                    set[level].push(new Block(j*50,i*50,7,1,0));
                break;
                case 'D':
                    set[level].push(new Block(j*50,i*50,8,1,0));
                break;
                case '3':
                    set[level].push(new Block(j*50,i*50,9,1,0));
                break;
                case '4':
                    set[level].push(new Block(j*50,i*50,10,1,0));
                break;
                case '5':
                    set[level].push(new Block(j*50,i*50,11,1,0));
                break;
                case 'F':
                    set[level].push(new Block(j*50,i*50,12,1,0));
                break;
                case 'Y':
                    set[level].push(new Block(j*50,i*50,12,1,0));
                break;
            }
        }
    }
}
function Erase(set){
set.length=0;
}