import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import CardOfTheDay from './components/tarot/CardOfTheDay'
import TarotIndex from './components/tarot/TarotIndex'
import TarotReading from './components/tarot/TarotReading'
import TarotShow from './components/tarot/TarotShow'
import Deck from './components/common/Deck'

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <h1 className='title is-1 has-text-centered'><span>🔮</span> Mystic Ally's Tarot Reading <span>🔮</span></h1>
          <Deck />
        </Route>
        <Route path="/tarot/today">
          <CardOfTheDay />
        </Route>
        <Route path="/tarot/reading">
          <TarotReading />
        </Route>
        <Route path="/tarot/:cardId">
          <TarotShow />
        </Route>
        <Route path="/tarot">
          <TarotIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
