export class glavnaKartica{

    constructor(){
        this.aqiValue=0;
        this.kontejner = document.createElement("div")
    }


    crtaj(host){
        
        if(!host){
            throw new Exception("Element ne posotji");
        }

        this.kontejner.classList.add("container2");
        
        function crtajTitl(host){
            if(!host){
                throw new Exception("Element ne posotji");
            }
            let forma = document.createElement("div");
            forma.className = "app-title";
            forma.innerHTML = "<p>Indeks Zagađenja Vazduha</p>"
    
            host.appendChild(forma);
        }

        function crtajNotifikacije(host){
            if(!host){
                throw new Exception("Element ne posotji");
            }
    
            let forma = document.createElement("div");
            forma.className = "notification";
            host.appendChild(forma);
        }

        function crtajKontejner(host){
            if(!host){
                throw new Exception("Element ne posotji");
            }
    
            let containerForma = document.createElement("div");
            containerForma.className = "aqi-container"

            function crtajIkonicu(host){
                if(!host){
                    throw new Exception("Element ne posotji");
                }
        
                let forma = document.createElement("div");
                forma.className = "aqi-icon"
                forma.innerHTML = `<i class="far fa-meh-blank"></i>`
        
                host.appendChild(forma)
            }

            function crtajValue(host){
                if(!host){
                    throw new Exception("Element ne posotji");
                }
        
                let forma = document.createElement("div");
                forma.className = "aqi-index-value"
                forma.innerHTML = `<p id="card-index">-</p>`
        
                host.appendChild(forma)
        
            }

            function crtajDescription(host){
                if(!host){
                    throw new Exception("Element ne posotji");
                }
                let forma = document.createElement("div")
                forma.className = "aqi-description"
                forma.innerHTML = "<p>-</p>"
        
                host.appendChild(forma)
            }

            function  crtajLokaciju(host){
                if(!host){
                    throw new Exception("Element ne posotji");
                }
                let forma = document.createElement("div")
                forma.className = "location"
                forma.innerHTML = `<p id="card-loc">-</p>`

                host.appendChild(forma)
            }

            function  crtajFavButton(host){
                if(!host){
                    throw new Exception("Element ne posotji");
                }
                let forma = document.createElement("div")
                forma.className = "fav"
                forma.innerHTML = `<button type="button" id="buttonFav" onclick="addToFavorites()">+</button>`

                host.appendChild(forma)
            }

            crtajIkonicu(containerForma);
            crtajValue(containerForma);
            crtajDescription(containerForma);
            crtajLokaciju(containerForma);
            crtajFavButton(containerForma);
    
            host.appendChild(containerForma);
        }
    

        crtajTitl(this.kontejner);
        crtajNotifikacije(this.kontejner);
        crtajKontejner(this.kontejner);
        
        host.appendChild(this.kontejner);
    }   

}

