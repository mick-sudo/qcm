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
const table = [rep1, rep2, rep3, rep4]

console.log(data);


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

function next (){
    let value = checked();
    console.log(value)
    if(value === 0){
        loadQuestion();
    }else{
        score()
    }
}

function score(){
   console.log("fini");
}

for (const iterator of table) {
    iterator.addEventListener("click", next);
  }

//   function next2(){
//     for(const iterator of data){
//         if(iterator.active === true){
//             loadQuestion()
//         }
//     }
//   }
