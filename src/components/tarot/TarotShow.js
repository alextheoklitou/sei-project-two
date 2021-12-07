import React from 'react'
import { getAllCards } from '../../lib/api'
import { images } from '../../lib/images'
import { useParams } from 'react-router'

function TarotShow() {
  const [cards, setCards] = React.useState([])
  const { cardId } = useParams()
  
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
  
  return (
    <>
      <section className='section is-vcentered'>
        <div className='container'>
          {cards.filter(card => card.name_short.includes(cardId)).map(filteredCard => (
            <div key={filteredCard.name}>
              <h4 className='has-text-centered'><span>🔮</span> {filteredCard.name}<span>🔮</span></h4>
              <div className='columns is-centered'>
                <div className='column is-half'>
                  <figure className='image'>
                    <img src={images[filteredCard.name_short]} />
                  </figure>
                </div>
                <div className='column is-half'>
                  <p><span>☝️</span> Meaning Upright: {filteredCard.meaning_up}</p>
                  < br/>
                  <p><span>👇</span> Meaning Upside Down: {filteredCard.meaning_up}</p>
                  < br/>
                  <p><span>🧚‍♀️</span> Description: {filteredCard.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default TarotShow