// TODO We have 2 options Training option button

// TODO PC vs PC (no training)
// TODO Human vs AI 
// TODO Training Generate (Training)

//create AI training

class TrainingTicTacToe{
    constructor(){  

    }
}
class ActionMovement{
    constructor(){
        this.x = 0;
        this.O = 1;
    }
}
class HumanVsAI{
    constructor(){

    }
}
class UI{
    constructor(){
        this.button = document.createElement("button");
        this.bigBox = document.createElement('div');

    }
    startMenuBar(){
        //1 Button Human vs AI 2 AI vs AI 
        let background  =   this.bigBox,
            startgame   =   this.button,
            root        =   this.bigBox;

        background.classList.add("background_start_game");
        root.classList.add("root");
        document.append(root);
        
    }
}
class Main{
    constructor(){

    }
    run(){
        let start = new UI();
        
        // 0: Human vs ai  1 Training(pcvspc)
        if(player==0){

        }else if(player==1){

        }else if(player==2){

        }
    }
}