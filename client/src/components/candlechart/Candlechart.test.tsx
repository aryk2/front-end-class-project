import React from 'react'
import { render } from '@testing-library/react'
import Candlechart from '.'

describe('Candlechart', () => {
  it('should render the Candlechart component', () => {
    const props = {} as any
    const { container } = render(<Candlechart { ...props } />)
    expect(container).toBeTruthy()
  })
})
