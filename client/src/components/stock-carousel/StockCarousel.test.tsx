import React from 'react'
import { render } from '@testing-library/react'
import StockCarousel from '.'

describe('StockCarousel', () => {
  it('should render the StockCarousel component', () => {
    const props = {} as any
    const { container } = render(<StockCarousel { ...props } />)
    expect(container).toBeTruthy()
  })
})
