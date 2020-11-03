import React from 'react'
import { render } from '@testing-library/react'
import StockPage from '.'

describe('StockPage', () => {
  it('should render the StockPage component', () => {
    const props = {} as any
    const { container } = render(<StockPage { ...props } />)
    expect(container).toBeTruthy()
  })
})
