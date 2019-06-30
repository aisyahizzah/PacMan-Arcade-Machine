
    var map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,10,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,10,1],
        [1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1],
        [1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1],
        [1,2,1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1],
        [1,2,1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1],
        [1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1],
        [1,39,2,2,1,1,2,1,1,3,3,1,1,2,1,1,2,2,2,1],
        [1,2,1,2,2,2,2,1,3,3,7,3,1,2,2,2,2,1,2,1],
        [1,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1],
        [1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1],
        [1,2,1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1],
        [1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,1,2,1,2,1],
        [1,2,1,2,2,2,1,1,1,1,1,1,1,1,2,2,2,1,2,1],
        [1,10,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,10,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]

    var startMenu = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,39,2,2,2,2,2,2,2,2,2,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,0,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
    
    var endMenu = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,8,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,0,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]

    var pacman = {
        x: 1,
        y: 7
    }

    var ghost = {
        x: 10,
        y: 8
    }

    var ghostShadow = 3;

    var score = 0;

    function drawWorld(map,x) {
        document.getElementById('world').innerHTML = "";
        for(var i=0; i < map.length; i = i+1){
            for(var j=0; j < map[i].length; j = j+1){
                if (map[i][j] === 0){
                    if ((x === 0) || (x === 1)){
                        document.getElementById('world').innerHTML += "<div class='start' style='text-align:center';>Score : " + score.toString() + "</div>";
                    } else{
                        document.getElementById('world').innerHTML += "<div class='start'>PRESS ENTER TO START THE GAME</div>";
                    }
                } else if (map[i][j] === 1){
                    document.getElementById('world').innerHTML += "<div class='wall'></div>";
                } else if (map[i][j] === 2){
                    document.getElementById('world').innerHTML += "<div class='coin'></div>";
                } else if (map[i][j] === 3){
                    document.getElementById('world').innerHTML += "<div class='ground'></div>";
                } else if (map[i][j] === 7){
                    document.getElementById('world').innerHTML += "<div class='ghost'></div>";
                } else if ((map[i][j] === 8) && (x === 1)){
                    document.getElementById('world').innerHTML += "<div class='win'>YOU WIN!</div>";
                } else if ((map[i][j] === 8) && (x === 0)){
                    document.getElementById('world').innerHTML += "<div class='lost'>GAME OVER</div>";
                } else if (map[i][j] === 10){
                    document.getElementById('world').innerHTML += "<div class='cherries'></div>";
                } else if (map[i][j] === 37){
                    document.getElementById('world').innerHTML += "<div class='pacmanLeft'></div>";
                } else if (map[i][j] === 38){
                    document.getElementById('world').innerHTML += "<div class='pacmanUp'></div>";
                } else if (map[i][j] === 39){
                    document.getElementById('world').innerHTML += "<div class='pacmanRight'></div>";
                } else if (map[i][j] === 40){
                    document.getElementById('world').innerHTML += "<div class='pacmanDown'></div>";
                } 
            }
            document.getElementById('world').innerHTML += "<br>";
        }
        if ((ghost.x==pacman.x)&&(ghost.y==pacman.y)){
            return 0;
        } else if (isExistCoin()==0){
            return 1;
        }
    }

    //---------BFS--------
    function findNeighbors(i,j){
        var neighbor = [];
        if (map[i][j-1]!=1){
            neighbor.push([i,j-1]);
        }
        if (map[i][j+1]!=1){
            neighbor.push([i,j+1]);
        }
        if (map[i-1][j]!=1){
            neighbor.push([i-1,j]);
        }
        if (map[i+1][j]!=1){
            neighbor.push([i+1,j]);
        }
        return neighbor;
    }

    function makePathToPacman(path,i,j){
        var newPath = [];
        newPath = path.slice();
        newPath.push([i,j]);
        return newPath;
    }

    function BFS(i,j,a,b){
        var queue = [];
        var current_i = i;
        var current_j = j;
        var goal_i = a;
        var goal_j = b;
        var temp = [];
        var neighbors = [];
        var hasVisited = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ]
        var pathToPacman = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ]

        hasVisited[current_i][current_j] = 1;
        pathToPacman[current_i][current_j]  = [];
        queue.push([current_i,current_j]);
        while (!((current_i==goal_i) && (current_j==goal_j)) && (queue.length>0)){
            temp = queue.shift();
            current_i = temp[0];
            current_j = temp[1];
            if (!((current_i==goal_i) && (current_j==goal_j))){
                neighbors = findNeighbors(current_i,current_j);
                for(var n=0;n<neighbors.length;n++){
                    if (hasVisited[neighbors[n][0]][neighbors[n][1]]==0){
                        queue.push([neighbors[n][0],neighbors[n][1]]);
                        pathToPacman[neighbors[n][0]][neighbors[n][1]] = makePathToPacman(pathToPacman[current_i][current_j],current_i,current_j);
                        hasVisited[neighbors[n][0]][neighbors[n][1]] = 1;
                    }
                }
            }
        }
        pathToPacman[goal_i][goal_j] = makePathToPacman(pathToPacman[goal_i][goal_j],goal_i,goal_j);
        return pathToPacman[goal_i][goal_j];
    }

    var varLeft = 0;
    var varUp = 0;
    var varRight = 0;
    var varDown = 0;
    var varGhost = 0;

    function clear(x){
        if ((varLeft!=0)&&(x!=37)){
                clearInterval(varLeft);
        } else if ((varUp!=0)&&(x!=38)){
            clearInterval(varUp);
        } else if ((varRight!=0)&&(x!=39)){
                clearInterval(varRight);
        } else if ((varDown!=0)&&(x!=40)){
            clearInterval(varDown);
        }
        if (varGhost!=0){
            clearInterval(varGhost);
            varGhost = 0;
        }
    }
    
    function moveGhost(){
        var moveGhost = BFS(ghost.y,ghost.x,pacman.y,pacman.x);
        varGhost = setInterval(move,500);
        function move(){
            if (moveGhost.length>0){
                var tempGhost = moveGhost.shift();
                var tempY = ghost.y;
                var tempX = ghost.x;
                map[ghost.y][ghost.x] = ghostShadow;
                ghost.y = tempGhost[0];
                ghost.x = tempGhost[1];
                ghostShadow = map[ghost.y][ghost.x];
                map[ghost.y][ghost.x] = 7;
                if ((ghostShadow==37)||(ghostShadow==38)||(ghostShadow==39)||(ghostShadow==40)){
                    /*if (((tempY+1)==ghost.y) && (varDown!=0)){
                        clearInterval(main);
                        drawWorld(endMenu,0);
                    } else if (((tempY-1)==ghost.y) && (varUp!=0)){
                        clearInterval(main);
                        drawWorld(endMenu,0);
                    } else if (((tempX+1)==ghost.x) && (varLeft!=0)){
                        clearInterval(main);
                        drawWorld(endMenu,0);
                    } else if (((tempX-1)==ghost.x) && (varRight!=0)){
                        clearInterval(main);
                        drawWorld(endMenu,0);
                    } else {*/
                        drawWorld(main);
                        ghostShadow = 3;
                    //}
                }
            } else {
                clearInterval(varGhost);
                varGhost = 0;
            }
        }
    }

    function myScore(){
        if (map[pacman.y][pacman.x] === 2){
            score = score + 10;
        } else if (map[pacman.y][pacman.x] === 10){
            score = score + 50;
        }
    }

    function isExistCoin(){
        var coin = false;
        var i = 0;
        var j = 0;
        while((coin==false) && (i<map.length)){
            while((coin==false) && (j<map[i].length)){
                if ((map[i][j]===2)||(map[i][j]===10)){
                    coin = true;
                }
                j++;
            }
            i++;
            j = 0;
        }
        return coin;
    }

    document.onkeydown = function(e){
        if (e.keyCode===13){
            var main = setInterval(game,500);
            function game(){
                x = drawWorld(map);
                document.getElementById('world').innerHTML += "SCORE : " + score;
                if (x==0){
                    clearInterval(main);
                    drawWorld(endMenu,0);
                } else if (x==1){
                    clearInterval(main);
                    drawWorld(endMenu,1);
                }
            }
        }
        if (e.keyCode === 37){
            //left
            clear(37);
            moveGhost();
            map[pacman.y][pacman.x] = 37;
            if (map[pacman.y][pacman.x-1] !== 1){
                varLeft = setInterval(left, 500);
                function left(){
                    if (map[pacman.y][pacman.x-1]!==1){
                        map[pacman.y][pacman.x] = 3;
                        pacman.x = pacman.x - 1;
                        myScore();
                        map[pacman.y][pacman.x] = 37;
                        if (map[pacman.y][pacman.x-1] === 1){
                            pacman.x = pacman.x++;
                            clearInterval(varLeft);
                            varLeft = 0;
                        }
                    }
                }
            }
        } else if (e.keyCode === 38){
            //up       
            clear(38);
            moveGhost(); 
            map[pacman.y][pacman.x] = 38;
            if (map[pacman.y-1][pacman.x] !== 1){
                varUp = setInterval(up, 500);
                function up(){
                    if (map[pacman.y-1][pacman.x] !== 1){
                        map[pacman.y][pacman.x] = 3;
                        pacman.y = pacman.y - 1;
                        myScore();
                        map[pacman.y][pacman.x] = 38;
                        if (map[pacman.y-1][pacman.x] === 1){
                            pacman.y = pacman.y++;
                            clearInterval(varUp);
                            varUp = 0;
                        }
                    }
                }
            }
        } else if (e.keyCode === 39){
            //right
            clear(39);
            moveGhost();
            map[pacman.y][pacman.x] = 39;
            if (map[pacman.y][pacman.x+1] !== 1){
                varRight = setInterval(right, 500);
                function right(){
                    if (map[pacman.y][pacman.x+1] !== 1){
                        map[pacman.y][pacman.x] = 3;
                        pacman.x = pacman.x + 1;
                        myScore();
                        map[pacman.y][pacman.x] = 39;
                        if (map[pacman.y][pacman.x+1] === 1){
                            pacman.x = pacman.x--;
                            clearInterval(varRight);
                            varRight = 0;
                        }
                    }
                }
            }
        } else if (e.keyCode === 40){
            //down
            clear(40);
            moveGhost();
            map[pacman.y][pacman.x] = 40;
            if (map[pacman.y+1][pacman.x] !== 1){
                varDown = setInterval(down, 500);
                function down(){
                    if (map[pacman.y+1][pacman.x] !== 1){
                        map[pacman.y][pacman.x] = 3;
                        pacman.y = pacman.y + 1;
                        myScore();
                        map[pacman.y][pacman.x] = 40;
                        if (map[pacman.y+1][pacman.x] === 1){
                            pacman.y = pacman.y--;
                            clearInterval(varDown);
                            varDown = 0;
                        }
                    }
                }
            }
        } 
    }

    drawWorld(startMenu);
    // End of JavaScript