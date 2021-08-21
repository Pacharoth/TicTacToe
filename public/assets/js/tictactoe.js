// TODO We have 2 options Training option button

// TODO PC vs PC (no training)
// TODO Human vs AI 
// TODO Training Generate (Training)

//create AI training
function selector(){
    return document.querySelector();
}
function selectorAll(){
    return document.querySelectorAll();
}
class TrainingTicTacToe{
    constructor(){  

    }
}
class ActionMovement{
    constructor(){
        this.x = 0;
        this.O = 1;
        this.button ="";
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
    gameBody(id){
        
        return `<button class="border btn m-1 d-flex justify-content-center align-items-center shadow rounded" id="${id}" style="background-color: gray; height: 30px; width: 30px;"> </button>`
    }
    firstStartMenu(){
        return `
            <div class="row">
                <h1 class="text-center text-white fw-bold">Welcome to Tic Tac Toe world</h1>
            </div>
            <div class="row mt-3 d-flex justify-content-center" id="AI">
                <button class="btn btn-primary col-6 fw-bold p-2"><h5 class="fw-bold">Human vs PC</h5></button>
            </div>
            <div class="row mt-3 d-flex justify-content-center" id="TrainingHuman">
                <button class="btn col-6 fw-bold p-2 text-white" style="background-color:#8E35EF;"><h5 class="fw-bold">Training with Human</h5></button>
            </div>
            <div class="row mt-3 d-flex justify-content-center" id="TrainingAI">
                <button class="btn btn-success col-6 fw-bold p-2"><h5 class="fw-bold">Training AI with AI</h5></button>
            </div>
            <div class="row mt-3  d-flex justify-content-center" id="Human">
                <button class="btn btn-dark col-6 p-2"><h5 class="fw-bold ">Human vs Human</h5></button>
            </div>

        `;
    }
    getScoreUI(){
        return `<h5 class="text-white fw-bold">Score: </h5><h5 class="text-white fw-bold" id="score"></h5>`;
    }
    getGenerationUI(){
        return `<h5 class="text-white fw-bold">Generation: </h5><h5 class="text-white fw-bold" id="generation"> 12</h5>`
    }
    startMenuBar(){
        //1 Button Human vs AI 2 AI vs AI 
        let div = document.createElement('div');
        div.id = "StartMenu";
        div.classList.add('m-auto','w-50','shadow','p-3','mt-5','rounded');
        div.style.cssText="background-color: gray; min-height:350px;";
        div.innerHTML=this.firstStartMenu();
        document.body.append(div);
        return div;
    }
    startGame(status){
        console.log(window.innerHeight)

        let div = document.createElement('div');
        div.classList.add('d-flex','align-items-center','mt-2','ms-2','justify-content-between');
        div.id="header";
        let divGame = document.createElement('div');
        divGame.classList.add('d-flex','flex-wrap','justify-content-center');
        div.innerHTML= this.getScoreUI();
        let buttonBack = document.createElement('button');
        buttonBack.classList.add('btn','btn-primary','me-2');
        buttonBack.innerHTML = "Back";
        buttonBack.id="back";
        div.append(buttonBack);
        if(status==2||status==0){
            div.innerHTML= this.getScoreUI();
        }else if(status==1){
            div.innerHTML=this.getGenerationUI();
        }
        for (let index = 0; index < 1500; index++) {
            if(document.body.clientHeight<window.innerHeight){
                let button = document.createElement('button');
                button.classList.add("border", "btn" ,"m-1" ,"d-flex", "justify-content-center", "align-items-center" ,"shadow" ,"rounded");
                button.style.cssText="background-color: gray; height: 30px; width: 30px;";
                button.id=index;
                divGame.append(button);
            }
        }
        document.body.append(div,divGame);

        return [div,divGame]
    }
}
class Main{
    constructor(){

    }
    static run(){
        let player=null;
        let start = new UI();
        // let startGame = start.startMenuBar();
        let [div,divGame]=[null,null];
        start.startGame();
        
    }
}
Main.run();
