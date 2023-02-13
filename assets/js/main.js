const sellPageBtn = document.getElementById('sellpage-button');
const homePageBtn = document.getElementById('homepage-button');
const factoryPageBtn = document.getElementById('factorypage-button');
const homePage = document.getElementById('home-page');
const factoryPage = document.getElementById('factory-page');
const sellPage = document.getElementById('sell-page');
const mainBtnClick = document.getElementById('click-button');
const upgradeBtnClick = document.getElementById('upgrade-auto-click');
const bodyListen = document.getElementById('body');

let timesClicked = 0;
let autoClickLevel = 0;

function btnClick() {
    if (timesClicked < 9999) {
        timesClicked++;
    } else {
        window.location.reload()
    }
    upgradeChecker();
    if (timesClicked >= 100) {
        document.getElementById('cookie-factory-banner').style.display = "none"
    } else {
        document.getElementById('cookie-factory-banner').style.display = "flex"
    }
    document.getElementById('total-amount').innerHTML = timesClicked;
    return true
}

function upgradeChecker() {
    if (timesClicked >= 150) {
        document.getElementById('auto-click-button-banner').style.display = "none";
        document.getElementById('upgrade-auto-click').classList.add('upgrade-active');
    }
}

function factoryChecker() {
    if (timesClicked >= 100) {
        document.getElementById('cookie-factory-banner').style.display = "none";
    } else {
        document.getElementById('cookie-factory-banner').style.display = "flex";
    }
}

function autoClick() {
    timesClicked += autoClickLevel;
    upgradeChecker();
    document.getElementById('total-amount').innerHTML = timesClicked;
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

upgradeBtnClick.addEventListener('click', function () {
    if (timesClicked >= 150) {
        timesClicked -= 150;
        autoClickLevel++;
    }
    document.getElementById('persecond-amount').innerHTML = autoClickLevel;
    document.getElementById('total-amount').innerHTML = timesClicked;
    if (timesClicked < 150) {
        document.getElementById('auto-click-button-banner').style.display = "block";
        document.getElementById('upgrade-auto-click').classList.remove('upgrade-active');
    }
})


if (autoClickLevel >= 0) {
    setInterval(() => { autoClick(); }, 1000);
}


mainBtnClick.onclick = function () { btnClick() }
bodyListen.onmouseover = function () { factoryChecker() };



