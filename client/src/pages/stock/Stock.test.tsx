import React from 'react'
import { render } from '@testing-library/react'
import Stock from '.'

describe('Stock', () => {
  it('should render the Stock component', () => {
    const props = {} as any
    const { container } = render(<Stock { ...props } />)
    expect(container).toBeTruthy()
  })
})
