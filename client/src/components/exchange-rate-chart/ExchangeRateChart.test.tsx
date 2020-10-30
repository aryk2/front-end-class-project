import React from 'react'
import { render } from '@testing-library/react'
import ExchangeRateChart from '.'

describe('ExchangeRateChart', () => {
  it('should render the ExchangeRateChart component', () => {
    const props = {} as any
    const { container } = render(<ExchangeRateChart { ...props } />)
    expect(container).toBeTruthy()
  })
})
