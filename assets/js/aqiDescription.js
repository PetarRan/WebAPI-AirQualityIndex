
export class Opis{

    constructor(row1, row2, row3, row4){
        this.kontejner = document.createElement("div")
        this.row1 = row1;
        this.row2 = row2;
        this.row3 = row3;
        this.row4 = row4;
    }

    crtaj(host){
        this.kontejner.className = "container-info"

        let outerForm = document.createElement("div")
        outerForm.className = "container3"

        let innerForm = document.createElement("div")
        innerForm.className = "row"
        innerForm.id = "infoBox"

        let row1 = document.createElement("div")
        row1.className = "col-md-3"
        row1.innerHTML = `<i class="far fa-smile" style="font-size: 40px;color: rgb(52,195,39);margin-top: 10px;"></i>
        <p style="margin-top: 10px;font-family: 'Rimouski', sans-serif; font-size: larger;">0-50 Čist Vazduh</p>
        <p>Kvalitet vazduha je zadovoljavajući, a zagađenje vazduha predstavlja mali ili nikakav rizik.<br>
        </p>`

        let row2 = document.createElement("div")
        row2.className = "col-md-3"
        row2.innerHTML = `<i class="far fa-grin-beam-sweat" style="font-size: 40px;color: rgb(228,196,27);margin-top: 10px;"></i>
        <p style="margin-top: 10px;font-family: 'Rimouski', sans-serif;font-size: larger;">51-100 Umereno Zagađen</p>
        <p>Kvalitet vazduha je prihvatljiv. Međutim, može postojati rizik za neke ljude, 
            posebno za one koji su neobično osetljivi na zagađenje<br>
            vazduha.<br>
        </p>`

        let row3 = document.createElement("div")
        row3.className = "col-md-3"
        row3.innerHTML = `<i class="far fa-grimace" style="font-size: 40px;color: rgb(255,155,38);margin-top: 10px;"></i>
        <p style="margin-top: 10px;font-family: 'Rimouski', sans-serif;font-size: larger;">101-150 Zagađen</p>
        <p>Nezdravo za osteljive grupe.<br>Pripadnici osetljivih grupa mogu iskusiti zdravstvene efekte. 
            Manje je verovatno da će to uticati na širu javnost.<br>
        </p>`

        let row4 = document.createElement("div")
        row4.className = "col-md-3"
        row4.innerHTML = `<i class="far fa-sad-tear" style="font-size: 40px;color: rgb(255,35,35);margin-top: 10px;"></i>
        <p style="margin-top: 10px;font-family: 'Rimouski', sans-serif;font-size: larger;">150+ Otrovno i Nezdravo</p>
        <p>Neki pripadnici šire javnosti mogu imati posledice na zdravstveno<br>
            stanje. Članovi osetljivih grupa mogu iskusiti ozbiljnije zdravstvene posledice.<br>
        </p>`

        innerForm.appendChild(row1)
        innerForm.appendChild(row2)
        innerForm.appendChild(row3)
        innerForm.appendChild(row4)

        outerForm.appendChild(innerForm)

        this.kontejner.appendChild(outerForm)

        host.appendChild(this.kontejner)

    }


}