
// 1) Rend moi la monnaie
const getMoneyCount = (moneyList, amount) => {
    if (amount < 0) return -1;

    let counter = 0;
    let result = 0;
    let currentAmount = amount;

    while (currentAmount > 0 && counter < moneyList.length){
        if (currentAmount >= moneyList[counter]) {
            currentAmount = currentAmount - Math.floor(currentAmount/moneyList[counter]) * moneyList[counter];
            result++;
        }
        counter++;
    }

    if (currentAmount === 0 ) return result;
    return -1;

}

// console.log(getMoneyCount([500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],626.5))
// console.log(getMoneyCount([500, 200, 100, 50, 20, 10, 5], 626.5))
// console.log(getMoneyCount([500, 200, 100, 50, 20, 10, 5], 625))

// 2) Des 1 et des 0 à devenir fou !

const getLonguestZeroSequenceLength = (number) => {
    const binary = decimalToBinary(number);
    console.log(binary);
    let max = 0;
    let currentCount = 0;

    for (let i = 0 ; i < binary.length ; i++){
        if (binary[i] === '1') {
            if (currentCount > max) {
                max = currentCount;
            }
            currentCount = 0;

        } else if (binary[i] === '0'){
            currentCount ++;
        }
    }

    return max > currentCount ? max : currentCount;

}

const decimalToBinary = (number) => {
    let binary = "";
    let currentNumber = number;

    while (currentNumber > 0 ){
        binary =  (currentNumber%2) + binary;
        currentNumber = Math.floor(currentNumber/2);
    }

    return binary;
}

// console.log(decimalToBinary(20));
// console.log(getLonguestZeroSequenceLength(12345));
// console.log(getLonguestZeroSequenceLength(65535));

// 3) Pic pic pic ! 