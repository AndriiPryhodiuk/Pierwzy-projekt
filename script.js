let krug = document.querySelector(".krug");
let spinButton = document.getElementById("button");
let strilka = document.querySelector(".strilka");
const offset = -22.5;
const rozmiarSectora = 45;

spinButton.onclick = function () {
    let stopnie = Math.ceil(Math.random() * 3600);
    krug.style.transform = "rotate(" + -stopnie + "deg)";
    const realStopni = stopnie % 360;
    const numerSectora = policzSektor(realStopni);
};

function policzSektor(realStopni) {
    const numerSectora = (realStopni - offset) / rozmiarSectora;

    return Math.ceil(numerSectora);
}
