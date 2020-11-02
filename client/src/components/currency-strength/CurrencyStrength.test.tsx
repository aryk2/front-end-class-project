import React from 'react'
import { render } from '@testing-library/react'
import CurrencyStrength from './CurrencyStrength'

describe('CurrencyStrength', () => {
  it('should render the CurrencyStrength component', () => {
    const props = {} as any
    const { container } = render(<CurrencyStrength { ...props } />)
    expect(container).toBeTruthy()
  })
})
