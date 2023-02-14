import { moneyBalance } from "./main";
import { improveClickLevel } from "./main";
import { autoClickLevel } from "./main";
import { upgradeLevels } from "./main";
import { upgradePrice } from "./main";

export function btnClick(moneyBalance) {
    // if (moneyBalance < 99999) {
    //     moneyBalance += upgradeLevels[improveClickLevel];
    // } else {
    //     window.location.reload()
    // }
    moneyBalance += upgradeLevels[improveClickLevel];
    upgradeChecker();
    factoryChecker();
    // if (moneyBalance >= 100) {
    //     document.getElementById('cookie-factory-banner').style.display = "none"
    // } else {
    //     document.getElementById('cookie-factory-banner').style.display = "flex"
    // }
    document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
    // document.getElementById('total-amount').innerHTML = moneyBalance;
    return moneyBalance;
}

// export function upgradeChecker() {
//     if (moneyBalance >= upgradePrice[autoClickLevel] && autoClickLevel < (upgradeLevels.length - 1)) {
//         document.getElementById('auto-click-button-banner').style.display = "none";
//         document.getElementById('upgrade-auto-click').classList.add('upgrade-active');
//     }else{
//         document.getElementById('auto-click-button-banner').style.display = "block";
//         document.getElementById('upgrade-auto-click').classList.remove('upgrade-active');
//     }
//     if (moneyBalance >= upgradePrice[improveClickLevel] && improveClickLevel < (upgradeLevels.length - 1)) {
//         document.getElementById('improve-click-button-banner').style.display = "none";
//         document.getElementById('upgrade-improve-click').classList.add('upgrade-active');
//     }else{
//         document.getElementById('improve-click-button-banner').style.display = "block";
//         document.getElementById('upgrade-improve-click').classList.remove('upgrade-active');
//     }
// }

// export function factoryChecker() {
//     if (moneyBalance >= 100) {
//         document.getElementById('cookie-factory-banner').style.display = "none";
//     } else {
//         document.getElementById('cookie-factory-banner').style.display = "flex";
//     }
// }

// export function autoClick() {
//     moneyBalance += upgradeLevels[autoClickLevel];
//     upgradeChecker();
//     factoryChecker();
//     document.getElementById('total-amount').innerHTML = intToString(moneyBalance);
//     // document.getElementById('total-amount').innerHTML = moneyBalance;
// }