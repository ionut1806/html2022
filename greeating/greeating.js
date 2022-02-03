var date = new Date()
var hour = date.getHours()

var startofNIGHT = 22
var endofNIGHT = 4


if (hour < 4) {
    document.write('Noapte buna!')  
} else if (hour < 12) {
    document.write('Buna dimineata!')
} else if (hour == 12) {
    document.write('Pofta buna!')
} else if (hour < 17) {
    document.write('Buna ziua!')  
} else if (hour < 22) {
    document.write('Buna seara!')  
} else {
    document.write('Noapte buna!')  
}

// solutie alternativa:
var startofNIGHT = 22
var endofNIGHT = 4
var isNIGHT = hour > startofNIGHT && hour < endofNIGHT
if (isNIGHT) {
    document.write('noapte buna')
}