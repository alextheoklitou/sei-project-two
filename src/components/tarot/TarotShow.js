import React from 'react'
import { getAllCards } from '../../lib/api'
import { images } from '../../lib/images'
import { useParams } from 'react-router'
import Error from '../common/Error'
import Loading from '../common/Loading'

function TarotShow() {
  const [cards, setCards] = React.useState([])
  const { cardId } = useParams()
  const [isError, setIsError] = React.useState(false)
  const isLoading = (cards.length === 0) && !isError
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCards()
        setCards(res.data.cards)
      } catch (err) {
        setIsError(err)
      }
    }
    getData()
  }, [])
  
  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}
      {!isLoading && !isError && cards &&
      <section className='section is-vcentered'>
        <div className='container'>
          {cards.filter(card => card.name_short.includes(cardId)).map(filteredCard => (
            <div key={filteredCard.name}>
              <h4 className='has-text-centered subtitle'><span>🔮</span> {filteredCard.name} <span>🔮</span></h4>
              <div className='columns is-centered'>
                <div className='column is-half is-flex is-horizontal-center'>
                  <figure className='image'>
                    <img className='image-card' src={images[filteredCard.name_short]} />
                  </figure>
                </div>
                <div className='column is-half'>
                  <p><span>☝️</span> <span className='bold'>Meaning Upright: </span>{filteredCard.meaning_up}</p>
                  < br/>
                  <p><span>👇</span><span className='bold'>Meaning Upside Down:</span> {filteredCard.meaning_up}</p>
                  < br/>
                  <p><span>🧚‍♀️</span> <span className='bold'>Description: </span>{filteredCard.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      }
    </>
  )
}

export default TarotShow