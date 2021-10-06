
const baseUrl = "https://api.unsplash.com/search/photos/?";

// console.log(process.env.CLIENT_KEY);

let clientKey = "NR1uPmeGJFvBROFnXHhupA30iwHO-Uu4cfRi9haU5PA";
let unsplashQuery = "kittens";

let requestUrl = `${baseUrl}client_id=${clientKey}&query=${unsplashQuery}`;

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function iterateApiResponse(incomingJson) {
    let imageUrl = "";

    for(let i = 0; i < incomingJson["results"].length; i++) {
        let imgSrc = incomingJson["results"][i]["url"]["raw"];
        console.log(imgSrc);
    }
    return imageURl;
}

async function fetchUnsplash(url, options){
    return fetch(url, options)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    console.log(data["results"])
                    for(let i = 0; i < data["results"].length; i++) {
                        console.log(data["results"][i]["urls"]["raw"]);
                        var imageSrc = data["results"][i]["urls"]["raw"];
                        var unsplashCreds = data["results"][i]["user"]["name"];
                        var unsplashUserName = data["results"][i]["user"]["username"];
                        document.getElementById("fetchedUnsplashSrc").innerHTML = `<img src=${imageSrc} alt="unsplash image">`;
                        document.getElementById("fetchedUnsplashCreds").innerHTML = `Photo by <span><a href='https://unsplash.com/@${unsplashUserName}'>${unsplashCreds}</a></span>`;
                    }

                    var queryName = document.getElementById('queryTerm');
                    queryName.innerHTML = unsplashQuery;

                    var selectedElement = document.getElementById('unsplash');
                    selectedElement.innerHTML += '<pre><code>' + JSON.stringify({data}, null, 4) + '</code></pre>';
                    // iterateApiResponse(JSON.stringify(data));
                });
            } else {
                console.log("response failed");
            }
        } )
        .catch(error => console.log('error', error)
        );
}


fetchUnsplash(requestUrl, requestOptions);
