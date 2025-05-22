'use strict'

compareToTen(15)
    .then(result => console.log(result)) // Should Print: 15 is Valid 
    .catch(error => console.log(error))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))


function compareToTen(num) {
    // if (num >= 10) return Promise.resolve('Valid')
    // else return Promise.reject('Give me more')

    return num >= 10 ? Promise.resolve('Valid') : Promise.reject('Give me more')
}