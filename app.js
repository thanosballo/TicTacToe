const createplayer=(name,symbol)=>{
    return {name,symbol};
}

const gameboard = ((
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

    Array.from(container.children).forEach((box)=>{
        box.addEventListener("click",()=>{
            box.classList.add(game.activeplayer.symbol);
            console.log(game.activeplayer.symbol);
            game.nextPlayer();
            console.log(game.activeplayer.symbol);


        })
    })





})();

const game=(()=>{
    let playerone=createplayer("playerone","x");
    let playertwo=createplayer("playertwo","o");
    console.log(playerone,playertwo);
    let activeplayer=playerone;

    function nextPlayer() {
        if(this.activeplayer===playerone){
            this.activeplayer=playertwo;
        } else {this.activeplayer=playerone};
    };
    return {
        activeplayer,
        nextPlayer,
    };
})();