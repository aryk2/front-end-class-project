import React from 'react'
import { render } from '@testing-library/react'
import StockTable from '.'

describe('StockTable', () => {
  it('should render the StockTable component', () => {
    const props = {} as any
    const { container } = render(<StockTable { ...props } />)
    expect(container).toBeTruthy()
  })
})
