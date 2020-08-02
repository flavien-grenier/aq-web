import React from 'react'
import { render } from '@testing-library/react'
import SearchScreen from '../'

describe('Search should render', () => {
  test('Should render correctly', () => {
    const { container } = render(<SearchScreen />)

    expect(container).toBeDefined()
  })
})
