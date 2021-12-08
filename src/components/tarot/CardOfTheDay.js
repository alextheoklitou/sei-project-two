import React from 'react'
import { getCardOfTheDay } from '../../lib/api'
import { images } from '../../lib/images'
import Error from '../common/Error'
import Loading from '../common/Loading'

function CardOfTheDay() {
  const [singleCard, setSingleCard] = React.useState([])
  const [isUp, setIsUp] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = (singleCard.length === 0) && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsUp(Boolean(Math.round(Math.random())))
        const res = await getCardOfTheDay()
        setSingleCard(res.data.cards[0])
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}
      {!isLoading && !isError && singleCard && (
        <section className='section is-vcentered'>
          <div className='container'>
            <h4 className='has-text-centered'><span>🔮</span> Card Of The Day <span>🔮</span></h4>
            <div className='columns is-centered'>
              <div className='column is-half centered'>
                <figure className='image'>
                  <img className={`image-card ${!isUp ? 'flipped' : ''}`} src={images[singleCard.name_short]} />
                </figure>
              </div>
              <div className='column is-half'>
                <p><span>🦋</span><strong> Name:</strong> {singleCard.name}</p>
                < br/>
                <p>{isUp ? <span>☝️</span> : <span>👇</span>}<strong> Orientation:</strong>
                  {isUp ? <span> Upright</span> : <span> Upside Down</span>}</p>
                < br/>
                <p><span>✨</span><strong> Meaning: </strong>
                  {isUp ? <span> {singleCard.meaning_up}</span> : <span> {singleCard.meaning_rev}</span>}</p>
                < br/>
                <p><span>🧚‍♀️</span> <strong>Description: </strong>{singleCard.desc}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default CardOfTheDay