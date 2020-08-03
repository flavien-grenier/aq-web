import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query-devtools'
import Container from 'react-bootstrap/Container'
import SearchScreen from './screens/search'

function App() {
  return (
    <Container>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search" component={SearchScreen} />
      <ReactQueryDevtools />
    </Container>
  )
}

export default App
