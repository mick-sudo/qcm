let h2 = document.querySelector("h2");
let reponses = document.querySelectorAll(".reponses");
let rep1 = document.getElementById("rep1");
let rep2 = document.getElementById("rep2");
let rep3 = document.getElementById("rep3");
let rep4 = document.getElementById("rep4");

const data = [
    {
        question: "Quel pays est associé au samourai",
        choices: ["La suede", "l'inde", "chine", "japon"],
        correct: "japon",
    active: false
},
{
    question: "Quel est la capital de la France",
    choices: ["Paris", "New york", "Barcelone", "la réponse d"],
    correct: "Paris",
    active: true
},
{
    question: "La fin du monde est ...",
    choices: ["Inevitable", "un projet", "une fiction", "zombieee"],
    correct: "zombieee",
    active: true
},
];
let answers = []
//let goodAnswers = ["japon","Paris","Zombie"]
let obj_actu = data[0];
console.log(data);
console.log(obj_actu);

h2.innerText = data[0].question;
rep1.innerHTML = data[0].choices[0];
rep2.innerHTML = data[0].choices[1];
rep3.innerHTML = data[0].choices[2];
rep4.innerHTML = data[0].choices[3];

function loadQuestion() {
    console.log(data.length);
  for (i = 0; i < data.length; i++) {
      if (data[i].active == true){
          obj_actu = data[i];
          h2.innerText = data[i].question;
          rep1.innerHTML = data[i].choices[0];
          rep2.innerHTML = data[i].choices[1];
          rep3.innerHTML = data[i].choices[2];
          rep4.innerHTML = data[i].choices[3];
          data[i].active = false
          //console.log(h2)
        }
    }
}

//console.log(reponses);
for (const iterator of reponses) {
    console.log(iterator)
    iterator.addEventListener("click", function (e) {
        console.log(e);
        let rep = e.target.outerText
        loadQuestion();
    answers.push(rep)
    // console.log(rep);
    console.log(answers);
});
}



