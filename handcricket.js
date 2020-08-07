
var random,decision ;
var usermove,compmove;
var userscore = document.getElementById("user_score");
var compscore = document.getElementById("comp_score");
var score1 = 0;
var score2 = 0;
var winner;
var choice;
var firstchoice = "";
function decide(decision){
    document.getElementById("index").style.display = "none";
    document.getElementById("container").style.display = "block";
    choice = decision;
    firstchoice = decision;
}
function myfunc(usermove){
    compmove = Math.floor(Math.random()*7);
    document.getElementById("usermove").innerHTML = " " + usermove;
    document.getElementById("compmove").innerHTML = " " + compmove;
    if (choice == 'bat'){
        bat();
    }
    else{
        bowl();
    }
    function bowl(){
        if(compmove == 0){
            score2 += usermove;
            compscore.innerHTML = score2;
        }
        else if (compmove != usermove){
            score2 += compmove;
            compscore.innerHTML = score2;
        }
        else{
            compscore.innerHTML = score2;
            if(firstchoice == "bowl"){
                choice = "bat";
            }
            else{
                mess();
            }
            
        }
    }
    
    function bat(){
        if(usermove == 0){
            score1 += compmove;
            userscore.innerHTML = score1;
        }
        else if (usermove != compmove){
            score1 += usermove;
            userscore.innerHTML = score1;
        }
        else{
            userscore.innerHTML = score1;
            if(firstchoice == "bat"){
                choice = "bowl";
            }
            else{
                mess();
            }
           
        }
    }
    
}
function mess(){
    document.getElementById("subcontainer").style.display = "none";
    if(score1 == score2){
        document.getElementById("msg").innerHTML = "Match Draw!";
    }
    winner = (score1>score2)?"You":"Computer";
    document.getElementById("msg").innerHTML = winner + " won!";
    
}