import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query-devtools'
import Container from 'react-bootstrap/Container'
import SearchScreen from './screens/search'
import CityFeedScreen from './screens/city-feed'

function App() {
  return (
    <Container>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search" component={SearchScreen} />
      <Route exact path="/city/:cityName" component={CityFeedScreen} />
      <ReactQueryDevtools />
    </Container>
  )
}

export default App
