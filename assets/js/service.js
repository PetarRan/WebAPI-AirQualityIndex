class service {
   async getCards() {
    const url = 'https://localhost:5001/AQI/PreuzmiKartice'
    const cards = await fetch(url)
    .then(res => {
        return res.json()
    })
    return cards
    }
    removeItem(id) {
        const url = 'https://localhost:5001/AQI/IzbrisiKartice/' + id
        return fetch(url, {method: 'DELETE',
        headers: { 
            'Content-type': 'application/json'
        } })
    }
    updateCard(card) {
        const url = 'https://localhost:5001/AQI/UpdateKartice'
        return fetch(url,
            {
                method: 'PUT',
                body: card, 
               // headers: { "Content-type": "application/json; charset=UTF-8"}
               headers: {"content-type": "application/problem+json; charset=utf-8"}
            })
        }
}


export default new service()