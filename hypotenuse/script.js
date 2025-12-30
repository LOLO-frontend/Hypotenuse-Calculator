let a;
let b;
let c = document.getElementById("c");
let an = document.getElementById("an");
let bn = document.getElementById("bn");

const button = document.getElementById("calculate");
button.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = Math.sqrt(a * a + b * b);
    document.getElementById("c").value = c.toFixed(2);
    console.log(c);
}

button.addEventListener("click", calculateAngleA);

function calculateAngleA() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = Math.sqrt(a * a + b * b);
    an = Math.asin(a / c) * (180 / Math.PI);
    document.getElementById("an").value = an.toFixed(2);
    console.log(an);
}
button.addEventListener("click", calculateAngleB);

function calculateAngleB() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = Math.sqrt(a * a + b * b);
    bn = Math.asin(b / c) * (180 / Math.PI);
    document.getElementById("bn").value = bn.toFixed(2);
    console.log(bn);
}
button.addEventListener("click", validateInputs);

function validateInputs() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    if(a == '' && b == ''){
        alert("Please enter values for sides a and b.");
    }
}