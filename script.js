let krug = document.querySelector(".krug");
let spin = document.getElementById("button");
spin.onclick = function () {
    let number = Math.ceil(Math.random() * 1000);
    krug.style.transform = "rotate(" + number + "deg)";

    let sector = Math.floor(number / 45) + 1;
};
