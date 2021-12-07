import React from 'react'
import { getCardsForReading } from '../../lib/api'
import { images } from '../../lib/images'
import Error from '../common/Error'
import Loading from '../common/Loading'


function TarotReading() {
  const [readingCards, setReadingCards] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = (readingCards.length === 0) && !isError
  const times = ['Past', 'Present', 'Future']

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCardsForReading()
        setReadingCards(res.data.cards)
      } catch (err) {
        setIsError(err)
      }

    }
    getData()

  }, [])

  const newReadingCards = readingCards.map((card, index) => {
    return {
      ...card,
      time: times[index],
      isUp: Boolean(Math.round(Math.random())),
    }
  })

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}
      {!isLoading && !isError && readingCards &&
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {newReadingCards.map(card => (
            <div key={card.name_short} className="column is-one-third-desktop is-one-third-tablet">
              <div className="card">
                <div className="card-header">
                  <div>
                    <h2>{card.time}</h2>
                    <span className="card-header-title">{card.name} </span>
                    {card.isUp ? 
                      <span><em>Upright</em></span> 
                    : 
                      <span><em>Upside Down</em></span>}
                  </div>
                </div>
                
                <div className="card-image">
                  <figure className="image image-is-1by1">
                    <img className={!card.isUp ? 'flipped' : ''}src={images[card.name_short]} alt={card.name}/>
                  </figure>
                </div>
                <div className="card-footer">
                  {card.isUp ? <p> {card.meaning_up}</p> : <p> {card.meaning_rev}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      }
    </>
  )
}

export default TarotReading