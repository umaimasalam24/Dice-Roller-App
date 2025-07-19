function rollDice (){
    let result = document.getElementById("result");
    let roll = Math.floor(Math.random()*6);
    let diceFace = ["⚀" , "⚁" , "⚂" , "⚃" , "⚄" , "⚅"];
    result.innerHTML = diceFace[roll]
}
