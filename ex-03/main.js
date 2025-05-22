'use strict'

function add(prmX, prmY) {
    console.log('Loading...');
    
    return Promise.all([prmX, prmY])
        .then(values => {
            return values[0] + values[1]
        })
}

// `fetchX()` should return a promise that is resolved to 25 immediately  
// `fetchY()` should return a promise that is resolved after 2 seconds to 17 
add(fetchX(), fetchY())
    .then(sum => {
        console.log(sum)
    })

function fetchX() {
    return Promise.resolve(25)
}

function fetchY() {
    return new Promise(resolve => setTimeout(resolve, 2000, 17))
}