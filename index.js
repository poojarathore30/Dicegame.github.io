
function dice_cal(dice){
    if(dice===1)
    dice_image= "images/1.png";
    else if(dice===2)
    dice_image= "images/2.png";
    else if(dice===3)
    dice_image= "images/3.png";
    else if(dice===4)
    dice_image= "images/4.png";
    else if(dice===5)
    dice_image= "images/5.png";
    else if(dice===6)
    dice_image= "images/6.png";
    else
    dice_image= "images/game-die_1f3b2.png";

    return dice_image;
}
function action(){
//  var p1=   prompt("Who is player 1 ?");
//  var p2=   prompt("Who is player 2 ?");
var p1=" Player 1";
var p2="Player 2";
 var num1=Math.random();
    var dice1=Math.floor((num1*5)+1);
    var num2=Math.random();
    var dice2=Math.floor((num2*5)+1);
    document.getElementById('para').innerHTML="Great You Got Me Right !";
    if(dice1>dice2){
        document.querySelector('h1').innerHTML=p1+" wins 😍😍";
    }
    else if(dice1===dice2){
        document.querySelector('h1').innerHTML="Its a tie 😎😎"
    }
    else{
        document.querySelector('h1').innerHTML=p2+"  Wins 😍😍";  
    }
 document.getElementById("player1").innerHTML=" 1";
 document.getElementById("player2").innerHTML=" 2";

document.getElementById("image1").src=dice_cal(dice1);
document.getElementById("image2").src=dice_cal(dice2);

}
