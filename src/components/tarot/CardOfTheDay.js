import React from 'react'
import { getCardOfTheDay } from '../../lib/api'
import { images } from '../../lib/images'

function CardOfTheDay() {
  const [singleCard, setSingleCard] = React.useState([])
  const [isUp, setIsUp] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      setIsUp(Boolean(Math.round(Math.random())))
      const res = await getCardOfTheDay()
      setSingleCard(res.data.cards[0])
    }
    getData()
  }, [])

  return (
    <>
      <section className='section is-vcentered'>
        <div className='container'>
          <h4 className='has-text-centered'><span>🔮</span> Card Of The Day <span>🔮</span></h4>
          <div className='columns is-centered'>
            <div className='column is-half'>
              <figure className='image'>
                <img className={!isUp ? 'flipped' : ''} src={images[singleCard.name_short]} />
              </figure>
            </div>
            <div className='column is-half'>
              <p><span>🦋</span> Name: {singleCard.name}</p>
              < br/>
              <p>{isUp ? <span>☝️</span> : <span>👇</span>} Orientation:
                {isUp ? <span> Upright</span> : <span> Upside Down</span>}</p>
              < br/>
              <p><span>✨</span> Meaning: 
                {isUp ? <span> {singleCard.meaning_up}</span> : <span> {singleCard.meaning_rev}</span>}</p>
              < br/>
              <p><span>🧚‍♀️</span> Description: {singleCard.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CardOfTheDay