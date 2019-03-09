// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let arrMoney = [50, 25, 10, 5, 1];
    var obj = {};

    if (currency <= 0) return obj;

    if (currency >= 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" }; //правильный синтаксис??
    /*var obj = {
        key1: value1,
        key2: value2
    };
    /*H, Q, D, N and P*/
   
    for (let i = 0; i < 5; i++) {
        if (currency / arrMoney[i] >= 1) {
            devideMoney(currency, arrMoney[i], obj);
            currency -= Math.floor(currency / arrMoney[i]) * arrMoney[i];
        }
    }
    return obj
}

function devideMoney(currency, n, obj) {

    if (n == 50) { obj.H = Math.floor(currency / n); }
    else if (n == 25) { obj.Q = Math.floor(currency / n); }
    else if (n == 10) { obj.D = Math.floor(currency / n); }
    else if (n == 5) { obj.N = Math.floor(currency / n); }
    else if (n == 1) { obj.P = currency; }
}

