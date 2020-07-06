const mtg = require('mtgsdk')

const GetCards = () => {
  let cards = []
  return new Promise((resolve, reject) => {
    mtg.card.where({types: 'creature', page: 1, pageSize: 25})
      .then(cards => {
        resolve(cards)
      })
      .catch(err => reject(err))
  })
}

module.exports = {
  GetCards: GetCards
}
