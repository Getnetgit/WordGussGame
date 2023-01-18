var words=['few','content','print','flu','failure','storage','module','meeting','page','report','cat','grand','well','exotic','neck','tongue','digress','feather','deport','island','cutting','ruin','estate','future','surface','creep','outer','swarm','give','take','article','foot','bill','mist','pure','due','thought','first','missile','raw','favour','concept','housing','black','end','tire','night','summary','full','seller'];
var timeLeftSpn=document.getElementById('timerSpan');
var gussWordDiv=document.getElementById('gussword');
var gameMsgDiv=document.getElementById('gameMessage');
var winsSpn=document.getElementById('winsSpan');
var lossesSpn=document.getElementById('lossesSpan');
var startBtn=document.querySelector('button');
let selectedWord="";
let gussedWord="";
var losses=0;
var wins=0;
losses=localStorage.getItem("losses");
wins=localStorage.getItem("wins");
var timeLeft=10;
let lowerKey='';
var wordDisplay=[];
var gameOn=0;
winsSpn.innerHTML=wins;
lossesSpn.innerHTML=losses;
//Write function to get randum word from words array and return it
function getRandumWord() {
    selectedWord=words[Math.floor(Math.random()*(words.length-1))];
    return selectedWord;
}

function writeOnPage(element,message){
element.innerHTML=message;
}

//Write function to capture key when it is pressed whele on page and convert it to small letter.
//function getKeyvalue(event)
 

//start game upon clicking statbutton
startBtn.addEventListener('click', function(){
    //select randum workd from words array 
    timeLeft=10;
    wordDisplay=[];
    getRandumWord();
    gameMsgDiv.innerHTML="";
    gameOn=1;
    var lettars=selectedWord.split('');
    //convert selected word to arrays of latters
    //display dashes on word field equal to the selected word latters

    for (let i = 0; i <lettars.length; i++) {
        wordDisplay.push('_') 
    }
    //gussWordDiv.innerHTML=wordDisplay.join(" ");
    writeOnPage(gussWordDiv,wordDisplay.join(" "));
    //Start conuntdown timer , if while timer is counting down
        
    document.addEventListener('keyup',function(event) {
        console.log(selectedWord);
        if (timeLeft<10 && timeLeft>0) {
            lowerKey=event.key;
            if (gussedWord!==selectedWord) {
                for (let i = 0; i < selectedWord.length; i++) {
                    if (selectedWord[i]===lowerKey) {
                        wordDisplay.splice(i,1,lowerKey);
                        gussWordDiv.innerHTML=wordDisplay.join(" ");
                    }  
                }   
                gussedWord=wordDisplay.join("");
            }
        }
       //return lowerKey;
       
    });

    var gameCountDown=setInterval(function() {
        timeLeft--;
        console.log(selectedWord.length);
        if (timeLeft<=0||(gussedWord==selectedWord)) {
            if ((gussedWord==selectedWord) && gameOn) {
         
                gameMsgDiv.innerHTML="You Won!";
                wins++;
                winsSpn.innerHTML=wins;
                localStorage.setItem("wins",wins);
                //onsole.log(gameCountDown);
                gameOn=0; 
                
            }
            if ((timeLeft<=0)&&gameOn) {
               gameMsgDiv.innerHTML="You loss!";
               losses++;
               lossesSpn.innerHTML=losses;
               localStorage.setItem("losses",losses);
               gameOn=0;
            }
            clearInterval(gameCountDown);
        }
        //
        timeLeftSpn.innerHTML=timeLeft+" Sec";
    },1000);

    //setInterval()
    //listen to keyboard on the document and capture key value
    //every time a key value is captured ,search leater in the selected word replace the dashed display.
    // if all latters gussed "Won will be displayed"
    //timer value freez and 
    //if timer expire 
    //Game over will be 
});