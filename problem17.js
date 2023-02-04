function getPositiveNumbersOfAnArray(numbers){
    const positiveNumbers = [];
    for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element>=0){
            console.log(index, element);
            positiveNumbers.push(element);
        }
    }
    return positiveNumbers;
}
const myNumbers = [45, 87, 96, 11, 63, -56, 71, 28];
const positiveNumbers = getPositiveNumbersOfAnArray(myNumbers);
console.log(positiveNumbers);