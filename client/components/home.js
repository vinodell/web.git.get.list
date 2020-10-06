import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import First from './first'
import Repo from './repo'
import Text from './text'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/first/" component={() => <First />} />
            <Route exact path="/first/:repo" component={() => <Repo />} />
            <Route exact path="/first/:repo/:text" component={() => <Text />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
