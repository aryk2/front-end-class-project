import React from 'react'
import { render } from '@testing-library/react'
import CurrencyStrength from './CurrencyStrength'
import fetch from 'jest-fetch-mock';

describe('CurrencyStrength', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should render the CurrencyStrength component', () => {
    fetch.mockResponseOnce({} as any)


    const props = {} as any
    const { container } = render(<CurrencyStrength { ...props } />)
    expect(container).toBeTruthy()
  })
})
