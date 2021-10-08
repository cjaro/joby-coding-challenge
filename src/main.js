let clientKey = "NR1uPmeGJFvBROFnXHhupA30iwHO-Uu4cfRi9haU5PA";
let searchQuery;
const requestOptions = { method: 'GET', redirect: 'follow' };

function constructQueryUrl(clientKey, queryTerm) {
    const baseUrl = "https://api.unsplash.com/search/photos/?";
    return `${baseUrl}client_id=${clientKey}&query=${queryTerm}`;
}

function constructPhotoCreditUrl(incomingJson) {
    const unsplashCreds = incomingJson["user"]["name"];
    const unsplashUserName = incomingJson["user"]["username"];
    return `<p>Photo by <a href='https://unsplash.com/@${unsplashUserName}'>${unsplashCreds}</a> 
        on <a href="https://unsplash.com/?utm_source=kitten-coding-challenge&utm_medium=referral">Unsplash</a></p>`;
}

function iterateResults(queryResults){
    const targetElem = document.getElementById("fetchedUnsplashSrc");

    for(let i = 0; i < queryResults.length; i++) {
        targetElem.insertAdjacentHTML(
            "beforeend",
            `<div class="queryImage">
                      <a href="${queryResults[i]['urls']['full']}">
                          <img src="${queryResults[i]['urls']['raw']}" alt="${queryResults[i]['alt_description']}">
                      </a>
                      ${constructPhotoCreditUrl(queryResults[i])}
                  </div>`
        );
    }
}

async function fetchUnsplash(url, options){
    return fetch(url, options)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    iterateResults(data["results"]);
                });
            } else {
                console.log("response failed");
            }
        })
        .catch(error => console.log('Error:', error));
}

function sendQuery() {
    searchQuery = document.getElementById("searchImages").value;
    let queryUrl = constructQueryUrl(clientKey, searchQuery);
    fetchUnsplash(queryUrl, requestOptions);
}
