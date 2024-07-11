const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let sum = 0;
 for(let i=0; i < batteryBatches.length; i++){
    sum += batteryBatches[i];
}
const totalBatteries = sum;
console.log(totalBatteries);


