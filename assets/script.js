/**
 * C'est un jeu-questionnaire qui affiche une question et 4 réponses, et lorsque vous cliquez sur l'une
 * des réponses, il vérifie si c'est la bonne, et si c'est le cas, il ajoute 1 au score, et si ce n'est
 * pas le cas, il ne le fait pas. rien ajouter au score.
 * @returns La bonne réponse est "japon"
 */
let data = [
    {
        question: "Quel pays est associé au samourai",
        a: "La suede",
        b: "l'inde",
        c: "chine",
        d:"japon",
        correct: "japon",
        active: true
},
{
    question: "Quel est la capital de la France",
    a: "Paris",
    b: "New york",
    c: "Barcelone",
    d:"la réponse d",
    correct: "Paris",
    active: true
},
{
    question: "La fin du monde est ...",
    a: "Inevitable",
    b: "un projet",
    c: "une fiction",
    d:"zombieee",
    correct: "zombieee",
    active: true
},
];


let question = document.getElementById("question");
let rep1 = document.getElementById("rep1");
let rep2 = document.getElementById("rep2");
let rep3 = document.getElementById("rep3");
let rep4 = document.getElementById("rep4");
let resultat = document.getElementById("resultat");
let container = document.querySelector(".container");
const table = [rep1, rep2, rep3, rep4]
let choices = [];
console.log(data);
console.log(choices.length);
/**
 * Si la valeur de la variable "value" est égale à 0, alors la fonction "loadQuestion" est appelée,
 * sinon, si la valeur de la variable "value" est égale à 1, alors la fonction "end" est appelée.
 */
let score = 0;

function loadQuestion() {

    for (const iterator of data) {
        if (iterator.active === true){
          console.log(iterator.active);
          question.innerText = iterator.question;
          rep1.innerText = iterator.a;
          rep2.innerText = iterator.b;
          rep3.innerText = iterator.c;
          rep4.innerText = iterator.d;
          iterator.active = false;
          return;
        }
    }
};
loadQuestion()

function checked (){
    let checked = 0;
    for(const iterator of data){
        if(iterator.active === true){
            checked = 0;
        }else{
            checked= 1;
        }
    }
    return checked;
};

function next (e){
    choices.push(e.target.textContent);
    console.log(choices);
    let value = checked();
    //console.log(value)
    for (const key in data) {
        //console.log(data[key].correct);
        if(e.target.textContent === data[key].correct){
            score++;
            console.log(e);
        }
    }
    if(value === 0){
        console.log(data.correct);
        loadQuestion();
    }else{
        end()
        console.log(score);
    }
}

function end(){
    if(data.length <= choices.length){
        container.style.display = "none"
        console.log("fini");
        resultat.innerText= "Votre score est de: " + score;
    }
}

for (const iterator of table) {
    iterator.addEventListener("click", (e) =>{
        next(e);
    });

  }


function compte(e) {
    
}

//   function next2(){
//     for(const iterator of data){
//         if(iterator.active === true){
//             loadQuestion()
//         }
//     }
//   }

