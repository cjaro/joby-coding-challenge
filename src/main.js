const baseUrl = "https://api.unsplash.com/search/photos/?";
// console.log(process.env.CLIENT_KEY);

let clientKey = "NR1uPmeGJFvBROFnXHhupA30iwHO-Uu4cfRi9haU5PA";
let unsplashQuery = "puppies";


let requestUrl = `${baseUrl}client_id=${clientKey}&query=${unsplashQuery}`;

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function constructPhotoCreditUrl(incomingJson) {
    var unsplashCreds = incomingJson["user"]["name"];
    var unsplashUserName = incomingJson["user"]["username"];
    return `<p>Photo by <a href='https://unsplash.com/@${unsplashUserName}'>${unsplashCreds}</a> 
        on <a href="https://unsplash.com/?utm_source=kitten-coding-challenge&utm_medium=referral">Unsplash</a></p>`;
}

function createImageElement(imageData) {
    const image = document.createElement("img");
    image.src = imageData["urls"]["raw"];
    image.alt = imageData["alt_description"];
    return image;
}

// perform new query? argh

async function fetchUnsplash(url, options){
    return fetch(url, options)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    let results = data["results"];
                    console.log(results)
                    for(let i = 0; i < results.length; i++) {
                        var image = createImageElement(data["results"][i]);
                        document.getElementById("fetchedUnsplashSrc").appendChild(image);
                        document.getElementById("unsplashImageLink").href += results[i]["urls"]["full"];
                        // document.getElementById("unsplashImageLink").appendChild(image);
                        document.getElementById("fetchedUnsplashSrc").innerHTML += constructPhotoCreditUrl(data["results"][i]);
                    }

                    var queryName = document.getElementById('queryTerm');
                    queryName.innerHTML = unsplashQuery;

                });
            } else {
                console.log("response failed :/ uwu");
            }
        } )
        .catch(error => console.log('error', error)
        );
}

fetchUnsplash(requestUrl, requestOptions);
