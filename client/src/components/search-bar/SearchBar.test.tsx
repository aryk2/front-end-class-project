import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should render the SearchBar component', () => {
    const props = {searchForex: {fromCurrency: '', toCurrency: ''}} as any
    const { container } = render(<SearchBar { ...props } />)
    expect(container).toBeTruthy()
  })
})
