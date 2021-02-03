//api:$ curl -i "https://api.waqi.info/feed/geo:10.3;20.7/?token=demo"
//api token: aca585867e912f1c58ed1dc0892b7121754c09d5
import service from './service.js'
import { Favorites } from './favorites.js'

var aqiValue;
var city;

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    let notificationEl = document.querySelector(".notification")
    notificationEl.style.display = "block";
    notificationEl.innerHTML = "<p>Geolokacija nije dostupna</p>"
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getAqi(latitude, longitude);
}

function showError(error) {
    let notificationEl = document.querySelector(".notification")
    notificationEl.style.display = "block";
    notificationEl.innerHTML = `<p> ${error.message} </p>`
}

//api data
let key = "aca585867e912f1c58ed1dc0892b7121754c09d5";

function searchCity() {
    var keyword = prompt("Unesite lokaciju za koju zelite da znate AQI", "London");
    if (keyword != null)
        searchAqi(keyword)
}

function getAqi(latitude, longitude) {
    let api = `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${key}`

    //console.log(api)

    window.onload = fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function ({ data }) {
            console.log(data)
            aqiValue = data.aqi;
            city = data.city.name;
        })
        .then(() => {
            displayAqi();
        })
}

function displayAqi() {
    let aqiDesc = document.querySelector(".aqi-description p")
    let iconElement = document.querySelector(".aqi-icon")
    let aqIndex = document.querySelector(".aqi-index-value p")
    let aqiLocation = document.querySelector(".location p")
    let addToFavButton = document.getElementById('buttonFav')
    let searchButton = document.getElementById('search')

    if (aqiValue == "-" || aqiValue == undefined) {
        aqiDesc.innerHTML = "Nema informacija."
    }
    else if (aqiValue < 51) {
        aqiDesc.innerHTML = "Čist Vazduh";
    }
    else if (aqiValue < 101) {
        aqiDesc.innerHTML = "Umereno Zagađen"
    }
    else if (aqiValue < 151) {
        aqiDesc.innerHTML = "Zagađen"
    }
    else {
        aqiDesc.innerHTML = "Otrovno i Nezdravo"
    }


    if (aqiValue == "-" || aqiValue == undefined) {
        iconElement.innerHTML = '<i class="far fa-meh-blank" style="color:rgb(52,195,39);"></i>'
    }
    else if (aqiValue < 51) {
        iconElement.innerHTML = '<i class="far fa-smile" style="color:rgb(52,195,39);"></i>'
    }
    else if (aqiValue < 101) {
        iconElement.innerHTML = '<i class="far fa-grin-beam-sweat" style="color:rgb(228,196,27);"></i>'
    }
    else if (aqiValue < 151) {
        iconElement.innerHTML = '<i class="far fa-grimace" style="color:rgb(255,155,38);"></i>'
    }
    else {
        iconElement.innerHTML = '<i class="far fa-sad-tear" style="color:rgb(255,35,35);"></i>'
    }

    aqIndex.innerHTML = `${aqiValue}`
    aqiLocation.innerHTML = `${city}`

    // Uhvati dugme za addToFav
    window.asdf = addToFavButton

    addToFavButton.onclick = function () { addToFav(city, aqiValue) }
    searchButton.onclick = function () { searchCity() }

}


async function updateState() {
    console.log('=============Update cards=================')
    const cards = await service.getCards()
    const fav1 = new Favorites(cards);
    const el = document.getElementById("favorites")
    fav1.crtaj(el);
}

async function addToFav(city, aqiValue) {
    const url = 'https://localhost:5001/AQI/UpisKartice'
    const dataArr = await service.getCards();

    const existingCityCard = dataArr.find(card => card.city === city)
    if (existingCityCard) {
        const data = Object.assign({}, existingCityCard, {aqi: aqiValue})
        console.log(data)
        service.updateCard(JSON.stringify(data))
            .then(() => {
                updateState()
            })
            .catch(e => {
                console.log('e', e)
            })
    } else {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ city, aqi: aqiValue }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(async res => {
                updateState()
            })

    }
}



function searchAqi(keyword) {
    let api = `https://api.waqi.info/search/?token=${key}&keyword=${keyword}`
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function ({ data }) {
            console.log(data)
            aqiValue = data[0].aqi;
            city = data[0].station.name;
        })
        .then(() => {
            displayAqi();
        })
}

function addToFavorites() {
    let favForm = document.getElementById("favBox")
    favForm.style.display = "flex";
    let newFavCard = document.createElement("div")
    newFavCard.classList.add("fav-card")
    newFavCard.innerHTML = `<p>${city} - ${aqiValue}AQI</p> <p><button class="remove-button" onclick="removeFavorites(this)"><i class="fa fa-remove"></i></button></p>`
    favForm.appendChild(newFavCard)

}

function removeFavorites(el) {
    el = el.parentNode
    el.parentNode.parentNode.removeChild(el.parentNode);

}
