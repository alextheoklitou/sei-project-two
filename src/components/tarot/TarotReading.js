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
        <h2 className="subtitle info"><span>🔮</span> Tarot Reading <span>🔮</span></h2>
        <p className='info'>Welcome to Ally’s three tarot card spread. Three cards are generated for you. The first card represents the past, the second represents the present, and the third represents the future. Each card has a different meaning, which changes depending on which way the card is facing.</p> <br /> <p className='ready'>Are you ready to meet your fate?</p>
        <div className="columns is-multiline">
          {newReadingCards.map(card => (
            <div key={card.name_short} className="column is-one-third-desktop is-one-third-tablet">
              <div className="card card-read">
                <div className="card-header">
                  <div>
                    <h2 className="time">{card.time}</h2>
                    <h3 className="card-header-title is-centered">{card.name} </h3>
                    {card.isUp ? 
                      <span><em>Upright</em></span> 
                      : 
                      <span><em>Upside Down</em></span>}
                  </div>
                </div>  
                <div className="card-image is-flex is-horizontal-center">
                  <figure className="image image-is-1by1 is-half">
                    <img className={!card.isUp ? 'flipped' : ''} src={images[card.name_short]} alt={card.name}/>
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