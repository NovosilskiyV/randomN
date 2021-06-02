const Number = document.getElementById("number");
const loader = document.getElementById("loader");
const Button = document.getElementById("button");

function mains() {
    function interv() {
        let im = document.getElementById("imgs").innerHTML = '<img src="numbers.gif" alt="" srcset="">';
    }
    function randomInt() {
        let im = document.getElementById("imgs").innerHTML = `<h1>Випало число:  ${(Math.round(Math.random() * 100))}</h1>`;
    }
    setTimeout(interv, 1000);
    setTimeout(randomInt, 3000);
            }
