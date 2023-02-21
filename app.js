const createplayer=(name,symbol)=>{
    return {name,symbol};
}

const gameBoard = ((
)=>{
    let board=[];
    //initializing board
    for (i=0;i<9;i++){
        board.push("");
    }
    const container=document.querySelector(".container");
    //displaying board
    board.forEach((item,index)=>{
        const box=document.createElement("div");
        box.classList.add("square");
        container.appendChild(box);
    })
    console.log(board);

    Array.from(container.children).forEach((box,index)=>{
        box.addEventListener("click",()=>{
            box.classList.add(game.activeplayer.symbol);
            box.setAttribute("data",game.activeplayer.symbol);
            board[index]=game.activeplayer.symbol;
            game.remainround-=1;
            box.style.pointerEvents="none";
            console.log(game.remainround);
            game.checkWinner();
            if (game.winnerDeclared==false){
                if(game.remainround>0){
                    game.nextPlayer();
                }else if (game.remainround==0){
                    console.log("tie");
                }
            }

        })
    });
    return {
        board
    };
})();

const game=(()=>{
    let playerone=createplayer("playerone","x");
    let playertwo=createplayer("playertwo","o");
   
    let activeplayer=playerone;
    let winnerDeclared=false;
    let remainround=9


    function nextPlayer() {
        if(this.activeplayer===playerone){
            this.activeplayer=playertwo;
        } else {this.activeplayer=playerone};
        console.log(activeplayer);
    };

    const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];


    function checkWinner(){
        winningAxes.forEach((item,index)=>{
            if (gameBoard.board[item[0]] === this.activeplayer.symbol && gameBoard.board[item[1]] === this.activeplayer.symbol && gameBoard.board[item[2]] === this.activeplayer.symbol) {
                console.log('winner!');
                this.winnerDeclared = true;
        }}

    )
    }


    return {
        activeplayer,
        nextPlayer,
        checkWinner,
        remainround,
        winnerDeclared,
    };
})();