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

function sendQuery() {
    searchQuery = document.getElementById("searchImages").value;
    let queryUrl = constructQueryUrl(clientKey, searchQuery);
    fetchUnsplash(queryUrl, requestOptions);
}

async function fetchUnsplash(url, options){
    return fetch(url, options)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    let results = data["results"];
                    const targetElem = document.getElementById("fetchedUnsplashSrc");
                    document.getElementById("queryTerm").innerHTML = searchQuery;

                    for(let i = 0; i < results.length; i++) {
                        targetElem.insertAdjacentHTML("beforeend",
                            `<div class="queryImage">
                                <a href="${results[i]['urls']['full']}">
                                    <img src="${results[i]['urls']['raw']}" alt="${results[i]['alt_description']}">
                                </a>
                                ${constructPhotoCreditUrl(results[i])}
                            </div>`
                        );
                    }
                });
            } else {
                console.log("response failed");
            }
        })
        .catch(error => console.log('Error:', error));
}
