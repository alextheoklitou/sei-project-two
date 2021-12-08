import React from 'react'
import { getAllCards } from '../../lib/api'
import { images } from '../../lib/images'
import { Link } from 'react-router-dom'
import Error from '../common/Error'
import Loading from '../common/Loading'

function TarotIndex() {
  const [cards, setCards] = React.useState([])
  const [filterValue, setFilterValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = (cards.length === 0) && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCards()
        setCards(res.data.cards)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  const sortedCards = cards.sort(function(a, b) {
    return a.name_short.localeCompare(b.name_short)
  })

  const handleFilter = (e) => {
    setFilterValue(e.target.value)
  }

  const filterCards = (cards) => {
    return cards.filter(card => {
      if (filterValue === 'All') {
        return cards
      } else if (filterValue === 'Major') {
        return card.type.toLowerCase().includes(filterValue.toLowerCase())
      } else {
        return card.name.toLowerCase().includes(filterValue.toLowerCase())
      }
    })
  }


  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}
      {!isLoading && !isError && cards &&
        <section className="section">
          <div className="container">
            <h2 className="subtitle info"><span>🔮</span> All Cards <span>🔮</span></h2>
            <div className='filter-menu'>
              <select className="filter" onChange={handleFilter}>
                <option>All</option>
                <option>Major</option>
                <option>Cups</option>
                <option>Pentacles</option>
                <option>Swords</option>
                <option>Wands</option>
              </select>
            </div>
            <div className="columns is-multiline">
              {filterCards(sortedCards).map(card => (
                <div key={card.name_short} className="column is-one-quarter-desktop is-one-third-tablet">
                  <Link to={`/tarot/${card.name_short}`}>
                    <div className="card">
                      <div className="card-image">
                        <figure className="image image-is-1by1">
                          <img src={images[card.name_short]} alt={card.name}/>
                        </figure>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default TarotIndex