import React from 'react'
import { render } from '@testing-library/react'
import StockTable from './StockTable'

describe('StockTable', () => {
  it('should render the StockTable component', () => {
    const props = {favoriteFunctions: {} as any} as any
    const { container } = render(<StockTable { ...props } />)
    expect(container).toBeTruthy()
  })
})
