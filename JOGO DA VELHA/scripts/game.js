let quadro = ['','','','','','','','',''];
let playrtime = 0;
let simbolos = ['o', 'x']
let gameOver = false;

function handleMove(position){
    if(gameOver){
        return;
    }

    if (quadro[position] == ''){ 
        quadro[position] = simbolos[playrtime];

        gameOver = isWin();

        if(gameOver == false){
            if (playrtime == 0){
                playrtime = 1;
            }else{
                playrtime = 0;
            }
        }
    }

    return gameOver;
}

function isWin(){
    winEstados =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [0,4,6], 
    ]

    for(let i=0; i<winEstados.length; i++){
       let seq = winEstados[i];

       let pos1 = seq[0];
       let pos2 = seq[1];
       let pos3 = seq[2];

       if (quadro [pos1] == quadro [pos2] &&
           quadro[pos1] == quadro [pos3] && 
           quadro[pos1] != ''){
            return true;
           }
    }

    return false;
}