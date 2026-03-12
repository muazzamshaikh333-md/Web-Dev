const quizData = [
{
question: "What does HTML stand for?",
a: "Hyper Text Markup Language",
b: "Home Tool Markup Language",
c: "Hyperlinks Text Mark Language",
d: "Hyper Tool Multi Language",
correct: "a"
},
{
question: "Which CSS property changes text color?",
a: "text-color",
b: "font-color",
c: "color",
d: "text-style",
correct: "c"
},
{
question: "Which tag is used for JavaScript?",
a: "<js>",
b: "<script>",
c: "<javascript>",
d: "<code>",
correct: "b"
},
{
question: "Which HTML tag creates a hyperlink?",
a: "<a>",
b: "<link>",
c: "<href>",
d: "<url>",
correct: "a"
},
{
question: "Which CSS property controls text size?",
a: "font-size",
b: "text-size",
c: "font-style",
d: "size",
correct: "a"
},
{
question: "How do you write a comment in JavaScript?",
a: "# comment",
b: "// comment",
c: "<!-- comment -->",
d: "** comment **",
correct: "b"
},
{
question: "Which HTML tag is used for images?",
a: "<img>",
b: "<image>",
c: "<pic>",
d: "<src>",
correct: "a"
},
{
question: "Which symbol is used for ID selector in CSS?",
a: ".",
b: "#",
c: "*",
d: "&",
correct: "b"
},
{
question: "Which method displays output in console?",
a: "console.log()",
b: "print()",
c: "log.console()",
d: "display()",
correct: "a"
},
{
question: "Which HTML tag is used for paragraph?",
a: "<para>",
b: "<p>",
c: "<text>",
d: "<pg>",
correct: "b"
}
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

deselectAnswers();

const currentData = quizData[currentQuiz];

questionEl.innerText = currentData.question;
a_text.innerText = currentData.a;
b_text.innerText = currentData.b;
c_text.innerText = currentData.c;
d_text.innerText = currentData.d;
}

function deselectAnswers(){
answers.forEach(answer => answer.checked = false);
}

function getSelected(){
let answer;

answers.forEach(answerEl => {
if(answerEl.checked){
answer = answerEl.id;
}
});

return answer;
}

submitBtn.addEventListener("click", () => {

const answer = getSelected();

if(answer){

if(answer === quizData[currentQuiz].correct){
score++;
}

currentQuiz++;

if(currentQuiz < quizData.length){
loadQuiz();
}else{

document.querySelector(".quiz-container").innerHTML =
`<h2>You scored ${score}/${quizData.length} 🎉</h2>
<button onclick="location.reload()">Restart</button>`;

}

}

});
