import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import CardOfTheDay from './components/tarot/CardOfTheDay'
import TarotIndex from './components/tarot/TarotIndex'
import TarotReading from './components/tarot/TarotReading'
import TarotShow from './components/tarot/TarotShow'

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tarot/today">
          <CardOfTheDay />
        </Route>
        <Route path="/tarot/reading">
          <TarotReading />
        </Route>
        <Route path="/tarot/:tarotId">
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
