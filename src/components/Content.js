import {Switch,Route} from 'react-router-dom'
import Navbar from "components/Navbar"
import Home from "views/Home";
import Search from "views/Search";


const Content = () => {
  return (
    <main className="flex-auto">
        <Navbar />
        <Switch>
          <Route path='/'>
            <Home  />
          </Route>
          <Route path='/'>
            <Search  />
          </Route>
        </Switch>
    </main>
  )
}

export default Content