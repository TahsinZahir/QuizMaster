const questions=[
    {
        question:"Which of the following statements is true about the 'let 'keyword in JavaScript?",
        answers:[
            {text:"Variables declared with let are function-scoped.",correct:false},
            {text:"Variables declared with let are block-scoped.",correct:true},
            {text:"Variables declared with let are hoisted to the top of their scope and initialized with undefined",correct:false},
            {text:"Variables declared with let can be redeclared in the same scope",correct:false}
        ]
    },
    {
        question:"What is the output of given text? console.log(typeof null);",
        answers:[
            {text:"object",correct:true},
            {text:"null",correct:false},
            {text:"undefined",correct:false},
            {text:"number",correct:false}
        ]
    },
    {
        question:"What is the term for a program in execution?",
        answers:[
            {text:"Process",correct:true},
            {text:"Thread",correct:false},
            {text:"Task",correct:false},
            {text:"Job",correct:false}
        ]
    },
    {
        question:"Which of the following is the core part of an operating system?",
        answers:[
            {text:"CLI",correct:false},
            {text:"GUI",correct:false},
            {text:"Shell",correct:false},
            {text:"Kernal",correct:true}
        ]
    }

];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
currentQuestionIndex=0;
score=0;
nextButton.innerHTML="Next"
showQuestion();
}
function showQuestion(){
    resetState();
let currentQuestion=questions[currentQuestionIndex];
let questionNo=currentQuestionIndex+1;
questionElement.innerHTML=questionNo + "."+ currentQuestion.question;
currentQuestion.answers.forEach(answer => {
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
    button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});
}
function resetState(){
nextButton.style.display="none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}
function selectAnswer(e){
const selectedBtn=e.target;
const iscorrect=selectedBtn.dataset.correct==="true";
if(iscorrect){
selectedBtn.classList.add("correct");
score++;
}
else{
selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button=>{
if(button.dataset.correct==="true"){
button.classList.add("correct");
}
button.disabled=true;
});
nextButton.style.display="block";
}
function showScore(){
resetState();
questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML="Play again";
nextButton.style.display="block";
}
function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex<questions.length){
showQuestion();
}
else{
showScore();
}
}

nextButton.addEventListener("click",()=>{
if(currentQuestionIndex<questions.length){
handleNextButton();
}
else{
startQuiz();
}
});
startQuiz();






