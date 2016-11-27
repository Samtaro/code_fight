function perfectCity(departure, destination) {
    var xfloor = Math.abs(Math.abs(departure[0]-Math.floor(departure[0]))+ Math.abs(Math.floor(departure[0]) - destination[0]))
    var xceil = Math.abs(Math.abs(Math.ceil(departure[0]) - departure[0])+ Math.abs(Math.ceil(departure[0]) - destination[0]))
    var yfloor = Math.abs(Math.abs(departure[1]-Math.floor(departure[1]))+ Math.abs(Math.floor(departure[1]) - destination[1]))
    var yceil = Math.abs(Math.abs(Math.ceil(departure[1]) - departure[1])+ Math.abs(Math.ceil(departure[1]) - destination[1]))
    var distx = xfloor> xceil ? xceil : xfloor; 
    var disty = yfloor> yceil ? yceil: yfloor;
    
    return distx + disty
}

var departure = [0, 0.2]
var destination =[7, 0.5]

console.log(perfectCity(departure, destination))

