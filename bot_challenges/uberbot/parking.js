function parkingSpot(carDimensions, parkingLot, luckySpot) {
    //check to see if spot is free
    for (var row = luckySpot[0]; row <= luckySpot[2]; row++) {
        for (var col = luckySpot[1]; col <= luckySpot[3]; col++) {
            if (parkingLot[row][col]) {
                return false
            }
        }
    }
    if(luckySpot[3]-luckySpot[1] > luckySpot[2]-luckySpot[0]){
        //check to see if fits along x-axis
    var xbegin = true;
    var xend = true;
    for (var row = luckySpot[0]; row <= luckySpot[2]; row++) {
        for (var col = 0; col < luckySpot[1]; col++) {
            if (parkingLot[row][col]) {
                xbegin = false
            }
        }
        for (var col = luckySpot[3] + 1; col <= parkingLot[0].length; col++) {
            if (parkingLot[row][col]) {
                xend = false
            }
        }
    }
    return xend||xbegin
    }
    //check to see if fits along x-axis
    else{
    var ybegin = true;
    var yend = true;
    for(var col = luckySpot[1]; col <=luckySpot[3]; col++){
        for(var row = 0; row < luckySpot[2]; row++){
            if(parkingLot[row][col]){
                ybegin = false
            }
        }
        for(var row = luckySpot[2]; row <=parkingLot.length-1; row++){
            if(parkingLot[row][col]){
                yend = false
            }
        }
    }
    return yend||ybegin
    }
}

var carDimensions = [3,2]
var parkingLot = [[1,0,1,0,1,0], 
 [1,0,0,0,1,0], 
 [0,0,0,0,0,1], 
 [1,0,0,0,1,1]]
var luckySpot = [1, 1, 2, 3]
    //check row luckySpot[0-2] from luckySpot[1] to luckySpot[3] 
console.log(parkingSpot(carDimensions, parkingLot, luckySpot))
