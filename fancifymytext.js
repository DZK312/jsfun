function set24pt() {
    document.getElementById("input_field").style.fontSize = "24pt";
    alert("Hello, world!");
}

function fancify() {
    document.getElementById("input_field").style.fontWeight = "bold";
    document.getElementById("input_field").style.color = "blue";
    document.getElementById("input_field").style.textDecoration = "underline";
    alert("Hello, world!");
}

function plainify() {
    document.getElementById("input_field").style.fontWeight = "normal";
    document.getElementById("input_field").style.color = "black";
    document.getElementById("input_field").style.textDecoration = "none";
    alert("Hello, world!");
}

function upperMoo() {
    document.getElementById("input_field").style.textTransform = "uppercase";
    let text = document.getElementById("input_field").value.toString();
    let splittext = text.split(".");
    text = splittext.join("-Moo.");
    document.getElementById("input_field").value = text;
}