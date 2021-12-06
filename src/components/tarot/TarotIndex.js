import React from 'react'
import { getAllCards } from '../../lib/api'
import { images } from '../../lib/images'

function TarotIndex() {
  const [cards, setCards] = React.useState([])
  const [filterValue, setFilterValue] = React.useState('') 

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCards()
        setCards(res.data.cards)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(cards)

  const handleFilter = (e) => {
    setFilterValue(e.target.value)
  }

  const filterCards = (cards) => {
    return cards.filter(card => {
      if (filterValue === 'All') {
        return cards
      } else {
        return card.name.toLowerCase().includes(filterValue.toLowerCase())
      }
    })
  }



  return (
    <section className="section">
      <div className="container">
        <select className="filter" onChange={handleFilter}>
          <option>All</option>
          <option>Major</option>
          <option>Cups</option>
          <option>Pentacles</option>
          <option>Swords</option>
          <option>Wands</option>
        </select>
        <div className="columns is-multiline">
          {filterCards(cards).map(card => (
            <div key={card.name_short} className="column is-one-quarter-desktop is-one-third-tablet">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">{card.name}</div>
                </div>
                <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={images[card.name_short]} alt={card.name} />
            </figure>
          </div>
        </div>
      </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TarotIndex