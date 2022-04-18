function deleteme() {

    document.getElementById("myresult").value = "";
}

function calculator(Newvalue) {

    document.getElementById("myresult").value += Newvalue;
}

function Answer() {
    let a = document.getElementById("myresult").value;
    let b = eval(a);
    document.getElementById("myresult").value = b;
}