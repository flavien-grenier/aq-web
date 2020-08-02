import React from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import Container from 'react-bootstrap/Container'
import SearchScreen from './screens/search'

function App() {
  return (
    <Container fluid>
      <SearchScreen />
      <ReactQueryDevtools />
    </Container>
  )
}

export default App
