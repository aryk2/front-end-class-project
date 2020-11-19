import React from 'react'
import { render } from '@testing-library/react'
import StockCard from '.'

describe('StockCard', () => {
  it('should render the StockCard component', () => {
    const props = {} as any
    const { container } = render(<StockCard { ...props } />)
    expect(container).toBeTruthy()
  })
})
