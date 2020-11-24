import React from 'react'
import { render } from '@testing-library/react'
import SearchField from '.'

describe('SearchField', () => {
  it('should render the SearchField component', () => {
    const props = {} as any
    const { container } = render(<SearchField { ...props } />)
    expect(container).toBeTruthy()
  })
})
