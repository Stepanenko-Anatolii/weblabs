let focusDiv = document.getElementsByClassName("fourthP")[0];

if(localStorage.getItem("Table")) focusDiv.innerHTML = localStorage.getItem("Table");

focusDiv.addEventListener("mouseenter", makeForm);

let isFormAdded = 0;
function makeForm(){
    if(isFormAdded) return;
    isFormAdded = 1;

    let formAddTable = 'Add table:<br>' +
        '<form name="task5Form">\n' +
        '<input type="text" name="task5TextInp"><br>\n' +
        '<button type="button" onclick="addRow()">add new</button>\n' +
        '<button type="button" onclick="saveTable()">save</button>\n' +
        '</form>' +
        '<br><table id="oneRowTable"><tr></tr></table>';

    let oldContent = focusDiv.innerHTML;
    let newContent = oldContent + formAddTable;
    focusDiv.innerHTML = newContent;
}

function addRow(){
    let val5Form = document.forms.task5Form;
    let text5Input = val5Form.elements['task5TextInp'];
    const inp5Text = text5Input.value;

    var oneRowTable = document.getElementById("oneRowTable").firstElementChild.firstElementChild;
    var newTr = document.createElement("tr");
    var newTd = document.createElement("td");
    var tableValue = document.createTextNode(inp5Text);

    newTd.appendChild(tableValue);
    newTr.appendChild(newTd);

    oneRowTable.appendChild(newTr);
}

function saveTable(){
    var oneRowTable = document.getElementById("oneRowTable").firstElementChild.firstElementChild;
    let tableOpenTag = '<table>';
    let tableCloseTag = '</table>';
    let tableHTML = tableOpenTag + oneRowTable.innerHTML + tableCloseTag;

    focusDiv.innerHTML = tableHTML;

    localStorage.setItem('Table', tableHTML);
}