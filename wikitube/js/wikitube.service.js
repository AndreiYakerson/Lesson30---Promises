'use strict'

const API_KEY = 'AIzaSyCwAaZlWvcszKEQu8xzVVyHMNehdeaw7pw'
let searchTxt = ''

function getData(searchTxt) {
    let gData = loadFromStorage(searchTxt) || null

    if (gData) {
        console.log('FROM CASH!');
        return Promise.resolve(gData)
    }

    let TUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${searchTxt}`

    return fetch(TUBE_API)
        .then(res => res.json())
        .then(data => {
            saveToLocaleStorage(searchTxt, data)
            return data
        })

}

function changeSearchTxt(txt) {
    searchTxt = txt
    console.log(txt);

}

function getSearchTxt() {
    return searchTxt
}