var car = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    batteryCapacity: 100, 
    averageConsumption: 8,
    batteryCharge: 100,
    drive: function(distanta){
        this.batteryCharge -= 8 * distanta / 100
        document.write('Driving car')
    },
    fullcharge: function(){
        this.batteryCharge = this.batteryCapacity
    },
    paint: function(color){
        this.color = color
    }
}
document.write('The color is ' + car.color + '<br>')
car.paint('blue')
document.write('The color is ' + car.color + '<br>')
car.drive(300)
document.write('Charge:' + car.batteryCharge + '<br>')
car.fullcharge()
document.write('Charge:' + car.batteryCharge + '<br>')