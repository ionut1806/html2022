
var i = 2
var j = 1
var v = 3
var max = 10

while (j <= max) {
    //string cu concatenare: 
    var message = j +'x' + i +'='+ i*j + '<br>'
    // string cu interpolare:
    message = `${j} x ${i} = ${j*i} <br> ` 
    document.write(message) 
    j++
}


document.write('<br>')

for(i = 1; i <= max; i++ ){
    for(let j = 1; j <= 10; j++) {
        message = `${j} x ${i} = ${j*i} <br> ` 
        document.write(message) 
    }
    document.write('<br>')
}