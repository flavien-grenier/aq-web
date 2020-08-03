import React from 'react'
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import './search.css'

const SearchScreen = () => {
  const [cityName, setCityName] = React.useState<string>('')

  const search = () => console.log(`/city/${cityName}`)

  return (
    <Row className="search_container">
      <Col md="6">
        <Form onSubmit={search}>
          <Form.Group controlId="cityName">
            <Form.Label>City name</Form.Label>
            <InputGroup>
              <Form.Control
                value={cityName}
                onChange={event => setCityName(event.target.value)}
                type="text"
                placeholder="Enter a city"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default SearchScreen
