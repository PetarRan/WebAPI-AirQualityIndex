import {Favorites} from "./favorites.js"
import {glavnaKartica} from "./aqiGlavnaKartica.js"
import {Opis} from "./aqiDescription.js"
import service from './service.js'

const glavna = new glavnaKartica();
glavna.crtaj(document.getElementById("main-card"))

const opisBox = new Opis();
opisBox.crtaj(document.getElementById("info-container"))


service.getCards()
.then(cards => {
    const fav1 = new Favorites(cards);
    fav1.crtaj(document.getElementById("favorites"));
})




