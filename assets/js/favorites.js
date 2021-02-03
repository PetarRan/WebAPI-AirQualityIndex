import service from "./service.js";

export class Favorites{


    constructor(dataArray){
        this.data = dataArray
        this.kontejner = document.createElement("div");
        this.brKartica = 0;
        this.nizKartica = [] //aux
    }

    dodajKarticu(kartica){
        this.nizKartica.push(kartica);
    }

    removeItem(id) {

        service.removeItem(id)
        .then(() => {
        const cards = service.getCards()
        const fav1 = new Favorites(cards);
        const el = document.getElementById("favorites")
        fav1.crtaj(el);
        })
    }

    removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    crtaj(host){
        if(!host){
            throw new Exception("Element ne posotji");
        }

        //TODO pre svega dalje obrisi sve kartice iz hosta jer ce ovaj kod dole za sve kartice koje su stigle sa bekenda da napravi nove
        this.removeAllChildNodes(host)

        this.kontejner.classList.add("fav-container");
        this.kontejner.id = "favBox";

        this.data.forEach(kartica =>{
            const karticaForm = document.createElement("div");
            karticaForm.className = "fav-card";
            karticaForm.innerHTML = `
            <p>${kartica.city} - ${kartica.aqi}AQI</p>`
            const removeButton = document.createElement('button')
            removeButton.id = kartica.id
            removeButton.innerHTML = `<i class="fa fa-remove"></i>`
            removeButton.className = "remove-button"
            removeButton.onclick = () => this.removeItem(kartica.id)
            karticaForm.appendChild(removeButton)
            this.kontejner.appendChild(karticaForm)
            this.brKartica++;
            this.dodajKarticu(kartica);

            // const kartica = new Card(kartica)
            // html = kartica.getNode()
            // this.kontejner.appendChild(html)
        })
        host.appendChild(this.kontejner);
    }

   

}