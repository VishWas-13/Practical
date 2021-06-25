submit = document.querySelector('#submitButton')
console.log(submit)

submit.addEventListener('click', () => {
    window.alert("Press 'OK' if you want to confirm form submission.");
})

function hoverEffect(x) {
    x.style.color = 'red';
}

function noHoverEffect(x) {
    x.style.color = 'black';
}

function confi(){
    window.confirm("You have submitted the form.");
}