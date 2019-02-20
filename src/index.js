// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let countCoins = {};
    const rating = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };

    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency <= 0){
        return countCoins;
    } else {
        for (let key in rating){
            if (currency >= rating[key]){
                const count = Math.floor(currency / rating[key]);
                currency = currency % rating[key];
                countCoins[key] = count;
            }
        }
        return countCoins;
    }
}
