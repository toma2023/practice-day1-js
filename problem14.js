function centiMeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}
const myMeter = centiMeterToMeter(1000);
console.log(myMeter);