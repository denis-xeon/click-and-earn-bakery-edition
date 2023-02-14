import { intToString } from "./shorten.js";

const sellPageBtn = document.getElementById('sellpage-button');
const homePageBtn = document.getElementById('homepage-button');
const factoryPageBtn = document.getElementById('factorypage-button');
const homePage = document.getElementById('home-page');
const factoryPage = document.getElementById('factory-page');
const sellPage = document.getElementById('sell-page');
const mainBtnClick = document.getElementById('click-button');
const upgradeAutoBtnClick = document.getElementById('upgrade-auto-click');
const upgradeImproveBtnClick = document.getElementById('upgrade-improve-click');
const bodyListen = document.getElementById('body');

const upgradeLevels = [0, 1, 2, 5, 10, 20, 50, 100];
const upgradePrice = [150, 300, 500, 1000, 2000, 5000, 10000];

// (function () {

    let moneyBalance = 0;
    let improveClickLevel = 1;
    let autoClickLevel = 0;

    function btnClick() {
        if (moneyBalance < 99999) {
            moneyBalance += upgradeLevels[improveClickLevel];
        } else {
            window.location.reload()
        }
        upgradeChecker();
        factoryChecker();
        // if (moneyBalance >= 100) {
        //     document.getElementById('cookie-factory-banner').style.display = "none"
        // } else {
        //     document.getElementById('cookie-factory-banner').style.display = "flex"
        // }
        document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
        // document.getElementById('total-amount').innerHTML = moneyBalance;
        return true
    }

    function upgradeChecker() {
        if (moneyBalance >= upgradePrice[autoClickLevel] && autoClickLevel < (upgradeLevels.length - 1)) {
            document.getElementById('auto-click-button-banner').style.display = "none";
            document.getElementById('upgrade-auto-click').classList.add('upgrade-active');
        }
        if (moneyBalance >= upgradePrice[improveClickLevel] && improveClickLevel < (upgradeLevels.length - 1)) {
            document.getElementById('improve-click-button-banner').style.display = "none";
            document.getElementById('upgrade-improve-click').classList.add('upgrade-active');
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
        // document.getElementById('total-amount').innerHTML = moneyBalance;
    }

    factoryPageBtn.addEventListener('click', function () {
        homePage.style.display = "none";
        factoryPage.style.display = "grid";

    })

    homePageBtn.addEventListener('click', function () {
        if (homePage.style.display != "flex") {
            factoryPage.style.display = "none";
            homePage.style.display = "flex";
            // sellPage.style.display = "none"
        } else {
            document.getElementById('home-suka').play();
        }
    })

    mainBtnClick.addEventListener('click', function () {
        document.getElementById('click-audio').play();
    })

    upgradeAutoBtnClick.addEventListener('click', function () {
        if (moneyBalance >= upgradePrice[autoClickLevel] && autoClickLevel < (upgradeLevels.length - 1)) {
            moneyBalance -= upgradePrice[autoClickLevel];
            autoClickLevel++;
            document.getElementById('auto-click-price').innerHTML = intToString(upgradePrice[autoClickLevel]);
        }
        if (moneyBalance < upgradePrice[autoClickLevel] || autoClickLevel >= (upgradeLevels.length - 1)) {
            document.getElementById('auto-click-button-banner').style.display = "block";
            document.getElementById('upgrade-auto-click').classList.remove('upgrade-active');
        }
        if (autoClickLevel == (upgradeLevels.length - 1)) {
            document.getElementById('auto-click-dollar').innerHTML = "LVL MAX";
        }

        document.getElementById('persecond-amount').innerHTML = upgradeLevels[autoClickLevel];
        document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
        // document.getElementById('total-amount').innerHTML = moneyBalance;
    })

    upgradeImproveBtnClick.addEventListener('click', function () {
        if (moneyBalance >= upgradePrice[improveClickLevel] && improveClickLevel < (upgradeLevels.length - 1)) {
            moneyBalance -= upgradePrice[improveClickLevel];
            improveClickLevel++;
            document.getElementById('improve-click-price').innerHTML = intToString(upgradePrice[improveClickLevel]);
        }
        if (moneyBalance < upgradePrice[improveClickLevel] || improveClickLevel >= (upgradeLevels.length - 1)) {
            document.getElementById('improve-click-button-banner').style.display = "block";
            document.getElementById('upgrade-improve-click').classList.remove('upgrade-active');
        }
        if (improveClickLevel == (upgradeLevels.length - 1)) {
            document.getElementById('improve-click-dollar').innerHTML = "LVL MAX";
        }

        document.getElementById('amout-by-click').innerHTML = upgradeLevels[improveClickLevel];
        document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
        // document.getElementById('total-amount').innerHTML = moneyBalance;
    })

    mainBtnClick.onclick = function () { btnClick() };

    if (autoClickLevel >= 0) {
        setInterval(() => { autoClick(); }, 1000);
    }

    // if (moneyBalance >= 100) {
    //     document.getElementById('cookie-factory-banner').style.display = "none";
    // } else {
    //     document.getElementById('cookie-factory-banner').style.display = "flex";
    // }

    

// })();





