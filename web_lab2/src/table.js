let sixClass = document.getElementsByClassName("sixthP")[0];
let sClassDiv = sixClass.getElementsByTagName('div')[0];

let numbList = "<ol><li><input type='text'></li></ol>";
sClassDiv.innerHTML = numbList;
let i = 0;

let sClassList = sClassDiv.getElementsByTagName('ol')[0];

function addInput(){
    i++;
    const numbListContent = sClassList.innerHTML;
    const newNumbListContent = numbListContent + "<li><input type='text'></li>";
    sClassList.innerHTML =newNumbListContent;
    let newButton = sClassDiv.getElementsByTagName('input')[i];
    newButton.addEventListener('blur', addInput);
}

let button = sClassDiv.getElementsByTagName('input')[0];

button.addEventListener('blur', addInput);

//alert("table.js: test_end");//test