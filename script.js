let krug = document.querySelector(".krug");
let spin = document.getElementById("button");
let strilka = document.querySelector(".strilka");
let dialog = document.getElementById("dialog");

spin.onclick = function () {
    // Генеруємо випадковий кут від 0 до 1000 градусів
    let number = Math.ceil(Math.random() * 1000);
    krug.style.transform = "rotate(" + number + "deg)";

    // Визначаємо, на який сектор вказує стрілка
    let sector = Math.floor(number / 45) + 1;

    // Виводимо відповідне повідомлення
    switch (sector) {
        case 1:
            dialog.textContent = "Ви виграли 1!";
            break;
        case 2:
            dialog.textContent = "Ви виграли 2!";
            break;
        case 3:
            dialog.textContent = "Ви виграли 3!";
            break;
        case 4:
            dialog.textContent = "Ви виграли 4!";
            break;
        case 5:
            dialog.textContent = "Ви виграли 5!";
            break;
        case 6:
            dialog.textContent = "Ви виграли 6!";
            break;
        case 7:
            dialog.textContent = "Ви виграли 7!";
            break;
        case 8:
            dialog.textContent = "Ви виграли 8!";
            break;
        default:
            dialog.textContent = "Спробуйте ще раз!";
            break;
    }
};
