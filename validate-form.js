const pass1 = document.querySelector("#pass");
const pass2 = document.querySelector("#pass2");
const warn = document.querySelector("#warn");

pass1.addEventListener("keyup", () => passwordsMatch(pass1, pass2))
pass2.addEventListener("keyup", () => passwordsMatch(pass1, pass2))

function passwordsMatch(pass1, pass2) {
    if (pass1.value != pass2.value) {
        warn.style.display = "block";
    } else {
        warn.style.display = "none";
    }
}