const form = document.getElementById("form");
const alertGenerateBtn = document.getElementById("alertGenerateBtn");
const alert = document.getElementById("alert");

form.addEventListener('submit', e => {
    e.preventDefault();
    showAlert();

    setTimeout(function(){ 
        hideAlert();
    }, 3000);
})


function showAlert(){
    alert.classList.add("show");
    alert.classList.remove("hide");
}

function hideAlert(){
    alert.classList.add("hide");
    alert.classList.remove("show");

    setTimeout(function(){ 
        alert.classList.remove("hide");
    }, 1000);
}