/*--------------------Subtask03--------------------*/
function minFormVal(){
    let valForm = document.forms.valuesForm;
    let textInput = valForm.elements['values'];
    const inpText = textInput.value;

    const digitsArr = inpText.split(" ").map(x=>+x);
    let min = Math.min(...digitsArr);
    let max = Math.max(...digitsArr);
    document.cookie = "min="+min;
    document.cookie = "max="+max;
    let resStr = "min value = " + min + "; max value = " + max + ";";
    alert(resStr);
}
/*-------------------------------------------------*/
function addForm(){
    let fourthP = document.getElementsByClassName('fourthP')[0];
    const fourthPContent = fourthP.innerHTML;
    let newContent = '<form name="valuesForm">\n' +
        '<input type="text" name="values"><br>\n' +
        '<button type="button" onclick="minFormVal()">Enter</button>\n' +
        '</form>';
    fourthP.innerHTML = fourthPContent + newContent;
}

let allCookies = document.cookie.split(";");
let minVal;
let maxVal;
for(let cook of allCookies){
    let cookName = cook.split("=")[0];
    if(cookName == "min" || cookName == " min"){
        minVal = cook.split("=")[1];
    }
    if(cookName == "max" || cookName == " max"){
        maxVal = cook.split("=")[1];
    }
}
if(minVal==undefined || maxVal==undefined){
    addForm();
}else{
    let valuesStr = "min = " + minVal + "; max = " + maxVal + ";\n";
    let confirmStr = valuesStr + "Do you want to use&save cookies?"
    let confirmRes = confirm(confirmStr);
    if(confirmRes == false){
        addForm();
        //delete cookies
        document.cookie = "min=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        document.cookie = "max=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
    if(confirmRes == true){
        //save cookies
        alert("You agreed to use cookies. You need to reload the page")
    }
}