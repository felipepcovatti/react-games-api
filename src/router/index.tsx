import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Game from '../pages/Game'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/games/:id" exact component={Game} />
    </Switch>
  )
}