let fifthCl = document.getElementsByClassName('fifthP')[0];
let form5 = document.forms.form5;
let form5Input = form5.getElementsByTagName('input')['textField'];
function setFontWeight(fontWeight){
    fifthCl.style.fontWeight = fontWeight;
}

if(localStorage.getItem('f5Weight')){
    setFontWeight(localStorage.getItem('f5Weight'));
}

let form5Checkbox = form5.getElementsByTagName('input')['checkbox'];
form5Input.addEventListener('focus', ()=>{
    if(form5Checkbox.checked){
        localStorage.setItem('f5Weight', "900");
        setFontWeight("900");
    }
});
form5Input.addEventListener('blur', ()=>{
    if(form5Checkbox.checked){
        localStorage.setItem('f5Weight', "400");
        setFontWeight("400");
    }
});