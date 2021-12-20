/*--------------------Subtask01--------------------*/
let fields = document.getElementsByTagName('h5');
const field0_content = fields[0].innerHTML;
const field1_content = fields[1].innerHTML;

fields[0].innerHTML = field1_content;
fields[1].innerHTML = field0_content;
/*-------------------------------------------------*/
/*--------------------Subtask02--------------------*/
function square(v1, v2){
	return v1*v2;
}
let a1 = 38.5;
let a2 = 54;

let fourthP = document.getElementsByClassName('fourthP')[0];
const fourthPContent = fourthP.innerHTML;
let newContent = '<br><div>Square of ' + a1 + ' and ' + a2 + ' = ' + square(a1, a2) + '\n</div>';
fourthP.innerHTML = fourthPContent + newContent;
/*-------------------------------------------------*/