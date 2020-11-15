import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from '.'

describe('SearchBar', () => {
  it('should render the SearchBar component', () => {
    const props = {} as any
    const { container } = render(<SearchBar { ...props } />)
    expect(container).toBeTruthy()
  })
})
