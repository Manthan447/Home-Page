var p1 = localStorage.getItem("name_1")
var p2 = localStorage.getItem("name_2")

var p1_score = 0;
var p2_score = 0;

document.getElementById("question_turn").innerHTML = "Question turn:  " + p1;
document.getElementById("answer_turn").innerHTML = "Answer turn:  " + p2;