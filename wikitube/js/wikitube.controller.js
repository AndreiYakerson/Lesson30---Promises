'use strict'



function renderMainVideo(id) {
    const elMainVideo = document.querySelector('iframe')
    elMainVideo.src = `https://www.youtube.com/embed/${id}`
}


function renderVideoResults(data) {
    const elResult = document.querySelector('.video-results')
    let strHTML = ''




    data.items.forEach(item => {
        console.log(item);

        strHTML += `
        <article onclick="onCardClick('${item.id.videoId}')" class="video-card">
        <img class="card-img" src="${item.snippet.thumbnails.default.url}">
        <div class="card-info">
        <h3 class="card-title">${item.snippet.title}</h3>
        <p class="card-dis">${item.snippet.description}</p>
        </div>
        </article>
        `
    })

    elResult.innerHTML = strHTML
    return data
}




function onSearchClick(ev) {
    ev.preventDefault()

    const searchValue = document.querySelector('.search.input').value

    getData(searchValue)
        .then(renderVideoResults)

    // console.log(getData('nba'));


}

function onCardClick(id) {
    renderMainVideo(id)

    const targetElement = document.getElementById('header');
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
