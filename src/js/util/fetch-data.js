//This file contains function that will get data from API

function httpGetRequest (url){
    const request = fetch(url)
    .then(res => res.json())
    .then(result => result)

    return request
}


export {httpGetRequest}