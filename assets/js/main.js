import { intToString } from "./shorten.js";
// import { autoClick } from "./functions.js";
// import { btnClick } from "./functions.js";
// import { factoryChecker } from "./functions.js";
// import { upgradeChecker } from "./functions.js";

const sellPageBtn = document.getElementById('sellpage-button');
const homePageBtn = document.getElementById('homepage-button');
const factoryPageBtn = document.getElementById('factorypage-button');
const homePage = document.getElementById('home-page');
const factoryPage = document.getElementById('factory-page');
const sellPage = document.getElementById('sell-page');
const mainBtn = document.getElementById('click-button');
const upgradeAutoBtn = document.getElementById('upgrade-auto-click');
const upgradeImproveBtn = document.getElementById('upgrade-improve-click');
const bodyListen = document.getElementById('body');

const upgradeLevels = [0, 1, 2, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 100000];
// const upgradePrice = [150, 300, 500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];
const upgradePrice = [150, 300, 500, 2500, 10000, 50000, 250000, 500000, 1000000, 2000000, 5000000, 20000000, 100000000];



window.moneyBalance = 0;
var improveClickLevel = 1;
var autoClickLevel = 0;

function btnClick() {
    moneyBalance += upgradeLevels[improveClickLevel];
    upgradeChecker();
    factoryChecker();
    document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
}

function upgradeChecker() {
    if (moneyBalance >= upgradePrice[autoClickLevel] && autoClickLevel < (upgradeLevels.length - 1)) {
        document.getElementById('auto-click-button-banner').style.display = "none";
        document.getElementById('upgrade-auto-click').classList.add('upgrade-active');
    } else {
        document.getElementById('auto-click-button-banner').style.display = "block";
        document.getElementById('upgrade-auto-click').classList.remove('upgrade-active');
    }
    if (moneyBalance >= upgradePrice[improveClickLevel] && improveClickLevel < (upgradeLevels.length - 1)) {
        document.getElementById('improve-click-button-banner').style.display = "none";
        document.getElementById('upgrade-improve-click').classList.add('upgrade-active');
    } else {
        document.getElementById('improve-click-button-banner').style.display = "block";
        document.getElementById('upgrade-improve-click').classList.remove('upgrade-active');
    }
}

function factoryChecker() {
    if (moneyBalance >= 100) {
        document.getElementById('cookie-factory-banner').style.display = "none";
    } else {
        document.getElementById('cookie-factory-banner').style.display = "flex";
    }
}

function autoClick() {
    moneyBalance += upgradeLevels[autoClickLevel];
    upgradeChecker();
    factoryChecker();
    document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
}


function factoryPageBtnClick() {
    homePage.style.display = "none";
    factoryPage.style.display = "grid";
    if(window.screen.width <= 767){
        document.getElementById('items-counters').style.display = "none";
    }
})

function homePageBtnClick() {
    if (homePage.style.display != "flex") {
        factoryPage.style.display = "none";
        homePage.style.display = "flex";
        if(window.screen.width <= 767){
        document.getElementById('items-counters').style.display = "flex";
    }
        // sellPage.style.display = "none"
    } else {
        document.getElementById('home-suka').play();
    }
}

homePageBtn.onclick = homePageBtnClick;

function mainBtnClick() {
    document.getElementById('click-audio').play();
}

mainBtn.onclick = mainBtnClick;

function upgradeAutoBtnClick() {
    if (moneyBalance >= upgradePrice[autoClickLevel] && autoClickLevel < (upgradeLevels.length - 1)) {
        moneyBalance -= upgradePrice[autoClickLevel];
        autoClickLevel++;
        document.getElementById('auto-click-price').innerHTML = intToString(upgradePrice[autoClickLevel]);
    }
    upgradeChecker();
    factoryChecker();
    if (autoClickLevel == (upgradeLevels.length - 1)) {
        document.getElementById('auto-click-dollar').innerHTML = "LVL MAX";
    }
    document.getElementById('persecond-amount').innerHTML = intToString(upgradeLevels[autoClickLevel]);
    document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
}

upgradeAutoBtn.onclick = upgradeAutoBtnClick;

function upgradeImproveBtnClick() {
    if (moneyBalance >= upgradePrice[improveClickLevel] && improveClickLevel < (upgradeLevels.length - 1)) {
        moneyBalance -= upgradePrice[improveClickLevel];
        improveClickLevel++;
        document.getElementById('improve-click-price').innerHTML = intToString(upgradePrice[improveClickLevel]);
    }
    upgradeChecker();
    factoryChecker();
    if (improveClickLevel == (upgradeLevels.length - 1)) {
        document.getElementById('improve-click-dollar').innerHTML = "LVL MAX";
    }
    document.getElementById('amout-by-click').innerHTML = intToString(upgradeLevels[improveClickLevel]);
    document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
}

upgradeImproveBtn.onclick = upgradeImproveBtnClick;

mainBtnClick.onclick = function () { btnClick() };
mainBtnClick.oncontextmenu = function () { btnClick() };


if (autoClickLevel >= 0) {
    setInterval(() => { autoClick(); }, 1000);
}

console.log(upgradeLevels.length);










