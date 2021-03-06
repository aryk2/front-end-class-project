import React from 'react'
import { render } from '@testing-library/react'
import Forex from '.'

describe('Forex', () => {
  it('should render the Forex component', () => {
    const props = {searchProps: {searchForex: {} as any} as any } as any
    const { container } = render(<Forex { ...props } />)
    expect(container).toBeTruthy()
  })
})
