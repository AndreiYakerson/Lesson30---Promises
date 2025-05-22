'use strict'

makeAllCaps(['cucumber', 'tomatos', 'avocado'])
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(['cucumber', 44, true])
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))



function sortWords(arr) {
    const sortedArr = arr.sort((w1, w2) => w1.localeCompare(w2))
    return Promise.resolve(sortedArr)
}

function makeAllCaps(arr) {
    const isString = arr.some(item => typeof item !== 'string')
    
    if (isString) {
        return Promise.reject('Something went wrong')
    } else {
        return Promise.resolve(arr)
    }
}



