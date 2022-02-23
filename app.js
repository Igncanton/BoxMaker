const addBtn = document.getElementById('btnAdd');
const removeBtn = document.getElementById('btnRemove');
const resetBtn = document.getElementById('btnReset');
const main = document.querySelector('.main');

const btnRedApp = document.querySelector('.btnRed');
const btnShakeRed = document.querySelector('.shakeRed')

const boxChecker = function () {

    if (main.childNodes.length > 1) {
        removeBtn.classList.add('btn');
        removeBtn.classList.remove('btnRed');
        // removeBtn.classList.remove('shakeRed');
    } else {
        removeBtn.classList.remove('btn');
        removeBtn.classList.add('btnRed');
    }


    if (main.childNodes.length <= 9) {
        addBtn.classList.add('btn');
        addBtn.classList.remove('btnRed');
        // addBtn.classList.remove('shakeRed');
    } else {
        addBtn.classList.add('btnRed');
        addBtn.classList.remove('btn');
        // addBtn.classList.add('shakeRed');
    }

}

addBtn.addEventListener('click', function () {

    if (main.childNodes.length <= 9) {

        const newDiv = document.createElement('div');

        main.appendChild(newDiv);

        const newDivBlack = newDiv.classList.add('blackDiv');

    }

    boxChecker();

})

removeBtn.addEventListener('click', function () {

    if (main.childNodes.length > 1) {
        const newDiv = main.querySelector('div');
        main.removeChild(newDiv);
    }

    boxChecker();

})

// while (main.childNodes.length >= 1) {
//     removeBtn.classList.add('btn');
//     removeBtn.classList.remove('btnRed');
// } else {
//     removeBtn.classList.remove('btn');
//     removeBtn.classList.add('btnRed')
// }

let shakeRed = btnRedApp.setTimeout(function () {
    btnRedApp.classList.add('shakeRed'), 2000;

    btnRedApp.classList.remove('shakeRed'), 3000;
})

btnRedApp.addEventListener('click', function () {
    shakeRed();
})

resetBtn.addEventListener('click', function () {

    main.querySelectorAll('.blackDiv').forEach(n => n.remove());

    boxChecker();
})




