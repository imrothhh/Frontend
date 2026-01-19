// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
  if (element.id === "scoreContainer") element.style.display = "flex";
}

function onStart() {
  // Render the current question
  // Display the quiz view,
    runningQuestionIndex = 0;
    score = 0;

    hide(dom_start);
    show(dom_quiz);
    hide(dom_scoreContainer);

    renderQuestion();
}

function renderQuestion() {
  // Render the current question on the quiz view
   const q = questions[runningQuestionIndex];

   dom_question.textContent = q.title;
   dom_choiceA.textContent = q.choiceA;
   dom_choiceB.textContent = q.choiceB;
   dom_choiceC.textContent = q.choiceC;
   dom_choiceD.textContent = q.choiceD;
}

function onPlayerSubmit(answer) {
  const currentQuestion = questions[runningQuestionIndex];

  if (answer === currentQuestion.correct) {
    score++;
  }

  runningQuestionIndex++;

  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    renderSCore();
  }
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
    hide(dom_quiz);
    show(dom_score);

    const scorePercent = Math.round((score / questions.length) * 100);

    let image = "";

    if (scorePercent < 20) {
      image = "😢";
    } else if (scorePercent < 40) {
      image = "😕";
    } else if (scorePercent < 60) {
      image = "🙂";
    } else if (scorePercent < 80) {
      image = "😄";
    } else {
      image = "🏆";
    }

    dom_score.innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:50px">${image}</div>
      <div>${score} / ${questions.length}</div>
      <div>${scorePercent}%</div>
    </div>
  `;
}
window.onPlayerSubmit = onPlayerSubmit;
// FUNCTIONS ---------------------------------------------------------
renderQuestion(); 
show(dom_start);
hide(dom_quiz);
hide(dom_score);
