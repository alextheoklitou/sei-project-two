import React from 'react'
import { getSingleCard } from '../../lib/api'
// import images from '../../lib/images'

function CardOfTheDay() {
  const [singleCard, setSingleCard] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await getSingleCard()
      setSingleCard(res.data.cards[0])
    }
    getData()
  }, [])
  
  // const shortName = singleCard.name_short

  // console.log(shortName)
  return (
    <>
      <section className='section is-vcentered'>
        <div className='container'>
          <h4 className='has-text-centered'><span>🔮</span> Card Of The Day <span>🔮</span></h4>
          <div className='columns is-vcentered'>
            <div className='column is-half'>
              <figure className='image is-1by1'>
                {/* <img src={images[singleCard.name_short]} /> */}
              </figure>
            </div>
            <div className='column is-half'>
              <p><span>🦋</span> Name: {singleCard.name}</p>
              < br/>
              <p><span>✨</span> Meaning: </p>
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